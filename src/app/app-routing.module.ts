import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchComponent } from './pages/dispatch/dispatch.component';
import { DispatchRankingComponent } from './pages/dispatch-ranking/dispatch-ranking.component';

const routes: Routes = [
  { path: 'dispatch', component: DispatchComponent },
  { path: 'dispatch-ranking', component: DispatchRankingComponent },
  { path: '', redirectTo: '/dispatch', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
