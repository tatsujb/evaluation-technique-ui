/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
const app = require('./index');
const config = require('../webpack.config');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const compiler = webpack(config);
const isProd = (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV);

if (!isProd) {
  // Remove static route (prod only)
    const routes = app._router.stack;
    routes.forEach((route, i, newRoutes) => {
        if (route.handle.name === 'serveStatic') {
            newRoutes.splice(i, 1);
        }
    });

    // Add webpack middlewares
    app.use(webpackDevMiddleware(compiler, {
        stats: {
            colors: true,
        },
    }));

    app.use(webpackHotMiddleware(compiler, { log: console.log }));
}
