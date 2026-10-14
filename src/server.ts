import fastify from 'fastify'
import 'dotenv/config'

const app = fastify()

app.get('/hello2', async () => {
  return { msg: 'oiiiiiii' }
})

const start = async () => {
  try {
    const port = Number(process.env.PORT ?? 3333)
    await app.listen({ port })
    console.log(`RODANDO na porta: ${port}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()