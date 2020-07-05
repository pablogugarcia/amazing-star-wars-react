/* eslint-disable @typescript-eslint/no-var-requires */
import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function (app: any) {
  app.use(
    '/films',
    createProxyMiddleware({
      target: 'https://swapi.dev/api',
      secure: false,
      changeOrigin: true,
    })
  )
}
