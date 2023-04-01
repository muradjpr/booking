import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { HeaderComponent } from './components/header/header.component';

//primeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ScrollerModule } from 'primeng/scroller';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessagesModule } from 'primeng/messages';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StyleClassModule } from 'primeng/styleclass';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchInfoComponent } from './components/search-info/search-info.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultComponent,
    HeaderComponent,
    SearchFormComponent,
    SearchInfoComponent,
    MainNavbarComponent,
    ListPageComponent,
    CarouselSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    ScrollerModule,
    CheckboxModule,
    PanelModule,
    ScrollPanelModule,
    MessagesModule,
    PanelMenuModule,
    DividerModule,
    TagModule,
    AccordionModule,
    TabMenuModule,
    InputTextModule,
    MegaMenuModule,
    RadioButtonModule,
    OverlayPanelModule,
    MultiSelectModule,
    ToolbarModule,
    SplitButtonModule,
    TabViewModule,
    CascadeSelectModule,
    DropdownModule,
    CheckboxModule,
    AutoCompleteModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
