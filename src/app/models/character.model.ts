export class CharactersModel {
  id!: number;
  name!: string;
  description!: string;
  thumbnail!: Thumbnail;
  series!: Series;
}
type Thumbnail = {
  path: string;
  extension: string;
};

type Series = {
  available: number;
  returned: number;
  collectionURI: string;
  items: any [];
}
