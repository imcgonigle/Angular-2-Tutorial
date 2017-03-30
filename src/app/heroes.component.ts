import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: [ 'app/heroes.components.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit  { 
  selectedHero: Hero; 
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) {}
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes()
  }
}