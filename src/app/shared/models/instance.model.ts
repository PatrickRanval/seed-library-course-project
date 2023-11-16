export class Instance {
  constructor(
    public location: Location,
    public date: DateInfo) {}
}

export class Location {
  constructor(
    public text: string,
    public location: GeoPoint) {}
}

export class GeoPoint {
  constructor(
    public type: string,
    public coordinates: number[]) {}
}

export class DateInfo {
  constructor(
    public plant: string,
    public harvest: string) {}
}
