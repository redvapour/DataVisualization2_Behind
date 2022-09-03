// 返回数据中间件

const path = require("path");
const fileUtils = require("../utils/file_utils");

module.exports = async (ctx, next) => {
  const url = ctx.url;
  let filePath = url.replace("/api", "");
  filePath = "../data" + filePath + ".json";
  filePath = path.join(__dirname, filePath); //得到完整路径，带json后缀
  // console.log(filePath);
  try {
    const ret = await fileUtils.getFileJsonData(filePath);
    ctx.response.body = ret;
  } catch (error) {
    const errorMsg = {
      message: "读取文件失败，请确认文件名称",
      status: 404,
    };
    ctx.body = JSON.stringify(errorMsg);
  }
  await next();
};
