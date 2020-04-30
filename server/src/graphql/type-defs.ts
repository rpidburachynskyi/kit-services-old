import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
      id: ID!
      email: String!

      groupMovers: [GroupMover!]
  }

  type GroupMover {
    id: ID!
    name: String!
    regExpPattern: String!
    textPattern: String!
    eachFunction: String!
    globalFunction: String!
    argumentsPattern: String!
  }

  type Query {
    currentUser: User,
    groupMover(id: ID!): GroupMover
  }

  type Mutation {
    saveGroupMover(id: ID, regExpPattern: String! textPattern: String!, eachFunction: String!, globalFunction: String!, argumentsPattern: String!): GroupMover
  }
`;
