// start your server here

const server = require("./api/server")

const port = 12000

server.listen(port, () => {
    console.log(`listening on port:${port}`)
})