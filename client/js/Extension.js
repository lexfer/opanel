class Extension {
   constructor(options) {
      this.name        = options.name
      this.surName     = options.surName
      this.extenNumber = options.extenNumber
      this.status      = options.status || 'UNREGISTER'
      
      this.element     = this._createIcon()
      this.lineStatus(this.status)

      return this;
   }

   lineStatus(status) {

      console.log("lineStatus:", status)
      console.log("lineStatus:", this.element)

      let info = {
         FREE:       {backgroundColor: 'green'},
         RING:       {backgroundColor: 'green'},
         INUSE:      {backgroundColor: 'green'},
         UNREGISTER: {backgroundColor: 'green', borderColor: 'black'},
         REGISTER:   {backgroundColor: 'green', borderColor: 'lightgreen'}
      };

      const cur_info = info[status] || {}; 

      this.element.style.borderColor = cur_info.borderColor;
      this.element.style.backgroundColor = cur_info.backgroundColor;
      
      return this;
   }

   _createIcon(){
      const icon = document.createElement("div")
      icon.innerHTML = `
           ${this.extenNumber}
           ${this.name}        
      `
      return icon
   }

   render(element) {
      const e = element.appendChild(this.element)

      return this
   }

}


// .lineStatus("RING")
// exten.render(el)