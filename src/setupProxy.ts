/* eslint-disable @typescript-eslint/no-var-requires */
import { createProxyMiddleware } from 'http-proxy-middleware'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = (app: any): void => {
  app.use(
    '/films',
    createProxyMiddleware({
      target: 'https://swapi.dev/api',
      secure: false,
      changeOrigin: true,
    })
  )
}
