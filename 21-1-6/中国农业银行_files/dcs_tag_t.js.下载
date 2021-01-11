// Websights tracking code
// Created: 2015.11.23
window.webtrendsAsyncInit=function(){
    var dcs=new Webtrends.dcs().init({
		// begin: user modifiable
		// ***********************************************************
		domain:"click.abchina.com",					// 101.251.247.118
		dcsid:"dcsg0rqni00000golpuu3ikjn_2c1g",
		adimpressions:false,
		download:true,			//WT.dl=20
		offsite:false,			//WT.dl=24
		anchor:false,			//WT.dl=21
		onsite:false,			//WT.dl=1
		javascript:false,		//WT.dl=22
		rightclick:false,		//WT.dl=25
		buttonclick:false,		//WT.dl=26
		inputchange:false,		//WT.dl=2
		inputclick:false,		//WT.dl=30
		onsitedoms:"abchina.com",
		downloadtypes:"xls,doc,ppt,pdf,txt,csv,zip,rar,docx,xlsx,pptx,apk",
		adsparam:"WT.ac",
		// ************************************************************
		timezone:8,
		fpcdom:".abchina.com",     //	fpcdom:".ronghai.com",
		navigationtag:"div,table",
		enabled:true,
		i18n:true,
		fpc:"WT_FPC",
		paidsearchparams:"gclid",
		splitvalue:"",
		preserve:true,
		// end: user modifiable
        plugins:{
        }
        });

       // begin: screen type - 
        if (abcScreenType != undefined)    {
            dcs.WT["abc_st"] = abcScreenType;
        }
        // end: screen type

        // begin: WT.cg_abc customization
        dcs.pageAnalyze();
    if (dcs.DCS.dcsref != undefined) {
            if (dcs.DCS.dcsref.length > 512) {
                dcs.DCS.dcsref = dcs.DCS.dcsref.substring(0,512);
            }
        }
    if (dcs.WT["cg_abc"] != undefined) {
            var cg_abc_list=dcs.WT["cg_abc"].split(";");
            for (var ii=0;ii<cg_abc_list.length;ii++){
                if (ii==0) {
                    dcs.WT["cg_n"]=cg_abc_list[ii];
                } else if (ii==1) {
                    dcs.WT["cg_s"]=cg_abc_list[ii];
                } else {
                    dcs.WT["cg_"+(ii+1)]=cg_abc_list[ii];
                }
            }
            delete dcs.WT["cg_abc"];
        }
        // end: WT.cg_abc customization

		dcs.track();
};
(function(){
    var dcsurl = $("#dcs_tag_t").attr("src");
    dcsurl =dcsurl.substring(0,(dcsurl.lastIndexOf("/")+1))
    var s=document.createElement("script"); s.async=true; s.src=dcsurl+"ws.min.js";  // change s.src to the proper pathname
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
    }());
    
 