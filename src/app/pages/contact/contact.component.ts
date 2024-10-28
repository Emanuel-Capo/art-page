import { Component, signal } from '@angular/core';
import { pageAnimation } from '../../animations/page-animation';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [pageAnimation],
})
export class ContactComponent {
  init = signal(true);

  mailName = new FormControl('', [Validators.required]);
  mail = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
  message = new FormControl('', [Validators.required, Validators.minLength(3)]);
}
