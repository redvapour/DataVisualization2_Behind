//服务器入口文件

const Koa = require("koa");
const app = new Koa();

// 第一层中间件 ==> 计算响应时间
const responseDuration = require("./middleware/koa_response_duration");
app.use(responseDuration);
// 第二层中间件 ==> 设置响应头、设置跨域
const responseHeader = require("./middleware/koa_response_header");
app.use(responseHeader);
// 第三层中间件 ==> 从data文件夹中读取数据返回
const responseData = require("./middleware/koa_response_data");
app.use(responseData);
// 测试
/* app.use((ctx) => {
  ctx.body = "hello world";
}); */

app.listen(8080, () => {
  console.log("服务器已启动，监听中");
});
