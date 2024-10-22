import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParallaxHeroComponent } from "./components/parallax-hero.component";
import { CardComponent } from "./components/card.component";
import { FooterComponent } from "./components/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParallaxHeroComponent, CardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mascotify';
}
