import { Component, Output, EventEmitter } from '@angular/core';
import {OnInit} from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { OnChanges, SimpleChanges, DoCheck } from "@angular/core";

import { Cuenta } from './app.sheet.cuenta';
import { CuentaService } from './app.sheet.cuenta.service';

@Component({
  selector: 'sheet-main',
  templateUrl: './app.sheet.main.html',
  styleUrls: ['../../css/skeleton.css','../../css/normalize.css'],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }]
})
export class AppComponent implements OnChanges{
	constructor(private cuentaService: CuentaService){};
	title = 'Balance';
	balance: Cuenta[];
	cuentaActual: Cuenta;

	calculaSuma(cuenta: Cuenta, cuentaPadre: Cuenta/*, currCuenta: Cuenta*/): void {
		if(isNaN(this.toNumber(this.cuentaActual.valor))){
			this.cuentaActual.valor = this.cuentaActual.valor.split(/[^1234567890\.,]/).join('');
		}
		this.sumaDesglose(cuenta);
		this.sumaDesglose(cuentaPadre);
	}


	ngOnInit():void{ this.balance = this.cuentaService.getBalance();}

	public ngOnChanges( changes: SimpleChanges) : void {}

	public select(cuenta: Cuenta):void {
		this.cuentaActual = cuenta;
		console.log("onSelect");
	}
	toNumber(strOriginal: string): number {
		let str = strOriginal.split(/\./).join('');
		str = str.replace(/,/,'.');
		return +str;
	}
	
	sumaDesglose(cuenta: Cuenta): void {
		//console.log(cuenta);
		let valor = 0.0;
		for(let c of cuenta.desglose){			
			valor = this.toNumber(String(c.valor)) + valor;
		}
		cuenta.valor = valor.toLocaleString();
	}

}
;;