
var g_from="";var g_remember=0;var g_verify="";var g_tm_uid="";var g_aid;var g_mtype;var g_place="";var g_sid="";var g_rf="";var g_gameurl='';var g_swfname='';var g_swfver=1;var g_page='';var WEBGAME={};WEBGAME.SSO={"_rcode":"","init":function(token,from,auto_reset){this._arrerr=Array("needact","needcap","needpwd","wrongcap","wrongact","wrongpwd");this._totalerr=this._arrerr.length;this._auto_reset=auto_reset;KxSso.init(token,"sso_container");},"login":function(){if(WEBGAME.SSO._checkLogin()){var act=$j("li input[name=account]").val();var pwd=$j("li input[name=passwd]").val();var remember=$j("li input[name=remember]");g_remember=remember.attr("checked")==true?1:0;var params='';if($j("#logincode").hasClass("dn")){params={"account":act,"password":pwd};}else{params={"account":act,"password":pwd,"rcode":WEBGAME.SSO._rcode,"code":$j("li input[name=lcode]").val()};}
KxSso.login(params,WEBGAME.SSO.loadLogin);}},"_showErr":function(o){for(var i=0;i<this._totalerr;i++)
{var name="#"+this._arrerr[i];if(name!=o)
{$j(name).hide();}}
$j(o).show();},"_keyDown":function(e){var keycode=e.keyCode;if(keycode=="13")
{WEBGAME.SSO.login();}},"_checkLogin":function(){var act=$j("li input[name=account]");var dfv="邮箱/手机号/其他用户名";if(act.val()==""||act.val()==dfv||act.val()=="用户名"){WEBGAME.SSO._showErr("#needact");act.focus();return false;}
var pwd=$j("li input[name=passwd]");if(pwd.val()==""||pwd.val()=="***********"){WEBGAME.SSO._showErr("#needpwd");pwd.focus();return false;}
var cod=$j("li input[name=lcode]");if(false==$j("#logincode").hasClass("dn")&&(cod.val()==""||cod.val()=="验证码")){WEBGAME.SSO._showErr("#needcap");cod.focus();return false;}
return true;},"loadLogin":function(data){try{if("undefined"==typeof(data.session)){switch(data.error.reason){case"accountNotExists":WEBGAME.SSO._showErr("#wrongact");break;case"passwordWrong":WEBGAME.SSO._showErr("#wrongpwd");break;case"captchaRequired":WEBGAME.SSO._showErr("#wrongcap");WEBGAME.SSO._loadCaptcha();break;case"captchaWrong":WEBGAME.SSO._showErr("#wrongcap");WEBGAME.SSO._loadCaptcha();break;default:if(this._auto_reset==true)
{WEBGAME.SSO._resetToken();}
alert(data.error.errno+": "+data.error.reason);break;}
$j("#bnt_submit").attr("readonly",false);}else{g_verify=data.session.verify;sso_loginsucc(g_from);}}catch(e){}},"_resetToken":function(){$j.ajax({'type':'POST','url':'/ajax_token.php','data':'t='+Math.random(),'dataType':"json",'success':function(r){if(r&&r.ret==1){KxSso.init(r.token,"sso_container");}},'error':function(r){}});},"_loadCaptcha":function(){WEBGAME.SSO._rcode=Math.random();var capurl=KxSso.getCaptcha(WEBGAME.SSO._rcode);$j("#logincode").removeClass("dn").find("img").attr("src",capurl);},"logout":function(){KxSso.logout(WEBGAME.SSO.loadLogout);},"loadLogout":function(data){if(data.session)
{alert("退出失败："+data.error.reason);}else
{url='http://game.kaixin001.com/logout.php?aid='+g_aid+'&mtype='+g_mtype+'&rf='+g_rf+'&t='+Math.random();top.location.href=url;}},"getStatus":function(){KxSso.getStatus(WEBGAME.SSO.getStatusLoad);},"getStatusLoad":function(data){if(data.session)
{g_verify=data.session.verify;sso_loginsucc("");}}};function statLog3(id,name)
{if(!id||!name)
{return false;}
$j.ajax({'type':'POST','url':'http://game.kaixin001.com/c3.php','data':'id='+encodeURIComponent(id)+'&name='+encodeURIComponent(name)+'&t='+Math.random(),'dataType':"json",'success':function(r){},'error':function(r){}});return false;}
function isCanUseActive()
{var agt=window.navigator.userAgent.toLowerCase();if(agt.indexOf("msie")>=0)return 1;if(agt.indexOf("firefox")>=0)return 1;return 0;}
function checkLogin()
{if(g_verify!="")
{return true;}else
{return false;}}
function sso_login_direct(from)
{var url="";if(from==10)
{url='http://game.kaixin001.com/service/index.php?mtype='+g_mtype+'&rf='+g_rf+'&t='+Math.random();}
else if(from==27)
{var t=Math.random()*100000;url="/dialog/quickreg2.php?new_verify="+g_verify+"&t="+Math.random();window.location.href=url;return false;}
else if(from==101)
{url='http://game.kaixin001.com/game_zone.php?aid='+g_aid+'&mtype='+g_mtype+'&rf='+g_rf+'&t='+Math.random();parent.window.location.href=url;return false;}
else if(from==130)
{url='http://game.kaixin001.com/game_zone.php?aid='+g_aid+'&mtype='+g_mtype+'&rf='+g_rf+'&place='+g_place+'&sid='+g_sid+'&t='+Math.random();}
else if(from==140)
{url='http://game.kaixin001.com/cgame.php?aid='+g_aid+'&mtype='+g_mtype+'&ver='+g_cltver+'&rf='+g_rf+'&t='+Math.random();}
else if(from==150)
{url='http://game.kaixin001.com/award/summer.php?t='+Math.random();}
else if(from==160)
{url="http://game.kaixin001.com/play.php?aid="+g_aid+"&sid="+g_sid+"&mtype="+g_mtype+'&rf='+g_rf+"&pos="+g_pos+"&from="+from+"&fm=login";}
else if(from==170)
{url="http://game.kaixin001.com/wg_into_server.php?aid="+g_aid+"&sid="+g_sid+"&mtype="+g_mtype+'&rf='+g_rf+"&pos="+g_pos+"&from="+from+"&fm=login";}
else if(from==180)
{url="http://game.kaixin001.com/cps/play.php?aid="+g_aid+"&sid="+g_sid+"&mtype="+g_mtype+'&rf='+g_rf+"&pos="+g_pos+"&from="+from+"&fm=login";}
else if(from>2000)
{url=location.href;}
else
{url='http://game.kaixin001.com/?aid='+g_aid+'&mtype='+g_mtype+'&rf='+g_rf+'&t='+Math.random();if(from==2)
{url+='&fm=reg';}}
window.location.href=url;if(from==2080){location.href=location.href.replace(location.hash,'');}}
function sso_loginsucc(from)
{$j.ajax({'type':'POST','url':'/ajax_set.php','data':'remember='+g_remember+'&page='+g_page+'&rf='+g_rf+'&t='+Math.random(),'dataType':"json",'success':function(b){if(b&&b.ret==1)
{sso_login_direct(from);}},'error':function(b){}});}
function initSwfReg(aid,mtype,swfid,swfver,selfurl,from)
{g_from=from;g_aid=aid;g_mtype=mtype;g_gameurl=selfurl;g_swfname=swfid;g_swfver=swfver;KxReg.init(token,"sso_container",function(){});KxSso.init(token,"sso_container");}
function js_getRegUrl()
{return'http://img1.kaixin001.com.cn/swf/game/reg-'+g_swfver+'.swf';}
function js_doReg(name,pwd,rcode,code)
{var params={"account":name,"password":pwd,"code":code,"rcode":rcode};KxReg.reg(params,pri_afterReg);}
function pri_afterReg(data)
{try
{if("undefined"==typeof(data.session))
{switch(data.error.reason)
{case"accountTaken":case"accountWrong":document[g_swfname].as_afterReg('err4');break;case"captchaRequired":case"captchaWrong":document[g_swfname].as_afterReg('err3');js_changeCode();break;}}
else
{g_verify=data.session.verify;sso_loginsucc(g_from);}}
catch(e)
{}}
function js_changeCode()
{var rcode=Math.random();var url=KxReg.getCaptcha(rcode);document[g_swfname].as_afterCode(rcode,url);}
function js_qqLogin()
{var url='http://www.kaixin001.com/login/oauth/oauth_login.php?ltype=tencent&act=login&url='+encodeURIComponent(g_gameurl)+'&from=game_swf_reg';window.open(url);}
function js_forgetPassword()
{window.open('https://security.kaixin001.com/pwd/findpwd.php');}
function js_openProtocol()
{window.open('http://www.kaixin001.com/s/reg.html');}
function js_doLogin(name,pwd,rcode,code,remember)
{g_remember=remember;var params={"account":name,"password":pwd};if(rcode)
{params.rcode=rcode;params.code=code;}
KxSso.login(params,pri_afterLogin);}
function pri_afterLogin(data)
{try
{if("undefined"==typeof(data.session))
{switch(data.error.reason)
{case"accountNotExists":document[g_swfname].as_afterLogin('err1');break;case"passwordWrong":document[g_swfname].as_afterLogin('err2');break;case"captchaRequired":document[g_swfname].as_afterLogin('err3');break;case"captchaWrong":document[g_swfname].as_afterLogin('err5');break;default:document[g_swfname].as_afterLogin('err4');break;}}
else
{g_verify=data.session.verify;sso_loginsucc(g_from);}}
catch(e)
{}}
function js_checkAccount(name)
{KxReg.regcheck("account",{account:name},function(data)
{var reason='';if("undefined"!=typeof(data.error))
{reason=data.error.reason;}
document[g_swfname].as_afterCheck(reason);});}
function isDigit(s)
{var patrn=/^[0-9]{1,20}$/;if(!patrn.test(s))
{return false;}
else
{return true;}}
function sleep(n)
{var start=new Date().getTime();while(true)if(new Date().getTime()-start>n)break;}