import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferComponent } from './components/offer/offer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { MoreproductsComponent } from './components/moreproducts/moreproducts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { UserreviewComponent } from './components/userreview/userreview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { AlertComponent } from './components/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    OfferComponent,
    TestimonialsComponent,
    ReviewsComponent,
    ContactComponent,
    HeaderComponent,
    MoreproductsComponent,
    UserreviewComponent,
    FooterComponent,
    InfoComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5NPjNKGt5xrc71tNIoryl_ljU6fAO4wU',
      libraries: ['places']
    }),
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
