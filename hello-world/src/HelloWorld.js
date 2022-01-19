import {LitElement, html, css} from 'lit';

export class HelloWorld extends LitElement {
  // These static properties and styles can be change later, but I'm still not 
  //fully comfortable with the concept.
  static properties = {
    greeting: {},
    planet: {},
  };

// I'm not familiar with what "color: var(--planet-color, blue);" is, but I do
// know it gives the word "World", the color blue.
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;

//When the class initialized, the constructor will run.
//This will display the 'Hello World' for the first part.
//The second element's planet attribute is changed to mars, that't why the
//second part is "Hello Mars".
  constructor() {
    super();
    this.greeting = 'Hello';
    this.planet = 'World';
  }

//The render returns what's suppose to be in or what happens to the element.
// We have the event listener in render.
  render() {
    return html`
      <span @click=${this.togglePlanet}>
        ${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }

// This is an event handler. Everytime the colored words are clicked, it will
// switch between world and mars.
  togglePlanet() {
    //However, I don't know really know this means, "=== 'World' ? 'Mars' : 'World'".
    this.planet = this.planet === 'World' ? 'Mars' : 'World';
  }
}