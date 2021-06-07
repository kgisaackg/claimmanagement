import { Component, OnInit } from '@angular/core';
import { Claims } from 'src/app/claims';
import { RestService } from 'src/app/rest.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-claima-table',
  templateUrl: './claima-table.component.html',
  styleUrls: ['./claima-table.component.scss']
})
export class ClaimaTableComponent implements OnInit {

  validatingForm: FormGroup;
  claims: Claims[] = [];

  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getClaims().subscribe((response) => {
      this.claims = response;
    });

    this.validatingForm = new FormGroup({
      claimNum: new FormControl('', Validators.required),
      claimDate: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  get claimNum() {
    return this.validatingForm.get('claimNum');
  }

  get claimDate() {
    return this.validatingForm.get('claimDate');
  }

  get message() {
    return this.validatingForm.get('message');
  }

  get status() {
    return this.validatingForm.get('status');
  }

  editField: string;

    updateList() {
      // Awaiting an update API
    }

    remove() {
      // Awaiting an delete API
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

}
