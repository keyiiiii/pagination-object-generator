"use strict";function paginationGenerator(e,r,t,a){for(var n={},i=[],o=a-1,s=e/r,f=0;f<=s+a;f++){var u=f*r+1,p=(f+1)*r;if(p>t&&(p=t),t<u)break;i.push({offset:f*r,current:s===f,firstNum:u,secondNum:p,pageNum:f+1})}if(0===s&&(o=a),t/r>a){var l=i.slice(s,s+o),c=a-l.length,g=s-c,v=s+o;i=i.slice(g,v)}n.pages=i;var d=e-r,h=e+r;return 0===e&&(d=!1),(t-e<0||t<=r+e)&&(h=!1),n.paging={prev:d,next:h},n.last={index:Math.ceil(t/r),offset:Math.floor(t/r)*r},n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=paginationGenerator;