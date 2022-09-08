class ContentCardExample extends HTMLElement {
    // Whenever the state changes, a new `hass` object is set. Use this to
    // update your content.
    set hass(hass) {
        
      // Initialize the content if it's not there yet.
      if (!this.content) {
        this.innerHTML = `
          <ha-card header="Example-card">
            <canvas class="draw"></div>
          </ha-card>
        `;
        this.content = this.querySelector('canvas');
      }
  
      const entityId = this.config.entity;
      const state = hass.states[entityId];
      const stateStr = state ? state.state : 'unavailable';
  
    }
    
    static getConfigElement() {
      return document.createElement("content-card-editor");
    }
    
     draw()
    {
      var canvas = document.getElementById('draw');
      if (canvas.getContext)
      {
          var ctx = canvas.getContext('2d'); 
          var X = canvas.width / 2;
          var Y = canvas.height / 2;
          var R = 45;
          ctx.beginPath();
          ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
          ctx.lineWidth = 3;
          ctx.strokeStyle = '#FF0000';
          ctx.stroke();
          }
      }
  
    // The user supplied configuration. Throw an exception and Home Assistant
    // will render an error card.
    setConfig(config) {
      if (!config.entity) {
        throw new Error('You need to define an entity');
      }
      this.config = config;
    }
  
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
      return 3;
    }
  }
  