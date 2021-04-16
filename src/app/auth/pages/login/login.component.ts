import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    usuario:  ['', [Validators.required]],
    pclave:   ['', [Validators.required]]
  })


  constructor(private fb: FormBuilder, private router: Router, private authServices: AuthService) { }

  ngOnInit(): void {
  }


  login(){

    console.log(this.miFormulario.value);
    const {usuario, pclave} = this.miFormulario.value;

    if(usuario==="admin" && pclave==="admin"){
      this.authServices.login().subscribe(resp=>{
        if(resp.id){
          this.router.navigate(['/dashboard']);
        }
      })
    }

    else{
      Swal.fire('Error', 'Usuario y Palabra Clave No Son Validas','error');
    }


   

 
  }



}
