import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
// chart
import {registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  public dataSource = {
    datasets:[
        {
            data: new Array<any>(),
            // data : [],
            backgroundColor:[
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#F0F8FF',
                '#FFFACD',
                '#B22222'
            ],
        }
    ],
    // labels: []
    labels: new Array<any>()
};

  // @Input() title = 'Title';
  // @Input() content = 'cccccc';

  constructor(private http : HttpClient) {


   }

  ngOnInit(): void {
      this.http.get('http://localhost:3000/budget')
      .subscribe((res : any)=>{
        for(var i = 0; i < res.myBudget.length ; i++){
          this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
          this.dataSource.labels[i] = res.myBudget[i].title;
          // this.createChart();
      }
      this.createChart();
      });

      this.RenderChart();
  }

  createChart(){
    // var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = document.getElementById("myChart") as HTMLCanvasElement;
    var myPieChart = new Chart(ctx,{
        type:'pie',
        data: this.dataSource
    });
}


  RenderChart(){
    new Chart("Doughnut", {
      type: 'doughnut',
      data: {
        labels: ['Eat out', 'Rent', 'Grocery', 'Traveling', 'Gas', 'Electricity','Entertainment'],
        datasets: [{
          label: '$',
          data: [25,375,110,500,60,85,250],
          borderWidth: 1
        }]
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // }
    });
  }


}



