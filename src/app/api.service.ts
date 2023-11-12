import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private _http:HttpClient) { }

      async information(country: SVGPathElement){
      
        let _http: string = 'https://api.worldbank.org/V2/country/'+country.id+'?format=json';
        let res: Response = await fetch(_http);
        let data: any =  await res.json();
        let info: any = data[1];
        
          let name: string = info[0].name;
          document.getElementById('name')!.innerText = name;
        
          let capital: string = info[0].capitalCity;
          document.getElementById('capital')!.innerText = capital;
        
          let region: string = info[0].region.value;
          document.getElementById('region')!.innerText = region;
        
          let income: string = info[0].incomeLevel.value;
          document.getElementById('income')!.innerText = income;
        
          let latitude: string = info[0].latitude;
           document.getElementById('latitude')!.innerText = latitude;

          let longitude: string = info[0].longitude;
          document.getElementById('longitude')!.innerText = longitude;
          }         
        };
        ;
