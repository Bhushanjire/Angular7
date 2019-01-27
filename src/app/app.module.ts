import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from '../app/pipes/search.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material';
import { ModeldialogComponent } from './modeldialog/modeldialog.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';
import { OnlyAlphabet } from './directives/customdirective.service';
import { OnlyDigit } from './directives/customdirective.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    SearchPipe,
    ModeldialogComponent,
    AddemployeeComponent,
    CustomvalidationComponent,
    OnlyDigit,
    OnlyAlphabet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule],
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      
    }),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModeldialogComponent,AddemployeeComponent]
})
export class AppModule { }
