import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

const hidden = { opacity:0  };
const visible = { opacity:1 };
const timing = '300ms ease-in';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('openClose',[
      transition(':enter', [
        style(hidden),
        animate(timing, style(visible))
      ]),
      transition(':leave', [
        style(visible),
        animate(timing, style(hidden))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  protected close = signal(true)
  protected espMenu = signal(true)
  mobile=false

  ngOnInit() {
    if (window.screen.width <= 768) {
      this.mobile = true;
    }
  }

  closed=()=>{this.close.set(!this.close())}
  closedEspMenu=()=>{this.espMenu.set(!this.espMenu())}
  closeEsp=()=>{this.espMenu.set(false)}
  openEsp=()=>{this.espMenu.set(true)}
  closedAll=()=>{
    this.closed()
    this.closedEspMenu()
  }


}
