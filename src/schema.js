import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";


const typeDefs = `

    type Query {
        hello: String
        consulta2 (parametro:String!): String
        tasks: [Task]
        getUsers: [User]
    }

    type Task {
        _id : ID,
        title : String!,
        description : String!,
        number : Int
    }

    type User {
        _id : ID,
        firstname : String!,
        lastname : String!,
        age : Int
    }

    type Mutation {
        createTask(input:inputTask) : Task
        createUser(input:inputUser) : User
        removeUser(_id:ID): User,
        modidyUser(_id:ID, input :inputUser) : User
    }

    input inputTask {
        title : String!,
        description : String!,
        number : Int
    }

    input inputUser {
        firstname : String!,
        lastname : String!,
        age : Int
    }

`;

export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})
