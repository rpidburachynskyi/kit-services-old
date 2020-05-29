import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GroupMover = {
  __typename?: 'GroupMover';
  id: Scalars['Int'];
  name: Scalars['String'];
  regExpPattern: Scalars['String'];
  textPattern: Scalars['String'];
  eachFunction: Scalars['String'];
  globalFunction: Scalars['String'];
  argumentsPattern: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveGroupMover?: Maybe<GroupMover>;
  removeGroupMover?: Maybe<Scalars['Boolean']>;
  login?: Maybe<User>;
  register?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveGroupMoverArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  regExpPattern: Scalars['String'];
  textPattern: Scalars['String'];
  eachFunction: Scalars['String'];
  globalFunction: Scalars['String'];
  argumentsPattern: Scalars['String'];
};


export type MutationRemoveGroupMoverArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  groupMover?: Maybe<GroupMover>;
};


export type QueryGroupMoverArgs = {
  id: Scalars['ID'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  groupMovers?: Maybe<Array<GroupMover>>;
};

export type RegisterMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    id
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
  }