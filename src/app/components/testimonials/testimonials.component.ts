import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  providers: [NgbCarouselConfig]
})
export class TestimonialsComponent implements OnInit {
  chart = [];

  item = ["Touchpad+Display", "Charging socket", "Touchpad", "Mike/Speaker/Ringer", "Water Damaged", "Software", "Battery Replace"];
  totalRevenue = [4000, 2000, 3000, 7000, 2500, 4250, 6000];
  noOfHours = [2, 1.5, 2, 0.9, 8, 3, 2.5];
  category= ["Excellent","Very Good", "Good", "Moderate","Not satisfied"];
  categoryOrders = [8, 6, 7, 4, 1];

  constructor(config:NgbCarouselConfig) {

    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover=false;
   }

  ngOnInit(): void {

    this.chart = new Chart('ordersChart', {
      type: 'bar',
      data: {
        labels: this.item,
        datasets: [
          {
            label: 'Total Number of Hours - Item to be repaired',
            backgroundColor: '#007bff',
            borderColor: 'green',
            data: this.noOfHours,
            fill: false,
          }
        ]
      }
    })
    this.chart = new Chart('categoryChart', {
      type: 'pie',
      data: {
        labels: this.category,
        datasets: [
          {
            label: 'Customer Satisfactions',
            backgroundColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88'],
            borderColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88'],
            data: this.categoryOrders,
            fill: true,
          }
        ]
      }
    })
  }

}
