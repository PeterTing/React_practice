const html = require('../web/components/App');
const serviceWorker = require('../web/serviceWorker');
const Koa = require('koa');
const koaWebpack = require('koa-webpack');
const csrf = require('koa-csrf');
const etag = require('koa-etag');
const cors = require('@koa/cors');
// const redis = require('koa-redis';
const proxy = require('koa-proxies');
const logger = require('koa-logger');
const koaRouter = require('koa-router');
const helmet = require('koa-helmet');
const respond = require('koa-respond');
const session = require('koa-session');
const compress = require('koa-compress');
const koaStatic = require('koa-static-server');
const bodyParser = require('koa-bodyparser');
const conditional = require('koa-conditional-get');

const path = require('path');

const app = new Koa();
const config = require('../../config/webpack.config.js');
const middleware = async () => await koaWebpack({ config });

app.use(middleware);

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

app.use(async ctx => {
    ctx.body = html;
})

app.listen(3040);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();