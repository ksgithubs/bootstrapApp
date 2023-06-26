import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  submitStatus =false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(login: any){

   
   if(login.email == 'kavi' && login.password =='kavi' ){
     console.log("submitted")
    this.router.navigateByUrl('/template');
   }
   
   else{
    this.submitStatus=true;

  }

  }

}
