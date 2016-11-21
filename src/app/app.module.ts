import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/sheet/app.sheet.main';
import { CuentaService } from './components/sheet/app.sheet.cuenta.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CuentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
