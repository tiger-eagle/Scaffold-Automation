const e=require("chalk"),a=require("portscanner"),{QUESTION_TEXT:t}=require("../i18n"),{HOST:s,REGEXP:m}=require("../util/getting"),{IsExist:r}=require("../util/setting"),u={react:[{disabled:!0,name:"@hot-loader/react-dom",value:"@hot-loader/react-dom"},{disabled:!0,name:"react",value:"react"},{disabled:!0,name:"react-dom",value:"react-dom"},{disabled:!0,name:"react-hot-loader",value:"react-hot-loader"},{name:"react-router-dom",value:"react-router-dom"},{name:"axios",value:"axios"},{name:"mobx mobx-react",value:"mobx mobx-react"}],vue:[{disabled:!0,name:"vue",value:"vue"},{name:"vue-router",value:"vue-router"},{name:"vuex",value:"vuex"},{name:"axios",value:"axios"}]},n={choices:["default","react","vue"],default:0,message:t.frame,name:"FRAME",type:"list"},o={choices:[{name:"简体中文",value:"zh-chs"},{name:"繁體中文",value:"zh-cht"},{name:"English",value:"en"}],default:0,message:t.locale,name:"LOCALE",type:"list"},l={choices:Object.entries(t.modeMap).map(e=>({name:e[1],value:e[0]})),default:0,message:t.mode,name:"MODE",type:"list"},d={default:"components/demo",message:t.namec,name:"NAMEC",type:"input",validate:a=>m.compName.test(a)?!r("src/"+a)||e.redBright(t.judgeCompExist):e.redBright(t.judgeCompName)},i={default:"demo",message:t.namep,name:"NAMEP",type:"input",validate:a=>m.projName.test(a)?!r(a)||e.redBright(t.judgeProjExist):e.redBright(t.judgeProjName)},E={default:9999,message:t.port,name:"PORT",type:"input",validate:async m=>{const r=+m;return isNaN(r)||r%1!=0?e.redBright(t.judgePort):"open"!==await a.checkPortStatus(r,s)||e.redBright(t.judgePortExist(r))}},c={choices:["scss","less"],default:0,message:t.style,name:"STYLE",type:"list"},S={choices:["spa","mpa"],default:0,message:t.type,name:"TYPE",type:"list"},_={default:!1,message:t.useAnalyze,name:"USE_ANALYZE",type:"confirm"},p={default:!1,message:t.useCompress,name:"USE_COMPRESS",type:"confirm"},T={default:!1,message:t.useCsslint,name:"USE_CSSLINT",type:"confirm"},g={default:!1,message:t.useEs6,name:"USE_ES6",type:"confirm"},f={default:!1,message:t.useHash,name:"USE_HASH",type:"confirm"},h={default:!1,message:t.useInstall,name:"USE_INSTALL",type:"confirm"},v={default:!1,message:t.useJslint,name:"USE_JSLINT",type:"confirm"},U={default:!1,message:t.useOpen,name:"USE_OPEN",type:"confirm"},y={default:!1,message:t.usePolyfill,name:"USE_POLYFILL",type:"confirm"},N={default:!1,message:t.useTimed,name:"USE_TIMED",type:"confirm"},L={default:!1,message:t.useTs,name:"USE_TS",type:"confirm"},P={default:!1,message:e.redBright(t.useUpload),name:"USE_UPLOAD",type:"confirm"},Q=e=>({choices:u[e],message:t.deps,name:"DEPS",type:"checkbox"}),O=a=>({choices:a,message:t.vendor,name:"VENDOR",type:"checkbox",validate:a=>!!a.length||e.redBright(t.judgeVendor)});module.exports={DEPENDENCE:u,QT_DEPS:Q,QT_FRAME:n,QT_LOCALE:o,QT_MODE:l,QT_NAMEC:d,QT_NAMEP:i,QT_PORT:E,QT_STYLE:c,QT_TYPE:S,QT_USE_ANALYZE:_,QT_USE_COMPRESS:p,QT_USE_CSSLINT:T,QT_USE_ES6:g,QT_USE_HASH:f,QT_USE_INSTALL:h,QT_USE_JSLINT:v,QT_USE_OPEN:U,QT_USE_POLYFILL:y,QT_USE_TIMED:N,QT_USE_TS:L,QT_USE_UPLOAD:P,QT_VENDOR:O};