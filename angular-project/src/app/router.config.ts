import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ChannelsComponent } from './components/channels/channels.component';

export const appRoutes: Routes = [
  { path: '', 
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  { path: 'channels',
    component: ChannelsComponent
  }
];