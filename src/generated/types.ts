export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
  AWSTimestamp: any;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  _version: Scalars['Int'];
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type ModelTodoConnection = {
  __typename?: 'ModelTodoConnection';
  items?: Maybe<Array<Maybe<Todo>>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelStringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export type ModelIdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  beginsWith?: Maybe<Scalars['ID']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export type ModelIntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelFloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelBooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelSizeInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ModelTodoFilterInput = {
  id?: Maybe<ModelIdInput>;
  name?: Maybe<ModelStringInput>;
  description?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelTodoFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelTodoFilterInput>>>;
  not?: Maybe<ModelTodoFilterInput>;
};

export enum ModelAttributeTypes {
  BINARY = 'binary',
  BINARYSET = 'binarySet',
  BOOL = 'bool',
  LIST = 'list',
  MAP = 'map',
  NUMBER = 'number',
  NUMBERSET = 'numberSet',
  STRING = 'string',
  STRINGSET = 'stringSet',
  _NULL = '_null'
}

export type Query = {
  __typename?: 'Query';
  syncTodos?: Maybe<ModelTodoConnection>;
  getTodo?: Maybe<Todo>;
  listTodos?: Maybe<ModelTodoConnection>;
};


export type QuerySyncTodosArgs = {
  filter?: Maybe<ModelTodoFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
  lastSync?: Maybe<Scalars['AWSTimestamp']>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID'];
};


export type QueryListTodosArgs = {
  filter?: Maybe<ModelTodoFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type CreateTodoInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
};

export type UpdateTodoInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  _version?: Maybe<Scalars['Int']>;
};

export type DeleteTodoInput = {
  id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
  condition?: Maybe<ModelTodoConditionInput>;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
  condition?: Maybe<ModelTodoConditionInput>;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
  condition?: Maybe<ModelTodoConditionInput>;
};

export type ModelTodoConditionInput = {
  name?: Maybe<ModelStringInput>;
  description?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelTodoConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelTodoConditionInput>>>;
  not?: Maybe<ModelTodoConditionInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateTodo?: Maybe<Todo>;
  onUpdateTodo?: Maybe<Todo>;
  onDeleteTodo?: Maybe<Todo>;
};



export type GetStuffQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStuffQuery = (
  { __typename?: 'Query' }
  & { listTodos?: Maybe<(
    { __typename?: 'ModelTodoConnection' }
    & { items?: Maybe<Array<Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'name'>
    )>>> }
  )> }
);
