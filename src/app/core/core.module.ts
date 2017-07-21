import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {ShellComponent} from './shell/shell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoggedInLayoutComponent } from './shell/logged-in-layout/logged-in-layout.component';
import {SharedModule} from '../shared/shared.module';
import { GuestLayoutComponent } from './shell/guest-layout/guest-layout.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [ShellComponent, PageNotFoundComponent, LoggedInLayoutComponent, GuestLayoutComponent],
  exports: [ShellComponent, PageNotFoundComponent]
})
export class CoreModule { }
