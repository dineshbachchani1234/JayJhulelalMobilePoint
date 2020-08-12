import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { OfferComponent } from './components/offer/offer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { MoreproductsComponent } from './components/moreproducts/moreproducts.component';
import { UserreviewComponent } from './components/userreview/userreview.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { AlertComponent } from './components/alert/alert.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
   {path: 'home', component:HomeComponent},
   {path: 'about', component:AboutComponent},
   {path: 'products', component:ProductsComponent},
   {path: 'offer', component:OfferComponent},
   {path: 'testimonials', component:TestimonialsComponent},
   {path: 'reviews', component:ReviewsComponent},
   {path: 'contact', component:ContactComponent},
   {path: 'header', component:HeaderComponent},
   {path: 'moreproducts', component:MoreproductsComponent},
   {path: 'userreview', component:UserreviewComponent},
   {path: 'footer', component:FooterComponent},
   {path: 'info', component:InfoComponent},
   {path: 'alert', component:AlertComponent},
   {path:'**',redirectTo:'home',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
