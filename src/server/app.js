import serviceWorker from '../web/serviceWorker'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../web/components/App'

import qs from 'qs'
import Koa from 'koa'
import koaWebpack from 'koa-webpack'
import csrf from 'koa-csrf'
import etag from 'koa-etag'
import cors from '@koa/cors'
// import redis from 'koa-redis';
import proxy from 'koa-proxies'
import logger from 'koa-logger'
import koaRouter from 'koa-router'
import helmet from 'koa-helmet'
import respond from 'koa-respond'
import session from 'koa-session'
import compress from 'koa-compress'
import koaStatic from 'koa-static-server'
import bodyParser from 'koa-bodyparser'
import conditional from 'koa-conditional-get'

const path = require('path');

const app = new Koa();
const config = require('../../config/webpack.config.js');
const middleware = async () => await koaWebpack({ config });

app.use(middleware);
app.use(handleRender);

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method}${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.listen(3040);


function handleRender(req, res) {
    const params = qs.parse(req.query)
    const co
    const store = createStore(counterApp)

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    const preloadedState = store.getState()
    res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // 警告：关于在 HTML 中嵌入 JSON 的安全问题，请查看以下文档
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
    )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();