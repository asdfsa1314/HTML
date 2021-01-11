
var g_agt=navigator.userAgent.toLowerCase();var is_opera=(g_agt.indexOf("opera")!=-1);var isIe6=$j.browser.msie&&(parseInt($j.browser.version)==6);var g_title="";var g_title_bg="ts3";var g_dialog_css={};var g_iframeno=0;var g_dialog_sWord;var g_dialog_sButton;var g_dialog_sAction;var g_dialog_excss;var g_dialog_height;function DeprecateWarn(deprecated,replacement,extra){if(!/kaixin001/.test(location.host)&&'console'in window&&console.error){var content=[];content.push('############## 接口已废弃 ##############');content.push('已废弃接口: '+deprecated);content.push('可替换接口: '+replacement);content.push(extra);console.error(content.join('\n'));}}
function Deprecated_myInnerHTML(idname,html){$j('#'+idname).html(html);}
function Deprecated_closeDialog(){if('function'==typeof(close_dlg_callback)){close_dlg_callback();}
new Deprecated_dialog().close();}
function Deprecated_dialog(v_w,v_h,v_title)
{var width=v_w;var height=v_h;g_dialog_height=height;var title=v_title;g_title=title;var sBox='\
  <div id="dialogBox" style="display:none;z-index:1999999;width:'+width+'px;">\
   <div class=ts460 style="position:absolute;top:0px;width:'+width+'px;opacity:0.4;filter:alpha(opacity=40);"><img src="http://img1.kaixin001.com.cn/i/h460_t.gif" width="'+width+'" height="8" /></div>\
   <div style="position:absolute;height:'+height+'px;top:8px;" >\
   <table border="0" cellpadding="0" cellspacing="0">\
   <tr style="height:'+(height)+'px;"><td style="background:#000000;width:7px;opacity:0.4;filter:alpha(opacity=40);"></td>\
   <td style="width:'+(width-14)+'px;">\
    <div style="border:1px solid #565656;">\
    <table width="100%" border="0" cellpadding="0" cellspacing="0">\
    ';if(typeof arguments[3]!="undefined")
{var sClose='<a href="javascript:new Deprecated_dialog().close();"><img src="http://img1.kaixin001.com.cn/i2/knowme/close.gif" width="10" alt="关闭"></a>';if(0==arguments[3])
{sBox+='\
     <tr valign="top">\
      <td id="dialogBody" style="height:'+(height-2)+'px" bgcolor="#ffffff"></td>\
     </tr>\
   ';}
else
{sBox+='\
      <tr height="24" bgcolor="#ffffff">\
       <td>\
        <div class="'+g_title_bg+'" style="background:#ffffff;border-bottom:1px solid #ffffff;">\
         <div id="dialogBoxTitle" class="ts31" >'+title+'</div>\
         <div id="dialogClose" class="ts32" style="margin-top:5px;margin-right:5px;">'+sClose+'</div>\
        </div>\
       </td>\
      </tr>\
      <tr valign="top">\
       <td id="dialogBody" style="height:'+(height-28)+'px" bgcolor="#ffffff"></td>\
      </tr>\
   ';}}
else
{var sClose='<a href="javascript:Deprecated_closeDialog();"><b>×</b></a>';sBox+='\
     <tr height="24" bgcolor="#6795B4">\
      <td>\
       <div class="'+g_title_bg+'">\
        <div id="dialogBoxTitle" class="ts31" style="width:'+(width-55)+'px;padding-bottom:0;height:19px;overflow:hidden;">'+title+'</div>\
        <div id="dialogClose" class="ts32">'+sClose+'</div>\
       </div>\
      </td>\
     </tr>\
     <tr valign="top">\
      <td id="dialogBody" style="height:'+(height-28)+'px" bgcolor="#ffffff"></td>\
     </tr>\
  ';}
sBox+='\
    </table>\
    </div>\
   </td>\
   <td style="background:#000000;width:7px;opacity:0.4;filter:alpha(opacity=40);"></td></tr>\
   </table>\
   </div>\
   <div class=ts460 style="position:absolute;top:'+(height+8)+'px;width:'+width+'px;opacity:0.4;filter:alpha(opacity=40);"><img src="http://img1.kaixin001.com.cn/i/h460_b.gif" width="'+width+'" height="8" /></div>\
  </div><div id="dialogBoxShadow" style="display:none;z-index:19998;"></div>\
 ';var sIfram='\
  <iframe id="dialogIframBG" name="dialogIframBG" frameborder="0" marginheight="0" marginwidth="0" hspace="0" vspace="0" scrolling="no" style="position:absolute;z-index:19997;display:none;"></iframe>\
 ';var sBG='\
  <div id="dialogBoxBG" style="position:absolute;top:0px;left:0px;width:100%;height:100%;"></div>\
 ';this.init=function()
{$j('#iframe_parent').remove();$j('#dialogCase').remove();var oDiv=document.createElement('span');oDiv.id="dialogCase";if(isIe6){oDiv.innerHTML=sBG+sIfram+sBox;}else{oDiv.innerHTML=sBG+sBox;}
document.body.appendChild(oDiv);};this.addTimeStamp=function(url){var rParaReg=/\?.+$/i,timeStamp=new Date().getTime();if(rParaReg.test(url)){url=url.replace(/&+$/i,'');return url+'&k_x_t='+timeStamp;}else if(/\?$/i.test(url)){return url+'k_x_t='+timeStamp;}else{return url+'?k_x_t='+timeStamp;}};this.open=function(_sUrl)
{this.show();_sUrl=this.addTimeStamp(_sUrl);var openIframe="<iframe width='100%' height='100%' name='iframe_parent' id='iframe_parent' frameborder='0' scrolling='no'></iframe>";Deprecated_myInnerHTML('dialogBody',openIframe);$j('#iframe_parent').attr('src',_sUrl);};this.show=function(){this.middle('dialogBox');var dialog=$j('#dialogIframBG'),box=$j('#dialogBox')[0];if(dialog.size()){dialog.css({'top':box.style.top,'left':box.style.left,'width':box.offsetWidth+'px','height':box.offsetHeight+'px','display':'block'});}
this.shadow();};this.reset=function(){this.close();};this.close=function(){$j(window).unbind('resize.dialog').unbind('scroll.dialog');$j('#dialogIframBG').hide()
$j('#dialogBox').hide();$j('#dialogBoxBG').hide();$j('#dialogBoxShadow').hide();if(typeof(parent.onDialogClose)=="function"){parent.onDialogClose($j('#dialogBoxTitle').html()||g_title);}};this.set_title=function(title){$j("#dialogBoxTitle").html(title);return this;};this.shadow=function(){this.event_b_show();$j(window).bind('resize.dialog',$j.proxy(this.event_b,this)).bind('scroll.dialog',$j.proxy(this.event_b,this));};this.event_b=function(){var oShadow=$j('#dialogBoxShadow')[0];oShadow.style.width=$j(document).width()+"px";if(isIe6){oShadow.style.height=$j(document).height()+"px";}else{var clientHeight=document.documentElement.clientHeight
oShadow.style.height=clientHeight+"px";}
if(oShadow.style.display!="none"){if(this.event_b_show){this.event_b_show();}}};this.event_b_show=function(){var oShadow=$j('#dialogBoxShadow')[0],bOpacity=g_dialog_css.bopacity||0.2;oShadow.style.opacity=""+bOpacity;oShadow.style.filter="alpha(opacity="+bOpacity*100+")";oShadow.style.background="#000";var sClientWidth=parent?parent.document.body.offsetWidth:document.body.offsetWidth;var sClientHeight=parent?parent.document.body.offsetHeight:document.body.offsetHeight;var sScrollTop=parent?(parent.document.body.scrollTop+parent.document.documentElement.scrollTop):(document.body.scrollTop+document.documentElement.scrollTop);oShadow.style.top='0px';oShadow.style.left='0px';oShadow.style.width=sClientWidth+"px";var isIe6=$j.browser.msie&&(parseInt($j.browser.version)==6);if(isIe6){oShadow.style.position="absolute";oShadow.style.height=$j(document).height()+"px";}else{oShadow.style.position="fixed";var clientHeight=document.documentElement.clientHeight;oShadow.style.height=clientHeight+"px";}
oShadow.style.display="";};this.middle=function(_sId){var el=$j('#'+_sId)[0];el['style']['display']='';el['style']['position']="absolute";var sClientWidth=parent.document.body.clientWidth;var sClientHeight=parent.document.body.clientHeight;var sScrollTop=parent.document.body.scrollTop+parent.document.documentElement.scrollTop;var sleft=(sClientWidth-el.offsetWidth)/2;var iTop=(g_dialog_height<500)?sScrollTop+(g_dialog_css.top||80):sScrollTop;var sTop=iTop>0?iTop:0;el['style']['left']=sleft+"px";el['style']['top']=sTop+"px";};this.resize=function(v_w,v_h){var dialogBody=$j("#dialogBody");var dialogBox=$j("#dialogBox");if(!dialogBody.length||!dialogBox.length){return;}
if($j("#dialogBoxTitle")[0]){dialogBody.css({height:(v_h-28)+"px"});}else{dialogBody.css({height:(v_h-2)+"px"});}
var ts=dialogBox.find('.ts460'),hd=ts.eq(0),ft=ts.eq(1),bd=dialogBox.find('table:first').parent();dialogBox.css({width:v_w+"px"});hd.css({width:v_w+"px"}).find('img').css({width:v_w+"px"});ft.css({top:(v_h+8)+"px",width:v_w+"px"}).find('img').css({width:v_w+"px"});bd.css({height:v_h+"px"}).find("tr:first").css({height:v_h+"px"}).find("td").eq(1).css({width:(v_w-14)+"px"}).find('.ts31').css({width:(v_w-50)+"px"});return this;};}
function openAlert(_sWord,_sButton,_sWidth,_sHeight,_sTitle,_sAction,_sButton2,_sAction2){return _openAlert(_sWord,_sButton,_sWidth,_sHeight,_sTitle,_sAction,"",_sButton2,_sAction2);}
function openAlertBlue(_sWord,_sButton,_sWidth,_sHeight,_sTitle,_sAction){var excss='.rbs1{border:1px solid #d7e7fe; float:left;}\n'+'.rb1-12,.rb2-12{height:23px; color:#fff; font-size:12px; background:#355582; padding:3px 5px; border-left:1px solid #fff; border-top:1px solid #fff; border-right:1px solid #6a6a6a; border-bottom:1px solid #6a6a6a; cursor:pointer;}\n'+'.rb2-12{background:#355582;}\n';return _openAlert(_sWord,_sButton,_sWidth,_sHeight,_sTitle,_sAction,excss);}
function _openAlert(_sWord,_sButton,_sWidth,_sHeight,_sTitle,_sAction,_excss,_sButton2,_sAction2){DeprecateWarn('_openAlert或openAlert','MessageBox.alert','新接口参数：MessageBox.alert( content[, title][, width][, height][, buttons][, onClick][, className] )');var oEdit=new Deprecated_dialog(_sWidth,_sHeight,_sTitle);oEdit.init();oEdit.show();var framename="iframe_parent_"+g_iframeno++;g_dialog_sWord=_sWord;g_dialog_sButton=_sButton;g_dialog_sAction=_sAction;g_dialog_excss=_excss;g_dialog_sButton2=_sButton2;g_dialog_sAction2=_sAction2;var openIframe="<iframe width='100%' height='100%' name='"+framename+"' id='"+framename+"' src='http://www.kaixin001.com/interface/diablank.php' frameborder='0' scrolling='no' onload=\"javascript:_openAlert_write('"+framename+"')\"></iframe>";Deprecated_myInnerHTML('dialogBody',openIframe);}
function _openAlert_write(framename){var _sWord=g_dialog_sWord;var _sButton=g_dialog_sButton;var _sAction=g_dialog_sAction;var _sButton2=g_dialog_sButton2;var _sAction2=g_dialog_sAction2;var _excss=g_dialog_excss;var iframe=window.frames[framename];if(_excss&&_excss.length){try{iframe.document.getElementsByTagName('head').item(0).innerHTML+='<style>'+_excss+'</style>';}catch(exc){var ss=iframe.document.createElement('style');ss.type="text/css";ss.styleSheet.cssText=_excss;iframe.document.getElementsByTagName('head').item(0).appendChild(ss);}}
if(_sAction==undefined){_sAction="new parent.Deprecated_dialog().reset();";}
iframe.document.body.innerHTML=alertHtml(_sWord,_sButton,_sAction,_sButton2,_sAction2);}
function alertHtml(_sWord,_sButton,_sAction,_sButton2,_sAction2){var html='<div class="ts4">\
   <div class="ts45" style="border-top:none;padding-top:0;">\
     '+_sWord+'\
    <div class="c"></div>\
   </div>\
   <div class="ts42 r">\
    <div class="rbs1"><input type="button" style="width:68px;*padding-top:4px;padding-top:5px\\0;" value="'+_sButton+'" title="'+_sButton+'" class="rb1-12" onmouseover="this.className=\'rb2-12\';" onmouseout="this.className=\'rb1-12\';" onclick="javascript:'+_sAction+'" /></div>';if(typeof(_sButton2)!="undefined"){if(typeof(_sAction2)=="undefined"){_sAction2="new parent.Deprecated_dialog().reset();";}
html+='<div class="flw5">&nbsp;</div><div class="rbs1"><input type="button" style="width:68px;*padding-top:4px;padding-top:5px\\0;" value="'+_sButton2+'" title="'+_sButton2+'" class="rb1-12" onmouseover="this.className=\'rb2-12\';" onmouseout="this.className=\'rb1-12\';" onclick="javascript:'+_sAction2+'" /></div>';}
html+='<div class="c"></div></div>';html+='</div>';return html;}
Kx.alert=function(options){options=$j.extend({'width':400,'height':200,'top':100,'title':'提示','needShadow':true},options);g_dialog_sWord=options.content;g_dialog_sButton=options.sbtn;g_dialog_sAction=options.saction;g_dialog_excss='';g_dialog_css=options.css||g_dialog_css;g_dialog_sButton2=options.dbtn;g_dialog_sAction2=options.daction;var oEdit=new Deprecated_dialog(options.width,options.height,options.title),framename="iframe_parent_"+g_iframeno++,openIframe="<iframe width='100%' height='100%' name='"+framename+"' id='"+framename+"' src='http://www.kaixin001.com/interface/diablank.php' frameborder='0' scrolling='no' onload=\"javascript:_openAlert_write('"+framename+"')\"></iframe>";oEdit.init();oEdit.show();Deprecated_myInnerHTML('dialogBody',openIframe);};(function(){window.DeferredDialogCallbacks={'openWindow':[],'KXWindow.open':[],'KXWindow.openSingle':[],'MessageBox.alert':[],'MessageBox.confirm':[]};window.openWindow=function(){DeferredDialogCallbacks['openWindow'].push([this,arguments]);}
window.KXWindow={open:function(){DeferredDialogCallbacks['KXWindow.open'].push([this,arguments]);},openSingle:function(){DeferredDialogCallbacks['KXWindow.openSingle'].push([this,arguments]);}};window.MessageBox={alert:function(){DeferredDialogCallbacks['MessageBox.alert'].push([this,arguments]);},confirm:function(){DeferredDialogCallbacks['MessageBox.confirm'].push([this,arguments]);}};})();if(!K.App.get('AGlobalDialog')){K.App('AGlobalDialog',['jQuery']).define(function(){var $=this.require('jQuery');return{main:function(){K.Module.createRequire().async(['core/panel/Window','core/panel/MessageBox'],function(Win,MB){window.KXWindow=Win;window.MessageBox=MB;window.openWindow=function(url,width,height,title,needHead){DeprecateWarn('openWindow','KXWindow.open','新接口参数：KXWindow.open( url, width, height[, title][,events][, className] )');if(window.openWindow.windows.length){window.openWindow.windows.pop().hide();}
if($('#dialogBox').is(':visible')){Deprecated_closeDialog();}
if(needHead===0){title=false;}
var w=Win.open(url,width,height,title,null,null,true);window.openWindow.windows.push(w);w.on('afterhide',function(){if('function'==typeof(window.close_dlg_callback)){window.close_dlg_callback();}});};window.openWindow.windows=[];window.dialog=function(){};window.dialog.prototype={reset:function(){this.close();},resize:function(w,h){var wins=window.openWindow.windows;if(wins.length){wins[wins.length-1].setSize(w,h,true);}},close:function(){if(window.openWindow.windows.length){window.openWindow.windows.pop().hide();}
Deprecated_closeDialog();},set_title:function(title){var len=window.openWindow.windows.length;if(len){window.openWindow.windows[len-1].setTitle(title);}}};window._closeDialog=function(){if(window.openWindow.windows.length){window.openWindow.windows.pop().hide();}
Deprecated_closeDialog();}
var callbackMaps=DeferredDialogCallbacks;for(var call in callbackMaps){var callbacks=callbackMaps[call],calls=call.split('.');while(callbacks.length){var cb=callbacks.shift();if(calls.length==1){window[calls[0]].apply(cb[0],cb[1]);}
else if(calls.length==2){window[calls[0]][calls[1]].apply(cb[0],cb[1]);}}}});}};});}