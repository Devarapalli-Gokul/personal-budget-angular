import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{


  public dataSource = {
    datasets:[
        {
            // data: new Array<any>(),
            data : [],
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
    labels: []
    //labels: new Array<any>()
};

  // @Input() title = 'Title';
  // @Input() content = 'cccccc';

  constructor(private http : HttpClient) {


   }

  ngOnInit(): void {
      this.http.get('http://localhost:3000/budget')
      .subscribe((res : any)=>{
        for(var i = 0; i < res.data.myBudget.length ; i++){
          this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
          this.dataSource.labels[i] = res.data.myBudget[i].title;
          this.createChart();
      }
      // createChart();
      });
  }

  createChart(){
    // var ctx = document.getElementById("myChart").getContext("2d");
    var ctx = document.getElementById("myChart");
    var myPieChart = new Chart(ctx,{
        type:'pie',
        data: this.dataSource
    });
}



}




// @Component({
//   selector: 'pb-article',
//   templateUrl: './article.component.html',
//   styleUrls: ['./article.component.scss']
// })
// export class ArticleComponent implements OnInit{
//   @ViewChild('myChart') element: any;


//   public dataSource = {
//     datasets:[
//         {
//             data: new Array<any>(),
//             backgroundColor:[
//                 '#ffcd56',
//                 '#ff6384',
//                 '#36a2eb',
//                 '#fd6b19',
//                 '#F0F8FF',
//                 '#FFFACD',
//                 '#B22222'
//             ],
//         }
//     ],
//     labels: new Array<any>()
// };

//   // @Input() title = 'Title';
//   // @Input() content = 'cccccc';

//   constructor(private http : HttpClient, private elementRef: ElementRef) {
//     this.element = elementRef;

//    }

//   ngOnInit(): void {
//     /*
//       this.http.get('http://localhost:3000/budget')
//       .subscribe((res : any)=>{
//         for(var i = 0; i < res.data.myBudget.length ; i++){
//           this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
//           this.dataSource.labels[i] = res.data.myBudget[i].title;
//           this.createChart();
//       }
//       });
//       */
//       var res = {"myBudget":[{"title":"Eat out","budget":25},{"title":"Rent","budget":375},{"title":"Grocery","budget":110},{"title":"Traveling","budget":500},{"title":"Gas","budget":60},{"title":"Electricity","budget":85},{"title":"Entertainment","budget":250}]}
//       for(var i = 0; i < res.myBudget.length ; i++){
//         this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
//         this.dataSource.labels[i] = res.myBudget[i].title;
//         this.createChart();
//     }
//     // createChart();
//   }

//   createChart(){
//     var ctx = [];
//     // ctx = document.getElementById("myChart");//?.getContext("2d");
//     console.log( this.element );
//     ctx = this.element.nativeElement.getContext('2d');
//     var myPieChart = new Chart(ctx,{
//         type:'pie',
//         data: this.dataSource
//     });
// }



// }


