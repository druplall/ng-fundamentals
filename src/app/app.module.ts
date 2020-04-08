import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  // components, pipes and other must be in the declarations array
  declarations: [EventsAppComponent],
  // Importing modules from outside libraries
  imports: [BrowserModule],
  // Services will be in the provider
  providers: [],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
