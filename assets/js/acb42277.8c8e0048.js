"use strict";(self.webpackChunkwhere_are_bugs=self.webpackChunkwhere_are_bugs||[]).push([[120],{7379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(5893),a=t(1151);const o={},s=void 0,i={id:"\u5d4c\u5165\u5f0f\u8f6f\u4ef6/weak\u5f31\u51fd\u6570",title:"weak\u5f31\u51fd\u6570",description:"_weak\u5173\u952e\u5b57",source:"@site/docs/\u5d4c\u5165\u5f0f\u8f6f\u4ef6/weak\u5f31\u51fd\u6570.md",sourceDirName:"\u5d4c\u5165\u5f0f\u8f6f\u4ef6",slug:"/\u5d4c\u5165\u5f0f\u8f6f\u4ef6/weak\u5f31\u51fd\u6570",permalink:"/docs/\u5d4c\u5165\u5f0f\u8f6f\u4ef6/weak\u5f31\u51fd\u6570",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5d4c\u5165\u5f0f\u8f6f\u4ef6",permalink:"/docs/category/\u5d4c\u5165\u5f0f\u8f6f\u4ef6"},next:{title:"\u57fa\u672c\u89e3\u6cd5\u6574\u7406",permalink:"/docs/\u9ad8\u4e2d\u6570\u5b66/\u57fa\u672c\u89e3\u6cd5\u6574\u7406"}},c={},d=[{value:"_weak\u5173\u952e\u5b57",id:"_weak\u5173\u952e\u5b57",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"_weak\u5173\u952e\u5b57",children:"_weak\u5173\u952e\u5b57"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u8be5\u5173\u952e\u8bcd\u4fee\u9970\u7684\u51fd\u6570\u53ef\u4ee5\u88ab\u91cd\u590d\u5b9a\u4e49\u3002\u5982\u679c\u6ca1\u6709\u91cd\u590d\u5b9a\u4e49\uff0c\u5219\u4f1a\u6267\u884c\u7528_weak\u5173\u952e\u8bcd\u4fee\u9970\u7684\u51fd\u6570\u7684\u5185\u5bb9\u3002\u5982\u679c\u91cd\u590d\u5b9a\u4e49\uff0c\u5219\u4f1a\u6267\u884c\u91cd\u590d\u5b9a\u4e49\u7684\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\u4e0b\u9762\u8fd9\u6bb5\u5355\u7247\u673a\u7684\u63a7\u5236\u7a0b\u5e8f:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Cpp",children:"__weak void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)\n{\n  UNUSED(htim);\n}\nvoid HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)\n{\n\t/* \u5224\u65ad\u8fdb\u5165\u4e2d\u65ad\u5b9a\u65f6\u5668\u662f\u5426\u4e3aTIM7 */\n\tif (htim == &htim7){\n\t\t/* \u63a7\u5236PC13\u5f15\u811a\u7ffb\u8f6c\u7535\u5e73 */\n\t\tHAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);\n\t}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u6bb5\u793a\u4f8b\u4e2d,\u53ea\u6709\u4e0b\u9762\u7684\u51fd\u6570\u624d\u4f1a\u88ab\u6267\u884c\u3002\u8be5\u5173\u952e\u5b57\u5728\u5d4c\u5165\u5f0f\u5f00\u53d1\u4e2d\u8f83\u4e3a\u5e38\u89c1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u81f3\u4e8e\u5e95\u5c42\uff0c\u4e00\u822c\u662f\u6709\u7740\u6c47\u7f16\u7684\u652f\u6301\u3002\u8fd9\u7c7b\u51fd\u6570\u901a\u5e38\u7528\u4f5cCPU\u7684\u5404\u79cd\u56de\u8c03\uff0c\u5b83\u4eec\u7684\u5730\u5740\u653e\u5728\u5411\u91cf\u8868\u4e2d\uff0c\u6bd4\u5982\u4e2d\u65ad\u5411\u91cf\u8868\u3002\u5728\u4e2d\u65ad\u53d1\u751f\u7684\u65f6\u5019\uff0cCPU\u4f1a\u8df3\u8f6c\u5230\u4e2d\u65ad\u5411\u91cf\u8868\u6240\u6307\u5411\u7684\u4f4d\u7f6e\u6267\u884c\u4ee3\u7801\uff0c\u5982\u679c\u6211\u4eec\u91cd\u65b0\u5b9a\u4e49\u4e86\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\uff0c\u5219\u5bf9\u5e94\u7684\u5411\u91cf\u7684\u5730\u65b9\u4f1a\u6709\u4e00\u4e2a\u8df3\u8f6c\u8bed\u53e5\uff0c\u8df3\u8f6c\u5230\u6211\u4eec\u6240\u5b9a\u4e49\u7684\u65b0\u7684\u51fd\u6570\u7684\u4f4d\u7f6e\uff0c\u5e76\u4e14\u7ee7\u7eed\u6267\u884c\u3002\u8fd9\u5c31\u662f\u6211\u4eec\u6700\u5e38\u7528\u7684\u64cd\u4f5c\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);