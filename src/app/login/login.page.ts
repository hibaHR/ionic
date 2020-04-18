import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { LaravelPassportService} from 'laravel-passport';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: FormGroup;

  constructor(public modalController:ModalController,
     public formBuilder: FormBuilder,private  laravelaPassportService: LaravelPassportService) {
       this.user = this.formBuilder.group({
         email : ['', Validators.required],
         password : ['', Validators.required]
       })
      };

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss();
  }

  login(){
    const user = this.user.value;
    this.laravelaPassportService.loginWithEmailAndPassword(user.email, user.password).subscribe(
      res=>{
       console.log(res);
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('completed');
      }
    );

  }


}
