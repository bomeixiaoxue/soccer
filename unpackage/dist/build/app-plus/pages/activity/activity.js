
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"cu-card { margin-top: ",[0,30],"; }\n",],undefined,{path:"./pages/activity/activity.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/activity/activity.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      