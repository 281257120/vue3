/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-14 16:14:27
 * @LastEditTime: 2023-03-23 10:54:00
 * @LastEditors: Liu Yang
 * @Description: prettier 代码格式配置文件
 * @FilePath: \vue3\.prettierrc.js
 */
module.exports = {
  printWidth: 120, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数，默认为80
  endOfLine: 'auto',
  useTabs: false,
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  semi: false, // 行位是否使用分号，默认为true
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  eslintIntegration: true
}
