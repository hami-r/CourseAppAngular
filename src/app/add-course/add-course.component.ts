import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle = "";
  courseDescription = "";
  courseDuration = "";
  courseDate = "";
  courseVenue = "";

  constructor(private api:ApiService) {}

  readValues = () => {
    let data:any = {
   "courseTitle":this.courseTitle,
   "courseDescription":this.courseDescription,
   "courseDuration":this.courseDuration,
   "courseDate":this.courseDate,
   "courseVenue":this.courseVenue };
   console.log(data);
   
   this.api.addCourse(data).subscribe(
    (response) => {
      console.log(response)
    }
   )

  }

  
}
