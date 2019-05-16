//	HYPE.documents["r_hypeMar18.wdgt"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "r_hypeMar18.wdgt.hyperesources";
	var documentName = "r_hypeMar18.wdgt";
	var documentLoaderFilename = "rhypemar18_hype_generated_script.js";
	var mainContainerID = "rhypemar18_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_158 == "undefined") {
		if(typeof window.HYPE_158_DocumentsToLoad == "undefined") {
			window.HYPE_158_DocumentsToLoad = new Array();
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=158';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_158();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"25":{n:"Cross.png",p:1},"18":{n:"green.m4a"},"10":{n:"R-07.png",p:1},"19":{n:"purple.m4a"},"11":{n:"Button_-16.png",p:1},"0":{n:"Button_CLEAR.png",p:1},"12":{n:"R-01-1.png",p:1},"1":{n:"Button_-15.png",p:1},"20":{n:"rainbow.m4a"},"2":{n:"R.png",p:1},"13":{n:"R-06-1.png",p:1},"3":{n:"R-04.png",p:1},"21":{n:"drums.m4a"},"14":{n:"red.m4a"},"4":{n:"R-08.png",p:1},"5":{n:"R-02.png",p:1},"15":{n:"orange.m4a"},"22":{n:"Ball.m4a"},"6":{n:"R-03.png",p:1},"23":{n:"R-Intro.png",p:1},"16":{n:"yellow.m4a"},"7":{n:"R-09.png",p:1},"8":{n:"R-10.png",p:1},"24":{n:"Chicken.m4a"},"17":{n:"blue.m4a"},"9":{n:"R-05.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"161":{o:"content-box",h:"25",x:"visible",a:367,q:"100% 100%",b:528,j:"absolute",r:"inline",c:114,z:"10",k:"div",d:116,e:"0.000000"},"148":{c:288,d:277,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"2",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"149",type:3}],a:65,b:159},"154":{c:244,d:274,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"4",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"150",type:3}],a:689,b:404},"157":{aR:"0",x:"visible",a:-322,bE:[{filename:"22"}],b:245,j:"absolute",c:100,z:"7",aO:"1",d:25,k:"video",aQ:"0",aH:"1"},"160":{o:"content-box",h:"25",x:"visible",a:135,q:"100% 100%",b:268,j:"absolute",r:"inline",c:114,z:"9",k:"div",d:116,e:"0.000000"},"147":{o:"content-box",h:"23",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,z:"1",k:"div",d:768},"153":{c:402,d:200,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",aA:[{type:1,transition:1,sceneOid:"1"}],a:415,b:166},"156":{aR:"0",x:"visible",a:-208,bE:[{filename:"21"}],b:435,j:"absolute",c:100,z:"6",aO:"1",d:25,k:"video",aQ:"0",aH:"1"},"162":{o:"content-box",h:"25",x:"visible",a:755,q:"100% 100%",b:460,j:"absolute",r:"inline",c:114,z:"11",k:"div",d:116,e:"0.000000"},"155":{c:174,d:322,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"5",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"151",type:3}],a:331,b:412},"158":{aR:"0",x:"visible",a:-244,bE:[{filename:"24"}],b:388,j:"absolute",c:100,z:"8",aO:"1",d:25,k:"video",aQ:"0",aH:"1"}},n:"Untitled Scene 3",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"150":{d:2.17,i:"150",n:"ba",a:[{t:0,p:1,i:"Video Track",d:2.17,o:"157",f:"2"},{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"162"}],f:30},"149":{d:0.29,i:"149",n:"drms",a:[{t:0,p:1,i:"Video Track",d:0.29,o:"156",f:"2"},{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"160"}],f:30},"151":{d:1.17,i:"151",n:"gr",a:[{t:0,p:1,i:"Video Track",d:1.17,o:"158",f:"2"},{f:"2",t:0,d:0.07,i:"e",e:"1.000000",s:"0.000000",o:"161"}],f:30}},o:"146"},{x:1,p:"600px",c:"#FFFFFF",v:{"12":{o:"content-box",h:"7",x:"visible",a:275,q:"100% 100%",b:364,j:"absolute",r:"inline",c:499,z:"6",k:"div",d:208,aA:[{type:3}],e:"0.000000",aP:"pointer"},"140":{aR:"0",x:"visible",a:-87,bE:[{filename:"16"}],b:619,j:"absolute",c:0,z:"125",aO:"1",d:0,k:"video",aQ:"0",aH:"1"},"78":{c:54,d:38,I:"None",e:"0.000000",J:"None",f:"185deg",K:"None",g:"#FBFF12",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"64",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"19",type:3}],a:539,b:290},"95":{c:43,d:37,I:"None",e:"0.000000",J:"None",f:"175deg",K:"None",g:"#84FB0D",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"82",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"21",type:3}],a:498,b:329},"13":{o:"content-box",h:"8",x:"visible",a:305,q:"100% 100%",b:403,j:"absolute",r:"inline",c:439,z:"7",k:"div",d:178,aA:[{type:3}],e:"0.000000",aP:"pointer"},"141":{aR:"0",x:"visible",a:-93,bE:[{filename:"17"}],b:0,j:"absolute",c:50,z:"126",aO:"1",d:0,k:"video",aQ:"0",aH:"1"},"14":{o:"content-box",h:"9",x:"visible",a:-22,q:"100% 100%",b:458,j:"absolute",r:"inline",c:424,z:"8",k:"div",d:260},"97":{c:43,d:37,I:"None",e:"0.000000",J:"None",f:"167deg",K:"None",g:"#84FB0D",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"84",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"21",type:3}],a:463,b:333},"23":{o:"content-box",h:"11",x:"visible",a:842,q:"100% 100%",b:710,j:"absolute",r:"inline",c:166,z:"11",k:"div",d:42,aA:[{type:1,transition:1,sceneOid:"2"}],e:"0.000000",aP:"pointer"},"136":{o:"content-box",h:"0",x:"visible",a:16,q:"100% 100%",b:710,j:"absolute",r:"inline",c:166,z:"121",k:"div",d:42,aA:[{type:1,transition:1,sceneOid:"1"}],aP:"pointer"},"15":{o:"content-box",h:"13",p:"no-repeat",x:"visible",a:469,q:"100% 100%",b:401,j:"absolute",r:"inline",c:200,z:"9",k:"div",d:136},"7":{o:"content-box",h:"12",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,z:"1",k:"div",d:768},"98":{c:52,d:31,I:"None",e:"0.000000",J:"None",f:"185deg",K:"None",g:"#84FB0D",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"85",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"21",type:3}],a:533,b:332},"8":{o:"content-box",h:"3",x:"visible",a:135,q:"100% 100%",b:215,j:"absolute",r:"inline",c:759,z:"2",k:"div",d:362,aA:[{type:3}],e:"0.000000",aP:"pointer"},"9":{o:"content-box",h:"4",x:"visible",a:167,q:"100% 100%",b:246,j:"absolute",r:"inline",c:702,z:"3",k:"div",d:330,aA:[{type:3}],e:"0.000000",aP:"pointer"},"16":{o:"content-box",h:"10",x:"visible",a:606,q:"100% 100%",b:510,j:"absolute",r:"inline",c:348,z:"10",k:"div",d:228},"137":{o:"content-box",h:"11",p:"no-repeat",x:"visible",a:842,q:"100% 100%",b:712,j:"absolute",r:"inline",c:166,z:"122",k:"div",d:42,aA:[{type:1,transition:1,sceneOid:"2"}],aP:"pointer"},"143":{aR:"0",x:"visible",a:-572,bE:[{filename:"18"}],b:488,j:"absolute",c:0,z:"127",aO:"1",d:0,k:"video",aQ:"0",aH:"1"},"35":{c:96,d:36,I:"None",e:"0.000000",J:"None",f:"356deg",K:"None",g:"#DF4007",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"24",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"17",type:3}],a:463,b:212},"130":{c:43,d:28,I:"None",e:"0.000000",J:"None",f:"0deg",K:"None",g:"#811B92",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"117",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"22",type:3}],a:513,b:408},"138":{aR:"0",x:"visible",a:-114,bE:[{filename:"14"}],b:0,j:"absolute",c:54,z:"123",aO:"1",d:0,k:"video",aQ:"0",aH:"1"},"36":{c:96,d:36,I:"None",e:"0.000000",J:"None",f:"366deg",K:"None",g:"#DF4007",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"25",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"17",type:3}],a:528,b:213},"144":{aR:"0",x:"visible",a:-530,bE:[{filename:"19"}],b:287,j:"absolute",c:0,z:"128",aO:"1",d:0,k:"video",aQ:"0",aH:"1"},"112":{c:42,d:35,I:"None",e:"0.000000",J:"None",f:"173deg",K:"None",g:"#3400FE",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"99",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"20",type:3}],a:484,b:370},"139":{aR:"0",x:"visible",a:-86,bE:[{filename:"15"}],b:547,j:"absolute",c:0,z:"124",aO:"1",d:0,k:"video",aQ:"0",aH:"1"},"46":{o:"content-box",h:"4",x:"visible",a:167,q:"100% 100%",b:247,j:"absolute",r:"inline",c:702,z:"12",k:"div",d:330,aA:[{type:3}],e:"0.000000",aP:"pointer"},"55":{c:40,d:40,I:"None",e:"0.000000",J:"None",f:"8deg",K:"None",g:"#E79B0A",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"65",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"18",type:3}],a:549,b:251},"145":{aR:"0",x:"visible",a:-273,bE:[{filename:"20"}],b:472,j:"absolute",c:100,z:"129",aO:"1",d:25,k:"video",aQ:"0",aH:"1"},"113":{c:48,d:33,I:"None",e:"0.000000",J:"None",f:"183deg",K:"None",g:"#3400FE",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"100",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"20",type:3}],a:522,b:370},"56":{c:40,d:40,I:"None",e:"0.000000",J:"None",f:"18deg",K:"None",g:"#E79B0A",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"42",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"18",type:3}],a:584,b:258},"132":{c:43,d:30,I:"None",e:"0.000000",J:"None",f:"16deg",K:"None",g:"#811B92",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"119",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"22",type:3}],a:548,b:410},"48":{c:105,d:40,I:"None",e:"0.000000",J:"None",f:"353deg",K:"None",g:"#E79B0A",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"36",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"18",type:3}],a:448,b:250},"127":{c:50,d:27,I:"None",e:"0.000000",J:"None",f:"172deg",K:"None",g:"#811B92",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"114",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"22",type:3}],a:487,b:408},"10":{o:"content-box",h:"5",x:"visible",a:198,q:"100% 100%",b:285,j:"absolute",r:"inline",c:634,z:"4",k:"div",d:290,aA:[{type:3}],e:"0.000000",aP:"pointer"},"76":{c:47,d:38,I:"None",e:"0.000000",J:"None",f:"175deg",K:"None",g:"#FBFF12",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"62",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"19",type:3}],a:462,b:292},"11":{o:"content-box",h:"6",x:"visible",a:239,q:"100% 100%",b:325,j:"absolute",r:"inline",c:564,z:"5",k:"div",d:249,aA:[{type:3}],e:"0.000000",aP:"pointer"},"77":{c:47,d:38,I:"None",e:"0.000000",J:"None",f:"175deg",K:"None",g:"#FBFF12",L:"None",aP:"pointer",M:0,aY:"0",N:0,j:"absolute",x:"visible",O:0,A:"#A0A0A0",P:0,B:"#A0A0A0",C:"#A0A0A0",z:"63",k:"div",D:"#A0A0A0",aA:[{timelineIdentifier:"19",type:3}],a:507,b:288}},n:"Untitled Scene",T:{"21":{d:0.29,i:"21",n:"gree",a:[{f:"2",t:0,d:0.29,i:"e",e:"1.000000",r:1,s:"0.000000",o:"11"},{t:0,p:1,i:"Video Track",d:0.23,o:"143",f:"2"}],f:30},"19":{d:1.01,i:"19",n:"yel",a:[{f:"2",t:0,d:1.01,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{t:0,p:1,i:"Video Track",d:0.2,o:"140",f:"2"}],f:30},"22":{d:1,i:"22",n:"vio",a:[{f:"2",t:0,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"13"},{t:0,p:1,i:"Video Track",d:0.24,o:"144",f:"2"},{f:"2",t:0,d:0.06,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"}],f:30},"17":{d:0.29,i:"17",n:"red",a:[{f:"2",t:0,d:0.29,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"},{t:0,p:1,i:"Video Track",d:0.2,o:"138",f:"2"}],f:30},kTimelineDefaultIdentifier:{d:0.29,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:0.29,o:"145",f:"2"}],f:30},"20":{d:1.01,i:"20",n:"blue",a:[{f:"2",t:0,d:1.01,i:"e",e:"1.000000",r:1,s:"0.000000",o:"12"},{t:0,p:1,i:"Video Track",d:0.2,o:"141",f:"2"}],f:30},"18":{d:1.01,i:"18",n:"oran",a:[{f:"2",t:0,d:1.01,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"},{t:0,p:1,i:"Video Track",d:0.25,o:"139",f:"2"}],f:30}},o:"1"},{x:2,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"2",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,z:"1",k:"div",d:768},"6":{o:"content-box",h:"1",x:"visible",a:842,q:"100% 100%",b:710,j:"absolute",r:"inline",c:166,z:"4",k:"div",d:42,aA:[{type:1,sceneOid:"146",transition:1}],aP:"pointer"},"4":{o:"content-box",h:"0",x:"visible",a:16,q:"100% 100%",b:710,j:"absolute",r:"inline",c:166,z:"2",k:"div",d:42,aA:[{type:1,transition:1,sceneOid:"2"}],aP:"pointer"},"5":{I:"None",x:"visible",J:"None",a:43,K:"None",j:"absolute",b:159,c:952,z:"3",L:"None",d:475,k:"div",U:"htmlwidget.html",V:"0",W:""}},n:"Untitled Scene 2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"2"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

