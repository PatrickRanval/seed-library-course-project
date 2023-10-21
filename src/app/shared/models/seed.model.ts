export class Seed {
  constructor(
  public uid: number,  // This is the porblem category
  public type: string, // Poke "name"
  public variety: string, // Poke "natural_gift_type.name"
  public isOrganic: boolean,  // Poke is "natural_gift_power" >50?
  public origin: string,  // Poke random based on "size"
  public imgURL: string,  // Something clever and repeatable
  public debugField: number,

  //Properties for SeedShelf

  public amount = 0,
  public dateAdded: string = "10/13/2023"

  //Data Sanitation Methods


  ){};


}

