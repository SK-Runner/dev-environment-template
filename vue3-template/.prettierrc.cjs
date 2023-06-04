/**
 * .prettier.js中使用module.exports，导致prettier脚本运行失败原因：
 *    因为在package.json中声明了type:module，导致项目中的所有js文件被视作es模块，而在.prettier.js文件中却使用了module.exports，也就是commonJS规范
 * 而我的项目使用vite创建的，在package.json中发现了type:module这一配置项,于是将.prettier.js改为.prettier.cjs发现Prettier可以正常使用了
 * 至于为什么vite不支持CommonJS呢，这就涉及到vite底层原理了:
 * vite在运行时使用esbuild，它是基于esm来工作的。Vite 的开发服务器将所有代码视为原生 ES 模块。因此，Vite 必须先将作为 CommonJS 或 UMD 发布的依赖项转换为 ESM。也就是要使用commonJs，就要先将其预构建为es模块。
 */
module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 80,
  // 一个tab代表几个空格数，默认为2
  tabWidth: 2,
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // 行位是否使用分号，默认为true
  semi: false,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: "none",
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
};
