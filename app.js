const app = new (require('koa'))(),
  koa = require('koa-router')(),
  json = require('koa-json'),
  logger = require('koa-logger');

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - $s', this.method, this.urls. ms);
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.listen(8889, () => {
  console.log('koa is listening in 8889');
});

module.exports = app;
