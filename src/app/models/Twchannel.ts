import { Twstream } from './Twstream';
import { Twvideos } from './Twvideos';

export class Twchannel {
    _id:number;
    username:string;
    stream:Twstream;
    embed:string;
    offlineImg:string;
    videos:Twvideos;
    
    

}
