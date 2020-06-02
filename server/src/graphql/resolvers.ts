import {
	getUsersById,
	getUsersByEmailAndPassword,
	createUser,
	changePassword,
} from "../db/models/user";
import { createSession, getSessionByUserId } from "../db/models/session";
import {
	getGroupMoverById,
	getGroupMoversByUserId,
	saveNewGroupMover,
	saveGroupMover,
	removeGroupMoverById,
} from "../db/models/groupMover";
import { EMAIL_IS_BUSY } from "../db/error-codes";

export const resolvers = {
	Query: {
		currentUser: async (source, args, { user }) => {
			if (!user) return null;
			return await getUsersById(user.id);
		},
		groupMover: async (source, { id }) => {
			return await getGroupMoverById(id);
		},
	},
	Mutation: {
		saveGroupMover: (
			source,
			{
				id,
				name,
				regExpPattern,
				textPattern,
				eachFunction,
				globalFunction,
				argumentsPattern,
			},
			{ user }
		) => {
			if (!user) throw new Error("ACCESS_BLOCKED");
			if (id === undefined) {
				return saveNewGroupMover(
					user.id,
					name,
					regExpPattern,
					textPattern,
					eachFunction,
					globalFunction,
					argumentsPattern
				);
			}
			return saveGroupMover(
				id,
				regExpPattern,
				textPattern,
				eachFunction,
				globalFunction,
				argumentsPattern
			);
		},
		removeGroupMover: async (source, { id }) => {
			return !!(await removeGroupMoverById(id));
		},

		login: async (source, { email, password }, { res }) => {
			const user: any = await getUsersByEmailAndPassword(email, password);

			if (!user) throw new Error("UNKNOWN_DATA");

			const { sesid }: any = await createSession(user.id);

			res.cookie("sesid", sesid);

			return user;
		},
		register: async (source, { email, password }, { res }) => {
			try {
				const user: any = await createUser(email, password);
				const { sesid }: any = await createSession(user.id);
				res.cookie("sesid", sesid);
				return user;
			} catch (e) {
				if (e.code === EMAIL_IS_BUSY) {
					throw new Error("EMAIL_IS_BUSY");
				}
			}
		},
		logout: async (source, args, { req, res }) => {
			const { sesid }: any = req.cookies;

			if (!sesid)
				throw {
					type: "UNAUTHORIZATION_UNLOGINING",
				};

			res.clearCookie("sesid");

			return true;
		},

		changePassword: async (source, { password }, { user }) => {
			if (!user) throw new Error("NOT_AUTHENTIFICATED");

			if (password.length < 8) throw new Error("MIN_LENGTH_PASSWORD");

			await changePassword(user.id, password);

			return true;
		},
	},

	User: {
		groupMovers: async ({ id }) => {
			return await getGroupMoversByUserId(id);
		},
	},
};
