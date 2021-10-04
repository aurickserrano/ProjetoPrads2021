import { MembroService } from './../../shared/membros.service';
import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MembroService]
 
})
export class LoginComponent implements OnInit {
  constructor(public membroService:MembroService) { }

  ngOnInit(){
    this.resetForm();
  }
  resetForm(form?:NgForm) {
    if(form)
      form.reset();
    this.membroService.selectedMembros = {
      _id:"",
      usuario:"",
      senha:"",
      posicao:"",
    }
  }
  onSubmit(form:NgForm){
    this.membroService.postMembro(form.value).subscribe((res)=>{
      this.resetForm(form);
    });

  }



}
