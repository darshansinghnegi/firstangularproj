import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string = '';
  password: string = '';
  role: string = 'staff'; // Default to 'staff'

  constructor(private router: Router,private globalservice:GlobalService) {}
  error:boolean=false
  login() {
      //   let data={
    //     username:this.username,
    //     password:this.password
    //   }
    // this.globalservice.login(data).subscribe({next:(data)=>{
    //     localStorage.setItem('login',data)
    // }

    // })
    if (this.username=='manager' && this.password=='1234') {
      this.router.navigate(['layout/manager-dashboard']);
      this.error=false
    } else if(this.username=='staff' && this.password=='1234') {
      this.router.navigate(['layout/staff-portal']);
      this.error=false
    }else{
      this.error=true
    }
  }
}
