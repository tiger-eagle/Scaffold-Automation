import{exec as We}from"child_process";import{exit as Ho}from"process";import{promisify as wt}from"util";import{AsyncTo as $t}from"@yangzw/bruce-us/dist/node.js";import _e from"ora";import{INIT_TEXT as mo}from"../../constants/i18n/index.js";import{GetDepVers as mt,ShowMsg as et,ShowTitle as gt}from"../../constants/util/index.js";import Je from"../../generators/project/index.js";import{InitAnswer as nr}from"../../helpers/answer/index.js";export default async function Xe(){gt("init");const{deps:e,devdeps:t,ext:s,frame:o,namea:r,style:n,useInstaller:i,useTs:a}=await nr(),m=_e(mo.doing1).start();if(Je({deps:await mt(e),devdeps:await mt(t),ext:s,frame:o,name:r,style:n,useTs:a}),m.stop(),i){const e=wt(We),t=_e(mo.doing2).start(),[s,o]=await $t(e(`cd ${r} && yarn`));(s||!o)&&await e(`cd ${r} && npm i`),t.stop(),et("green",mo.done)}else et("yellow",mo.undone);et("cyan",mo.desc(r)),Ho(1)}