import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CultripDataService } from './cultrip-data.service';

import { Join } from './models';

enum JOIN_TYPE { ALL, NOT_PAID, REFUND_REQUESTED };

@Component({
  selector: 'joins',
  templateUrl: 'app/joins.component.html',
  styleUrls: ['app/joins.component.css'],
})
export class JoinsComponent implements OnInit {

  joins: Join[] = null;
  filteredJoins: Join[] = null;

  joinType: JOIN_TYPE = JOIN_TYPE.ALL;

  holderSearch = new Control();

  constructor(
    private cultripDataService: CultripDataService
  ) {
    this.holderSearch.valueChanges
      .debounceTime(500)
      .subscribe((holder) => this.searchJoinByHolder(holder));
  }

  ngOnInit() {
    this.loadJoins();
  }

  changeJoinType(joinType: JOIN_TYPE) {
    this.joinType = joinType;
    this.loadJoins();
  }

  loadJoins() {
    let params = {};

    switch (this.joinType) {
      case JOIN_TYPE.NOT_PAID:
        params['paid'] = false;    
        break;
      case JOIN_TYPE.REFUND_REQUESTED:
        params['refund_requested'] = true;
        break;
    }

    this.cultripDataService.loadJoins(params).subscribe((joins) => {
      this.joins = joins;
    });
  }

  confirmPaid(join: Join) {
    this.cultripDataService.confirmPaid(join.id, new Date()).subscribe(() => {
      join.paid = true;
    })
  }

  confirmRefunded(join: Join) {
    this.cultripDataService.confirmRefunded(join.id, new Date()).subscribe(() => {
      join.refunded = true;
    })
  }

  searchJoinByHolder(holder: string) {
    if (this.joins == null) return;
    if (holder.length == 0) {
      this.filteredJoins = null;
    } else {
      this.filteredJoins = _.filter(this.joins, (join: Join) => {
        if (join.payment_info.info.holder)
          return join.payment_info.info.holder.indexOf(holder) != -1;
        else
          return false;
      });
      console.log(this.filteredJoins);
    }
  }

  diagonostic(join: Join) { return JSON.stringify(join); }
}