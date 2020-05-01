import { getUsersById, getUsersByEmailAndPassword, createUser } from "../db/models/user";
import { createSession } from "../db/models/session";
import { getGroupMoverById, getGroupMoversByUserId, saveNewGroupMover, saveGroupMover, removeGroupMoverById } from "../db/models/groupMover";

export const resolvers = {
    Query: {
        currentUser: async (source, args, { user }) => {
            if (!user) return null;
            return await getUsersById(user.id);
        },
        groupMover: async (source, { id }) => {
            console.log(await getGroupMoverById(id));
            return await getGroupMoverById(id);
        },
    },
    Mutation: {
        saveGroupMover: (source, { id, name, regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern }, { user }) => {
            if (!user) throw new Error("ACCESS_BLOCKED");
            if (id === undefined) {
                return saveNewGroupMover(user.id, name, regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern);
            }
            return saveGroupMover(id, regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern);
        },
        removeGroupMover: async (source, { id }) => {
            return !!(await removeGroupMoverById(id));
        },

        login: async (source, { email, password }, { res }) => {
            const user: any = await getUsersByEmailAndPassword(email, password);

            const { sesid }: any = await createSession(user.id);

            res.cookie("sesid", sesid);

            return user;
        },
        register: async (source, { email, password }, { res }) => {
            const user: any = await createUser(email, password);
            const { sesid }: any = await createSession(user.id);
            res.cookie("sesid", sesid);

            return user;
        },
        logout: async (source, args, { req, res }) => {
            const { sesid }: any = req.cookies;

            if (!sesid) throw {
                type: "UNAUTHORIZATION_UNLOGINING"
            };

            res.clearCookie("sesid");

            return true;
        }
    },

    User: {
        groupMovers: async ({ id }) => {
            return await getGroupMoversByUserId(id);
        }
    }
};
