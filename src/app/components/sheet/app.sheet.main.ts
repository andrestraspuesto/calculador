import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

import { Cuenta } from './app.sheet.cuenta';
import { CuentaService } from './app.sheet.cuenta.service';

@Component({
  selector: 'sheet-main',
  templateUrl: './app.sheet.main.html',
  styleUrls: ['../../app.component.css'],
  providers: []
})
export class AppComponent {
	constructor(private cuentaService: CuentaService){};
	title = 'Balance';
	balance: Cuenta[];

	ngOnInit():void{ this.balance = this.cuentaService.getBalance();}
}
