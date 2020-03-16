import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  casas: string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png']

  constructor( private activatedRouter: ActivatedRoute, private heroesService: HeroesService ) {
    this.activatedRouter.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      // console.log( this.heroe );
    } );
  }

  ngOnInit() {
  }
}
