import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heroes-find',
  templateUrl: './heroes-find.component.html'
})
export class HeroesFindComponent implements OnInit {
  heroesFound: Heroe[] = [];
  wordSearch: string;
  constructor(private activatedRouter: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
    this.activatedRouter.params.subscribe( params => {
      this.wordSearch = params.word;
      this.heroesFound = this.heroesService.searchHero(this.wordSearch);
      // console.log( this.heroesFound );
    } );
  }

  ngOnInit() {
  }

  verHeroes(idx: number) {
    console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}
