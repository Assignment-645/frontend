import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl1 = 'http://localhost:8080/Jersey-JPA-hibernate-backend/webapi/students/all';
  private baseUrl2 = 'http://localhost:8080/Jersey-JPA-hibernate-backend/webapi/students/create';

  constructor(private http: HttpClient) { }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, student);
  }
    getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }
}