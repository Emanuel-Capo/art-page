import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent implements OnInit {

  check = signal(false)

  ngOnInit(): void {
    setInterval(() => {
      this.check.set(true)
    }, 20000);
  }


}
