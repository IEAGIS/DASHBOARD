var tab3Initialized=false;
var tab2Initialized=false;
var tab1Initialized=true;

$(document).ready(function () {
	calcite.bus.on('tabs:active', function (options) {
	  //console.log(options.active.id) // => "top-nav"
		switch (options.active.id) {
			case "1":
			/*if (tab2Initialized===false){
				initGrowth();
				initPie();
				initGDP();				
			}*/	
			tab2Initialized=true;	
			break;
			default:
			break;
		}			  
	});	
	calcite.bus.emit('accordion:toggle',{node: document.getElementById('e1')});
});