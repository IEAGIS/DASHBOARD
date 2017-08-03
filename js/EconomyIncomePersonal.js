var tab3Initialized=false;
var tab2Initialized=false;
var tab1Initialized=true;

$(document).ready(function () {
	
	//$("#chart").load("http://mimisbrunnr/IEA_Widgets/pcpi.html");
	calcite.bus.emit('accordion:toggle',{node: document.getElementById('a2')});
}); 