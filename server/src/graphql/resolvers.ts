import { getUsersById } from "../db/models/user";
import { getGroupMoverById, getGroupMoversByUserId, saveNewGroupMover, saveGroupMover } from "../db/models/groupMover";

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
        saveGroupMover: (source, { id, regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern }, { user }) => {
            if (id === undefined) {
                return saveNewGroupMover(user.id, "customname", regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern);
            }

            return saveGroupMover(id, regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern);
        }
    },

    User: {
        groupMovers: async ({ id }) => {
            console.log(id);
            return await getGroupMoversByUserId(0);
        }
    }
};
