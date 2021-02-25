import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponenComponent } from './komponen/komponen.component';
import { KomponenlistComponent } from './komponenlist/komponenlist.component';

const routes: Routes = [

  {path:'komponen',component:KomponenComponent},
  {path:'komponenupdate/:id', component:KomponenComponent},
  {path:'komponendelete/:id', component:KomponenlistComponent},
  {path:'komponenlist', component:KomponenlistComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
