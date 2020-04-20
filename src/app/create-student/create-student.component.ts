import { StudentService } from '../student.service';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  campusarray =[
    {
      "key": "students",
      "value":"students"
    },
    {
      "key": "location",
      "value":"location"
    },
    {
      "key": "campus",
      "value":"campus"
    },
    {
      "key": "atmosphere",
      "value":"atmosphere"
    },
    {
      "key": "dorm rooms",
      "value":"dorm rooms"
    },
    {
      "key": "sports",
      "value":"sports"
    },
  ]

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/home']);
  }
}

