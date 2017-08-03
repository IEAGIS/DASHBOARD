var tab3Initialized=false;
var tab2Initialized=false;
var tab1Initialized=true;

$(document).ready(function () {
	
	var initGDP = function(){
		
	
		/* input data */
		var data = [
		{Year: '2001', 'Little Rock-North Little Rock-Conway': '22066', 'Fayetteville-Springdale-Rogers': '10911', 'Fort Smith': '6772', 'Jonesboro': '2836', 'Hot Springs': '1952', 'Pine Bluff': '2434'},
		{Year: '2002', 'Little Rock-North Little Rock-Conway': '23300', 'Fayetteville-Springdale-Rogers': '11953', 'Fort Smith': '7051', 'Jonesboro': '2933', 'Hot Springs': '2010', 'Pine Bluff': '2487'},
		{Year: '2003', 'Little Rock-North Little Rock-Conway': '24144', 'Fayetteville-Springdale-Rogers': '13224', 'Fort Smith': '7517', 'Jonesboro': '3201', 'Hot Springs': '2097', 'Pine Bluff': '2600'},
		{Year: '2004', 'Little Rock-North Little Rock-Conway': '25383', 'Fayetteville-Springdale-Rogers': '14870', 'Fort Smith': '7973', 'Jonesboro': '3424', 'Hot Springs': '2241', 'Pine Bluff': '2779'},
		{Year: '2005', 'Little Rock-North Little Rock-Conway': '27199', 'Fayetteville-Springdale-Rogers': '16134', 'Fort Smith': '8717', 'Jonesboro': '3566', 'Hot Springs': '2405', 'Pine Bluff': '2843'},
		{Year: '2006', 'Little Rock-North Little Rock-Conway': '29131', 'Fayetteville-Springdale-Rogers': '17179', 'Fort Smith': '9441', 'Jonesboro': '3725', 'Hot Springs': '2533', 'Pine Bluff': '3003'},
		{Year: '2007', 'Little Rock-North Little Rock-Conway': '32269', 'Fayetteville-Springdale-Rogers': '17662', 'Fort Smith': '9362', 'Jonesboro': '3760', 'Hot Springs': '2573', 'Pine Bluff': '2991'},
		{Year: '2008', 'Little Rock-North Little Rock-Conway': '32196', 'Fayetteville-Springdale-Rogers': '18585', 'Fort Smith': '9682', 'Jonesboro': '3953', 'Hot Springs': '2626', 'Pine Bluff': '3035'},
		{Year: '2009', 'Little Rock-North Little Rock-Conway': '32771', 'Fayetteville-Springdale-Rogers': '18350', 'Fort Smith': '9089', 'Jonesboro': '4016', 'Hot Springs': '2575', 'Pine Bluff': '3032'},
		{Year: '2010', 'Little Rock-North Little Rock-Conway': '33325', 'Fayetteville-Springdale-Rogers': '20088', 'Fort Smith': '9583', 'Jonesboro': '4241', 'Hot Springs': '2732', 'Pine Bluff': '3107'},
		{Year: '2011', 'Little Rock-North Little Rock-Conway': '34603', 'Fayetteville-Springdale-Rogers': '21590', 'Fort Smith': '9792', 'Jonesboro': '4283', 'Hot Springs': '2952', 'Pine Bluff': '3106'},
		{Year: '2012', 'Little Rock-North Little Rock-Conway': '35720', 'Fayetteville-Springdale-Rogers': '22201', 'Fort Smith': '9932', 'Jonesboro': '4339', 'Hot Springs': '3143', 'Pine Bluff': '3154'},
		{Year: '2013', 'Little Rock-North Little Rock-Conway': '37371', 'Fayetteville-Springdale-Rogers': '22959', 'Fort Smith': '10421', 'Jonesboro': '4616', 'Hot Springs': '3305', 'Pine Bluff': '3144'},
		{Year: '2014', 'Little Rock-North Little Rock-Conway': '38330', 'Fayetteville-Springdale-Rogers': '24499', 'Fort Smith': '10771', 'Jonesboro': '4651', 'Hot Springs': '3391', 'Pine Bluff': '3104'},
		{Year: '2015', 'Little Rock-North Little Rock-Conway': '39270', 'Fayetteville-Springdale-Rogers': '26034', 'Fort Smith': '10633', 'Jonesboro': '4843', 'Hot Springs': '3368', 'Pine Bluff': '3055'}];
		
		/* data adapter settings */
		var dataAdapter = new $.jqx.dataAdapter({
			localdata: data,
			datafields: [
				{name: "Year", type: "number"},
				{name: "Little Rock-North Little Rock-Conway", type: "number"},
				{name: "Fayetteville-Springdale-Rogers", type: "number"},
				{name: "Fort Smith", type: "number"},
				{name: "Jonesboro", type: "number"},
				{name: "Hot Springs", type: "number"},
				{name: "Pine Bluff", type: "number"}
			]
		});

		/* chart settings */
		var chartSettings = {
			source: dataAdapter,
			title: "Gross Domestic Product Arkansas' MSAs",
			description: " (Millions of Dollars)",
			padding: {
				left: 5,
				top: 5,
				right: 5,
				bottom: 5
			},
			titlePadding: {
				left: 5,
				top: 5,
				right: 5,
				bottom: 5
			},
			enableAnimations: false,
			xAxis: {
				dataField: "Year",
				valuesOnTicks: false
			},
			valueAxis: {
				valuesOnTicks: true
			},
			seriesGroups: [			
				{
					type: "column",
					series: [					
						{
							dataField: "Little Rock-North Little Rock-Conway"
						},
						{
							dataField: "Fayetteville-Springdale-Rogers"
						},
						{
							dataField: "Fort Smith"
						},
						{
							dataField: "Jonesboro"
						},
						{
							dataField: "Hot Springs"
						},
						{
							dataField: "Pine Bluff"
						}
					]
				}
			]
		}
		
		/* create chart in the container element */
		$('#chartContainer').jqxChart(chartSettings);
	}

	var initGrowth = function(){
			
		/* input data */
		var data =  [
		{Year: '2001', "Little Rock-North Little Rock-Conway": '100',         "Fayetteville-Springdale-Rogers": '100',         "Fort Smith": '100',         "Jonesboro": '100',         "Hot Springs": '100',         "Pine Bluff": '100'},
		{Year: '2002', "Little Rock-North Little Rock-Conway": '105.592314',  "Fayetteville-Springdale-Rogers": '109.5499954', "Fort Smith": '104.1199055', "Jonesboro": '103.4203103', "Hot Springs": '102.9713115', "Pine Bluff": '102.1774856'},
		{Year: '2003', "Little Rock-North Little Rock-Conway": '109.4172029', "Fayetteville-Springdale-Rogers": '121.1987902', "Fort Smith": '111.0011813', "Jonesboro": '112.8702398', "Hot Springs": '107.4282787', "Pine Bluff": '106.8200493'},
		{Year: '2004', "Little Rock-North Little Rock-Conway": '115.0321762', "Fayetteville-Springdale-Rogers": '136.2844835', "Fort Smith": '117.7347903', "Jonesboro": '120.7334274', "Hot Springs": '114.8053279', "Pine Bluff": '114.1741988'},
		{Year: '2005', "Little Rock-North Little Rock-Conway": '123.2620321', "Fayetteville-Springdale-Rogers": '147.8691229', "Fort Smith": '128.721205',  "Jonesboro": '125.7404795', "Hot Springs": '123.2069672', "Pine Bluff": '116.8036154'},
		{Year: '2006', "Little Rock-North Little Rock-Conway": '132.0175836', "Fayetteville-Springdale-Rogers": '157.4466135', "Fort Smith": '139.4122859', "Jonesboro": '131.3469676', "Hot Springs": '129.7643443', "Pine Bluff": '123.3771569'},
		{Year: '2007', "Little Rock-North Little Rock-Conway": '146.2385571', "Fayetteville-Springdale-Rogers": '161.8733388', "Fort Smith": '138.2457177', "Jonesboro": '132.5811001', "Hot Springs": '131.8135246', "Pine Bluff": '122.8841413'},
		{Year: '2008', "Little Rock-North Little Rock-Conway": '145.9077314', "Fayetteville-Springdale-Rogers": '170.3326918', "Fort Smith": '142.9710573', "Jonesboro": '139.3864598', "Hot Springs": '134.5286885', "Pine Bluff": '124.6918652'},
		{Year: '2009', "Little Rock-North Little Rock-Conway": '148.5135503', "Fayetteville-Springdale-Rogers": '168.178902',  "Fort Smith": '134.2144123', "Jonesboro": '141.6078984', "Hot Springs": '131.9159836', "Pine Bluff": '124.5686113'},
		{Year: '2010', "Little Rock-North Little Rock-Conway": '151.0242001', "Fayetteville-Springdale-Rogers": '184.1077811', "Fort Smith": '141.5091553', "Jonesboro": '149.5416079', "Hot Springs": '139.9590164', "Pine Bluff": '127.6499589'},
		{Year: '2011', "Little Rock-North Little Rock-Conway": '156.8159159', "Fayetteville-Springdale-Rogers": '197.8737054', "Fort Smith": '144.5953928', "Jonesboro": '151.022567',  "Hot Springs": '151.2295082', "Pine Bluff": '127.6088743'},
		{Year: '2012', "Little Rock-North Little Rock-Conway": '161.8780024', "Fayetteville-Springdale-Rogers": '203.4735588', "Fort Smith": '146.6627289', "Jonesboro": '152.9971791', "Hot Springs": '161.0143443', "Pine Bluff": '129.5809367'},
		{Year: '2013', "Little Rock-North Little Rock-Conway": '169.3601015', "Fayetteville-Springdale-Rogers": '210.4206764', "Fort Smith": '153.8836385', "Jonesboro": '162.764457',  "Hot Springs": '169.3135246', "Pine Bluff": '129.1700904'},
		{Year: '2014', "Little Rock-North Little Rock-Conway": '173.7061543', "Fayetteville-Springdale-Rogers": '224.5348731', "Fort Smith": '159.0519787', "Jonesboro": '163.9985896', "Hot Springs": '173.7192623', "Pine Bluff": '127.526705'},
		{Year: '2015', "Little Rock-North Little Rock-Conway": '177.9661017', "Fayetteville-Springdale-Rogers": '238.6032444', "Fort Smith": '157.014176',  "Jonesboro": '170.7686883', "Hot Springs": '172.5409836', "Pine Bluff": '125.5135579'}];
			
		/* data adapter settings */
		var dataAdapter = new $.jqx.dataAdapter({
			localdata: data,
			datafields: [
				{name: "Year", type: "number"},
				{name: "Little Rock-North Little Rock-Conway", type: "number"},
				{name: "Fayetteville-Springdale-Rogers", type: "number"},
				{name: "Fort Smith", type: "number"},
				{name: "Jonesboro", type: "number"},
				{name: "Hot Springs", type: "number"},
				{name: "Pine Bluff", type: "number"}
			]
		});

		/* chart settings */
		var chartSettings = {
			source: dataAdapter,
			title: "Gross Domestic Product Arkansas' MSAs",
			description: "Growth Index (2001=100)",
			padding: {
				left: 5,
				top: 5,
				right: 5,
				bottom: 5
			},
			titlePadding: {
				left: 5,
				top: 5,
				right: 5,
				bottom: 5
			},
			enableAnimations: false,
			xAxis: {
				dataField: "Year",
				valuesOnTicks: true
			},
			valueAxis: {
				valuesOnTicks: true
			},
			seriesGroups: [			
				{
					type: "line",
					series: [					
						{
							dataField: "Little Rock-North Little Rock-Conway"
						},
						{
							dataField: "Fayetteville-Springdale-Rogers"
						},
						{
							dataField: "Fort Smith"
						},
						{
							dataField: "Jonesboro"
						},
						{
							dataField: "Hot Springs"
						},
						{
							dataField: "Pine Bluff"
						}
					]
				}
			]
		}
		
		/* create chart in the container element */
		$('#chartContainer1').jqxChart(chartSettings);
	}	
	
	initGDP();
	calcite.bus.on('tabs:active', function (options) {
	  //console.log(options.active.id) // => "top-nav"
		switch (options.active.id) {
			case "0":
			if (tab2Initialized===false)
				initGDP();
			break;
			case "1":
			if (tab2Initialized===false)
				initGrowth();
			tab2Initialized=true;	
			break;
			default:
			break;
		}			  
	});	
	calcite.bus.emit('accordion:toggle',{node: document.getElementById('a1')});
});