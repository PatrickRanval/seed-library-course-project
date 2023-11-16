import { Story } from "./story.model"
import { Instance } from "./instance.model"

export class Seed {
  constructor(
    public uid: number,
    public genus: string,
    public species: string,
    public variety: string,
    public commonBroad: string[],
    public imgURL: string,

    //Optional
    public subspecies?: string,
    public hybridStatus?: string,
    public subvariety?: string,
    public commonNarrow?: string[],

    // Data User Adds
    public instance?: Instance,
    public story?: Story[],
  ){}
}
// export class Seed {
//   constructor(
//   public uid: number,  // This is the porblem category
//   public type: string, // Poke "name"
//   public variety: string, // Poke "natural_gift_type.name"
//   public isOrganic: boolean,  // Poke is "natural_gift_power" >50?
//   public origin: string,  // Poke random based on "size"
//   public imgURL: string,  // Something clever and repeatable
//   public debugField: number,

//   //Properties for SeedShelf

//   public amount = 0,
//   public dateAdded: string = "10/13/2023"

//   ){};
// }




