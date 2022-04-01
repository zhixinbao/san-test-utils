(window.webpackJsonp=window.webpackJsonp||[]).push([[62,2],{157:function(n,s,a){var t=a(1),o=a(98),p=a(26).default;n.exports=a(26),n.exports.default=t(p,o,[])},26:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,o,p,e=a(0);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"stubs",hash:"stubs"},{level:2,title:"data",hash:"data"},{level:2,title:"methods",hash:"methods"}]})}}p={},(o="components")in(t=c)?Object.defineProperty(t,o,{value:p,enumerable:!0,configurable:!0,writable:!0}):t[o]=p}.call(this,a(2))},98:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9">配置选项</h1> <hr/> <p>San Test Utils 包含了一个定义其选项的配置对象。</p> <h2 id="stubs">stubs</h2> <ul> <li>类型：<code>{[name: string]: Component | boolean | string}</code></li> <li>默认值：<code>{}</code></li> </ul> <p>存储在 <code>config.stubs</code> 中的存根会被默认使用。</p> <p>用到的组件存根。它们会被传入挂载选项的 <code>stubs</code> 覆写。</p> <p>示例</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>config<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n\nconfig<span class="token punctuation">.</span>stubs<span class="token punctuation">[</span><span class="token string">\'my-component\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'&lt;div />\'</span><span class="token punctuation">;</span></code></pre> <h2 id="data">data</h2> <ul> <li>类型：<code>Object</code></li> <li>默认值：<code>{}</code></li> </ul> <p>默认使用传递给 config.data 的值，类似 stubs。传递给挂载选项中 data 对象的任何值都会优先于 config.data 中的同名声明。</p> <p>示例</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>config<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n\nconfig<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token string">\'state\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h2 id="methods">methods</h2> <ul> <li>类型：<code>{[name: string]: Function}</code></li> <li>默认值：<code>{}</code></li> </ul> <p>你可以使用 <code>config</code> 对象配置默认的方法。它可以用于为组件注入方法的插件。你可以通过在挂载选项中传入 <code>methods</code> 来覆写 <code>config</code> 中的方法集合。</p> <p>示例</p> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>config<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n\nconfig<span class="token punctuation">.</span>methods<span class="token punctuation">[</span><span class="token string">\'getData\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> </div></div> '}}]);