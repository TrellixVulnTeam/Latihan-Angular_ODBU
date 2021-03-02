import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { KomponenComponent } from './komponen/komponen.component';
import { KomponenlistComponent } from './komponenlist/komponenlist.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'komponen/:id',component:KomponenComponent},
  {path:'komponenupdate/:id', canActivate: [AuthGuardService], component:KomponenComponent},
  {path:'komponenlist', canActivate: [AuthGuardService], component:KomponenlistComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
