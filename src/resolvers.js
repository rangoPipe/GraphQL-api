
import { tasks } from "./sample";

export const resolvers = {
    Query: {
        hello : () => { return "hola mundo"; },
        /*consulta2(root, args) {
            return `Hola ${ args.parametro }`;   
        }*/
        consulta2(root, { parametro }) {
            return `Hola ${ parametro }`;   
        },
        tasks() {
            return tasks;
        }
    },
    Mutation: {
        createTask : (_, { input }) => {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
    
}