const e=require("chalk"),r=require("figures"),s={desc:`Description:\n${e.blueBright("bruce-cli")} 一個零配置開箱即用的 ${e.greenBright("Default/React/Vue")} 應用自動化構建腳手架\n文檔詳情請查看 ${e.yellowBright("https://github.com/JowayYoung/bruce-cli")}`,judgeBrucerc:`${r.cross} ${e.blueBright("brucerc.js")}不存在，請重置項目配置`,judgeModules:`${r.cross} 請執行${e.greenBright("npm i")}或${e.greenBright("yarn")}安裝依賴`,judgePackage:`${r.cross} ${e.blueBright("package.json")}不存在，請重置項目配置`,judgeSrc:`${r.cross} ${e.blueBright("src目錄")}不存在，請重置項目配置`,judgeTsconfig:`${r.cross} ${e.blueBright("tsconfig.json")}不存在，請重置項目配置`,judgeVerBruce:`${r.cross} ${e.blueBright("bruce-cli")}已發布最新版本，請執行${e.greenBright("npm i -g bruce-cli")}進行更新`,judgeVerNode:`${r.cross} 當前${e.blueBright("node")}版本過低，請更新到${e.greenBright("10.0.0")}以上`},u={build:"構建項目",init:"初始項目",locale:"切換語言",new:"創建組件",remove:"刪除依賴"},c={deps:"請選擇應用依賴",frame:"請選擇開發框架",judgeCompExist:`${r.cross} 組件已存在，請使用其他名稱創建組件`,judgeCompName:`${r.cross} 名稱只能由數字、小寫字母、中劃線組成，且首位字符只能為小寫字母`,judgePort:`${r.cross} 調試端口必須為正整數`,judgePortExist:s=>`${r.cross} 調試端口${e.blueBright(s)}已被占用`,judgeProjExist:`${r.cross} 項目已存在，請使用其他名稱初始項目`,judgeProjName:`${r.cross} 名稱只能由數字、字母、中劃線組成，且首位字符只能為數字或字母`,judgeVendor:`${r.cross} 構建依賴不能為空`,locale:"請選擇國際語言",mode:"請選擇構建環境",modeMap:{dev:"開發環境",test:"測試環境",prod:"生產環境"},namec:"請輸入組件名稱",namep:"請輸入項目名稱",port:"請輸入調試端口",style:"請選擇樣式格式",type:"請選擇應用類型",useAnalyze:"請確認是否分析打包結果",useCompress:"請確認是否深度壓縮文件",useCsslint:"請確認是否校驗CSS",useEs6:"請確認是否輸出ES6代碼",useHash:"請確認是否哈希文件名稱",useInstall:"請確認是否安裝依賴",useJslint:"請確認是否校驗JS",useOpen:"請確認是否打開瀏覽器",usePolyfill:"請確認是否動態導入墊片",useTimed:"請確認是否時間化根目錄",useTs:"請確認是否集成TypeScript",useUpload:"請確認是否上傳到服務器",vendor:"請選擇構建依賴"},i={buildFail:`${r.cross} 項目構建失敗`,buildSucceed:`${r.tick} 項目構建成功`,dllFail:`${r.cross} 動態鏈接庫構建失敗`,dllSucceed:`${r.tick} 動態鏈接庫構建成功`,judgeBrucerc:s.judgeBrucerc,judgeCorejs:`${r.cross} ${e.blueBright("core-js")}版本請控制在2.x.y內`,judgeEntry:`${r.cross} 入口文件配置錯誤，請重置項目配置`,judgeModules:s.judgeModules,judgePackage:s.judgePackage,judgePolyfill:`${r.cross} ${e.blueBright("@babel/polyfill")}已棄用，請使用${e.blueBright("core-js/stable")}和${e.blueBright("regenerator-runtime/runtime")}`,judgeSrc:s.judgeSrc,judgeTsconfig:s.judgeTsconfig,listening:`監聽開發環境 ${r.pointer}${r.pointer}`,listLocalhost:`${r.radioOn} 本地網: `,listNetwork:`${r.radioOn} 局域網: `,table:{analyze:"分析打包結果",compress:"深度壓縮文件",csslint:"校驗CSS",env:{dev:"開發環境",test:"測試環境",prod:"生產環境"},es6:"輸出ES6代碼",hash:"哈希文件名稱",jslint:"校驗JS",mode:"運行環境",name:"項目名稱",polyfill:"動態導入墊片",timed:"時間化根目錄",upload:"上傳到服務器"},uploadFail:`${r.cross} 項目上傳失敗`,uploading:"項目正在上傳中......",uploadSucceed:`${r.tick} 項目上傳成功`,watch:r=>`${e.blueBright(r)}配置被修改，請重新執行${e.greenBright("bruce b")}構建項目`},g={getting:"依賴正在獲取中......",initFail:`${r.warning} 項目初始成功(${e.redBright(s.judgeModules)})`,initSucceed:`${r.tick} 項目初始成功`,installing:"依賴正在安裝中......",start:s=>`${r.play} 開始使用以下命令：\n${r.radioOn} ${e.greenBright(`cd ${s}`)}\n${r.radioOn} ${e.greenBright("bruce b")}`},o={localed:`${r.tick} 語言切換成功`},d={judgeBrucerc:s.judgeBrucerc,judgeFrame:`${r.cross} 非MVVM項目無法執行此命令`,judgeModules:s.judgeModules,judgePackage:s.judgePackage,judgeSrc:s.judgeSrc,judgeTsconfig:s.judgeTsconfig,name:`${r.radioOn} 組件名稱: `,newed:`${r.tick} 組件創建成功`,path:`${r.radioOn} 組件路徑: `},l={removed:`${r.tick} 依賴刪除成功`,removing:"依賴正在刪除中......"},t=e=>e?"是":"否";module.exports={ACTION_TEXT:u,BUILD_TEXT:i,GLOB_TEXT:s,INIT_TEXT:g,LOCALE_TEXT:o,NEW_TEXT:d,QUESTION_TEXT:c,REMOVE_TEXT:l,FormatBool:t};