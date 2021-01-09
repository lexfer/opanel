'use strict'

const el = document.getElementsByClassName("wrapper")[0]
const exten = new Extension({ extenNumber: 701, name: 'Alexey' }).render(el)

// const ws = new Server({ip: '127.0.0.1', port: 8080}).connect()