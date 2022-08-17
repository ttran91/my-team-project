import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto, UserToVendor } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.css']
})
export class VendorSignupComponent implements OnInit {

  // vendorSignUpForm: FormGroup;
  // userToVendorDto: UserToVendor;
  // userDto: UserDto;

  constructor(private authService: AuthService, private router:Router) { }
  ngOnInit(): void {
  //   this.vendorSignUpForm = new FormGroup({
  //     name: new FormControl(''),
  //     vEmail: new FormControl(''),
  //     vPhoneNumber: new FormControl('')
  //   });
  // }

  // onFormSubmit(){

  //   this.userToVendorDto={
  //     name: this.vendorSignUpForm.value.name,
  //     vEmail: this.vendorSignUpForm.value.vEmail,
  //     vPhoneNumber: this.vendorSignUpForm.value.vPhoneNumber
      
  //   }
  //   console.log(this.userToVendorDto);
  //   this.authService.vendorSignUpByUserId(this.userToVendorDto).subscribe({
  //     next: (data)=> {
  //         this.authService.message$.next('SignUp Success, Please Login')
  //         this.router.navigateByUrl('/login');
  //     },
  //     error: (e)=>{

  //     }

//     });


  }

}
