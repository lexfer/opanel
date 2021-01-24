'use strict'

const AmiClient = require('asterisk-ami-client')
const client = new AmiClient({ reconnect: true, keepAlive: false })

client.connect(AMI.user, AMI.password, { host: AMI.host, port: AMI.port })
   .then(amiConnection => {
      client
         .on('connect', () => console.log('connect'))
         .on('event', event => WScmd.sendBroadcast(event))
         .on('data', chunk => console.log(chunk))
         .on('response', response => console.log(response))
         .on('disconnect', () => console.log('disconnect'))
         .on('reconnection', () => console.log('reconnection'))
         .on('internalError', error => console.log(error))
      // .action({
      //    Action: 'Ping'
      // });

   })
   .catch(error => console.log(error))

module.exports = client