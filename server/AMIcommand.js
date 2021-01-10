"use strict"

class AMIcommand {
   
   constructor(AMIobj){
      this.AMIobj = AMIobj
   }

   GetQueueMembers(queue) {
      console.log("GetQueueMembers", this.AMIobj)
   }
   
   SetPause(queue, iface) {
      
   }
   
   SetUnPause(queue, iface) {
      
   }
   
   DialTo(exten, channel) {
      
   }
}

module.exports = AMIcommand 