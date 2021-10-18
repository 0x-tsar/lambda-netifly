const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

exports.handler = async function (event, context) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
  });

  return {
    statusCode: JSON.stringify({
      statusCode: 200,
    }),
  };
};
