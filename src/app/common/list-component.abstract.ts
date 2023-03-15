import {Injectable, OnInit} from "@angular/core";
import {ServiceAbstract} from "./service.abstract";

@Injectable()
export abstract class ListComponentAbstract<T> implements OnInit {
  element!: T;
  model: T [] = [];
  listSize!: number;
  constructor(protected service: ServiceAbstract<T>) {
  }

  ngOnInit(): void {
    this.service.buildSearch();
  }

  loadData(){
    this.preLoadData();
    this.service.getListData()
      .subscribe({
        next: model => {
          this.model = model['data']['results'];
          this.listSize = model["data"]["total"];
          this.postList();
        },
        error: err => {
          console.error("Error get model subscribe")
        }
      }

    )
  }

  preLoadData(){}
  postList(){}
}
