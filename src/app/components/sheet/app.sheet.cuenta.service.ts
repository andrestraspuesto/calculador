import {Injectable} from '@angular/core';

import {Cuenta} from './app.sheet.cuenta'
import {BALANCE} from './app.sheet.balance'



@Injectable()
export class CuentaService {
	
	getBalance():Cuenta[] {
		return BALANCE;
	}
}