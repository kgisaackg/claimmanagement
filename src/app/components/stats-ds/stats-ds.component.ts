import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';
import { ClaimerService } from 'src/app/services/claimer.service';

@Component({
  selector: 'app-stats-ds',
  templateUrl: './stats-ds.component.html',
  styleUrls: ['./stats-ds.component.scss']
})
export class StatsDsComponent implements OnInit {

  constructor(private claimerService: ClaimerService, private claimSerive: ClaimService) { }

  numUsers: number;
  ngOnInit(): void {
    this.claimerService.getClaiments().subscribe(v => this.numUsers =  v.length);
   
  }

   //Charts 
   public chartType: string = 'line';

   public chartDatasets: Array<any> = [
     { data: [65, 59, 80, 81, 56], label: 'Pending Claims' },
     { data: [28, 48, 40, 19, 86], label: 'Finalised Claims' }
   ];
 
   public chartLabels: Array<any> = ['week 1', 'week 2', 'week 3', 'week 4'];
 
   public chartColors: Array<any> = [
     {
       backgroundColor: 'rgba(105, 0, 132, .2)',
       borderColor: 'rgba(200, 99, 132, .7)',
       borderWidth: 2,
     },
     {
       backgroundColor: 'rgba(0, 137, 132, .2)',
       borderColor: 'rgba(0, 10, 130, .7)',
       borderWidth: 2,
     }
   ];
 
   public chartOptions: any = {
     responsive: true
   };
   public chartClicked(e: any): void { }
   public chartHovered(e: any): void { }
 
   //end of chares
}
