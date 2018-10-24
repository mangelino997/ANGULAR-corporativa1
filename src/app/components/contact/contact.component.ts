import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form= new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', Validators.required),
      observacion: new FormControl()

    });
  }
  public mostrar(){
    alert(this.form.get('name').value);
  }

}
