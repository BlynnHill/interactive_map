import { Component, OnInit, Input, Output  } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor (private apiService:ApiService) {}

  ngOnInit(): void {
    country: SVGPathElement

    let paths = document.querySelectorAll<SVGPathElement>('path');
    paths.forEach(country => {

      country.addEventListener('mouseover', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = '#FF4B91';
        }
      });

      country.addEventListener('mouseleave', event => {
        const path = event.target as SVGPathElement;
        if (path) {
          path.style.fill = '';
        }
      });

      country.addEventListener('click', () => {
        this.apiService.information(country);
          }
          )
        })            
      };
    };

