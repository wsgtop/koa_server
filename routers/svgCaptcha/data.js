import svgCaptycha from "svg-captcha";
import { logger } from "../../logger/log4js.js";
/**
 * 默认有四个字符，长度可更改
 * @returns
 */
const captycha = () => {
  // const data = svgCaptycha.create()
  // const data = svgCaptycha.create({size:6})// 验证码位数
  // const data = svgCaptycha.create({ignoreChars:'oO01iI'}) // 排除字符
  // const data = svgCaptycha.create({noise:'2'}) // 干扰线数量
  // const data = svgCaptycha.create({color:true}) // 验证码字符是否有颜色
  // const data = svgCaptycha.create({background:'#cc9966'}) // 验证码背景颜色
  const result = svgCaptycha.create({
    background: "#cc9966",
    size: 6,
    ignoreChars: "oO01iI",
    noise: "4",
    color: true,
  });
  const { text, data } = result;
  logger.info("此次生成验证码", text);
  return data;
};

/**
 * 算术表达式
 * @returns
 */
const captychaExpr = () => {
  const result = svgCaptycha.createMathExpr({
    background: "#cc9966",
    size: 6,
    ignoreChars: "oO01iI",
    noise: "4",
    color: true,
  });
  const { text, data } = result;
  logger.info("此次生成验证码", text);
  return data;
};

const captychaDIY = () => {
  const result = svgCaptycha.create({
    background: "#cc9966",
    size: 6,
    ignoreChars: "oO01iI",
    noise: "4",
    color: true,
    width: 55,
    height: 20,
    fontSize: 16,
  });
  const { text, data } = result;
  logger.info("此次生成验证码", text);
  return data;
};

export default { captycha, captychaExpr, captychaDIY };
