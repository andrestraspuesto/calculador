import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { Cuenta } from './app.sheet.cuenta';
import { CuentaService } from './app.sheet.cuenta.service';

@Component({
  selector: 'sheet-main',
  templateUrl: './app.sheet.main.html',
  styleUrls: ['../../css/skeleton.css','../../css/normalize.css'],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }]
})
export class AppComponent {
	constructor(private cuentaService: CuentaService){};
	title = 'Balance';
	balance: Cuenta[];
	calculaSuma(cuenta: Cuenta): void {
		//cuenta.valor = Number.prototype.toLocaleString(0.0);
		let valor = 0.0;
		for(let c of cuenta.desglose){
			let str = String(c.valor);
			str = str.replace(/\./,'');
			str = str.replace(/,/,'.');
			valor = +str + +valor;
		}
		cuenta.valor = valor.toLocaleString();
	}

	ngOnInit():void{ this.balance = this.cuentaService.getBalance();}
}
