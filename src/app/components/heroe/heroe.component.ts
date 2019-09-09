import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  constructor( private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe( params => {
      console.log( params );
    } );
  }

  ngOnInit() {
  }

}
