import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
// import {Router}  from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
 heroes:any[] = [];
 termino:string;
  constructor( private activatedroute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {
   }

  ngOnInit() { 
    this.activatedroute.params.subscribe(params => {
      console.log(params['termino']);
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      this.termino = this.heroes[0].nombre;
      console.log(this.heroes[0].nombre);


    })
  }

  Regresar(){
    this.router.navigate(['/heroes']);
  }


}
