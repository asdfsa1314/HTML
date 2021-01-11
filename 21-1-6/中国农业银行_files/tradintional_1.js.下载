//繁体简体字转换
function  fantiorjianti(){
 var curl = this.location.href.toString(); 
 var newcurl; 
 
 if (curl.indexOf('/cn/') != -1) { 
  newcurl = curl.replace("/cn/", "/zt/"); 
  $("#tc")[0].href = newcurl;
  $("#tc").eq(0).text('繁体');
   
 } 
 
 if (curl.indexOf('/zt/') != -1) { 
  newcurl = curl.replace("/zt/", "/cn/"); 
  $("#tc")[0].href = newcurl; 
  $("#tc").eq(0).text('簡體');  
 } 
}
$(document).ready(function(){
 fantiorjianti();
});
//繁体切换 
function showDDMenu2() { 
fixPosition(); 

var items = $('.thrMenu-leftBg,.thrMenu-centerMore'); 

items.click(function () { 
DDClick(this); 
return false; 
}) 
.hover( 
function () { }, 
function () { 
DDOut(this); 
}); 
} 


function fixPosition() { 

var cssName = 'ColumnNav'; 
var specMode = false; 
$('.' + cssName).each(function (i, n) { 
var ddId = 'tmpId_' + cssName + (i + 1); 
var parent; 
if (__ddInit) { 
$(this).parent().attr(__ddAddAttrName, '#' + ddId); 
var html = '<div Id="' + ddId + '" class="' + cssName + '">' + $(this).html() + '</div>'; 
$('body').append(html); 
$(this).show(); 
parent = $(this).parent(); 


$(this).remove(); 
} 
else { 
parent = $('[' + __ddAddAttrName + '="' + '#' + ddId + '"]'); 
} 

var pos = parent.offset(); 
pos.left -= parent.scrollLeft(); 
pos.top -= parent.scrollTop(); 
pos.left += 15; 
pos.top += 25; 

$('#' + ddId).css({ 'left': pos.left + 'px', 'top': pos.top + 'px' }); 
}); 

__ddInit = false; 
} 
//繁体切换 
$(document).ready(function () { 
showDDMenu2(); 
$(window).bind('resize', function () { 
fixPosition(); 
}) 
var curl = this.location.href.toString(); 
var newcurl; 

if (curl.indexOf('/cn/') != -1) 
{ 
newcurl = curl.replace("/cn/", "/zt/"); 
$("#tc")[0].href = newcurl; 
} 

if (curl.indexOf('/zt/') != -1) 
{ 
newcurl = curl.replace("/zt/", "/cn/"); 
$("#tc")[0].href = newcurl; 
} 

}); 