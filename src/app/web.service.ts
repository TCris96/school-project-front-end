import { Injectable } from "@angular/core"
import { Observable } from "rxjs";

export interface classroom{
    id: number,
    name: string,
    email: string
}

Injectable({
    providedIn: "root"
})

export class WebService{
    apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient){}

    GetClassroom(): Observable<classroom[]>{
        return this.http.get<classroom[]>(this.apiUrl)
    }
}