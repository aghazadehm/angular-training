import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: string[];
  isActive = true;
  name = 'mohammad';
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() { }

  onClick() {
    console.log('Button was clicked');
  }

  onMove($event) {
    $event.stopPropagation();
    console.log($event);
  }
  onDivClicked() {
    console.log('Div was clicked');
  }

  onChange(email) {
    console.log(email);
  }

  onKeyUp() {
    console.log(this.name);
  }
}
