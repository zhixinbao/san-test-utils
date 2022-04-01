(window.webpackJsonp=window.webpackJsonp||[]).push([[116,57],{132:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="setdata">setData</h1> <hr/> <p>为 <code>WrapperArray</code> 的每个 <code>Wrapper</code> <code>vm</code> 都设置数据。</p> <p>注意：该包裹器必须包含一个 San 实例。</p> <ul> <li> <p><strong>参数</strong>：</p> <ul> <li><code>{Object} data</code></li> </ul> </li> <li> <p><strong>示例</strong>：</p> </li> </ul> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>attach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">\'./foo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> bar <span class="token keyword">from</span> <span class="token string">\'./bar\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">attach</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> barArray <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>\nbarArray<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">\'bar\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>barArray<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">\'bar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> </div></div> '},191:function(n,s,a){var t=a(1),p=a(132),o=a(60).default;n.exports=a(60),n.exports.default=t(o,p,[])},60:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return e}));var t,p,o,c=a(0);class e extends c.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}o={},(p="components")in(t=e)?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(2))}}]);