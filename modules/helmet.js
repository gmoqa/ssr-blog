import helmet from 'helmet'
export default function (moduleOptions = {}) {
  const options = {
    permittedCrossDomainPolicies: 'none',
    contentSecurityPolicy: false,
    ...this.options.helmet || {},
    ...moduleOptions,
  }

  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use(helmet(options))
  })
}
