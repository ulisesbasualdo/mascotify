import { Component } from '@angular/core';
import { AnimationsDirective } from '../directives/animations.directive';

@Component({
  selector: 'app-parallax-hero',
  standalone: true,
  imports: [AnimationsDirective],
  template: `
    <section class="header">
      <div class="header-content">
        <h1 appAnimations animationInput="fadeInTop-hero">
          Escaneaste el QR de <span>Pepito</span>
        </h1>
        <p appAnimations animationInput="fadeInBottom-hero">
          Entonces puede estar perdido, toda información es bienvenida!
        </p>
      </div>
      <img
        class="header-image"
        src="img/example-dog.jpg"
        alt="Mi Lugar Miramar"
      />
    </section>
  `,
  styles: `
  h1 {
    color: white;
    line-height: normal;
    text-shadow: rgb(0, 0, 0) 1px 1px 9px;
  }

  p {
    color: white;
    text-shadow: rgb(0, 0, 0) 1px 1px 9px;
  }

  .header {
    display: grid;
    place-items: center;
    position: relative;
    height: 100vh;
    overflow-x: clip;
  }

  .header-content {
    margin: 30px;
    text-align: center;
  }

  .header-image {
    grid-column: 1 / -1;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  img.header-image {
    object-fit: contain;
    filter: brightness(0.8); 
    object-position: bottom;
    background-image: url(public/img/example-dog.jpg);
} 

  span {
    color: var(--marketing);
  }

  @media (min-width: 768px) {
    h1,
    p {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    img.header-image {
    object-fit: cover;
    filter: brightness(0.8); 
    object-position: bottom;
    background-image: none;
} 
  }

  @supports (animation-timeline: view()) {
    .header {
      height: 100vh;
    }

    .header-content {
      animation: fade-out linear;
      animation-timeline: view();
      animation-range: exit -200px;
    }

    .header-image {
      animation: header-image-animation linear forwards;
      animation-timeline: view();
      animation-range: exit;
      position: fixed;
    }

    @media (hover:hover) {
      .header-image {
        scale: 1.2;
      }
    }
  }

  @supports (view-transition-name: hero1) {
    img {
      view-transition-name: hero1;
    }
  }
  `,
})
export class ParallaxHeroComponent {

  imagen: string = 'public/';

}
