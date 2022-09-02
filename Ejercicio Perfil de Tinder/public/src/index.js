import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-profile logo=".././img/logotinder.png" chat=".././img/chat-3.png" settings=".././img/settings.png" userimg=".././img/img1.jpg" username="kathe.reyes19" name="Katherine Reyes" age="16 años" ubication="Cali-Colombia" kilometers="10" description="Hello! this is my description. I am a creative girl, art lover. I like to go out with my friends and have a good time"></my-profile>
        `;
        
    }
}

customElements.define("app-container",AppContainer);
