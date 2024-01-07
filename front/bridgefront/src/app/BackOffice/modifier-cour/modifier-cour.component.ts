import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cour } from 'src/app/Model/cour';
import { CourService } from 'src/app/service/cour.service';

@Component({
  selector: 'app-modifier-cour',
  templateUrl: './modifier-cour.component.html',
  styleUrls: ['./modifier-cour.component.css']
})
export class ModifierCourComponent {
  cour: Cour = new Cour();
  selectedFile: File | null = null;
  // Injecting dependencies for course service, route information, and navigation.
  constructor(
    private courService: CourService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    if (courseId) {
      this.courService.getCourById(courseId).subscribe(
        (data) => {
                    // Assigns fetched data to the course object.
          this.cour = data;
        },
        (error) => {
                    // Logs an error and can redirect or show an error notification.
          console.error('Failed to get course', error);
          // Handle not found course or show notification
        }
      );
    }
  }
  // Handles file input change events to update the selected file.
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  // Method triggered on form submission.
  onSubmit(form: NgForm) {
        // Checks if the form is valid and the course ID is present.
    if (form.valid && this.cour.id) {
            // Calls the service to update the course with new data.
      this.courService.modifierCour(this.cour, this.selectedFile, this.cour.id).subscribe(
        (response) => {
                    // Logs success and shows a success message.
          console.log('Course updated successfully!', response);
          alert('Course updated successfully!');

          // Redirect to course list or display success message
          this.router.navigate(['/admin']); // Ensure this route is correct
        },
        (error) => {
                // Alerts if form validation fails.
          alert('Failed to update course.');
          console.error('Error updating course', error);
          // Display error notification if needed
        }
      );
    } else {
      alert('Please fill all the fields correctly.');
    }
  }
}