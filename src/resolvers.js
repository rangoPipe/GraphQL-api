
import { tasks } from "./sample";
import User from "./models/user";

export const resolvers = {
    Query: {
        hello : () => { return "hola mundo"; },
        /*consulta2(root, args) {
            return `Hola ${ args.parametro }`;   
        }*/
        consulta2(root, { parametro }, ctx /* contexto*/) {
            console.log(ctx);
            return `Hola ${ parametro }`;   
        },
        tasks() {
            return tasks;
        },
        getUsers : async () => {
            return await User.find();
        }
    },
    Mutation: {
        createTask : (_, { input }) => {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },

        createUser : async (_, { input }) => {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        
        removeUser : async (_, _id) => {
            return await User.findByIdAndDelete(_id);
        },

        modidyUser: async (_, { _id, input}) => {
            return await User.findByIdAndUpdate(_id,input, { new : true});
        }
    }
    
}