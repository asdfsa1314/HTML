try{document.domain="abchina.com";
}catch(e){}
var _adHandlerPath = "http://ad.abchina.com/AdHub.ashx"; //TO CONFIG
function ShowAds() {
    var divs = document.getElementsByName("adArea");
    for (var i = 0; i < divs.length; i++) {
        var cornerthemeParam = "";
        try {
        if (divs[i].getAttribute("cornertheme") != null&&divs[i].getAttribute("cornertheme") != "")
           cornerthemeParam="&cornertheme=" +divs[i].getAttribute("cornertheme");
        }
        catch(e){}
        divs[i].innerHTML = "<iframe style='border: 0; margin: 0; padding:0;overflow: hidden; width: 100%; height: 100%;' scrolling='no' src='"
        + _adHandlerPath + "?AdAreaId=" + divs[i].getAttribute("adAreaId")
        + "&RefererUrl=" + encodeURI(window.location) + cornerthemeParam + "'></iframe>";
    } 
}

function setIe8Css(cId, cssId) {
    if ($.browser.msie && ($.browser.version == '8.0'||$.browser.version == '7.0')) {
        $(cId).attr("href", cssId);
    }
}


function removeshouye(bread) {
    var strs = bread.clone().html().split("&gt;");
    var html = "您现在的位置：";
    if (strs.length>1) {
        for(var i=1;i<strs.length;i++){
		 if(i==1){
		  html+=strs[i].substr(6)+"&gt;";
		  }else if(i=strs.length-1){
		    html+=strs[i];
		  }else{
		    html+=strs[i]+"&gt;";
		  }
		}
    }
	bread.empty();
	bread.append(html);
} 

 function getScrWidth() {
            var pwidth = 0;
            if (window.innerWidth) {
                pwidth = window.innerWidth;
            } else if (document.documentElement.offsetWidth == document.documentElement.clientWidth) {
                pwidth = document.documentElement.offsetWidth;
            } else {
                pwidth = document.documentElement.offsetWidth;
            }
            return pwidth;
        }
 
  function isMobile() {
                    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                        return true;
                    } else {
                        return false;
                    }
                }
				
 
  function bannerRoll(oBox, aImg, banerNum, bType) {
    var imgNum = aImg.length;
    var play = null;
    var index = 0;
    if (imgNum > 1) {
        var liStr = '';
        for (var i = 0; i < imgNum; i++) {
            if (i == 0) {
                liStr += '<li class="active"></li>';
            } else {
                liStr += '<li></li>';
            }
        }
        $(banerNum).append(liStr);
        var bannerLis = $('li', banerNum);
        // alert(bannerLis.length);
        $.each(bannerLis, function (k) {
            $(this).live('click', function () {
                var banner = aImg[k];
                index = k;
                $(banner).siblings().hide();
                $(banner).show();
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
        //鼠标划过关闭定时器
        $(oBox).mouseover(function () {
            clearInterval(play);
        });
        //鼠标离开启动自动播放
        $(oBox).mouseout(function () {
            autoPlay();
        });
        //自动播放函数
        function autoPlay() {
            clearInterval(play);
            play = setInterval(function () {
                index >= imgNum && (index = 0);
                index++;
                if (bType == 'pc') {
                    show(index);
                } else {
                    showMobile(index);
                }
                $('li', banerNum).eq(index % imgNum).addClass('active');
                $('li', banerNum).eq(index % imgNum).siblings().removeClass('active');
            }, 5000);
        }

        function show(pcindex) {
            $(aImg[pcindex - 1]).fadeOut(1000, 'linear', function () {
                $(aImg[pcindex % imgNum]).fadeIn(1000, 'linear');
            });
        };
        function showMobile(mindex) {
            $(aImg[mindex - 1]).hide();
            $(aImg[mindex % imgNum]).show();
        };
        
        return autoPlay;
        
      } else {
        return false;
    }

}  

 $(function() {
      if (history.length <= 1) {
	  $('#header_leftGo').removeClass("header_left");
	  $('#header_leftGo').addClass("header_left2");
      } else {
	  $('#header_leftGo').addClass("header_left");
	  $('#header_leftGo').removeClass("header_left2");
	 }
	 
//     //响应式关闭菜单
     /*window.onresize=function(){
        $(".pad_nav,.main_pad_menu_bg").hide(100);
     }*/

     /**手机导航****/
     $(".pad_nav").find(".first_menu").find("p").click(function(){
         $(this).parent().toggleClass("first_menu_active");
         $(this).siblings(".second_menu_wrap").toggleClass("disN");
         //$(this).siblings(".second_menu_wrap").find(".second_menu").last().addClass("second_last_menu");
     })
     $(".second_menu").find("p").click(function(){
         $(this).siblings(".third_menu_wrap").toggleClass("disN");
         //$(this).siblings(".third_menu_wrap").find(".third_menu").last().addClass("second_last_menu");
     })


    $('.main_pad_menu_bg').click(function(){

        $(".pad_nav,.main_pad_menu_bg").hide(100);
        $(".main_pad_menu_bg").css({'zIndex':-990});
      $(".main").animate({"right" : "0px"},{duration:100,complete:"",easing:"easeInOutCubic"});
        $('.nav_2').removeClass('nav_2_current');
    });
	 
//   //响应式显示菜单
     $(".nav_2").click(function(){
	  if($('.nav_2').hasClass('nav_2_current')){
	    $(".pad_nav,.main_pad_menu_bg").hide(100);
        $(".main_pad_menu_bg").css({'zIndex':-990});
		$(".main").animate({"right" : "0px"},{duration:100,complete:"",easing:"easeInOutCubic"});
        $('.nav_2').removeClass('nav_2_current');
	  }else{
        var nav_width2=$(document).height();
        $(".main_pad_menu_bg").css("height",nav_width2);
        $(".pad_nav,.main_pad_menu_bg").show(300);
         $(".main").css({"position":"absolute"})
         $(".main").animate({"right" : "0px"},{duration:300,complete:"",easing:"easeInOutCubic"});
         $('.nav_2').addClass('nav_2_current');
        /**改变**/
       $('.header_phone').css({'zIndex':99});
       $(".main_pad_menu_bg").css({'zIndex':990});
	 }
   });
     tabContTab("#debit",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
     tabContTab("#deposit",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
     tabContTab("#detail",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
     tabContTab("#fina_tab_study",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
     tabContTab("#foreign",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
     tabContTab("#gold_custom",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
     tabContTab("#daikuan",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
     tabContTab("#pay",".fina_tab_common_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
	 tabContTab("#personalBank",".fina_tab_item","p","fina_tab_common_item_active",".fina_tab_content","fina_tab_common_item_default");
 });

 //选显卡
 function tabContTab(a, b, c, d,e,f) {
     var $fina_tab =  $(a).find(b);
	 $fina_tab.unbind('click');
     $fina_tab.click(function(){
		 if(flag){
			$(this).find(c).toggleClass(d).toggleClass(f);
            var index =  $fina_tab.index(this);
		    $(a).find(e).eq(index).toggle();
		 }else{
			$(this).find(c).addClass(d).removeClass(f);
			$(this).siblings(b).find(c).removeClass(d).addClass(f);
			var index =  $fina_tab.index(this);
            $(a).find(e).eq(index).show().siblings(e).hide();
		 }
     })
 }

