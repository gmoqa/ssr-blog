import helmet from 'helmet'

export default function () {
  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(helmet())
  })
}
