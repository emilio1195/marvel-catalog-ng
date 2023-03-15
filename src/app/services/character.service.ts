import { Injectable } from '@angular/core';
import {ServiceAbstract} from "../common/service.abstract";
import {CharacterModel} from "../models/character.model";
import {HttpClient} from "@angular/common/http";
import {PATH_CHARACTERS_API} from "../Constants/constants";
import {SearchModel} from "../models/search.model";
import {character_search} from "../Constants/filters.search.json";

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends ServiceAbstract<CharacterModel>{

  constructor(httpClient: HttpClient) {
    super(PATH_CHARACTERS_API, httpClient)
  }

  buildSearch(): void {
    this.searchObj = new SearchModel(JSON.stringify(character_search));
  }
}
