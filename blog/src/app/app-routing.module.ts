import { NgModule } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {TestComponent} from "./test/test.component";
import {SpringBatchComponent} from "./spring-batch/spring-batch.component";

const routes: Routes = [
  { path: '', component:TestComponent },
  { path: 'test', component:TestComponent },
  { path: 'spring-batch', component:SpringBatchComponent },
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
