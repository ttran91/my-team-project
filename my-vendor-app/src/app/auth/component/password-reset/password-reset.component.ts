import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})

export class PasswordResetComponent implements OnInit{

  password: string;
  repassword:string;
  error_msg: string;
  constructor(private authService: AuthService,private router:Router) { }
  username: string;
  ngOnInit(): void {
    this.error_msg='';
      this.authService.user$.subscribe(data=>{
        this.username=data;

    })
  }

  onReset(){
      if(this.password === this.repassword){
          this.authService.resetPassword(this.username,this.password).subscribe({
            next: (data)=>{
                this.authService.message$.next('Password Reset Successful, Please Login!')
                this.router.navigateByUrl('/login');
            },
            error: (e)=> {
                this.error_msg='Password did not reset!';
            }
          });
      }
  }
}
