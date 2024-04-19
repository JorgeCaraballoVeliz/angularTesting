import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tea-minder';

  private router: Router = inject(Router)

  goToNavigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  // form base
  /*
  modelForm = {
    inputText: "",
    checkbox: false
  }
  sendForm(): void {
    console.log(this.modelForm)
  }
  changeCheckbox(): void {
    console.log("change => ", this.modelForm.checkbox)
  }
  */
  //
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      texto: new FormControl("", [Validators.maxLength(5)]),
      checkbox: new FormControl(false, [Validators.requiredTrue]),
      emails: new FormArray([])
    })
  }

  get emailList() {
    return this.myForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emailList.push(new FormControl('', [Validators.email]));
  }

  removeEmail(index: number) {
    this.emailList.removeAt(index);
  }

  sendForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
