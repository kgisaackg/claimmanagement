import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claimant-table',
  templateUrl: './claimant-table.component.html',
  styleUrls: ['./claimant-table.component.scss']
})
export class ClaimantTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editField: string;
    personList: Array<any> = [
      { id: 1, claimNun: 1, date: '01-May-2021', sms: 'skdjjdskdk', stats: 'Approved'},
      { id: 2, claimNun: 2, date: '01-May-2021', sms: 'mndnfejfkfk', stats: 'Pending' },
      { id: 3, claimNun: 3, date: '01-May-2021', sms: 'mks sjnsns snks', stats: 'Rejected', },
      { id: 4, claimNun: 4, date: '01-May-2021', sms: 'snxj skxnkj sjnx', stats: 'Approved', },
      { id: 5, claimNun: 5, date: '01-May-2021', sms: 'mskm skxkk', stats: 'Pending', },
    ];

}
