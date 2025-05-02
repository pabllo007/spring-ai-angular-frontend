import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // courses$!: Observable<Course[]>; // ! ignora o strict (obrigatoriedade de inicializar a variável)
  courses$: Observable<Course[]> = of([]); // inicializa o observable

  displayedColumns = ['name', 'category']
  constructor(private courseService: CoursesService) {
    //this.courses = [] //pode incializar aqui tbm
  }

  ngOnInit(): void {
    this.courses$ = this.courseService.list();

  }

}
