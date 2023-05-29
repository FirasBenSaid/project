import { ratinglist } from "./rating-list.model"; 
export class gamenumber{
    public gamename : string ;
    public rating: ratinglist[];
    constructor( name: string, rating: ratinglist[]) {
        this.gamename= name;
        this.rating=rating;
        
    }l
}