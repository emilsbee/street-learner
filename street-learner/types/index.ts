export type Coordinate = {
  latitude: number,
  longitude: number,
};

export type Street = {
  id: string;
  streetName: string;
  coordinates: Coordinate[];
};