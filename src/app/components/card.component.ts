import { Component, Input } from '@angular/core';
import { AnimationsDirective } from '../directives/animations.directive';

export interface IDog {
  name: string;
  description: string;
  note: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AnimationsDirective],
  template: `
    <section>
      <div class="card" appAnimations animationInput="fadeInBottom">
        <div class="title">
          <h2>{{ dog.name }}</h2>
          @if(dog.description){
          <p class="warning">
            {{ dog.description }}
          </p>
          } @if(dog.note){
          <p class="warning">
            Teléfono de contacto: 1122334455 - <a href="#">Toca para llamar</a>
            <br />
            WhatsApp: 1122334455  - <a href="#">Toca para enviar WhatsApp</a>
            <br />
            Mail: PepitoTeExtranio&#64;gmail.com - <a href="#">Toca para enviar mail</a>
            <br />
            En dónde vive {{ dog.name }}?: Abre 
            <a href="https://maps.app.goo.gl/LbEE5aCdh4n1e2kw6" target="_blank">Google Maps</a>
            y toca en indicaciones, quizás estés cerca!
          </p>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    section {
    text-align: center;
    padding: 7% 5% 0% 5%;
    font-weight: bold;
    margin-bottom: 1rem;
  }
    .card {
      padding: 1em;
      text-align: left;
      box-shadow: 0 0 45px 26px #00000017;
      -webkit-box-shadow: 0px 0px 45px 26px rgba(0, 0, 0, 0.09);
      -moz-box-shadow: 0px 0px 45px 26px rgba(0, 0, 0, 0.09);

      a {
        display: inline-block;
      }
    }

    .cards {
      display: flex;
      gap: 1em;
      justify-content: center;
      align-items: stretch;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .card-footer {
      display: flex;
      gap: 1em;
    }

    @media (max-width: 768px) {
      .title {
        text-align: left;
        padding-inline: 0px;
      }

      .card {
        width: 100%;
      }

      .cards {
        display: flex;
        gap: 1em;
        justify-content: flex-start;
      }
    }
  `,
})
export class CardComponent {
  @Input() dog: IDog = {
    name: 'Pepito',
    description: 'Comunicate con sus dueños a través de las siguientes vías:',
    note: 'Si lo ves, por favor llámanos al 123-456-7890.',
  };
}
