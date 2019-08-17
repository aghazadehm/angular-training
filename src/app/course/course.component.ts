import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'This is property of course component.';
  imageUrl = 'http://lorempixel.com/400/200';
  colspan = 2;
  constructor() { }

  ngOnInit() {
  }

}
