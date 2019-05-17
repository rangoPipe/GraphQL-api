
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
    }
    
}