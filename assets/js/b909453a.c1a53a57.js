"use strict";(self.webpackChunkwhere_are_bugs=self.webpackChunkwhere_are_bugs||[]).push([[2465],{7658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var l=t(5893),i=t(1151);const c={title:"\u8ba4\u8bc6volatile",date:new Date("2022-10-23T20:03:48.000Z"),tags:["C/C++\u8bed\u8a00"],cover:"https://picture-1300915322.cos.ap-chengdu.myqcloud.com/%E8%AE%A4%E8%AF%86volatile-cover.jpeg"},r=void 0,a={id:"Cpp/\u5185\u5b58\u548c\u6307\u9488/\u8ba4\u8bc6volatile",title:"\u8ba4\u8bc6volatile",description:"\u524d\u8a00\uff1a\u8fd9\u90e8\u5206\u5185\u5bb9\u6d89\u53ca\u5230\u6c47\u904d\u7684\u77e5\u8bc6\uff0c\u6240\u4ee5\u4f1a\u8865\u5145\u4e00\u4e9b\u6c47\u7f16\u7684\u77e5\u8bc6\u3002",source:"@site/docs/Cpp/\u5185\u5b58\u548c\u6307\u9488/\u8ba4\u8bc6volatile.md",sourceDirName:"Cpp/\u5185\u5b58\u548c\u6307\u9488",slug:"/Cpp/\u5185\u5b58\u548c\u6307\u9488/\u8ba4\u8bc6volatile",permalink:"/docs/Cpp/\u5185\u5b58\u548c\u6307\u9488/\u8ba4\u8bc6volatile",draft:!1,unlisted:!1,tags:[{label:"C/C++\u8bed\u8a00",permalink:"/docs/tags/c-c-\u8bed\u8a00"}],version:"current",frontMatter:{title:"\u8ba4\u8bc6volatile",date:"2022-10-23T20:03:48.000Z",tags:["C/C++\u8bed\u8a00"],cover:"https://picture-1300915322.cos.ap-chengdu.myqcloud.com/%E8%AE%A4%E8%AF%86volatile-cover.jpeg"},sidebar:"tutorialSidebar",previous:{title:"\u6df1\u5165\u6307\u9488",permalink:"/docs/Cpp/\u5185\u5b58\u548c\u6307\u9488/\u6df1\u5165\u6307\u9488"},next:{title:"cin\u7684\u8f93\u5165\u7279\u6027",permalink:"/docs/Cpp/\u57fa\u7840/cin\u7684\u8f93\u5165\u7279\u6027"}},o={},s=[{value:"\u8865\u5145",id:"\u8865\u5145",level:2},{value:"\u95ee\u9898\u590d\u73b0",id:"\u95ee\u9898\u590d\u73b0",level:3},{value:"\u8ba4\u8bc6volatile",id:"\u8ba4\u8bc6volatile",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"1.\u591a\u7ebf\u7a0b",id:"1\u591a\u7ebf\u7a0b",level:4},{value:"2.\u5e76\u884c\u8bbe\u5907\u7684\u5bc4\u5b58\u5668",id:"2\u5e76\u884c\u8bbe\u5907\u7684\u5bc4\u5b58\u5668",level:4},{value:"3. \u5d4c\u5165\u5f0f\u7f16\u7a0b",id:"3-\u5d4c\u5165\u5f0f\u7f16\u7a0b",level:4}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u524d\u8a00\uff1a\u8fd9\u90e8\u5206\u5185\u5bb9\u6d89\u53ca\u5230\u6c47\u904d\u7684\u77e5\u8bc6\uff0c\u6240\u4ee5\u4f1a\u8865\u5145\u4e00\u4e9b\u6c47\u7f16\u7684\u77e5\u8bc6\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8865\u5145",children:"\u8865\u5145"}),"\n",(0,l.jsx)(n.p,{children:"\u53d8\u91cf\u53ef\u80fd\u4f1a\u56e0\u4e3a\u7f16\u8bd1\u5668\u7684\u4f18\u5316\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u800c\u5bfc\u81f4\u503c\u88ab\u610f\u5916\u7684\u6539\u53d8\u3002\u8981\u6b63\u786e\u5904\u7406\u8fd9\u4e2a\u503c\uff0c\u9700\u8981\u4fdd\u8bc1\u4ece\u5185\u5b58\u4e2d\u8bfb\u53d6\u8fd9\u4e2a\u503c\u624d\u80fd\u4fdd\u8bc1\u6b63\u786e\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u539f\u56e0\uff1a \u5728\u5355\u4efb\u52a1\u73af\u5883\u4e2d\uff0c\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u4f53\u5185\u90e8\u5728\u4e24\u6b21\u8bfb\u53d6\u53d8\u91cf\u503c\u4e4b\u95f4\u7684\u8bed\u53e5\u6ca1\u6709\u5bf9\u53d8\u91cf\u503c\u8fdb\u884c\u4fee\u6539,\u90a3\u4e48\u7f16\u8bd1\u5668\u5c31\u4f1a\u8bbe\u6cd5\u5bf9\u53ef\u6267\u884c\u4ee3\u7801\u8fdb\u884c\u4f18\u5316\u3002\u7531\u4e8e\u8bbf\u95ee\u5bc4\u5b58\u5668\u7684\u901f\u5ea6\u8981\u6bd4 RAM(\u4ece RAM \u4e2d\u8bfb\u53d6\u53d8\u91cf\u7684\u503c\u5230\u5bc4\u5b58\u5668\u4e2d)\u5feb\uff0c\u6240\u4ee5\u4ee5\u540e\u53ea\u8981\u53d8\u91cf\u7684\u503c\u6ca1\u6709\u6539\u53d8,\u5c31\u4e00\u76f4\u4ece\u5bc4\u5b58\u5668\u4e2d\u8bfb\u53d6\u53d8\u91cf\u7684\u503c\uff0c\u800c\u4e0d\u5bf9 RAM \u8fdb\u884c\u8bbf\u95ee\u3002 \u800c\u5728\u591a\u4efb\u52a1\u73af\u5883\u4e2d\uff0c\u867d\u7136\u4e00\u4e2a\u51fd\u6570\u4f53\u5185\u90e8\u5728\u4e24\u6b21\u8bfb\u53d6\u53d8\u91cf\u503c\u4e4b\u95f4\u6ca1\u6709\u5bf9\u53d8\u91cf\u7684\u503c\u8fdb\u884c\u4fee\u6539\uff0c\u4f46\u662f\u8be5\u53d8\u91cf\u4ecd\u7136\u6709\u53ef\u80fd\u88ab\u5176\u4ed6\u7684\u7a0b\u5e8f(\u5982\u4e2d\u65ad\u7a0b\u5e8f\u3001\u53e6\u5916\u7684\u7ebf\u7a0b\u7b49\uff09\u4fee\u6539,\u5982\u679c\u8fd9\u65f6\u8fd8\u662f\u4ece\u5bc4\u5b58\u5668\u800c\u4e0d\u662f\u4ece RAM \u4e2d\u8bfb\u53d6\uff0c\u5c31\u4f1a\u51fa\u73b0\u88ab\u4fee\u6539\u7684\u53d8\u91cf\u503c\u4e0d\u80fd\u53ca\u65f6\u5f97\u5230\u53cd\u6620\u7684\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u95ee\u9898\u590d\u73b0",children:"\u95ee\u9898\u590d\u73b0"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Cpp",children:"#include<iostream>\nusing namespace std;\nint main(int arge, char * argv[])\n{\n\tint i = 10;\n\tint a = i;\n\tcout << a << endl;\n\t_asm //\u5728VS 2017 \u7684\u73af\u5883\u4e0b\u5185\u8054\u6c47\u7f16\u4ee3\u7801\n  {\n\tmov dword ptr [ebp - 4],70 //\u4fee\u6539\u53d8\u91cfi\u7684\u503c\n\t}\n\tint b = i;\n  cout << b << endl;\n  getchar();//\u6682\u505c\u7a0b\u5e8f\u6267\u884c\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u8f93\u51fa\u5982\u4e0b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Cpp",children:"10\n10\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u5185\u8054\u7684\u6c47\u7f16\u4ee3\u7801\u5df2\u7ecf\u4fee\u6539\u4e86i\u7684\u503c\uff0c\u4f46i\u7684\u53d8\u5316\u5e76\u6ca1\u6709\u53cd\u9988\u5230b\u4e2d\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8ba4\u8bc6volatile",children:"\u8ba4\u8bc6volatile"}),"\n",(0,l.jsx)(n.p,{children:"volatile\u662f\u6613\u53d8\u7684\u610f\u601d,\u5728C/C++\u8bed\u8a00\u4e2d\u8f83\u5c11\u4f7f\u7528\u3002\u7528\u4e8e\u89e3\u51b3\u53d8\u91cf\u5728\u5171\u4eab\u7684\u60c5\u51b5\u4e0b\u5bb9\u6613\u51fa\u73b0\u8bfb\u53d6\u9519\u8bef\u7684\u95ee\u9898"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u95ee\u9898\u5c31\u53ef\u4ee5\u7528volatile\u89e3\u51b3\u3002\u4e5f\u5c31\u662f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"--- int i = 10;\n+++ volatile int i = 10;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7528volatile\u901a\u77e5\u7f16\u8bd1\u5668\u8fd9\u4e2a\u53d8\u91cf\u662f\u4e0d\u7a33\u5b9a\u7684\uff0c\u9632\u6b62\u7f16\u8bd1\u5668\u5bf9\u8fd9\u4e2a\u53d8\u91cf\u8fdb\u884c\u4f18\u5316\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,l.jsx)(n.h4,{id:"1\u591a\u7ebf\u7a0b",children:"1.\u591a\u7ebf\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u591a\u7ebf\u7a0b\u5171\u4eab\u4e00\u4e2a\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u4fdd\u8bc1\u6bcf\u4e00\u6b21\u90fd\u4ece\u5185\u5b58\u4e2d\u771f\u6b63\u8fdb\u884c\u8bfb\u53d6\u3002\u9632\u6b62\u56e0\u4e3a\u7f13\u5b58\u5728\u5bc4\u5b58\u5668\u4e2d\u4ece\u800c\u5bfc\u81f4\u503c\u672a\u88ab\u53ca\u65f6\u540c\u6b65\u9020\u6210\u9519\u8bef"}),"\n",(0,l.jsx)(n.h4,{id:"2\u5e76\u884c\u8bbe\u5907\u7684\u5bc4\u5b58\u5668",children:"2.\u5e76\u884c\u8bbe\u5907\u7684\u5bc4\u5b58\u5668"}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b\u5982\u4e00\u4e2a\u8bbe\u5907\u8fdb\u884c\u521d\u59cb\u5316\u9700\u8981\u5bf9\u67d0\u4e2aI/O\u7aef\u53e3\u8fdb\u884c1-9\u7684\u8d4b\u503c\uff0c\u5219\u4ee5\u4e0b\u4ee3\u7801\u6bb5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Cpp",children:"for (i = 0;i < 10; i++)\n{\n  * output = i;\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5219\u8be5\u4ee3\u7801\u6bb5\u5728\u4f18\u5316\u540e\uff0c\u6307\u9488\u4f1a\u88ab\u76f4\u63a5\u8d4b\u503c9\uff0c\u4ece\u800c\u51fa\u73b0\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"3-\u5d4c\u5165\u5f0f\u7f16\u7a0b",children:"3. \u5d4c\u5165\u5f0f\u7f16\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"\u907f\u514d\u7f16\u8bd1\u5668\u4f18\u5316\u6240\u5e26\u6765\u7684\u6267\u884c\u9519\u8bef\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var l=t(7294);const i={},c=l.createContext(i);function r(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);