!function(n){function s(s){for(var t,o,c=s[0],l=s[1],r=s[2],i=0,k=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(p,o)&&p[o]&&k.push(p[o][0]),p[o]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(u&&u(s);k.length;)k.shift()();return e.push.apply(e,r||[]),a()}function a(){for(var n,s=0;s<e.length;s++){for(var a=e[s],t=!0,c=1;c<a.length;c++){var l=a[c];0!==p[l]&&(t=!1)}t&&(e.splice(s--,1),n=o(o.s=a[0]))}return n}var t={},p={20:0,79:0},e=[];function o(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(){return Promise.resolve()},o.m=n,o.c=t,o.d=function(n,s,a){o.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:a})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,s){if(1&s&&(n=o(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var t in n)o.d(a,t,function(s){return n[s]}.bind(null,t));return a},o.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(s,"a",s),s},o.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},o.p="/san-test-utils/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var r=0;r<c.length;r++)s(c[r]);var u=l;e.push([148,0]),a()}({148:function(n,s,a){var t=a(1),p=a(89),e=a(17).default;n.exports=a(17),n.exports.default=t(e,p,[])},17:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,e,o=a(0);class c extends o.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:3,title:"设置 mocha-webpack",hash:"%E8%AE%BE%E7%BD%AE-mocha-webpack"},{level:3,title:"提取 webpack 配置",hash:"%E6%8F%90%E5%8F%96-webpack-%E9%85%8D%E7%BD%AE"},{level:3,title:"设置浏览器环境",hash:"%E8%AE%BE%E7%BD%AE%E6%B5%8F%E8%A7%88%E5%99%A8%E7%8E%AF%E5%A2%83"},{level:3,title:"选用一个断言库",hash:"%E9%80%89%E7%94%A8%E4%B8%80%E4%B8%AA%E6%96%AD%E8%A8%80%E5%BA%93"},{level:3,title:"为测试优化 Babel",hash:"%E4%B8%BA%E6%B5%8B%E8%AF%95%E4%BC%98%E5%8C%96-babel"},{level:3,title:"添加一个测试",hash:"%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%B5%8B%E8%AF%95"},{level:3,title:"测试覆盖率",hash:"%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87"},{level:3,title:"相关资料",hash:"%E7%9B%B8%E5%85%B3%E8%B5%84%E6%96%99"}]})}}e={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[p]=e}.call(this,a(2))},89:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E7%94%A8-mocha-%E5%92%8C-webpack-%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6">用 Mocha 和 webpack 测试组件</h1> <blockquote> <p>我们在 <a href="https://github.com/ecomfe/san-test-utils/tree/master/docs/demo/mocha" target="_blank">github</a> 上放有一个关于这些设置的示例工程。</p> </blockquote> <p>另一个测试单文件组件的策略是通过 webpack 编译所有的测试文件然后在测试运行器中运行。这样做的好处是可以完全支持所有 webpack 和 san-loader 的功能，所以我们不必对我们的源代码做任何妥协。</p> <p>从技术的角度讲，你可以使用任何喜欢的测试运行器并把所有的东西都手动串联起来，但是我们已经找到了 <code>mocha-webpack</code> 能够为这项特殊任务提供非常流畅的体验。</p> <h3 id="%E8%AE%BE%E7%BD%AE-mocha-webpack">设置 mocha-webpack</h3> <p>我们假定你在一开始已经安装并配置好了 webpack、san-loader 和 Babel。</p> <p>首先要做的是安装测试依赖：</p> <pre class="language-js"><code class="language-js">$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev san<span class="token operator">-</span>test<span class="token operator">-</span>utils mocha mocha<span class="token operator">-</span>webpack</code></pre> <p>接下来我们需要在 <code>package.json</code> 中定义一个测试脚本。</p> <pre class="language-js"><code class="language-js"><span class="token comment">// package.json</span>\n<span class="token punctuation">{</span>\n    <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"mocha-webpack --webpack-config webpack.config.js --require test/setup.js test/**/*.spec.js"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <p>这里有一些注意事项：</p> <ul> <li> <p><code>--webpack-config</code> 标识指定了该测试使用的 webpack 配置文件。在大多数情况下该配置会在其实际项目的配置文件基础上做一些小的调整。</p> </li> <li> <p><code>--require</code> 标识确保了文件 <code>test/setup.js</code> 会在任何测试之前运行，这样我们可以在该文件中设置测试所需的全局环境。</p> </li> <li> <p>最后一个参数是该测试包所涵盖的所有测试文件的聚合。</p> </li> </ul> <h3 id="%E6%8F%90%E5%8F%96-webpack-%E9%85%8D%E7%BD%AE">提取 webpack 配置</h3> <h4 id="%E6%9A%B4%E9%9C%B2-npm-%E4%BE%9D%E8%B5%96">暴露 NPM 依赖</h4> <p>在测试中我们很可能会导入一些 NPM 依赖——这里面的有些模块可能没有针对浏览器的场景编写，也不适合被 webpack 打包。另一个考虑是为了尽可能的将依赖外置以提升测试的启动速度。我们可以通过 <code>webpack-node-externals</code> 外置所有的 NPM 依赖：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> nodeExternals <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack-node-externals\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">nodeExternals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre> <h4 id="%E6%BA%90%E7%A0%81%E8%A1%A8">源码表</h4> <p>源码表在 <code>mocha-webpack</code> 中需要通过内联的方式获取。推荐配置为：</p> <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">\'inline-cheap-module-source-map\'</span>\n<span class="token punctuation">}</span></code></pre> <p>如果是在 IDE 中调试，我们推荐添加以下配置：</p> <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n        <span class="token comment">// 在源码表中使用绝对路径 (对于在 IDE 中调试时很重要)</span>\n        <span class="token literal-property property">devtoolModuleFilenameTemplate</span><span class="token operator">:</span> <span class="token string">\'[absolute-resource-path]\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">devtoolFallbackModuleFilenameTemplate</span><span class="token operator">:</span> <span class="token string">\'[absolute-resource-path]?[hash]\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <h3 id="%E8%AE%BE%E7%BD%AE%E6%B5%8F%E8%A7%88%E5%99%A8%E7%8E%AF%E5%A2%83">设置浏览器环境</h3> <p>San Test Utils 需要在浏览器环境中运行。我们可以在 Node 中使用 <code>jsdom-global</code> 进行模拟：</p> <pre class="language-js"><code class="language-js">$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev jsdom jsdom<span class="token operator">-</span>global</code></pre> <p>然后在 <code>test/setup.js</code> 中写入：</p> <pre class="language-js"><code class="language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'jsdom-global\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>这行代码会在 Node 中添加一个浏览器环境，这样 San Test Utils 就可以正确运行了。</p> <h3 id="%E9%80%89%E7%94%A8%E4%B8%80%E4%B8%AA%E6%96%AD%E8%A8%80%E5%BA%93">选用一个断言库</h3> <p><a href="http://chaijs.com/" target="_blank">Chai</a> 是一个流行的断言库，经常和 Mocha 配合使用。你可能也想把 <a href="http://sinonjs.org/" target="_blank">Sinon</a> 用于创建间谍和存根。</p> <p>另外你也可以使用 <code>expect</code>，它现在是 Jest 的一部分，且在 Jest 文档里暴露了<a href="https://jestjs.io/docs/zh-Hans/expect" target="_blank">完全相同的 API</a>。</p> <p>这里我们将使用 <code>expect</code> 且令其全局可用，这样我们就不需要在每个测试文件里导入它了：</p> <pre class="language-js"><code class="language-js">$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev expect</code></pre> <p>然后在 <code>test/setup.js</code> 中编写：</p> <pre class="language-js"><code class="language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'jsdom-global\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nglobal<span class="token punctuation">.</span>expect <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'expect\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h3 id="%E4%B8%BA%E6%B5%8B%E8%AF%95%E4%BC%98%E5%8C%96-babel">为测试优化 Babel</h3> <p>注意我们使用了 babel-loader 来处理 JavaScript。如果你在你的应用中通过 <code>.babelrc</code> 文件使用了 Babel，那么你就已经算是把它配置好了。这里 <code>babel-loader</code> 将会自动使用相同的配置文件。</p> <p>有一件事值得注意，如果你使用了 Node 6+，它已经支持了主要的 ES2015 特性，那么你可以配置一个独立的 Babel <a href="https://babeljs.io/docs/usage/babelrc/#env-option" target="_blank">环境选项</a>，只转译该 Node 版本中不支持的特性 (比如 <code>stage-2</code> 或 flow 语法支持等)。</p> <h3 id="%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%B5%8B%E8%AF%95">添加一个测试</h3> <p>在 <code>src</code> 目录中创建一个名为 list.san 的文件：</p> <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>template<span class="token operator">></span>\n    <span class="token operator">&lt;</span>ul<span class="token operator">></span>\n        <span class="token operator">&lt;</span>li s<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in items"</span><span class="token operator">></span>\n            <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code></pre> <p>然后创建一个名为 test/list.test.js 的测试文件并写入如下代码：</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>shallowAttach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> list <span class="token keyword">from</span> <span class="token string">\'../src/list.san\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'list\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders li for each item in items\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token string">\'2\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowAttach</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>items<span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">\'li\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveLength</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>现在我们运行测试：</p> <pre class="language-js"><code class="language-js">$ npm run test</code></pre> <p>喔，我们的测试运行起来了！</p> <h3 id="%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87">测试覆盖率</h3> <p>如果想设置 <code>mocha-webpack</code> 的测试覆盖率，请参照 <code>mocha-webpack</code> 测试覆盖率指南。</p> <h3 id="%E7%9B%B8%E5%85%B3%E8%B5%84%E6%96%99">相关资料</h3> <ul> <li><a href="https://github.com/ecomfe/san-test-utils/tree/master/docs/demo/mocha" target="_blank">该设置的示例工程</a></li> <li><a href="https://mochajs.org/" target="_blank">Mocha</a></li> <li><a href="http://zinserjan.github.io/mocha-webpack/" target="_blank">mocha-webpack</a></li> <li><a href="http://chaijs.com/" target="_blank">Chai</a></li> <li><a href="http://sinonjs.org/" target="_blank">Sinona</a></li> <li><a href="https://jestjs.io/docs/zh-Hans/expect" target="_blank">jest/expect</a></li> </ul> </div></div> '}});