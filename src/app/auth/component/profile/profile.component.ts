import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserEditDto } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  credentials: string;
  userEditDto: UserEditDto;
  profileForm:FormGroup;
  username: string;
  msg: string;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.msg='';
    this.username = localStorage.getItem('username');
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      securityQuestion: new FormControl(''),
      username: new FormControl({value: this.username, disabled: true}),
      securityAnswer: new FormControl('')
    });
    
    this.credentials = localStorage.getItem('credentials');
      this.authService.getUserByUsername(this.credentials).subscribe({
        next: (data)=>{ this.userEditDto = data;
        console.log(this.userEditDto);
        console.log(this.profileForm);
        this.profileForm.controls['name'].setValue(this.userEditDto.name);
        this.profileForm.controls['securityQuestion'].setValue(this.userEditDto.securityQuestion);
        this.profileForm.controls['securityAnswer'].setValue(this.userEditDto.securityAnswer);
        },
        error: (e)=>{  }
      });
  }
  onFormSubmit(){
    this.userEditDto ={
      name: this.profileForm.value.name,
      securityQuestion: this.profileForm.value.securityQuestion,
      securityAnswer: this.profileForm.value.securityAnswer,
      username: this.username
    };

    this.authService.editProfile(this.userEditDto).subscribe({
      next: (data)=>{
        this.msg='Profile Updated!!';
        this.profileForm.controls['name'].setValue(this.userEditDto.name);
        this.profileForm.controls['securityQuestion'].setValue(this.userEditDto.securityQuestion);
        this.profileForm.controls['securityAnswer'].setValue(this.userEditDto.securityAnswer);
      },
      error: (e)=>{
        this.msg='Update Operation Failed';
      }
    });



}

}