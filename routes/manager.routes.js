const { Router } = require('express')
const AMIactions = require('../server/AMIactions')
// const ami = require('')

const router = Router()

router.get('/getQueueMembers', (req, res) => {
   AMIactions.getQueueMembers({
                  Action: 'Ping'
               });

   console.log(req)
   return res.json({ a: true })

})

// router.get('/nutuse', (req, res)  => {

// })

module.exports = router