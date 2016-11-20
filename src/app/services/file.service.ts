import { Injectable } from '@angular/core';

@Injectable()
export class FileService {

  constructor() { }

  	exportJsonToFile(json: any): void{
		var content = JSON.stringify(json);
		var blob = new Blob([content],{type: 'text/json;charset=utf-8;'});
		window.open(URL.createObjectURL(blob));

	};

	importFileToString(fileLoader: string): Promise<string> {
	    var reader = new FileReader();
	    var promise = new Promise<string>((resolve, reject) => {
		    reader.addEventListener('load', function() {
		      resolve( this.result);
		    })
		});
	    var files = (<HTMLInputElement>document.getElementById(fileLoader)).files;
	    reader.readAsText(files[0]);
	    return promise;

	};

}
