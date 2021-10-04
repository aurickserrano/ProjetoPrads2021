import { Injectable } from "@angular/core";
import{HttpClient}from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Membros } from "./membros.model";

@Injectable()
export class MembroService{
    selectedMembros : Membros;
    membros: Membros[];
    constructor(){}
}