
<!doctype html>
<!--[if lt IE 9]>  <html class="ie lt-ie9 ie8"> <![endif]-->
<!--[if IE 9]>     <html class="ie ie9"> <![endif]-->
<!--[if !IE]><!--> <html> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>Arkanstats Dashboard</title>
    <link rel="shortcut icon" href="img/favicon.ico">
    <!-- get calcite-web css from the cdn (use latest version) -->
    <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.0.0-rc.7/css/calcite-web.min.css">
	<link rel='stylesheet' href='/jqwidgets/jqwidgets/styles/jqx.base.css' type='text/css'/>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

	<!-- This code was auto-generated based on the selected settings -->
	<!-- It has a dependency on jQWidgets ver.3.7 or later -->

	<script type='text/javascript' src='/jqwidgets/jqwidgets/jqxcore.js'></script>
	<script type='text/javascript' src='/jqwidgets/jqwidgets/jqxdata.js'></script>
	<script type='text/javascript' src='/jqwidgets/jqwidgets/jqxdraw.js'></script>
	<script type='text/javascript' src='/jqwidgets/jqwidgets/jqxchart.core.js'></script>
    <!--[if lt IE 9]>
      <script src="/assets/javascripts/libs/selectivizr.js"></script>
      <script src="/assets/javascripts/libs/html5shiv.js"></script>
    <![endif]-->
	<style>
		.accordion-title {
			background-color: #ffffff;
		}
		table th, table td {
			font-weight: 300;
			border-left: 0px;
			border-right: 0px;
			padding: 0;
		}		
	</style>	
  </head>
  <body>
    <div class="wrapper">
      <!-- top navigation -->
      <!--header class="top-nav">
        <div class="grid-container">
          <div class="column-24">
            <a href="#" class="top-nav-title">Arkanstats Dashboard</a>
            <nav class="top-nav-list" role="navigation" aria-labelledby="topnav">
              <a class="top-nav-link is-active" href="#">Economy</a>
              <a class="top-nav-link" href="#">Infrastructure</a>
              <a class="top-nav-link" href="#">Education and Human Capital</a>
              <a class="top-nav-link" href="#">Quality of Life and Place</a>
              <a class="top-nav-link" href="#">Demographics</a>
            </nav>
          </div>
        </div>
      </header-->

      <!-- banner -->
      <div class="panel panel-dark-blue trailer-2">
        <div class="grid-container">
          <div class="column-24">
            <a href="index.html"><h1 class="sub-nav-title  text-white">Arkanstats Dashboard</h1></a>
			<nav class="sub-nav-list" role="navigation" aria-labelledby="subnav">
			  <a href="Economy.html" class="sub-nav-link  is-active ">Economy</a>
			  <a href="Infrastructure.html" class="sub-nav-link ">Infrastructure</a>
			  <a href="Education.html" class="sub-nav-link ">Education and Human Capital</a>
			  <a href="Quality.html" class="sub-nav-link ">Quality of Life and Place</a>
			  <a href="Demographics.html" class="sub-nav-link ">Demographics</a>
			</nav>         
		  </div>
        </div>
      </div>

      <!-- main-content -->
      <div class="grid-container">

        <!-- side navigation -->
        <div class="column-4">
			<aside class="side-nav" aria-role="complementary">
            <h4 class="side-nav-title text-blue">Economy</h4>			
				<aside class="js-accordion accordion">
				  <div class="accordion-section"  id="a1">
					<h4 class="accordion-title">
					  <span class="accordion-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32" class="svg-icon"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg>
					  </span>
					  Output
					</h4>
					<div class="accordion-content">
						<nav role="navigation" aria-labelledby="sidenav">
						  <a href="#" class="side-nav-link padding-left-2  is-active">GDP</a>
						  <!--a href="#" class="side-nav-link padding-left-2  is-active">By metro </a-->
						</nav>				  
					</div>
				  </div>
				  <div class="accordion-section">
					<h4 class="accordion-title">
					  <span class="accordion-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32" class="svg-icon"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg>
					  </span>
					  Income
					</h4>
					<div class="accordion-content">
						<nav role="navigation" aria-labelledby="sidenav">
						  <a href="EconomyIncomePersonal.html" class="side-nav-link padding-left-2">Personal</a>
						  <a href="#" class="side-nav-link padding-left-2">Per capita</a>
						</nav>				  
					</div>
				  </div>
				  <div class="accordion-section">
					<h4 class="accordion-title">
					  <span class="accordion-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32" class="svg-icon"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg>
					  </span>
					  Employment
					</h4>
					<div class="accordion-content">
						<nav role="navigation" aria-labelledby="sidenav">
						  <a href="#" class="side-nav-link padding-left-2">Link 1</a>
						  <a href="#" class="side-nav-link padding-left-2">Link 2</a>
						</nav>				  
					</div>
				  </div>
				  <div class="accordion-section">
					<h4 class="accordion-title">
					  <span class="accordion-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32" class="svg-icon"><path d="M28 9v5L16 26 4 14V9l12 12L28 9z"/></svg>
					  </span>
					  Spending
					</h4>
					<div class="accordion-content">
						<nav role="navigation" aria-labelledby="sidenav">
						  <a href="#" class="side-nav-link padding-left-2">PCE</a>
						  <a href="#" class="side-nav-link padding-left-2">Arkansas Tax Sales</a>
						</nav>				  
					</div>
				  </div>
				</aside>			
				<!--nav role="navigation" aria-labelledby="sidenav">
				  <a href="#" class="side-nav-link">Population Components</a>
				  <a href="#" class="side-nav-link">Population Characteristics</a>
				  <a href="#" class="side-nav-link">Projections</a>
				</nav-->
			  </aside>
			 </aside>	  
		</div>
        <!-- main content list -->
        <div class="column-19 pre-1">
		
			<div class=" trailer-2 js-tab-group">
			  <nav class="tab-nav">
				<a class="tab-title is-active js-tab" id="0">Analysis (optional)</a>
				<a class="tab-title js-tab" id="1">Arkansas MSAs</a>
				<!--a class="tab-title js-tab" id="2">Another Tab</a-->
			  </nav>
			  <section class="tab-contents">
				<article class="tab-section js-tab-section is-active">
					<p><div class="pre-1">
						<h2 class="leader-1">GDP Analysis Headline</h2>
						<div class="column-17 center-column">
							<div class="panel modifier-class">
										  
							  <p class="trailer-0"><img src="img/Analysis.png"></p>
							</div>
						</div>
						<h2 class="leader-1">What does this mean?</h2>
						  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Maecenas faucibus mollis interdum.</p>
						  <h2>How do we measure this?</h2>
						  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Maecenas faucibus mollis interdum.</p>
					</div>      
				</p></article>
				<article class="tab-section js-tab-section">
				  <p><div class="pre-1">
						<h2 class="leader-1">Arkansas MSAs</h2>
						<div class="column-15 center-column">
							<div class="panel modifier-class">										  
							  <p class="trailer-0"><div id="chartContainer" style='height: 400px; width: 100%;'></div></p>
							</div>
							<div class="panel modifier-class">										  
							  <div id="chartContainer1" style='height: 400px; width: 100%;'></div>
							</div>
							<div class="panel modifier-class">										  
							  <p class="trailer-0"><div id="pieChartContainer" style='height: 400px; width: 100%;'></div></p>
							</div>
						</div>
					  </div>
				  </p>
				</article>
				<!--article class="tab-section js-tab-section">
				  <p>Tab 3 section</p>
				</article-->
			  </section>
			</div>		

        </div>
	</div>
    <div class="footer padding-trailer-1 text-darkest-gray" role="contentinfo">
      <div class="grid-container">
        <!-- footer section 1 -->
        <div class="column-5 pre-2">
          <h6 class="font-size--2 avenir-bold">Header 2</h6>
          <ul class="list-plain font-size--2">
            <li><a class="link-darker-gray" href="#">Link 1</a></li>
            <li><a class="link-darker-gray" href="#">Link 2</a></li>
            <li><a class="link-darker-gray" href="#">Link 3</a></li>
          </ul>
        </div>

        <!-- footer section 2 -->
        <div class="column-5 pre-1">
          <h6 class="font-size--2 avenir-bold">Header 2</h6>
          <ul class="list-plain font-size--2">
            <li><a class="link-darker-gray" href="#">Link 1</a></li>
            <li><a class="link-darker-gray" href="#">Link 2</a></li>
            <li><a class="link-darker-gray" href="#">Link 3</a></li>
          </ul>
        </div>

        <!-- footer section 3 -->
        <div class="column-5 pre-1">
          <h6 class="font-size--2 avenir-bold">Header 3</h6>
          <ul class="list-plain font-size--2">
            <li><a class="link-darker-gray" href="#">Link 1</a></li>
            <li><a class="link-darker-gray" href="#">Link 2</a></li>
            <li><a class="link-darker-gray" href="#">Link 3</a></li>
          </ul>
        </div>

        <!-- footer section 4 -->
        <div class="column-4 pre-1">
          <h6 class="font-size--2 avenir-bold">Header 4</h6>
          <ul class="list-plain font-size--2">
            <li><a class="link-darker-gray" href="#">Link 1</a></li>
            <li><a class="link-darker-gray" href="#">Link 2</a></li>
            <li><a class="link-darker-gray" href="#">Link 3</a></li>
          </ul>
        </div>

    </div>
  </div>
  </div>
    <!-- get calcite-web js from the cdn (use latest version) -->
    <script src="https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.0.0-rc.7/js/calcite-web.min.js"></script>
    <!-- interactive patterns need to be initialized -->
    <script>
       calcite.init()
    </script>
	<script src="js/EconomyOutputByMetro.js"></script>
  </body>
</html>