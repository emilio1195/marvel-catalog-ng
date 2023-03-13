import {Injectable, OnInit} from "@angular/core";
import {ServiceAbstract} from "./service.abstract";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable()
export abstract class AbstractListComponent<T> implements OnInit {
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
          this.model = model["data"]["result"];
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
