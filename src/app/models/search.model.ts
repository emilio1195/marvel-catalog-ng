export class SearchModel {
  [index: string]: any; //index signature
  offset: number = 0;   //Simulate the page number
  limit: number = 20;    //Simulate the pages total
  orderBy:string = '';  //Sort data

  //required const for RESTful api
  hash = "b318ea1482b5b460cbd2a30fc8085704";
  apikey = "a3adf5012410274a29ba4bfae8d7c700";
  ts = 1;

  constructor(jsonSearchStr: string) {
    const parseJsonSearch = JSON.parse(jsonSearchStr);
    Object.keys(parseJsonSearch).forEach(
      (key: string) => {
        this[key] = parseJsonSearch[key];
      }
    )
  }

}
