$(document).ready(function () {
	var metroInitGDP = function(){
		
/*		{Year: '2001', 'Little Rock-North Little Rock-Conway': '22066', 'Fayetteville-Springdale-Rogers': '10911', 'Fort Smith': '6772', 'Jonesboro': '2836', 'Hot Springs': '1952', 'Pine Bluff': '2434'},
		{Year: '2002', 'Little Rock-North Little Rock-Conway': '23300', 'Fayetteville-Springdale-Rogers': '11953', 'Fort Smith': '7051', 'Jonesboro': '2933', 'Hot Springs': '2010', 'Pine Bluff': '2487'},
		{Year: '2003', 'Little Rock-North Little Rock-Conway': '24144', 'Fayetteville-Springdale-Rogers': '13224', 'Fort Smith': '7517', 'Jonesboro': '3201', 'Hot Springs': '2097', 'Pine Bluff': '2600'},
		{Year: '2004', 'Little Rock-North Little Rock-Conway': '25383', 'Fayetteville-Springdale-Rogers': '14870', 'Fort Smith': '7973', 'Jonesboro': '3424', 'Hot Springs': '2241', 'Pine Bluff': '2779'},
		{Year: '2005', 'Little Rock-North Little Rock-Conway': '27199', 'Fayetteville-Springdale-Rogers': '16134', 'Fort Smith': '8717', 'Jonesboro': '3566', 'Hot Springs': '2405', 'Pine Bluff': '2843'},
		{Year: '2006', 'Little Rock-North Little Rock-Conway': '29131', 'Fayetteville-Springdale-Rogers': '17179', 'Fort Smith': '9441', 'Jonesboro': '3725', 'Hot Springs': '2533', 'Pine Bluff': '3003'},
		{Year: '2007', 'Little Rock-North Little Rock-Conway': '32269', 'Fayetteville-Springdale-Rogers': '17662', 'Fort Smith': '9362', 'Jonesboro': '3760', 'Hot Springs': '2573', 'Pine Bluff': '2991'},
		{Year: '2008', 'Little Rock-North Little Rock-Conway': '32196', 'Fayetteville-Springdale-Rogers': '18585', 'Fort Smith': '9682', 'Jonesboro': '3953', 'Hot Springs': '2626', 'Pine Bluff': '3035'},
		{Year: '2009', 'Little Rock-North Little Rock-Conway': '32771', 'Fayetteville-Springdale-Rogers': '18350', 'Fort Smith': '9089', 'Jonesboro': '4016', 'Hot Springs': '2575', 'Pine Bluff': '3032'},
 */	
		/* input data */
		var data = [
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
			title: "Gross Domestic Product",
			description: "2001 - 2015 (Millions of Dollars)",
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
				valuesOnTicks: true,
				labels: {
					formatSettings: {
						prefix: "$",
						thousandsSeparator: ",",
						decimalPlaces: 0
					}
				},
				toolTipFormatSettings: {
					prefix: "$",
					thousandsSeparator: ",",
					decimalPlaces: 0
				}
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
		$('#chartContainerMetro').jqxChart(chartSettings);
	}

	var metroInitGrowth = function(){
			
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
			title: "GDP Growth Index",
			description: "2001 - 2015 (2001=100)",
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
		$('#chartContainerMetro').jqxChart(chartSettings);
	}	
	
	var metroInitPie = function(){
		
		/* input data */
		var data = [
		{2001: '0.469779225', City: 'Little Rock-North Little Rock-Conway'},
		{2001: '0.232292265', City: 'Fayetteville-Springdale-Rogers'},
		{2001: '0.144174065', City: 'Fort Smith'},
		{2001: '0.06037768', City: 'Jonesboro'},
		{2001: '0.041557557', City: 'Hot Springs'},
		{2001: '0.051819208', City: 'Pine Bluff'}];
		
		/* data adapter settings */
		var dataAdapter = new $.jqx.dataAdapter({
			localdata: data,
			datafields: [
				{name: "City", type: "string"},
				{name: "2001", type: "number"}
			]
		});

		/* chart settings */
		var chartSettings = {
			source: dataAdapter,
			title: "Relative Shares of GDP",
			description: "2001",
			/*legendLayout: {
				left: 70,
				top: 160,
				width: 300,
				height: 200,
				flow: "vertical"
			},*/
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
				dataField: "City",
				valuesOnTicks: false
			},
			valueAxis: {
				valuesOnTicks: true
			},
			seriesGroups: [			
				{
					type: "pie",
					series: [					
						{
							dataField: "2001",
							displayText: "City",
							labels: {
								visible: true
							},
							formatFunction: function (value) {
								if (isNaN(value)) return value;
								return parseFloat(Math.round(value * 100)).toFixed(0) + '%';
							},
							radius: 120,
							enableSeriesToggle: false
						}
					]
				}
			]
		}
		
		/* create chart in the container element */
		$('#chartContainerMetro').jqxChart(chartSettings);		
	}
	$("#selRptMetro").on("change",function(){
		selectReportMetro($("#selRptMetro  option:selected").val());
	})
	var selectReportMetro = function(rpt){
		switch(rpt){
			
			case "metroGDP":
			  metroInitGDP();
			break;
			case "metroGDPGrowth":
			  metroInitGrowth();
			break;
			case "metroGDPShares":
			  metroInitPie();
			break;
		}
		$('#chartContainerMetro').jqxChart('refresh');
	}	
	
	var stateInitGDP = function(){
/*	{Year: '1997', Arkansas: '60417', Louisiana: '117982', Mississippi: '58433', Missouri: '163526', Oklahoma: '79915', Tennessee: '155195', Texas: '614436'},
	{Year: '1998', Arkansas: '62275', Louisiana: '120493', Mississippi: '61112', Missouri: '170692', Oklahoma: '81672', Tennessee: '166282', Texas: '648156'},
	{Year: '1999', Arkansas: '66715', Louisiana: '126357', Mississippi: '63993', Missouri: '178605', Oklahoma: '84642', Tennessee: '174940', Texas: '683578'},
	{Year: '2000', Arkansas: '68809', Louisiana: '133200', Mississippi: '65937', Missouri: '188736', Oklahoma: '91421', Tennessee: '181216', Texas: '741115'},
 	{Year: '2001', Arkansas: '70849', Louisiana: '138911', Mississippi: '67445', Missouri: '192227', Oklahoma: '97441', Tennessee: '185896', Texas: '776521'},
	{Year: '2002', Arkansas: '74097', Louisiana: '140451', Mississippi: '69231', Missouri: '197222', Oklahoma: '99459', Tennessee: '194846', Texas: '788944'},
	{Year: '2003', Arkansas: '78774', Louisiana: '155942', Mississippi: '73814', Missouri: '205164', Oklahoma: '105899', Tennessee: '204167', Texas: '833469'},
	{Year: '2004', Arkansas: '85261', Louisiana: '171375', Mississippi: '77778', Missouri: '215606', Oklahoma: '113929', Tennessee: '218126', Texas: '909635'},
	{Year: '2005', Arkansas: '90319', Louisiana: '199683', Mississippi: '81678', Missouri: '224091', Oklahoma: '125243', Tennessee: '227505', Texas: '990054'},
	{Year: '2006', Arkansas: '94839', Louisiana: '207507', Mississippi: '86291', Missouri: '232795', Oklahoma: '137584', Tennessee: '239017', Texas: '1088295'},
	{Year: '2007', Arkansas: '97384', Louisiana: '209455', Mississippi: '91422', Missouri: '240613', Oklahoma: '145693', Tennessee: '243001', Texas: '1179214'},
	{Year: '2008', Arkansas: '99838', Louisiana: '218781', Mississippi: '97134', Missouri: '250088', Oklahoma: '156398', Tennessee: '249052', Texas: '1243387'},
	{Year: '2009', Arkansas: '98020', Louisiana: '210879', Mississippi: '93669', Missouri: '250436', Oklahoma: '143648', Tennessee: '246541', Texas: '1166516'},
*/		
	/* input data */
	var data = [
	{Year: '2010', Arkansas: '102951', Louisiana: '232596', Mississippi: '95810', Missouri: '255865', Oklahoma: '149913', Tennessee: '252478', Texas: '1243398'},
	{Year: '2011', Arkansas: '107287', Louisiana: '236248', Mississippi: '96968', Missouri: '257225', Oklahoma: '163868', Tennessee: '263175', Texas: '1344733'},
	{Year: '2012', Arkansas: '109226', Louisiana: '241378', Mississippi: '101351', Missouri: '266245', Oklahoma: '174305', Tennessee: '278298', Texas: '1437893'},
	{Year: '2013', Arkansas: '114456', Louisiana: '234608', Mississippi: '103523', Missouri: '275911', Oklahoma: '186007', Tennessee: '288012', Texas: '1536472'},
	{Year: '2014', Arkansas: '117922', Louisiana: '242102', Mississippi: '104284', Missouri: '282034', Oklahoma: '196767', Tennessee: '298865', Texas: '1614127'},
	{Year: '2015', Arkansas: '118677', Louisiana: '238075', Mississippi: '105871', Missouri: '292718', Oklahoma: '188011', Tennessee: '316659', Texas: '1611189'},
	{Year: '2016', Arkansas: '120689', Louisiana: '235109', Mississippi: '107680', Missouri: '300891', Oklahoma: '182937', Tennessee: '328770', Texas: '1616801'}];
	
	/* data adapter settings */
	var dataAdapter = new $.jqx.dataAdapter({
		localdata: data,
		datafields: [
			{name: "Year", type: "number"},
			{name: "Arkansas", type: "number"},
			{name: "Louisiana", type: "number"},
			{name: "Mississippi", type: "number"},
			{name: "Missouri", type: "number"},
			{name: "Oklahoma", type: "number"},
			{name: "Tennessee", type: "number"},
			{name: "Texas", type: "number"}
		]
	});

	/* chart settings */
	var chartSettings = {
		source: dataAdapter,
		title: "Gross Domestic Product",
		description: "2001 - 2016 (Millions of Dollars)",
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
			valuesOnTicks: true,
			labels: {
				formatSettings: {
					prefix: "$",
					thousandsSeparator: ",",
					decimalPlaces: 0
				}
			},
			toolTipFormatSettings: {
				prefix: "$",
				thousandsSeparator: ","
			}
		},
		seriesGroups: [			
			{
				type: "column",
				series: [					
					{
						dataField: "Arkansas"
					},
					{
						dataField: "Louisiana"
					},
					{
						dataField: "Mississippi"
					},
					{
						dataField: "Missouri"
					},
					{
						dataField: "Oklahoma"
					},
					{
						dataField: "Tennessee"
					},
					{
						dataField: "Texas"
					}
				]
			}
		]
	}
	
	/* create chart in the container element */
	$('#chartContainer').jqxChart(chartSettings);	

	}

	var stateInitGrowth = function(){
			
	/* input data */
	var data = [
	{Year: '2010', Arkansas: '100', Louisiana: '100', Mississippi: '100', Missouri: '100', Oklahoma: '100', Tennessee: '100', Texas: '100'},
	{Year: '2011', Arkansas: '104.2117124', Louisiana: '101.5701044', Mississippi: '101.2086421', Missouri: '100.5315303', Oklahoma: '109.3087324', Tennessee: '104.2368048', Texas: '108.1498442'},
	{Year: '2012', Arkansas: '106.0951326', Louisiana: '103.7756453', Mississippi: '105.7833212', Missouri: '104.0568268', Oklahoma: '116.2707704', Tennessee: '110.2266336', Texas: '115.6422159'},
	{Year: '2013', Arkansas: '111.1752193', Louisiana: '100.8650192', Mississippi: '108.0503079', Missouri: '107.8346003', Oklahoma: '124.0766311', Tennessee: '114.0740975', Texas: '123.5704095'},
	{Year: '2014', Arkansas: '114.5418694', Louisiana: '104.0869147', Mississippi: '108.8445882', Missouri: '110.2276591', Oklahoma: '131.2541274', Tennessee: '118.3726899', Texas: '129.8157951'},
	{Year: '2015', Arkansas: '115.275228', Louisiana: '102.3555865', Mississippi: '110.5009915', Missouri: '114.4032986', Oklahoma: '125.4134064', Tennessee: '125.4204327', Texas: '129.5795071'},
	{Year: '2016', Arkansas: '117.2295558', Louisiana: '101.0804141', Mississippi: '112.3891034', Missouri: '117.5975612', Oklahoma: '122.0287767', Tennessee: '130.2172863', Texas: '130.0308509'}];
	
	/* data adapter settings */
	var dataAdapter = new $.jqx.dataAdapter({
		localdata: data,
		datafields: [
			{name: "Year", type: "number"},
			{name: "Arkansas", type: "number"},
			{name: "Louisiana", type: "number"},
			{name: "Mississippi", type: "number"},
			{name: "Missouri", type: "number"},
			{name: "Oklahoma", type: "number"},
			{name: "Tennessee", type: "number"},
			{name: "Texas", type: "number"}
		]
	});

	/* chart settings */
	var chartSettings = {
		source: dataAdapter,
		title: "GDP Growth Index",
		description: "2010 - 2016 (2010 = 100)",
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
			valuesOnTicks: true,
			toolTipFormatSettings: {
				thousandsSeparator: ","
			}
		},
		seriesGroups: [			
			{
				type: "line",
				series: [					
					{
						dataField: "Arkansas"
					},
					{
						dataField: "Louisiana"
					},
					{
						dataField: "Mississippi"
					},
					{
						dataField: "Missouri"
					},
					{
						dataField: "Oklahoma"
					},
					{
						dataField: "Tennessee"
					},
					{
						dataField: "Texas"
					}
				]
			}
		]
	}
	
	/* create chart in the container element */
	$('#chartContainer').jqxChart(chartSettings);
	}	
	
	var stateInitPie = function(){
		
		/* input data */
		var data = [
		{2016: '0.558890337', City: 'Texas'},
		{2016: '0.113648109', City: 'Tennessee'},
		{2016: '0.10401099',  City: 'Missouri'},
		{2016: '0.081271689', City: 'Louisiana'},
		{2016: '0.063237047', City: 'Oklahoma'},
		{2016: '0.041719368', City: 'Arkansas'},
		{2016: '0.037222461', City: 'Mississippi'}];
		                  
		/* data adapter settings */
		var dataAdapter = new $.jqx.dataAdapter({
			localdata: data,
			datafields: [
				{name: "City", type: "string"},
				{name: "2016", type: "number"}
			]
		});

		/* chart settings */
		var chartSettings = {
			source: dataAdapter,
			title: "Relative Shares of GDP",
			description: "2016",
			/*legendLayout: {
				left: 70,
				top: 160,
				width: 300,
				height: 200,
				flow: "vertical"
			},*/
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
				dataField: "City",
				valuesOnTicks: false
			},
			valueAxis: {
				valuesOnTicks: true
			},
			seriesGroups: [			
				{
					type: "pie",
					series: [					
						{
							dataField: "2016",
							displayText: "City",
							labels: {
								visible: true
							},
							formatFunction: function (value) {
								if (isNaN(value)) return value;
								return parseFloat(Math.round(value * 100)).toFixed(0) + '%';
							},
							radius: 120,
							enableSeriesToggle: false
						}
					]
				}
			]
		}
		
		/* create chart in the container element */
		$('#chartContainer').jqxChart(chartSettings);		
	}
	
	var selectReport = function(rpt){
		switch(rpt){
			
			case "GDP":
			  stateInitGDP();
			break;
			case "GDPGrowth":
			  stateInitGrowth();
			break;
			case "GDPShares":
			  stateInitPie();
			break;
		}
		$('#chartContainer').jqxChart('refresh');
	}
	$("#selRpt").on("change",function(){
		selectReport($("#selRpt  option:selected").val());
	})
	//initGrowth();
	//initPie();
	//initGDP();	
		calcite.bus.on('tabs:active', function (options) {
		  //console.log(options.active.id) // => "top-nav"
			switch (options.active.id) {
				case "1":
				  selectReport($("#selRpt  option:selected").val());
				break;
				case "2":
					selectReportMetro($("#selRptMetro  option:selected").val());
				break;
				default:
				break;
			}			  
		});	
		calcite.bus.emit('accordion:toggle',{node: document.getElementById('a1')});	
});