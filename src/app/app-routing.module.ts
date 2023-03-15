import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatatableComponent} from "./components/tables/datatable/datatable.component";
import {ContainerComponent} from "./components/container-main/container/container.component";

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'catalog', component: DatatableComponent},
  {
    path: 'app', component: ContainerComponent,
    children: [
      {path: 'characters-catalog',
        loadChildren: async () =>
          (await import ('./modules/characters/characters-routing.module')).CharactersRoutingModule
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
