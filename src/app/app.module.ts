import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispatchRankingComponent } from './pages/dispatch-ranking/dispatch-ranking.component';
import { DispatchComponent } from './pages/dispatch/dispatch.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TargetComponent } from './components/target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    DispatchRankingComponent,
    DispatchComponent,
    NavbarComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
