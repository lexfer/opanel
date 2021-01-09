class Extension {
   constructor(options) {
      this.name        = options.name
      this.surName     = options.surName
      this.extenNumber = options.extenNumber
      this.status      = options.status || 'UNREGISTER'
      
      this.element     = this._createIcon()
      this.lineStatus(this.status)

      return this
   }

   lineStatus(status) {
      console.log("lineStatus:", status)
      console.log("lineStatus:", this.element)
    
      if (status === 'FREE'){
         this.element.style.backgroundColor = "green"
      }
      if (status === 'RING'){
         this.element.style.backgroundColor = "orange"
      }
      if (status === 'INUSE'){
         this.element.style.backgroundColor = "blue"
      }  
      if (status === 'UNREGISTER') {
         this.element.style.borderColor = "black"
         this.element.style.backgroundColor = "gray"
      }
      if (status === 'REGISTER') {
         this.element.style.borderColor = "lightgreen"
         this.element.style.backgroundColor = "green"
      }
      return this
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