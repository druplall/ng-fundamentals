import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.components';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  // components, pipes and other must be in the declarations array
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  // Importing modules from outside libraries
  imports: [BrowserModule],
  // Services will be in the provider
  providers: [],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
