const fastify = require('fastify')
const app = fastify({
  logger: true
})
app.get('/', (req, res) => res.send('hi world from docker container'))

const start = async () => {
  try {
    await app.listen({
      port: process.env.PORT || 8080,
      host: '0.0.0.0'
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
