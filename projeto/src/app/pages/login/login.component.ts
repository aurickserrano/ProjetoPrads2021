import { MembroService } from './../../shared/membros.service';
import { Component, OnInit } from "@angular/core";





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MembroService]
 
})
export class LoginComponent implements OnInit {
  constructor(private membroService:MembroService) { }

  ngOnInit(): void {
  }



}
