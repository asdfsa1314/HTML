var g_real_flag=0;
WEBGAME.REG={_rcode:"",_repchk:true,_pwdchk:true,_actchk:true,_cfmchk:true,_wlog:false,regurl:"reg_dlg.php",wizardurl:"wizard_dlg.php",setLog:function(a){this._wlog=a?true:false},init:function(a){KxReg.init(a,"sso_container",function(){WEBGAME.REG.loadCaptcha(true)});WEBGAME.REG._bindCheck()},loadCaptcha:function(a){var b=$j("#yzm_id");if(b&&b.length>0){WEBGAME.REG._rcode=Math.random();var c=KxReg.getCaptcha(WEBGAME.REG._rcode);b.attr("src",c).show();!a&&this._wlog&&statLog3("code_change","webgame_reg_research")}},
doreg:function(){$j("input[type=submit]").attr("disabled","disabled");var a,b,c;a=$j("input[name=act]").val();b=$j("input[name=pwd]").val();c=$j("input[name=code]").val();b={account:a,password:b,code:c,rcode:WEBGAME.REG._rcode};if(c==undefined)b.fastcreate=1;if(WEBGAME.REG._checkReg()&&WEBGAME.REG._checkReal()){this._wlog&&statLog3("reg","webgame_reg_research");WEBGAME.REG.account=a;KxReg.reg(b,WEBGAME.REG._loadReg)}else $j("input[type=submit]").removeAttr("disabled")},_checkReal:function(){var a,
b,c;if($j("input[name=real_flag]").val()!=1)return true;a=$j("input[name=uname]").val();b=$j("input[name=idcard]").val();c=$j("input[name=contact]").val();var d=$j("#idtype").val();b=b.replace(/(^\s*)|(\s*$)/g,"");a=a.replace(/(^\s*)|(\s*$)/g,"");c=c.replace(/(^\s*)|(\s*$)/g,"");if(a==""){$j("#unamewarn").show();return false}else $j("#unamewarn").hide();a=b.length;if(b=="\u8eab\u4efd\u8bc1\u6216\u519b\u5b98\u8bc1"||b==""){$j("#idcardwarn").show();return false}if(isNaN(b)){$j("#idcardwarn").show();
return false}else $j("#idcardwarn").hide();if(d==0)if(a!=15&&a!=17&&a!=18){$j("#idcardwarn").show();return false}else if(identityCheck(b))$j("#idcardwarn").hide();else{$j("#idcardwarn").show();return false}else $j("#idcardwarn").hide();if(c==""||c=="\u90ae\u7bb1\u6216\u624b\u673a\u53f7"){$j("#contactwarn").show();return false}if(!(isNaN(c)?/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/:/^(13+\d)|(15[0189]+\d)|(189[0-9]+\d)$/).test(c)){$j("#contactwarn").show();
return false}$j("#contactwarn").hide();return true},_checkAccount:function(){var a=$j("input[name=act]");$j("#actsug").hide();$j("#actexist").hide();if(a.val()=="")WEBGAME.REG._actchk=true;else{this._wlog&&statLog3("name","webgame_reg_research");if(a.val().length<6){a.attr("class","it3");$j(".errorTip").hide();$j("#actwarn").show();$j("#actformat").show();WEBGAME.REG._actchk=false}else{WEBGAME.REG._actchk=true;KxReg.regcheck("account",{account:a.val()},function(b){if("undefined"!=typeof b.error){$j(".errorTip").hide();
$j(".focusTip").hide();a.attr("class","it3");$j("#actwarn").show();WEBGAME.REG._showError(b.error.reason);WEBGAME.REG._actchk=false}else{$j("#actwarn").hide();$j("#actok").show();WEBGAME.REG._actchk=true}})}}},_checkPassword:function(){var a=$j("input[name=pwd]");$j(".focusTip").hide();$j("#pwdwarn").hide();$j("#pwdshort").hide();$j("#repwdwarn").hide();if(a.val()==""){$j("#pwdwarn").hide();WEBGAME.REG._pwdchk=true}else{this._wlog&&statLog3("pwd1","webgame_reg_research");if(a.val().length<6){a.attr("class",
"it3");$j(".errorTip").hide();$j("#pwdwarn").show();$j("#pwdshort").show();WEBGAME.REG._pwdchk=false}else{$j("#pwdwarn").hide();$j("#pwdok").show();WEBGAME.REG._pwdchk=true}}},_checkRepassword:function(){var a=$j("input[name=repwd]");if(!a||a.length==0)WEBGAME.REG._repchk=true;else{$j(".focusTip").hide();$j("#repwdwarn").hide();$j("#repwdshort").hide();if(a.val()==""){WEBGAME.REG._repchk=true;$j("#repwdwarn").hide()}else{this._wlog&&statLog3("pwd2","webgame_reg_research");if(a.val().length<6){a.attr("class",
"it3");$j(".errorTip").hide();$j("#repwdwarn").show();WEBGAME.REG._repchk=false}else{$j("#repwdwarn").hide();$j("#repwdshort").hide();WEBGAME.REG._repchk=true}}}},_checkPwdConfirm:function(){var a=$j("input[name=pwd]"),b=$j("input[name=repwd]");if(!b||b.length==0)WEBGAME.REG._cfmchk=true;else if(b.val()!=""&&b.val()!=a.val()){$j(".errorTip").hide();$j("#repwdwrong").show();WEBGAME.REG._cfmchk=false;$j("#repwdwarn").show();$j("#repwdok").hide()}else{b.val()!=""&&b.val()==a.val()&&$j("#repwdwrong").hide();
b.val()!=""&&WEBGAME.REG._repchk&&$j("#repwdok").show();WEBGAME.REG._cfmchk=true}},_bindCheck:function(){var a=$j("input[name=act]"),b=$j("input[name=pwd]"),c=$j("input[name=repwd]"),d=$j("input[name=code]");a.unbind().focus(function(){$j("#actwarn").hide();$j("#actok").hide();$j(".focusTip").hide();$j("#actexist").hide();WEBGAME.REG._pwdchk&&WEBGAME.REG._repchk&&WEBGAME.REG._cfmchk&&$j("#actsug").show()}).blur(function(){WEBGAME.REG._checkAccount();if(WEBGAME.REG._actchk){WEBGAME.REG._checkRepassword();
WEBGAME.REG._checkPwdConfirm();WEBGAME.REG._cfmchk&&WEBGAME.REG._checkPassword()}});b.unbind().focus(function(){$j("#pwdshort").hide();$j("#pwdwarn").hide();$j("#repwdwrong").hide();$j(".focusTip").hide();WEBGAME.REG._actchk&&WEBGAME.REG._repchk&&WEBGAME.REG._cfmchk&&$j("#pwdsug").show()}).blur(function(){WEBGAME.REG._checkPassword();WEBGAME.REG._checkRepassword();WEBGAME.REG._checkPwdConfirm();if(WEBGAME.REG._cfmchk){WEBGAME.REG._checkPassword();WEBGAME.REG._pwdchk&&WEBGAME.REG._checkAccount()}}).keyup(function(){WEBGAME.REG._chkPwdStrength()});
c&&c.length>0&&c.unbind().focus(function(){$j("#repwdok").hide();$j("#repwdwarn").hide();$j("#repwdwrong").hide();$j("#repshort").hide();$j(".focusTip").hide()}).blur(function(){WEBGAME.REG._checkRepassword();WEBGAME.REG._checkPwdConfirm();if(WEBGAME.REG._cfmchk){WEBGAME.REG._checkPassword();WEBGAME.REG._pwdchk&&WEBGAME.REG._checkAccount()}});d&&d.length>0&&d.unbind().focus(function(){$j("dd.yzm .chktip").hide()})},_checkReg:function(){if(!(WEBGAME.REG._pwdchk&&WEBGAME.REG._repchk&&WEBGAME.REG._cfmchk&&
WEBGAME.REG._actchk))return false;$j(".focusTip").hide();var a=$j("input[name=act]");if(a.val().length<6){a.attr("class","it3");$j("#actwarn").show();$j("#actformat").show();return false}a=$j("input[name=pwd]");if(a.val().length<6){a.attr("class","it3");$j("#pwdshort").show();$j("#pwdwarn").show();return false}var b=$j("input[name=repwd]");if(b&&b.length>0){if(b.val()==""){$j("#repwdshort").show();return false}if(b.val().length<6||b.val()!=a.val()){b.attr("class","it3");$j("#repwdwarn").show();b.val().length>=
6&&$j("#repwdwrong").show();return false}}if((a=$j("input[name=code]"))&&a.length>0){if(a.val()==""){$j("#codeneed").show();return false}this._wlog&&statLog3("code","webgame_reg_research")}return true},_loadReg:function(a){if("undefined"!=typeof a.session)$j.post("/ajax_set.php",{verify:1},function(){var b="";b=g_from==140?"http://game.kaixin001.com/cgame.php?aid="+g_aid+"&mtype="+g_mtype+"&rf="+g_rf+"&fm=reg&t="+Math.random():g_from==2080?"http://game.kaixin001.com/?aid="+g_aid+"&mtype="+g_mtype+
"&rf="+g_rf+"&fm=reg&t="+Math.random():g_from==160?"http://game.kaixin001.com/play.php?aid="+g_aid+"&sid="+g_sid+"&mtype="+g_mtype+"&rf="+g_rf+"&pos="+g_pos+"&from="+g_from+"&fm=reg&r="+Math.random():g_from==170?"http://game.kaixin001.com/wg_into_server.php?aid="+g_aid+"&sid="+g_sid+"&mtype="+g_mtype+"&rf="+g_rf+"&pos="+g_pos+"&from="+g_from+"&fm=reg&r="+Math.random():g_from==180?"http://game.kaixin001.com/cps/play.php?aid="+g_aid+"&sid="+g_sid+"&mtype="+g_mtype+"&rf="+g_rf+"&pos="+g_pos+"&from="+
g_from+"&fm=reg&r="+Math.random():"http://game.kaixin001.com/game_zone.php?aid="+g_aid+"&mtype="+g_mtype+"&rf="+g_rf+"&place="+g_place+"&sid="+g_sid+"&fm=reg&t="+Math.random();$j("input[name=real_flag]").val()&&realReg();if(g_from==101)if(g_real_flag==1){g_real_flag=2;parent.$j("#regid").hide();parent.realUserInfo()}else parent.window.location.href=b;else window.location.href=b});else{$j("input[type=submit]").removeAttr("disabled");WEBGAME.REG._showError(a.error.reason)}},_showError:function(a){switch(a){case "accountTaken":$j("#actexist").show();
$j("#actwarn").show();WEBGAME.REG._actchk=false;break;case "accountWrong":case "accountRequired":$j("#actformat").show();$j("#actwarn").show();$j("input[name=act]").attr("class","it3");break;case "captchaRequired":$j("#codeneed").show();WEBGAME.REG.loadCaptcha();break;case "captchaWrong":$j("#codewrong").show();WEBGAME.REG.loadCaptcha();break;case "passwordRequired":case "passwordTooShort":$j("input[name=pwd]").attr("class","it3");$j("#pwdwarn").show();$j("#pwdshort").show();break;case "captchaForbidden":$j("#codeforb").show();
break;case "ipForbidden":$j("#banip").show();break;default:$j("#unkown").show();break}},_chkPwdStrength:function(){var a=5,b="#c00",c=$j("input[name=pwd]").val();if(c.search(/[a-z]/g)!=-1)a-=1;if(c.search(/[A-Z]/g)!=-1)a-=1;if(c.search(/[0-9]/g)!=-1)a-=1;if(c.search(/[^0-9A-Za-z]/g)!=-1)a-=1;if(c.length<6)a=5;switch(a){case 1:b="#29b520";break;case 2:b="#36c";break;case 3:b="#f60";break;case 4:b="#c00";break}$j("#pwdsug img").attr("src","http://img1.kaixin001.com.cn/i/mmqd_"+a+".gif");$j("#pwdsug b").css("color",
b)}};
function identityCheck(a){var b=Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),c="10x98765432".split("");if(a.match(/\d{15}/)==null&&a.match(/\d{18}/)==null&&a.match(/\d{17}[xX]/)==null)return false;var d=a.split("");if({11:"\u5317\u4eac",12:"\u5929\u6d25",13:"\u6cb3\u5317",14:"\u5c71\u897f",15:"\u5185\u8499\u53e4",21:"\u8fbd\u5b81",22:"\u5409\u6797",23:"\u9ed1\u9f99\u6c5f",31:"\u4e0a\u6d77",32:"\u6c5f\u82cf",33:"\u6d59\u6c5f",34:"\u5b89\u5fbd",35:"\u798f\u5efa",36:"\u6c5f\u897f",37:"\u5c71\u4e1c",41:"\u6cb3\u5357",
42:"\u6e56\u5317",43:"\u6e56\u5357",44:"\u5e7f\u4e1c",45:"\u5e7f\u897f",46:"\u6d77\u5357",50:"\u91cd\u5e86",51:"\u56db\u5ddd",52:"\u8d35\u5dde",53:"\u4e91\u5357",54:"\u897f\u85cf",61:"\u9655\u897f",62:"\u7518\u8083",63:"\u9752\u6d77",64:"\u5b81\u590f",65:"\u65b0\u7586"}[parseInt(a.substr(0,2),10)]==null)return false;var e=a.length;if(e==15)a=a.substr(6,6);else if(e==18)a=a.substr(6,8);else return false;if(isDateValid(a)==false)return false;if(e==15)return true;for(var f=a=0;f<e-1;f++)a+=parseInt(d[f],
10)*parseInt(b[f],10);b=a%11;b=c[b];if(b==d[17].toLowerCase())return true;return false}function isDateValid(a){if(a.length==6)a="19"+a;var b=parseInt(a.substr(0,4),10),c=parseInt(a.substr(4,2),10);a=parseInt(a.substr(6,2),10);var d=Array(31,28,31,30,31,30,31,31,30,31,30,31);isLeap=false;if(b%4==0&&b%100!=0||b%400==0)isLeap=true;if(a<1||a>31||c<1||c>12||b<0)return false;if(a>d[c-1]&&c!=2)return false;if(!isLeap&&c==2&&a>28)return false;if(isLeap&&c==2&&a>29)return false;return true}
function realReg(){var a,b,c;a=$j("input[name=uname]").val();b=$j("input[name=idcard]").val();c=$j("input[name=contact]").val();var d=$j("#idtype").val();if(!(!a||!b||!c)){b=b.replace(/(^\s*)|(\s*$)/g,"");a=a.replace(/(^\s*)|(\s*$)/g,"");var e=$j("#year").val(),f=$j("#month").val(),g=$j("#day").val();$j.ajax({type:"POST",url:"/ajax/realid.php",data:"uname="+a+"&idcard="+b+"&contact="+c+"&aid="+g_aid+"&idtype="+d+"&year="+e+"&month="+f+"&day="+g,success:function(h){h==1?alert("\u5b9e\u540d\u6ce8\u518c\u6210\u529f"):
alert("\u5b9e\u540d\u6ce8\u518c\u5931\u8d25")}})}};
