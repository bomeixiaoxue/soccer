
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ padding-bottom: ",[0,100],"; }\n",],undefined,{path:"./pages/onechat/onechat.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/onechat/onechat.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      