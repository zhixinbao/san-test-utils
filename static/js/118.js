(window.webpackJsonp=window.webpackJsonp||[]).push([[118,59],{134:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="setvalue">setValue</h1> <hr/> <p>该方法是接下来这段代码的别名：</p> <pre class="language-js"><code class="language-js">wrapperArray<span class="token punctuation">.</span>wrappers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">wrapper</span> <span class="token operator">=></span> wrapper<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <ul> <li> <p><strong>参数</strong>：</p> <ul> <li><code>{any} value</code></li> </ul> </li> <li> <p><strong>示例</strong>：</p> </li> </ul> <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>attach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'san-test-utils\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">attach</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">t1</span><span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">t2</span><span class="token operator">:</span> <span class="token string">\'\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>\n        &lt;input type="text" name="t1" class="foo" value="{=t1=}" />\n        &lt;input type="text" name="t2" class="foo" value="{=t2=}" />\n    &lt;/div></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> wrapperArray <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">\'.foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'t1\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'t2\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwrapperArray<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'t1\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'t2\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> </div></div> '},193:function(n,s,a){var t=a(1),p=a(134),o=a(62).default;n.exports=a(62),n.exports.default=t(o,p,[])},62:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return e}));var t,p,o,c=a(0);class e extends c.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}o={},(p="components")in(t=e)?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(2))}}]);