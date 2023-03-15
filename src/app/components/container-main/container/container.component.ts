import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements  OnInit{

  constructor(private routerActivate: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['characters-catalog'], {relativeTo:this.routerActivate});
    //this.router.navigate(['app/characters-catalog'])
  }

}
