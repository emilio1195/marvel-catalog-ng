import { Component } from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {ListComponentAbstract} from "../../../common/list-component.abstract";
import {CharacterModel} from "../../../models/character.model";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent extends ListComponentAbstract<CharacterModel>{
  constructor(characterService: CharacterService) {
    super(characterService);
    this.loadData();
    console.log('Requesting ...');
  }

  override preLoadData() {
    super.preLoadData();
    this.service.searchObj.orderBy = "name";
    //Filters added dynamically
    //this.service.searchObj['name'] = "3-D Man";
    //this.service.searchObj['series'] = 27624;
  }

  override postList() {
    super.postList();
    console.log("Model: ", this.model);
    console.log("size: ", this.listSize);
  }
}

