import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DriverComponent } from './driver/driver.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: `drivers`, component: DriverComponent },
  { path: ``, component: DriverComponent }, // For now, this is our home
  { path: `404`, component: PageNotFoundComponent },
  { path: `**`, redirectTo: `/404` }, // Wildcard must be at the end, matches all
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
