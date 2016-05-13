import { Component, OnInit } from '@angular/core';

import { CultripDataService } from './cultrip-data.service';

import { Join } from './models/join';

@Component({
  selector: 'joins',
  templateUrl: 'app/joins.component.html'
})
export class JoinsComponent implements OnInit {

  joins: Join[];

  constructor(
    private cultripDataService: CultripDataService
  ) { }

  ngOnInit() {
    this.getJoins();
  }

  getJoins() {
    this.cultripDataService.loadJoins().then(joins => this.joins = joins);
  }

  diagonostic(join: Join) { return JSON.stringify(join); }
}