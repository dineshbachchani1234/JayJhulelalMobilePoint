import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-userreview',
  templateUrl: './userreview.component.html',
  styleUrls: ['./userreview.component.css']
})
export class UserreviewComponent implements OnInit {
  chart = [];

  item = ["CC+LCD", "Socket", "CC", "Mike/Speaker/Ringer", "Water", "Software", "Battery Replace"];
  year=["2016","2017","2018","2019","2020","2021"];
  totalRevenue = [4000, 2000, 3000, 7000, 2500, 4250, 6000];
  noOfHours = [2, 1.5, 2, 0.9, 8, 3, 2.5];
  mobileusers=[2.5,2.7,2.9,3.2,3.5,3.8 ];
  category= ["Excellent","Very Good", "Good", "Moderate","Not satisfied"];
  categoryOrders = [8, 6, 7, 4, 1];
  
  constructor(private formBuilder: FormBuilder,
    private router:Router,private service:UserService) { }



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
    this.chart = new Chart('statschart', {
      type: 'bar',
      data: {
        labels: this.year,
        datasets: [
          {
            label: 'Smartphone Users in Billion - Year',
            backgroundColor: '#007bff',
            borderColor: 'green',
            data: this.mobileusers,
            fill: false,
          }
        ]
      }
    })
  }

    }
  

