import { Component, OnInit  } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  
  constructor() { }

  ngOnInit(): void {


  }
navbarOpen=false;

}
