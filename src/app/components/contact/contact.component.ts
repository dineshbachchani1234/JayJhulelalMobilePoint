import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Find Us Now';
  longitude = 72.533733;
  latitude = 23.052303;
  todaysDate =new Date();

  constructor(private service:UserService,private router:Router,private formBuilder:FormBuilder) {

    setInterval(()=>{
      this.todaysDate=new Date();
    },1000);
   }

  ngOnInit(): void {


}

}
