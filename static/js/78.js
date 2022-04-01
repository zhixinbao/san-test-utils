(window.webpackJsonp=window.webpackJsonp||[]).push([[78,19],{149:function(s,n,a){var p=a(1),t=a(90),o=a(18).default;s.exports=a(18),s.exports.default=p(o,t,[])},18:function(s,n,a){"use strict";a.r(n),function(s){a.d(n,"default",(function(){return c}));var p,t,o,e=a(0);class c extends e.a{inited(){s.hub&&s.hub.fire&&s.hub.fire("changed",{level:0,children:[{level:3,title:"设置 Mocha",hash:"%E8%AE%BE%E7%BD%AE-mocha"},{level:3,title:"Karma 配置",hash:"karma-%E9%85%8D%E7%BD%AE"},{level:3,title:"选用一个断言库",hash:"%E9%80%89%E7%94%A8%E4%B8%80%E4%B8%AA%E6%96%AD%E8%A8%80%E5%BA%93"},{level:3,title:"添加一个测试",hash:"%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%B5%8B%E8%AF%95"},{level:3,title:"相关资料",hash:"%E7%9B%B8%E5%85%B3%E8%B5%84%E6%96%99"}]})}}o={},(t="components")in(p=c)?Object.defineProperty(p,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):p[t]=o}.call(this,a(2))},90:function(s,n){s.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E7%94%A8-karma-%E6%B5%8B%E8%AF%95%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6">用 Karma 测试单文件组件</h1> <blockquote> <p>我们在 <a href="https://github.com/ecomfe/san-test-utils/tree/master/docs/demo/karma" target="_blank">github</a> 上放有一个该设置的示例工程。</p> </blockquote> <p>Karma 是一个启动浏览器运行测试并生成报告的测试运行器。我们会使用 Mocha 框架撰写测试，同时使用 chai 作为断言库。</p> <h3 id="%E8%AE%BE%E7%BD%AE-mocha">设置 Mocha</h3> <p>我们会假设你一开始已经正确配置好了 webpack、san-loader 和 Babel。</p> <p>第一件要做的事是安装测试依赖：</p> <pre class="language-js"><code class="language-js">$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev san<span class="token operator">-</span>test<span class="token operator">-</span>utils karma karma<span class="token operator">-</span>chrome<span class="token operator">-</span>launcher karma<span class="token operator">-</span>mocha karma<span class="token operator">-</span>sourcemap<span class="token operator">-</span>loader karma<span class="token operator">-</span>spec<span class="token operator">-</span>reporter karma<span class="token operator">-</span>webpack mocha</code></pre> <p>接下来我们需要在 <code>package.json</code> 定义一个测试脚本。</p> <pre class="language-js"><code class="language-js"><span class="token comment">// package.json</span>\n<span class="token punctuation">{</span>\n    <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"karma start --single-run"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <ul> <li><code>--single-run</code> 标识告诉了 Karma 一次性运行该测试套件。</li> </ul> <h3 id="karma-%E9%85%8D%E7%BD%AE">Karma 配置</h3> <p>在项目的主目录创建一个 <code>karma.conf.js</code> 文件：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// karma.conf.js</span>\n\n<span class="token keyword">var</span> webpackConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./webpack.config.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token literal-property property">frameworks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'mocha\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n        <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'test/**/*.test.js\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n        <span class="token literal-property property">preprocessors</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string-property property">\'**/*.spec.js\'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'webpack\'</span><span class="token punctuation">,</span> <span class="token string">\'sourcemap\'</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n        <span class="token literal-property property">webpack</span><span class="token operator">:</span> webpackConfig<span class="token punctuation">,</span>\n\n        <span class="token literal-property property">reporters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'spec\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n        <span class="token literal-property property">browsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'Chrome\'</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre> <p>这个文件用来配置 Karma。</p> <p>我们需要用 webpack 预处理文件。为此，我们将 webpack 添加为预处理器，并引入我们的 webpack 配置。我们可以在项目基础中使用该 webpack 配置文件而无需任何修改。</p> <p>在我们的配置中，我们在 Chrome 中运行测试。如果想添加其它浏览器，可查阅<a href="http://karma-runner.github.io/3.0/config/browsers.html" target="_blank">Karma 文档的浏览器章节</a>。</p> <h3 id="%E9%80%89%E7%94%A8%E4%B8%80%E4%B8%AA%E6%96%AD%E8%A8%80%E5%BA%93">选用一个断言库</h3> <p><a href="http://chaijs.com/" target="_blank">Chai</a> 是一个流行的断言库，经常和 Mocha 配合使用。你可能也想把 <a href="http://sinonjs.org/" target="_blank">Sinon</a> 用于创建间谍和存根。</p> <p>我们可以安装 <code>karma-chai</code> 插件以在我们的测试中使用 <code>chai</code>。</p> <pre class="language-js"><code class="language-js">$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev karma<span class="token operator">-</span>chai</code></pre> <h3 id="%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%B5%8B%E8%AF%95">添加一个测试</h3> <p>在 <code>src</code> 目录中创建一个名为 list.san 的文件：</p> <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>template<span class="token operator">></span>\n    <span class="token operator">&lt;</span>ul<span class="token operator">></span>\n        <span class="token operator">&lt;</span>li s<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in items"</span><span class="token operator">></span>\n            <span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code></pre> <p>然后创建一个名为 test/list.test.js 的测试文件并写入如下代码：</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>shallowAttach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> list <span class="token keyword">from</span> <span class="token string">\'../src/list.san\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'list\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders li for each item in items\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token string">\'2\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowAttach</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>items<span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">\'li\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>现在我们运行测试：</p> <pre class="language-js"><code class="language-js">$ npm run test</code></pre> <p>喔，我们的测试运行起来了！</p> <h1 id="%E8%A6%86%E7%9B%96%E7%8E%87">覆盖率</h1> <p>我们可以使用 <code>karma-coverage</code> 插件来设置 <code>Karma</code> 的代码覆盖率。</p> <p>默认情况下，<code>karma-coverage</code> 不会使用 source map 来对照覆盖率报告。所以我们需要使用 <code>babel-plugin-istanbul</code> 来确认正确匹配的覆盖率。</p> <p>安装 <code>karma-coverage</code>、<code>babel-plugin-istanbul</code> 和 <code>cross-env</code>：</p> <pre class="language-js"><code class="language-js">$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev karma<span class="token operator">-</span>coverage cross<span class="token operator">-</span>env</code></pre> <p>我们会使用 <code>cross-env</code> 来设置一个 BABEL_ENV 环境变量。这样我们就可以在编译测试的时候使用 <code>babel-plugin-istanbul</code> ——因为我们不想在生产环境下引入 <code>babel-plugin-istanbul</code>：</p> <pre class="language-js"><code class="language-js">$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>plugin<span class="token operator">-</span>istanbul</code></pre> <p>更新你的 <code>.babelrc</code> 文件，在因测试设置了 <code>BABEL_ENV</code> 时使用 <code>babel-plugin-istanbul</code>：</p> <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n    <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"env"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">"modules"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"stage-3"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"istanbul"</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <p>现在更新 <code>karma.conf.js</code> 文件来进行覆盖率测试。添加 <code>coverage</code> 到 <code>reporters</code> 数组，并添加一个 <code>coverageReporter</code> 字段：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// karma.conf.js</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n\n        <span class="token literal-property property">reporters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'spec\'</span><span class="token punctuation">,</span> <span class="token string">\'coverage\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n        <span class="token literal-property property">coverageReporter</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">\'./coverage\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">reporters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">\'lcov\'</span><span class="token punctuation">,</span> <span class="token literal-property property">subdir</span><span class="token operator">:</span> <span class="token string">\'.\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">\'text-summary\'</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre> <p>然后更新 <code>test</code> 脚本来设置 <code>BABEL_ENV</code>：</p> <pre class="language-js"><code class="language-js"><span class="token comment">// package.json</span>\n<span class="token punctuation">{</span>\n    <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"cross-env BABEL_ENV=test karma start --single-run"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <h3 id="%E7%9B%B8%E5%85%B3%E8%B5%84%E6%96%99">相关资料</h3> <ul> <li><a href="https://github.com/ecomfe/san-test-utils/tree/master/docs/demo/karma" target="_blank">该设置的示例工程</a></li> <li><a href="http://karma-runner.github.io/" target="_blank">Karma</a></li> <li><a href="https://mochajs.org/" target="_blank">Mocha</a></li> <li><a href="http://chaijs.com/" target="_blank">Chai</a></li> <li><a href="http://sinonjs.org/" target="_blank">Sinona</a></li> </ul> </div></div> '}}]);