import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office/back-office.component';
import { DocComponent } from './doc/doc.component';

const routes: Routes = [
  { path: 'edit', component: BackOfficeComponent },
  { path: '', component: DocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }