import { Games } from './games';

export class Achievements {

    achievement_id:number;
    achievement_date:Date;
    achievement_place:string;
    achievement_tournament:string;
    achievement_prize:string;
    achievement_imgurl:string;
    achievement_status:number;
    game_id:number;
    games:Games;
    


}

/*

     
        
        public System.DateTime achievement_date { get; set; }
        public string achievement_place { get; set; }
        public string achievement_tournament { get; set; }
        public string achievement_prize { get; set; }
        public int achievement_status { get; set; }
     public string achievement_imgurl { get; set; }
*/

