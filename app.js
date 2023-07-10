const fastify = require('fastify')
const Redis=require('ioredis')
const app = fastify({
  logger: true
})
app.get('/', (req, res) => res.send('hi world from docker container'))

const start = async () => {
  try {
    const redis = new Redis({
      port: 6379,
      password: 'cibilex',
      host: process.env.HOST
    })

    await redis.set('username', 'cibilex')

    console.log(await redis.get('username'))

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
