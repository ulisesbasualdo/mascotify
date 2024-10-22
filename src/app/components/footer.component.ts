import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="contenedor">
        <div class="contenido">
          <div class="titulo">
            <p>
              Mascotify es un servicio para que permite que si tu mascota se pierde,
              puedas tener una página web accesible a través de un código QR donde 
              coloques toda la información necesaria para que puedan ayudarte a
              encontrarla.
            </p>
          </div>
          <div class="descripcion">
            <p>
              Quieres que tu mascota también tenga su Mascotify?
              <strong style="display:block;">
                Envía un mensaje al programador a través de 
              <a
              class="contacto"
              style="display:inline-block;"
                href="https://wa.me/542291407553"
                target="_blank"
                rel="noopener"
                >WhatsApp</a
              >
              </strong>
              </p>
</div>
          <div class="descripcion">
            <p>Si quieres colaborar en la búsqueda, comparte, gracias!</p>
            <p>
              Compartir en
              <!-- WhatsApp -->
              <a
                class="contacto"
                [href]="'https://wa.me/?' + 'cambiar_este_link'"
                target="_blank"
                rel="noopener"
                >WhatsApp</a
              >
            </p>
          </div>
          <div class="descripcion">
            <p>
              Creado por <strong>Ulises Basualdo</strong
              ><strong> Programador y Desarrollador Web</strong>
            </p>
            <p class="contacto">
              <a
                href="https://www.linkedin.com/in/ulisesbasualdo"
                target="_blank"
                rel="noopener"
                >LinkedIn</a
              >
              |
              <a
                href="https://wa.me/542291407553"
                target="_blank"
                rel="noopener"
                >WhatsApp</a
              >
              |
              <a
                href="https://www.instagram.com/uliprograma/"
                target="_blank"
                rel="noopener"
                >Instagram</a
              >
              |
              <a
                href="https://www.facebook.com/profile.php?id=61563288947537"
                target="_blank"
                rel="noopener"
                >Facebook</a
              >
              |
              <a
                href="mailto:ulimiramar@gmail.com"
                target="_blank"
                rel="noopener"
                >ulimiramar&#64;gmail.com</a
              >
            </p>
          </div>
          <div class="derechos">
            <i class="gf"
              >"Agotar los medios para lograr el objetivo con lo que se tiene
              más a la mano"</i
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `

    footer {
      margin-top: 5%;
    }

.contenedor {
  width: 100%;
  background: linear-gradient(45deg, #0f3286 15%, #1441a9, #0f3286 85%);
  color: #fff;
  padding-block: 4%;
  padding-inline: 5%;
}

.contenido {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
}

.contacto a,
a.contacto {
  color: #65feff;
}

i {
  font-family: "Zain", sans-serif;
}

@media (max-width: 768px) {
  .contenedor {
    padding-block: 10%;
    text-align: left;
  }
  .titulo,
  .descripcion {
    padding-inline: 10%;
  }
  .derechos {
    padding-inline: 10% 30%;
  }
  .descripcion strong {
    display: block;
  }
}
`,
})
export class FooterComponent {}
