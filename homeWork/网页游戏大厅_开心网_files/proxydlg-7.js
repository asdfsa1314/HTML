
function showProxyDlg(type,para,mode,version)
{var entry=''
var url='';var width=0;var height=0;var title='';if(type==1)
{entry=(version==0)?'inner_sendnews_dialog.php':'inner_news_dialog.php';width=561;height=350;title='动态发布';}
else if(type==2)
{entry='inner_invitation_dialog.php';width=561;height=470;title='邀请好友';}
else
{alert('无效的类型:"'+type+'"');return;}
url='http://'+Kx.Lib.Request.getFullHost()+'/interface/'+entry+'?para='+para+'&type='+type+'&mode='+mode+'&r='+Math.random();if(mode==1)
{height=height-50;var _top=(window.screen.height-height)/2;var _left=(window.screen.width-width)/2;window.open(url,'kaixin001dialog','width='+width+'px,height='+height+'px,location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,top='+_top+'px,left='+_left+'px,screenX='+_top+'px,screenY='+_left+'px')}
else
{openWindow(url,width,height,title);}}
function showRestProxyDlg(url,title,mode,width,height,headtip)
{url=url+'&r='+Math.random();if(mode==1)
{var _top=(window.screen.height-height)/2;var _left=(window.screen.width-width)/2;window.open(url+'&uu=1','kaixinRestDialog','width='+width+'px,height='+height+'px,location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,top='+_top+'px,left='+_left+'px')}
else
{openWindow(url,width,height,title,headtip);}}
function changePageHeight(height)
{height=parseInt(height);if(!$('content')||isNaN(height)||height<=0)return;if('height'in $('content'))
{$('content').style.height=height+"px";}}
function resetPage()
{scroll(0,0);}