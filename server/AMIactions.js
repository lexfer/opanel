"use strict"

class AMIactions {
   
   constructor(AMIobj){
      this.AMIobj = AMIobj
   }

   getQueueMembers(queue) {
    this.AMIobj.action({Action: 'Ping'})  
      
   }
   
   SetPause(queue, iface) {
      
   }
   
   SetUnPause(queue, iface) {
      
   }
   
   DialTo(exten, channel) {
      
   }
}

module.exports = AMIactions