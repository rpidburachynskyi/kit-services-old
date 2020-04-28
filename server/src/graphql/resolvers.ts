import { getUsersById } from "../db/models/user";


const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];


export const resolvers = {
    Query: {
        books: () => books,
        currentUser: async (source, args, { user }) => {
            console.log(user);
            if (!user) return null;
            return await getUsersById(user.id);
        }
    },
};
