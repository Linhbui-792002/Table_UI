export interface Movie {
  _id: { $oid: string };
  name: string;
  img: string;
  year: number;
  genre: string[];
  rating: number;
}
