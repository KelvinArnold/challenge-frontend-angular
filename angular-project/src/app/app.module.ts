import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ChannelsComponent } from './components/channels/channels.component';

import { appRoutes } from './router.config';
import { ProdutcCardComponent } from './components/produtc-card/produtc-card.component';
import { TvItemComponent } from './components/tv-item/tv-item.component';
import { TvHoursComponent } from './components/tv-hours/tv-hours.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { ProductsPipe } from './pipes/products.pipe';
import { ChannelsPipe } from './pipes/channels.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ChannelsComponent,
    ProdutcCardComponent,
    TvItemComponent,
    TvHoursComponent,
    TvShowComponent,
    ProductsPipe,
    ChannelsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
