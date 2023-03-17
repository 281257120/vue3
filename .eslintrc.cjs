/*
 * @Description: eslint 代码质量配置文件
 * @Author: Liu Yang
 * @Date: 2023-03-17 17:10:58
 * @LastEditTime: 2023-03-17 17:48:11
 * @LastEditors: Liu Yang
 * @FilePath: \vue3\.eslintrc.cjs
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
     // 新增，必须放在最后面
    'plugin:prettier/recommended' 
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {},
};
