
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { padding-top: ",[0,100],"; }\n.",[1],"indexes { position: relative; }\n.",[1],"indexBar { position: fixed; right: 0px; bottom: 0px; padding: ",[0,20]," ",[0,20]," ",[0,20]," ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"indexBar .",[1],"indexBar-box { width: ",[0,40],"; height: auto; background: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-shadow: 0 0 ",[0,20]," rgba(0, 0, 0, 0.1); box-shadow: 0 0 ",[0,20]," rgba(0, 0, 0, 0.1); border-radius: ",[0,10],"; }\n.",[1],"indexBar-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: ",[0,40],"; height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,24],"; color: #888; }\nwx-movable-view.",[1],"indexBar-item { width: ",[0,40],"; height: ",[0,40],"; z-index: 9; position: relative; }\nwx-movable-view.",[1],"indexBar-item::before { content: \x22\x22; display: block; position: absolute; left: 0; top: ",[0,10],"; height: ",[0,20],"; width: ",[0,4],"; background-color: #f37b1d; }\n.",[1],"indexToast { position: fixed; top: 0; right: ",[0,80],"; bottom: 0; background: rgba(0, 0, 0, 0.5); width: ",[0,100],"; height: ",[0,100],"; border-radius: ",[0,10],"; margin: auto; color: #fff; line-height: ",[0,100],"; text-align: center; font-size: ",[0,48],"; }\n",],undefined,{path:"./pages/plugin/indexes.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/plugin/indexes.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      