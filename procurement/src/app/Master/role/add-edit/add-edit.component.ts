import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, Validator } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  showlist: boolean = false;
  form: FormGroup;
  Db: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      roleName: '',
      // status: '',
      Features: false,
      Dashboard: false,
      Db: this.fb.group({
        IT: false,
        Construction: false,
        Plants: false,
        Support: false,
      }),
      Reports: false,
    });
  }

  ngOnInit(): void {}

  onShowlist() {
    this.showlist = !this.showlist;
  }
  submitForm() {
    console.log(this.form.value);
  }
}
