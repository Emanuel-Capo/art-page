import { Component } from '@angular/core';
import { ImageSliderComponent } from "../../shared/image-slider/image-slider.component";
import { BodyComponent } from "../../shared/body/body.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
