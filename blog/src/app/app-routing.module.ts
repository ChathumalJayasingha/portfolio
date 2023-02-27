import { NgModule } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {TestComponent} from "./test/test.component";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: 'test', component:TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private value: any;

constructor(private _router: Router, private _route: ActivatedRoute) {

}

}
