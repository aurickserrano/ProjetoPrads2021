import { Injectable } from "@angular/core";
import{HttpClient}from '@angular/common/http';
//import { Observable } from "rxjs";
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Membros } from "./membros.model";

@Injectable()
export class MembroService{
    selectedMembros : Membros;
    membros: Membros[];
    readonly baseURL = 'http://localhost:3000/Membros/'
    constructor(private http:HttpClient){}

    postMembro(emp:Membros){

        return this.http.post(this.baseURL,emp);

    }
}