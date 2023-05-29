import { gamenumber } from "./gamenumber.model";
export class player{
    public name : string ;
    public gamenumbers : gamenumber[];
    constructor( name: string , gamenumbers:gamenumber []) {
        this.name= name;
        this.gamenumbers = gamenumbers;
    }l
}