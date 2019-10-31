import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: 'contact', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
  { path: '**', redirectTo: 'contact' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
