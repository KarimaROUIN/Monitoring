import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../../../_helpers/must-match.validator';
@Component({
  selector: 'app-addkiosk',
  templateUrl: './addkiosk.component.html',
  styleUrls: ['./addkiosk.component.scss']
})
export class AddkioskComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
         // title: ['', Validators.required],
          id: ['', Validators.required],
          name: ['', Validators.required],
          // validates date format yyyy-mm-dd
         // dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
         adresse: ['', Validators.required],
         responsable: ['', Validators.required]
          //acceptTerms: [false, Validators.requiredTrue]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {

        console.log("registerForm.invalid");
          return;
      }
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
 
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}