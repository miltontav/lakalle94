// Referencia de la API de Velo: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Escribe tu código de Javascript aquí usando la API de marco de Velo 

	// Escribe hola mundo:
	// console.log("¡Hola mundo!");

	// Llama las funciones en los elementos de la página, por ejemplo:
	// $w("#button1").label = "¡Haz clic aquí!";

	// Haz clic en "Ejecutar", o ve a la vista previa de tu sitio, para ejecutar el código

});	<!DOCTYPE html>
	
	
	<html lang="es" class="mdc-typography">
	
	<head>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<meta property="fb:app_id" content="413098772783042" />
	
	<meta name="description" content="Más de 300 emisoras de radio Dominicanas. Escuchar radio en vivo, gratis y online en radio-dominicana.com."/>
	
	<meta property="al:web:url" content="https://www.radio-dominicana.com" />
	<meta property="og:site_name" content="www.radio-dominicana.com">
	<meta property="og:title" content="Radios de la República Dominicana" />
	<meta property="og:url" content="https://www.radio-dominicana.com" />
	<meta property="og:description" content="Más de 300 emisoras de radio Dominicanas. Escuchar radio en vivo, gratis y online en radio-dominicana.com." />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Radios de la República Dominicana" />
	<meta name="twitter:url" content="https://www.radio-dominicana.com" />
	<meta name="twitter:description" content="Más de 300 emisoras de radio Dominicanas. Escuchar radio en vivo, gratis y online en radio-dominicana.com." />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
	
	<meta name="Author" content="appmind.technologies@gmail.com"/>
	
	<meta name="theme-color" content="#455A64"/>
	
	<meta property="og:type" content="website" />
	
	
	
	
	
	<link rel="canonical" href="https://www.radio-dominicana.com">
	<link rel="next" href="https://www.radio-dominicana.com?page=2" />
	
	
	
	
	
	<title>
	
	Radio Dominicana - Escuchar emisoras de radio dominicanas en vivo
	
	</title>
	
	
	
	<link rel="apple-touch-icon" sizes="180x180" href="https://cdn.mytuner.mobi/static/ctr/site/favicon/do/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="https://cdn.mytuner.mobi/static/ctr/site/favicon/do/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="https://cdn.mytuner.mobi/static/ctr/site/favicon/do/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<link rel="mask-icon" href="https://cdn.mytuner.mobi/static/ctr/site/favicon/do/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	
	
	
	
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-41201130-51"></script>
	<script>
	
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-41201130-51');
	
	
	</script>
	
	
	
	
	<link rel="preconnect" href="https://cdn.mytuner.mobi/">
	<link rel="preconnect" href="https://static.mytuner.mobi">
	
	<link rel="preconnect" href="http://metadata-api.mytuner.mobi">
	
	<link rel="dns-prefetch" href="//www.googletagservices.com">
	
	
	<link rel="dns-prefetch" href="https://tpc.googlesyndication.com">
	<link rel="dns-prefetch" href="https://fonts.googleapis.com">
	<link rel="dns-prefetch" href="https://fonts.gstatic.com">
	<link rel="dns-prefetch" href="https://ajax.googleapis.com">
	
	
	
	
	<link rel="stylesheet" href="https://cdn.mytuner.mobi/static/ctr/site/css/main.min.css?5e96444b" />
	
	
	
	
	
	
	<!-- CSS VARIABLES -->
	
	<style>
	:root {
	--mdc-theme-primary: #455A64;
	--mdc-theme-accent: #CFD8DC;
	--mdc-theme-background: #1C313A;
	--mdc-theme-text-primary-on-primary: #ffffff;
	--mdc-theme-text-secondary-on-primary: #cccccc;
	--mdc-theme-text-primary-on-accent: #000000;
	--mdc-theme-text-secondary-on-accent: #000000;
	--mdc-theme-text-primary-on-background: #ffffff;
	--mdc-theme-text-secondary-on-background: #cccccc;
	--hyperlink-main-color: #dc322f;
	}
	</style>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<script>
	function getTimings() {
	const performance = window.performance;
	const timings = performance.timing;
	const entries = performance.getEntriesByType("resource");
	
	console.log('Time Origin:', performance.timeOrigin);
	console.log('Connect Time:', timings.connectEnd - timings.connectStart);
	console.log('DOM Complete - Time Origin:', (timings.domComplete - performance.timeOrigin).toFixed(2));
	console.log('DOM Content Loaded Event End - Time Origin:', (timings.domContentLoadedEventEnd - performance.timeOrigin).toFixed(2));
	console.log('DOM Content Loaded Event Duration:', timings.domContentLoadedEventEnd - timings.domContentLoadedEventStart);
	console.log('DOM Interactive - DOM Loading:', timings.domInteractive - timings.domLoading);
	console.log('Domain Lookup Time:', timings.domainLookupEnd - timings.domainLookupStart);
	console.log('Fetch Start - Time Origin:', (timings.fetchStart - performance.timeOrigin).toFixed(2));
	console.log('Load Event Duration:', timings.loadEventEnd - timings.loadEventStart);
	console.log('Navigation Start - Time Origin:', (performance.timeOrigin - timings.navigationStart).toFixed(2));
	console.log('Redirect Time:', timings.redirectEnd - timings.redirectStart);
	console.log('Request Start - Time Origin:', (timings.requestStart - performance.timeOrigin).toFixed(2));
	console.log('Unload Event Duration:', timings.unloadEventEnd - timings.unloadEventStart);
	
	const pEntries = performance.getEntriesByType("paint");
	pEntries.forEach((entry) => {
	console.log(`The time to ${entry.name} was ${entry.startTime.toFixed(2)} milliseconds.`);
	});
	
	//const adRequests = entries.filter(entry => entry.name.includes('js'));
	entries.forEach((entry, index) => {
	console.log(`Resource Request ${index + 1}:`);
	console.log(' Name:', entry.name);
	console.log(' Start Time:', entry.startTime);
	console.log(' Duration:', entry.duration);
	console.log(' renderBlockingStatus:', entry.renderBlockingStatus);
	console.log(' Transfer Size:', entry.transferSize);
	});
	
	console.log('Total Resources Request:', entries.length);
	const totalResourceSize = entries.reduce((sum, entry) => sum + entry.transferSize, 0);
	console.log('Total Size of Resources Requests:', totalResourceSize);
	}
	/*
	window.addEventListener("load", function() { // IE9+
	setTimeout(function() {
	getTimings();
	}, 0);
	});
	*/
	</script>
	
	<!-- BLOCK FOR THE STYLES IN ALL PAGES -->
	
	
	
	
	</head>
	
	
	<body>
	
	
	<header id="top_menu">
	<div id="top_menu_alongator"></div>
	<nav id="top_menu_nav" class="mdc-tab-bar" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
	<a id="top_menu_radios_tab_a" class="mdc-tab active mdc-theme--text-primary-on-primary" href="/">
	<img src="https://cdn.mytuner.mobi/static/ctr/images/country/do.png" width="32" height="32" align="middle" alt="República Dominicana">
	<span id="top_menu_radios_tab_span" class="tab-icon-text active">Emisoras</span>
	</a>
	<a id="top_menu_podcasts_tab_a" class="mdc-tab inactive" href="/podcasts">
	<svg class="material-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V17c0 1.66 1.34 3 3 3h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1.71C5 6.45 7.96 3.11 11.79 3 15.76 2.89 19 6.06 19 10v2h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.66 0 3-1.34 3-3v-7c0-5.17-4.36-9.32-9.6-8.98z"/></svg>
	<span class="tab-icon-text">Podcasts</span>
	</a>
	
	<a id="top_menu_music_tab_a" class="mdc-tab inactive" href="/mi-lista">
	
	<svg class="material-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M10.9362672,18 C6.97607596,15.1247751 4.03131054,12.2707643 2.10197097,9.43796748 C-0.79203839,5.18877225 1.96715188,-2.88870437 10.9362672,3.18261329 L11.2035282,3.00472148 C19.9633332,-2.72613166 22.8029108,5.30185769 19.9053826,9.4965937 C17.9541851,12.3213318 14.96448,15.1558005 10.9362672,18 L10.9362672,18 L10.9362672,18 Z"/></svg>
	
	<span class="tab-icon-text secondary-span-color">Mi Lista</span>
	</a>
	
	<div id="top_menu_search_tab_div" class="mdc-tab inactive" onclick="openCloseSearch();">
	<svg class="material-icons" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
	<span class="tab-icon-text secondary-span-color">Búsqueda</span>
	</div>
	
	<form id='search_form2' class="mdc-textfield" action="/busca" method="get" display="none">
	<input id="top_menu_search_box2" type="text" name="q" class="primary-span-color" placeholder="Buscar radio o podcast" style="display: none;">
	</form>
	<svg id="search_submit2" onclick="submitSearchForm(true);" class="material-icons md-36 secondary-span-color search-button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" display="none"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
	</nav>
	</header>
	
	<div id="top_menu_search" style="display: none;">
	<div class="search-row" align="center">
	<svg class="material-icons search-cancel-button" aria-hidden="true" onclick="openCloseSearch();" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path opacity=".87" fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"/></svg>
	<form id='search_form' class="mdc-textfield" action="/busca" method="get">
	<input id="top_menu_search_box" type="text" name="q" class="primary-span-color" placeholder="Buscar radio o podcast">
	</form>
	<svg onclick="submitSearchForm(true);" class="material-icons md-36 secondary-span-color search-button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
	</div>
	</div>
	
	<div id="search_opacity_overlay" class="overlay" style="display: none;"></div>
	
	<div class="ad-box" style="position:fixed;top:0;left:0;" aria-hidden="true">&nbsp;</div>
	
	<!-- PAGES WILL INSERT HTML HERE -->
	
	<div class="main-content">
	<div class="filter-column mdc-elevation--z2">
	
	<div id="body_centered_ad">
	
	
	
	
	
	
	<!-- GAM 62660943/APPGEN_radiodr/home_mrec_desktop -->
	<div data-fuse="22895982720"></div>
	
	
	
	
	
	
	
	
	
	
	</div>
	
	
	<h3 class="collapse-controller mdc-typography--subheading1 primary-span-color no-select" data-collapse="collapse_1" data-exclusive-div="false">
	Descubrir emisoras por género
	<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/></svg>
	</h3>
	<div id="collapse_1" class="collapsible collapsed" style="height: 0px;">
	
	<a href="/radio/antiguas-exitos-clasicos-155" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Antiguas / Éxitos clásicos
	</a>
	
	<a href="/radio/metal-153" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Metal
	</a>
	
	<a href="/radio/descubrir-180" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Descubrir
	</a>
	
	<a href="/radio/rock-156" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Rock
	</a>
	
	<a href="/radio/musica-pop-152" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Música pop
	</a>
	
	<a href="/radio/jazz-blues-157" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Jazz / Blues
	</a>
	
	<a href="/radio/country-158" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Country
	</a>
	
	<a href="/radio/dance-electronica-160" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Dance / Electrónica
	</a>
	
	<a href="/radio/clasica-159" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Clásica
	</a>
	
	<a href="/radio/latino-caribe-162" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Latino / Caribe
	</a>
	
	<a href="/radio/noticias-165" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Noticias
	</a>
	
	<a href="/radio/chillout-lounge-161" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Chillout / Lounge
	</a>
	
	<a href="/radio/rb-hip-hop-163" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	R&amp;B / Hip Hop
	</a>
	
	<a href="/radio/anos-80-90-154" class="mdc-button--primary mdc-button mdc-button--raised radio-filter-button mdc-typography--caption">
	Años 80 / 90
	</a>
	
	</div>
	
	
	<h3 class="collapse-controller mdc-typography--subheading1 primary-span-color no-select" data-collapse="collapse_2" data-exclusive-div="false">
	Elige la ciudad de la radio
	<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"/></svg>
	</h3>
	<div id="collapse_2" class="collapsible " >
	<a href="/" class="mdc-button mdc-button--raised mdc-button--accent filter-button mdc-typography--caption radio-filter-button">
	Todos
	</a>
	
	<a href="/radio/azua" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Azua
	</a>
	
	<a href="/radio/baoruco" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Baoruco
	</a>
	
	<a href="/radio/barahona" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Barahona
	</a>
	
	<a href="/radio/dajabon" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Dajabón
	</a>
	
	<a href="/radio/distrito-de-samana" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Distrito de Samana
	</a>
	
	<a href="/radio/distrito-de-santo-domingo" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Distrito de Santo Domingo
	</a>
	
	<a href="/radio/duarte" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Duarte
	</a>
	
	<a href="/radio/el-seibo" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	El Seíbo
	</a>
	
	<a href="/radio/elias-pina" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Elías Piña
	</a>
	
	<a href="/radio/espaillat" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Espaillat
	</a>
	
	<a href="/radio/hato-mayor" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Hato Mayor
	</a>
	
	<a href="/radio/hermanas-mirabal" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Hermanas Mirabal
	</a>
	
	<a href="/radio/independencia" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Independencia
	</a>
	
	<a href="/radio/la-altagracia" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	La Altagracia
	</a>
	
	<a href="/radio/la-romana" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	La Romana
	</a>
	
	<a href="/radio/la-vega" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	La Vega
	</a>
	
	<a href="/radio/maria-trinidad-sanchez" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	María Trinidad Sánchez
	</a>
	
	<a href="/radio/monsenor-nouel" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Monseñor Nouel
	</a>
	
	<a href="/radio/monte-cristi" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Monte Cristi
	</a>
	
	<a href="/radio/monte-plata" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Monte Plata
	</a>
	
	<a href="/radio/pedernales" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Pedernales
	</a>
	
	<a href="/radio/peravia" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Peravia
	</a>
	
	<a href="/radio/puerto-plata" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Puerto Plata
	</a>
	
	<a href="/radio/san-cristobal" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	San Cristóbal
	</a>
	
	<a href="/radio/san-jose-de-ocoa" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	San José de Ocoa
	</a>
	
	<a href="/radio/san-juan" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	San Juan
	</a>
	
	<a href="/radio/san-pedro-de-macoris" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	San Pedro de Macorís
	</a>
	
	<a href="/radio/santiago" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Santiago
	</a>
	
	<a href="/radio/santiago-rodriguez" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Santiago Rodríguez
	</a>
	
	<a href="/radio/santo-domingo" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Santo Domingo
	</a>
	
	<a href="/radio/sanchez-ramirez" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Sánchez Ramírez
	</a>
	
	<a href="/radio/valverde" class="mdc-button mdc-button--raised mdc-button--primary radio-filter-button mdc-typography--caption">
	Valverde
	</a>
	
	</div>
	
	
	<div id="team_ad" class="sudoku-ad"></div>
	
	</div>
	<div class="content-column">
	<div class="ad-top-banner">
	
	
	
	
	
	<!-- GAM 62660943/APPGEN_radiodr/home_header_desktop -->
	<div data-fuse="22896561842"></div>
	
	
	
	
	
	
	
	
	
	
	
	</div>
	
	<h1 class="mdc-typography--display1 primary-span-color">
	Radios de la República Dominicana
	</h1>
	<div id="last-update" data-timestamp="U"></div>
	
	<div class="mdc-grid-list mdc-grid-list--with-icon-align-start">
	<ul id="radio_list_ul_1" class="mdc-grid-list__tiles">
	
	
	<li id="radio_list_li_1" class="mdc-grid-tile" >
	<a href="/alofoke-993-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/788/alofoke-993-fm.0f2e1644.jpg" alt="ALOFOKE 99.3 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">ALOFOKE 99.3 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_2" class="mdc-grid-tile" >
	<a href="/z101">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/HejwkPsrmx.jpg" alt="Z 101.3 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Z 101.3 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_3" class="mdc-grid-tile" >
	<a href="/kq-945">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/x5lzcew2g8vk.jpg" alt="KQ 94.5 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">KQ 94.5 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_4" class="mdc-grid-tile" >
	<a href="/radio-amanecer">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/5JcLyNPGQX.jpg" alt="Radio Amanecer Internacional" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Amanecer Internacional</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_5" class="mdc-grid-tile" >
	<a href="/primera-881-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/cbflqg8tugfw.png" alt="Primera 88.1 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Primera 88.1 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_6" class="mdc-grid-tile" >
	<a href="/monumental-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/Qdr8e9HXJk.jpg" alt="Monumental 100.3 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Monumental 100.3 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_7" class="mdc-grid-tile" >
	<a href="/salsa-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/34zgpcj49zes.png" alt="Salsa Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Salsa Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_8" class="mdc-grid-tile" >
	<a href="/lluvia-romantica">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/s3hWWR4VWD.jpg" alt="Lluvia Romántica" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Lluvia Romántica</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_9" class="mdc-grid-tile" >
	<a href="/intima-fm-santiago">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content" src="https://static.mytuner.mobi/media/radios-150px/840/intima-fm-santiago.672ca847.png" alt="Íntima FM Santiago" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Íntima FM Santiago</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_10" class="mdc-grid-tile" >
	<a href="/top-bachata-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/835/top-bachata-radio.a4a17c63.png" alt="Top Bachata Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Top Bachata Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_11" class="mdc-grid-tile" >
	<a href="/fuego-90">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/3n7vbnXR7H.png" alt="Fuego 90 La Salsera" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Fuego 90 La Salsera</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_12" class="mdc-grid-tile" >
	<a href="/super-k-1007">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/y8DASBbNYQ.png" alt="Super K 100.7 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Super K 100.7 FM</span>
	</span>
	</a>
	</li>
	
	
	
	</ul>
	
	<ul id="radio_list_ul_2" class="mdc-grid-list__tiles">
	
	
	
	<li id="radio_list_li_14" class="mdc-grid-tile" >
	<a href="/independencia-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/zzbhad4gunne.png" alt="Independencia FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Independencia FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_15" class="mdc-grid-tile" >
	<a href="/disco-106">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/028/disco-106.a78483a5.jpg" alt="Disco 106" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Disco 106</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_16" class="mdc-grid-tile" >
	<a href="/enamorada-999">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/pc4egs7c3mw3.png" alt="Enamorada 99.9 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Enamorada 99.9 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_17" class="mdc-grid-tile" >
	<a href="/turbo-98">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/589/turbo-98.1306dc9b.jpg" alt="Turbo 98.3 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Turbo 98.3 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_18" class="mdc-grid-tile" >
	<a href="/concierto-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/rjpygqcrh2fk.jpg" alt="Concierto 93.1 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Concierto 93.1 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_19" class="mdc-grid-tile" >
	<a href="/ritmo-965">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/pRPVwAR3n2.png" alt="Ritmo 96.5 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Ritmo 96.5 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_20" class="mdc-grid-tile" >
	<a href="/radio-dial-670-am">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/CDYxjWwtKV.png" alt="Radio Dial 670 AM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Dial 670 AM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_21" class="mdc-grid-tile" >
	<a href="/radio-recuerdos-rd">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/tp2mdfny94xs.png" alt="Radio Recuerdos RD" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Recuerdos RD</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_22" class="mdc-grid-tile" >
	<a href="/bachata-hit-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/e8DPRa9sHm.jpg" alt="Bachata Hit Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Bachata Hit Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_23" class="mdc-grid-tile" >
	<a href="/suave-1073">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/gsfgvkguj4gf.png" alt="Suave 107 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Suave 107 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_24" class="mdc-grid-tile" >
	<a href="/cdn-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/rrk4uznel9jc.png" alt="CDN Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">CDN Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_25" class="mdc-grid-tile" >
	<a href="/top-cristiano-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/4tTnWJgj7e.jpg" alt="Top Cristiano Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Top Cristiano Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_26" class="mdc-grid-tile" >
	<a href="/radio-ven-1055-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/972/radio-ven-1055-fm.26ed497a.png" alt="Radio VEN 105.5 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio VEN 105.5 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_27" class="mdc-grid-tile" >
	<a href="/caliente-104">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/bjennqxerusc.png" alt="Caliente 104.1 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Caliente 104.1 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_28" class="mdc-grid-tile" >
	<a href="/la-913">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/857/la-913.60900b0a.png" alt="La 91.3 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">La 91.3 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_29" class="mdc-grid-tile" >
	<a href="/disco-889">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/SNMmgrjhCA.png" alt="Disco 88.9 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Disco 88.9 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_30" class="mdc-grid-tile" >
	<a href="/trespatines">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/069/trespatines.6af9d967.png" alt="Trespatines Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Trespatines Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_31" class="mdc-grid-tile" >
	<a href="/renuevo-897">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/667/renuevo-897.a35ac579.jpg" alt="Renuevo FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Renuevo FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_32" class="mdc-grid-tile" >
	<a href="/escandalo-1025">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/hjrtwxvsh3ge.jpg" alt="Escandalo 102" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Escandalo 102</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_33" class="mdc-grid-tile" >
	<a href="/mortal-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/fx8yyq35vlrj.png" alt="Mortal FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Mortal FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_34" class="mdc-grid-tile" >
	<a href="/sabor-a-merengue">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/fhwnavjyhq7b.jpeg" alt="Sabor a Merengue" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Sabor a Merengue</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_35" class="mdc-grid-tile" >
	<a href="/pura-vida-929-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/sehymqWsJf.png" alt="Pura Vida 92.9 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Pura Vida 92.9 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_36" class="mdc-grid-tile" >
	<a href="/hits-921">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/Z8ADCjrwEu.webp" alt="HITS 92.1 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">HITS 92.1 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_37" class="mdc-grid-tile" >
	<a href="/bachata">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/213/bachata.4ae89a4a.png" alt="Radio Bachata" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Bachata</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_38" class="mdc-grid-tile" >
	<a href="/radio-cielo-vida">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/hm2fMjvqrq.jpg" alt="Cielo Vida Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Cielo Vida Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_39" class="mdc-grid-tile" >
	<a href="/panorama-969">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/134/panorama-969.e75a7c0f.jpg" alt="Panorama 96.9" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Panorama 96.9</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_40" class="mdc-grid-tile" >
	<a href="/top-balada-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/AcxSUnCBy7.jpg" alt="Top Balada Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Top Balada Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_41" class="mdc-grid-tile" >
	<a href="/ke-buena-1055-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/sFMrhTXPv7.jpg" alt="Ke Buena 105.5 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Ke Buena 105.5 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_42" class="mdc-grid-tile" >
	<a href="/proclamando-libertad-a-los-cautivos">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/182/proclamando-libertad-a-los-cautivos.68bf55be.jpg" alt="Vida Celestial" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Vida Celestial</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_43" class="mdc-grid-tile" >
	<a href="/top-merengue-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/cVs432NBbb.jpg" alt="Top Merengue Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Top Merengue Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_44" class="mdc-grid-tile" >
	<a href="/radio-palma">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/sv5xrcagzsxv.png" alt="Radio Palma" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Palma</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_45" class="mdc-grid-tile" >
	<a href="/radio-mis-historias">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/ru7wbr52pljs.png" alt="Dominicana 041" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Dominicana 041</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_46" class="mdc-grid-tile" >
	<a href="/canal-105">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/481/canal-105.df758795.png" alt="Canal 105 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Canal 105 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_47" class="mdc-grid-tile" >
	<a href="/radio-cristiana-dominicana">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/117/radio-cristiana-dominicana.b986bdb0.png" alt="Radio Cristiana Dominicana" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Cristiana Dominicana</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_48" class="mdc-grid-tile" >
	<a href="/top-salsa-radio">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/jVSyTJJp3S.jpg" alt="Top Salsa Radio" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Top Salsa Radio</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_49" class="mdc-grid-tile" >
	<a href="/radio-barahona-1470-am">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/571/radio-barahona-1470-am.64e1186e.png" alt="Radio Barahona 1470 AM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Barahona 1470 AM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_50" class="mdc-grid-tile" >
	<a href="/radio-santa-maria">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/zwv5xkyd9mhz.jpg" alt="Radio Santa Maria" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Santa Maria</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_51" class="mdc-grid-tile" >
	<a href="/radio-ven-1200-am">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/124/radio-ven-1200-am.24d76bea.png" alt="Radio VEN 1200 AM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio VEN 1200 AM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_52" class="mdc-grid-tile" >
	<a href="/kiss-949-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/9kFKMBmTeM.jpg" alt="Kiss 94.9 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Kiss 94.9 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_53" class="mdc-grid-tile" >
	<a href="/cdn-1130-am">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/Py4dHAnJkX.png" alt="CDN 1130 AM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">CDN 1130 AM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_54" class="mdc-grid-tile" >
	<a href="/estrella-90">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/uQ6JrFq4gg.png" alt="Estrella 90.5 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Estrella 90.5 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_55" class="mdc-grid-tile" >
	<a href="/fieramix-la-merenguera">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/742/fieramix-la-merenguera.10545d8e.png" alt="SOLO MERENGUE" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">SOLO MERENGUE</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_56" class="mdc-grid-tile" >
	<a href="/sultana-995-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/gg4yKXEHPv.png" alt="Sultana 99.5 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Sultana 99.5 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_57" class="mdc-grid-tile" >
	<a href="/radio-disney-973-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/uws7yxqy3yh3.jpg" alt="Radio Disney 97.3 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Radio Disney 97.3 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_58" class="mdc-grid-tile" >
	<a href="/latina-1040-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/159/latina-1040-fm.662c0285.png" alt="Latina 104" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Latina 104</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_59" class="mdc-grid-tile" >
	<a href="/la-rocka-917-fm">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/yYzqKQUpcv.jpg" alt="La Rocka 91.7 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">La Rocka 91.7 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_60" class="mdc-grid-tile" >
	<a href="/latina-887">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/051/latina-887.fbc0ba31.png" alt="Latina 88.7 FM" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">Latina 88.7 FM</span>
	</span>
	</a>
	</li>
	
	
	
	<li id="radio_list_li_61" class="mdc-grid-tile" >
	<a href="/fieramix-la-cristiana">
	<div class="mdc-grid-tile__primary mdc-elevation--z4">
	
	<img class="mdc-grid-tile__primary-content lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://static.mytuner.mobi/media/radios-150px/747/fieramix-la-cristiana.e79f63b4.png" alt="SOLO MUSICA CRISTIANA" width="150" height="150" style="width: 100%; height: auto;"/>
	
	
	</div>
	<span class="mdc-grid-tile__secondary">
	<span class="mdc-grid-tile__title">SOLO MUSICA CRISTIANA</span>
	</span>
	</a>
	</li>
	
	
	</ul>
	</div>
	
	
	<div id="pagination-footer">
	
	<p class="mdc-theme--text-secondary-on-primary">Página 1 de 13</p>
	
	
	
	
	
	
	<button type="submit" class="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface page-button mdc-button--dense mdc-button--compact mdc-button--accent primary-accent-color" data-mdc-auto-init="MDCRipple">1</button>
	
	
	
	
	
	<button type="submit" class="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface page-button mdc-button--dense mdc-button--compact" data-mdc-auto-init="MDCRipple" onclick="window.open('/?page=2', '_self')">2</button>
	
	
	
	
	
	<button type="submit" class="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface page-button mdc-button--dense mdc-button--compact" data-mdc-auto-init="MDCRipple" onclick="window.open('/?page=3', '_self')">3</button>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<button title="next page" type="submit" class="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface page-button mdc-button--dense mdc-button--compact" data-mdc-auto-init="MDCRipple" onclick="window.open('/?page=2', '_self')">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="width:100%;height:100%;fill:white;"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
	</button>
	
	<button title="last page" type="submit" class="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface page-button mdc-button--dense mdc-button--compact" data-mdc-auto-init="MDCRipple" onclick="window.open('/?page=13', '_self')">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="width:100%;height:100%;fill:white;"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
	</button>
	
	</div>
	
	
	
	
	</div>
	</div>
	
	
	
	
	<!-- TODO : CLEAN THIS PLEASE -->
	
	
	<footer id="footer" class="mdc-elevation--z4">
	<div class="wrapper">
	
	<div class="info">
	<h2 class="mdc-typography--subheading1">Otros sitios web de radio</h2>
	<!-- EUROPE -->
	<a href="https://www.radio-osterreich.at" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/at.png" alt="Internetradio Österreich" title="radio österreich website" width="64" height="64" /></a>
	<a href="https://www.radio-belgie.be" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/be.png" alt="Radio België" title="radio belgie website" width="64" height="64" /></a>
	<a href="https://www.radio-danmark.dk" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/dk.png" alt="Netradio Danmark" title="radio danmark website" width="64" height="64" /></a>
	<a href="https://www.radio-suomi.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/fi.png" alt="Nettiradio Suomi" title="radio finland website" width="64" height="64" /></a>
	<a href="https://www.radio-en-ligne.fr" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/fr.png" alt="Radio France" title="radio france website" width="64" height="64" /></a>
	<a href="https://www.internetradio-horen.de" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/de.png" alt="Internetradio Deutschland" title="radio deutschland website" width="64" height="64" /></a>
	<a href="https://www.radio-italiane.it" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/it.png" alt="Radio Italia" title="radio italia website" width="64" height="64" /></a>
	<a href="https://www.radio-nederland.nl" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/nl.png" alt="Radio Nederland" title="radio nederland website" width="64" height="64" /></a>
	<a href="https://www.radio-norge.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/no.png" alt="Nettradio Norge" title="radio norge website" width="64" height="64" /></a>
	<a href="https://www.radio-espana.es" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/es.png" alt="Radio España" title="radio españa website" width="64" height="64" /></a>
	<a href="https://www.radio-sveriges.se" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/se.png" alt="Radio Sveriges" title="radio sverige website" width="64" height="64" /></a>
	<a href="https://www.internetradio-schweiz.ch" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ch.png" alt="Internetradio Schweiz" title="radio schweiz website" width="64" height="64" /></a>
	<a href="https://www.radio-uk.co.uk" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/gb.png" alt="Radio UK" title="radio uk website" width="64" height="64" /></a>
	<a href="https://www.radio-polska.pl/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/pl.png" alt="Radio Polska" title="radio polska website" width="64" height="64" /></a>
	<a href="https://www.radios-online.pt/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/pt.png" alt="Radio Portugal" title="radio portugal website" width="64" height="64" /></a>
	<a href="https://www.radio-hrvatska.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/hr.png" alt="Radio Croatia" title="radio croatia website" width="64" height="64" /></a>
	<a href="https://www.radio-ua.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ua.png" alt="Radio Ukraine" title="radio ukraine website" width="64" height="64" /></a>
	<a href="https://www.radio-romania.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ro.png" alt="Radio România" title="radio romania website" width="64" height="64" /></a>
	<a href="https://www.radio-ireland.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ie.png" alt="Radio Ireland" title="radio ireland website" width="64" height="64" /></a>
	<a href="https://www.onlineradio-bg.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/bg.png" alt="Radio Bulgaria" title="radio bulgaria website" width="64" height="64" /></a>
	<a href="https://www.radiaonline.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/cz.png" alt="Radio Czech" title="radio czech website" width="64" height="64" /></a>
	<a href="https://www.radiosrbija.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/rs.png" alt="Radio Srbija" title="radio srbija website" width="64" height="64" /></a>
	<a href="https://www.onlineradiok.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/hu.png" alt="Radio Magyarország" title="radio magyarorszag website" width="64" height="64" /></a>
	<a href="https://www.radijskepostaje.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/si.png" alt="Radio Slovenija" title="radio slovenija website" width="64" height="64" /></a>
	<a href="https://www.greek-radio.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/gr.png" alt="Radio Greece" title="radio greece website" width="64" height="64" /></a>
	<!-- NORTH AMERICA -->
	<a href="https://www.canadaradiostations.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ca.png" alt="Canada Radio Stations" title="canada radio stations website" width="64" height="64" /></a>
	<a href="https://www.radio-en-vivo.mx" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/mx.png" alt="Radio en Vivo México" title="radio mexico website" width="64" height="64" /></a>
	<a href="https://www.fmradiofree.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/us.png" alt="Radio US" title="radio us website" width="64" height="64" /></a>
	<a href="https://www.radio-trinidad.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/tt.png" alt="Radio Trinidad y Tobago" title="radio trinidad website" width="64" height="64" /></a>
	<a href="https://www.radio-jamaica.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/jm.png" alt="Radio Jamaica" title="radio jamaica website" width="64" height="64" /></a>
	<a href="https://www.radiosdenicaragua.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ni.png" alt="Radios Nicaragua" title="radio nicaragua website" width="64" height="64" /></a>
	<a href="https://www.radioselsalvador.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/sv.png" alt="Radios El Salvador" title="radio salvador website" width="64" height="64" /></a>
	<a href="https://www.emisoras-de-honduras.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/hn.png" alt="Radios Honduras" title="radio honduras website" width="64" height="64" /></a>
	<!-- SOUTH AMERICA -->
	<a href="https://www.radios-argentinas.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ar.png" alt="Radios Argentinas" title="radio argentina website" width="64" height="64" /></a>
	<a href="https://www.radio-ao-vivo.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/br.png" alt="Rádio Brasil" title="radio brasil website" width="64" height="64" /></a>
	<a href="https://www.radios-chilenas.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/cl.png" alt="Radios Chile" title="radio chile website" width="64" height="64" /></a>
	<a href="https://www.emisorascolombianas.co" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/co.png" alt="Emisoras Colombianas" title="radio colombia website" width="64" height="64" /></a>
	<a href="https://www.radiosdelperu.com.pe" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/pe.png" alt="Radios Peru" title="radio peru website" width="64" height="64" /></a>
	<a href="https://www.radio-ecuador.org/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ec.png" alt="Radios Ecuador" title="radio ecuador website" width="64" height="64" /></a>
	<a href="https://www.radios-uruguay.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/uy.png" alt="Radios Uruguay" title="radio uruguay website" width="64" height="64" /></a>
	<a href="https://www.radios-guatemala.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/gt.png" alt="Radios Guatemala" title="radio guatemala website" width="64" height="64" /></a>
	<a href="https://www.radios-venezuela.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ve.png" alt="Radios Venezuela" title="radio venezuela website" width="64" height="64" /></a>
	<a href="https://www.emisoras-puertorico.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/pr.png" alt="Radios Puerto Rico" title="radio puerto rico website" width="64" height="64" /></a>
	<a href="https://www.radio-dominicana.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/do.png" alt="Radios Dominican Republic" title="radio domican republic website" width="64" height="64" /></a>
	<a href="https://www.radios-bolivia.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/bo.png" alt="Radios Bolivia" title="radio bolivia website" width="64" height="64" /></a>
	<a href="https://www.radioscostarica.org/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/cr.png" alt="Radios Costa Rica" title="radio costa rica website" width="64" height="64"/></a>
	<!-- OCEANIA -->
	<a href="https://www.radio-australia.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/au.png" alt="Radio Australia" title="radio australia website" width="64" height="64" /></a>
	<a href="https://www.radio-stations.co.nz/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/nz.png" alt="Radio New Zealand" title="radio new zealand website" width="64" height="64" /></a>
	<!-- ASIA -->
	<a href="https://www.canli-radyo-dinle.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/tr.png" alt="Radyo Türkiye" title="radio turkey website" width="64" height="64" /></a>
	<a href="https://www.radioindia.in/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/in.png" alt="FM Radio India" title="radio india website" width="64" height="64" /></a>
	<a href="https://www.radio-hk.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/hk.png" alt="香港 收音機" title="radio hk website" width="64" height="64" /></a>
	<a href="https://www.radioindonesia.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/id.png" alt="Radio Online Indonesia" title="radio indonesia website" width="64" height="64" /></a>
	<a href="https://www.radiojapan.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/jp.png" alt="ラジオ 日本" title="radio japan website" width="64" height="64" /></a>
	<a href="https://www.radio-philippines.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ph.png" alt="FM Radio Philippines" title="radio philippines website" width="64" height="64" /></a>
	<a href="https://www.radio-singapore.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/sg.png" alt="Radio Singapore" title="radio singapore website" width="64" height="64" /></a>
	<a href="https://www.radio-thai.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/th.png" alt="Radio Thailand" title="radio thailand website" width="64" height="64" /></a>
	<a href="https://www.radio-korea.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/kr.png" alt="Radio South Korea" title="radio south korea website" width="64" height="64" /></a>
	<a href="https://www.radiotaiwan.tw" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/tw.png" alt="台灣 收音機" title="radio taiwan website" width="64" height="64" /></a>
	<a href="https://www.radiomalaysia.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/my.png" alt="Radio Malaysia" title="radio malaysia website" width="64" height="64" /></a>
	<!-- AFRICA -->
	<a href="https://www.radio-south-africa.co.za" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/za.png" alt="Radio South Africa" title="radio south africa website" width="64" height="64" /></a>
	<a href="https://www.radio-maroc.org/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ma.png" alt="Radio Morocco" title="radio morocco website" width="64" height="64" /></a>
	<a href="https://www.radio-senegal.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/sn.png" alt="Radio Senegal" title="radio senegal website" width="64" height="64" /></a>
	<a href="https://www.radio-ghana.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/gh.png" alt="Radio Ghana" title="radio ghana website" width="64" height="64" /></a>
	<a href="https://www.radio-kenya.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ke.png" alt="Radio Kenya" title="radio kenya website" width="64" height="64" /></a>
	<a href="https://www.radio-nigeria.com" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/ng.png" alt="Radio Nigeria" title="radio Nigeria website" width="64" height="64" /></a>
	<a href="https://www.radio-israel.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/il.png" alt="Radio Israel" title="radio Israel website" width="64" height="64" /></a>
	<a href="https://www.radioarabic.org" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/arab.png" alt="Radio Arabic" title="radio Arabic website" width="64" height="64" /></a>
	<!-- WW -->
	<a href="https://mytuner-radio.com/" class="mdc-typography--caption"><img class="website-links lazy" src="https://cdn.mytuner.mobi/static/ctr/images/radio-default.jpg" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/globe.png" alt="myTuner Radio" title="Rest of the World" width="64" height="64" /></a>
	</div>
	
	<div class="top-charts-container">
	<a href="https://www.top-charts.com/" target="_blank" rel="noopener">
	<img class="top-charts lazy" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/logo_top_charts.png" alt="Top Charts" title="top charts website" width="149" height="64"/>
	</a>
	<a href="http://www.podcasts-online.org/" target="_blank" rel="noopener">
	<img class="podcasts-online lazy" data-src="https://cdn.mytuner.mobi/static/ctr/images/country/podcasts-online.png" alt="Podcasts Online" title="podcasts online website" width="149" height="65"/>
	</a>
	</div>
	
	<div class="credits" id="credits">
	<div class="wrapper">
	
	
	<div class="col-left mdc-typography--caption">
	© AppMind 2023. Reservados todos los derechos
	</div>
	
	<div class="mdc-typography--caption" role="link">
	
	
	
	<br>
	<a href="/canciones-mas-escuchadas" role="link">Top 10</a>
	
	
	<br>
	<a href="/widgets/" role="link">Widgets</a>
	<br>
	<a href="/broadcasters/" role="link">Locutores</a>
	
	<br>
	<a href="/privacy-policy" role="link">Política de privacidad</a>
	<br>
	<a href="/terminos" role="link">Términos del servicio</a>
	
	
	<br>
	<a href="/nosotros" role="link">Acerca de nosotros</a>
	<br>
	<a href="/contact-us" role="link">Contáctenos</a>
	
	<br>
	<a href='javascript:void(0);' role="link" id="footerLinkInstallAppMobile" onclick="openFooterLinkInstallAppMobile();" hidden>Descargar App</a>
	</div>
	</div>
	</div>
	</div>
	</footer>
	
	
	
	
	
	<!-- BOTTOM INSTALL AD FOR MOBILE -->
	
	
	
	
	
	
	
	<script type="text/javascript" src="https://cdn.mytuner.mobi/static/ctr/js/packed.min.js?d6555f88"></script>
	
	
	
	<script>
	
	let csrftokenAPI = '55NcDCnn5JTNUpZg5OcT5F0CEJzFWTDqne5YVTnYj8jnF1qofW5YgAxwzLFAcNDA';
	window._request_is_mobile = false;
	var android_download_link = ' https://play.google.com/store/apps/details?id=emisoras.dominicanas.online.radio&referrer=utm_source%3Dcountryradiosite%26utm_campaign%3Dmobilefooterdownload';
	var ios_download_link = '';
	var static_url = 'https://cdn.mytuner.mobi/static/ctr/';
	var canonical_url = 'https://www.radio-dominicana.com';
	
	
	let baseAPIURL = 'https://www.radio-dominicana.com/';
	
	
	var is_mobile = false;
	var cookie_banner_text = "Utilizamos cookies para mejorar tu experiencia en nuestra página.";
	var cookie_banner_button = "Saber más.";
	var cookie_banner_link = "/privacy-policy";
	
	
	
	
	function collapse(divId, exclusive, icon) {
	if(!exclusive) {
	if( !$("#"+divId).hasClass("collapsed")) {
	document.getElementById(divId).style.height = "0px";
	$("#"+divId).addClass("collapsed");
	$(icon).css("transform", "rotateZ(0deg)");
	} else {
	document.getElementById(divId).style.height = $("#"+divId).data("height")+"px";
	$("#"+divId).removeClass("collapsed");
	$(icon).css("transform", "rotateZ(180deg)");
	}
	} else {
	$(".collapsible").each(function(ind, val) {
	if( val.id !== divId) {
	val.style.height = "0px";
	$(val).addClass("collapsed");
	} else {
	if( !$("#"+divId).hasClass("collapsed")) {
	val.style.height = "0px";
	$(val).addClass("collapsed");
	$(icon).css("transform", "rotateZ(0)");
	} else {
	val.style.height = $(val).data("height")+"px";
	$(val).removeClass("collapsed");
	$(icon).css("transform", "rotateZ(180deg)");
	}
	}
	});
	$(".collapse-controller .material-icons").each(function(ind, m_icon) {
	if( m_icon != icon.get(0)) {
	$(m_icon).css("transform", "rotateZ(0)");
	}
	});
	}
	}
	$(".collapse-controller").each(function(ind, val){
	var target_id = "#"+$(val).data("collapse");
	var height = (36 + 8) * $(target_id).find("a").length - 8;// 45 button height, 8 button bottom margin, remove last button margin
	$(target_id).data("height", height);
	if( $(target_id).hasClass("collapsed")) {
	$(target_id).css("height", "0px");
	} else {
	$(target_id).css("height", height+"px");
	$(val).find(".material-icons").css("transform", "rotateZ(180deg)");
	}
	$(target_id).css('visibility', "visible");
	$(val).click(function(){
	collapse($(this).data("collapse"), $(this).data("exclusive-div")==="true"||$(this).data("exclusive-div")===true, $(this).find(".material-icons"));
	});
	});
	
	
	var cookiejar = {
	get: function (key) {
	return decodeURIComponent(window.document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
	},
	set: function (key, val, end, path, domain, secure) {
	if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
	return false;
	}
	var expires = '';
	if (end) {
	switch (end.constructor) {
	case Number:
	expires = end === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + end;
	break;
	case String:
	expires = '; expires=' + end;
	break;
	case Date:
	expires = '; expires=' + end.toUTCString();
	break;
	}
	}
	window.document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(val) + expires + (domain ? '; domain=' + domain : '') + (path ? '; path=' + path : '') + (secure ? '; secure' : '');
	return true;
	},
	has: function (key) {
	return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(window.document.cookie);
	},
	remove: function (key, path, domain) {
	if (!key || !this.has(key)) { return false; }
	window.document.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + ( domain ? '; domain=' + domain : '') + ( path ? '; path=' + path : '');
	return true;
	}
	};
	if (!cookiejar.has('cookiebanner-accepted') && document.getElementById('cookiebanner') != undefined) {
	document.getElementById('cookiebanner').style.display = "block";
	}
	function acceptCookies() {
	cookiejar.set('cookiebanner-accepted', 1, Infinity, '/');
	document.getElementById('cookiebanner').style.display = "none";
	}
	
	
	
	/*
	THIS FUNCTION DISPLAYS OR HIDES THE DOWNLOAD LINK DEPENDING ON DEVICE AND WHETHER THERE IS A VALID LINK
	*/
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (/android/i.test(userAgent) && 'https://play.google.com/store/apps/details?id=emisoras.dominicanas.online.radio&amp;referrer=utm_source%3Dcountryradiosite%26utm_campaign%3Dmobilefooterdownload' != "") {
	document.getElementById("footerLinkInstallAppMobile").hidden = false;
	} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && '' != "") {
	document.getElementById("footerLinkInstallAppMobile").hidden = false;
	}
	
	
	if(typeof executed == 'undefined'){
	this.executed = false;
	}
	function removeTwoRadiosFromTopList(){
	var radio_list_1 = document.getElementById("radio_list_ul_1");
	var radio_list_2 = document.getElementById("radio_list_ul_2");
	if(radio_list_2 != null){
	var radio_1 = radio_list_1.lastElementChild.cloneNode(true);
	radio_list_1.lastElementChild.remove();
	var radio_2 = radio_list_1.lastElementChild.cloneNode(true);
	radio_list_1.lastElementChild.remove();
	radio_list_2.insertBefore(radio_2, radio_list_2.firstChild);
	radio_list_2.insertBefore(radio_1, radio_list_2.firstChild);
	}
	}
	function removeTwoRadiosFromBottomList() {
	var radio_list_1 = document.getElementById("radio_list_ul_1");
	var radio_list_2 = document.getElementById("radio_list_ul_2");
	if(radio_list_2 != null){
	var radio_1 = radio_list_2.firstElementChild.cloneNode(true);
	radio_list_2.firstElementChild.remove();
	var radio_2 = radio_list_2.firstElementChild.cloneNode(true);
	radio_list_2.firstElementChild.remove();
	radio_list_1.appendChild(radio_1);
	radio_list_1.appendChild(radio_2);
	}
	}
	function verifyRadiosListUls() {
	var w = window.innerWidth;
	if(executed){
	if(w<=1185 || w>=1340){
	this.executed = false;
	removeTwoRadiosFromBottomList();
	}
	} else {
	if(w>=1186 && w<=1339){
	this.executed = true;
	removeTwoRadiosFromTopList();
	}
	}
	}
	verifyRadiosListUls();
	
	/* Function to add event listener */
	var addEvent = function(object, type, callback) {
	if (object == null || typeof(object) == 'undefined') return;
	if (object.addEventListener) {
	object.addEventListener(type, callback, false);
	} else if (object.attachEvent) {
	object.attachEvent("on" + type, callback);
	} else {
	object["on"+type] = callback;
	}
	};
	addEvent(window, "resize", verifyRadiosListUls);
	
	window.scrollBy(0,1);
	if(window.innerWidth > 837) {
	
	$("#collapse_2").removeClass("collapsed");
	
	}
	
	
	
	// LOAD LAZY IMAGES
	if ("IntersectionObserver" in window) {
	var lazyloadImages = document.querySelectorAll(".lazy");
	var imageObserver = new IntersectionObserver(function(entries, observer) {
	entries.forEach(function(entry) {
	if (entry.isIntersecting) {
	var image = entry.target;
	image.src = image.dataset.src;
	image.classList.remove("lazy");
	imageObserver.unobserve(image);
	}
	});
	}, {
	rootMargin: "0px 0px 200px 0px"
	});
	
	lazyloadImages.forEach(function(image) {
	imageObserver.observe(image);
	});
	}
	else {
	var lazyloadImages = document.querySelectorAll(".lazy");
	for ( var i = 0; i < lazyloadImages.length; i++) {
	var image = lazyloadImages[i].classList.remove("lazy");
	}
	$(lazyloadImages).unveil(200);
	}
	</script>
	
	
	
	<script type="application/ld+json">
	[{"@context": "https://schema.org", "@type": "WebSite", "url": "https://www.radio-dominicana.com", "potentialAction": {"@type": "SearchAction", "target": "https://www.radio-dominicana.com/busca?q={search_term_string}", "query-input": "required name=search_term_string"}}, {"@context": "http://schema.org", "@type": "ItemList", "name": "Emisoras", "numberOfItems": "748 resultados", "itemListElement": [{"@context": "http://schema.org", "@type": "ListItem", "position": 1, "url": "https://www.radio-dominicana.com/alofoke-993-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 2, "url": "https://www.radio-dominicana.com/z101"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 3, "url": "https://www.radio-dominicana.com/kq-945"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 4, "url": "https://www.radio-dominicana.com/radio-amanecer"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 5, "url": "https://www.radio-dominicana.com/primera-881-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 6, "url": "https://www.radio-dominicana.com/monumental-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 7, "url": "https://www.radio-dominicana.com/salsa-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 8, "url": "https://www.radio-dominicana.com/lluvia-romantica"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 9, "url": "https://www.radio-dominicana.com/intima-fm-santiago"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 10, "url": "https://www.radio-dominicana.com/top-bachata-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 11, "url": "https://www.radio-dominicana.com/fuego-90"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 12, "url": "https://www.radio-dominicana.com/super-k-1007"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 13, "url": "https://www.radio-dominicana.com"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 14, "url": "https://www.radio-dominicana.com/independencia-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 15, "url": "https://www.radio-dominicana.com/disco-106"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 16, "url": "https://www.radio-dominicana.com/enamorada-999"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 17, "url": "https://www.radio-dominicana.com/turbo-98"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 18, "url": "https://www.radio-dominicana.com/concierto-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 19, "url": "https://www.radio-dominicana.com/ritmo-965"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 20, "url": "https://www.radio-dominicana.com/radio-dial-670-am"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 21, "url": "https://www.radio-dominicana.com/radio-recuerdos-rd"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 22, "url": "https://www.radio-dominicana.com/bachata-hit-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 23, "url": "https://www.radio-dominicana.com/suave-1073"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 24, "url": "https://www.radio-dominicana.com/cdn-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 25, "url": "https://www.radio-dominicana.com/top-cristiano-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 26, "url": "https://www.radio-dominicana.com/radio-ven-1055-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 27, "url": "https://www.radio-dominicana.com/caliente-104"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 28, "url": "https://www.radio-dominicana.com/la-913"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 29, "url": "https://www.radio-dominicana.com/disco-889"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 30, "url": "https://www.radio-dominicana.com/trespatines"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 31, "url": "https://www.radio-dominicana.com/renuevo-897"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 32, "url": "https://www.radio-dominicana.com/escandalo-1025"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 33, "url": "https://www.radio-dominicana.com/mortal-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 34, "url": "https://www.radio-dominicana.com/sabor-a-merengue"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 35, "url": "https://www.radio-dominicana.com/pura-vida-929-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 36, "url": "https://www.radio-dominicana.com/hits-921"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 37, "url": "https://www.radio-dominicana.com/bachata"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 38, "url": "https://www.radio-dominicana.com/radio-cielo-vida"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 39, "url": "https://www.radio-dominicana.com/panorama-969"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 40, "url": "https://www.radio-dominicana.com/top-balada-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 41, "url": "https://www.radio-dominicana.com/ke-buena-1055-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 42, "url": "https://www.radio-dominicana.com/proclamando-libertad-a-los-cautivos"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 43, "url": "https://www.radio-dominicana.com/top-merengue-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 44, "url": "https://www.radio-dominicana.com/radio-palma"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 45, "url": "https://www.radio-dominicana.com/radio-mis-historias"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 46, "url": "https://www.radio-dominicana.com/canal-105"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 47, "url": "https://www.radio-dominicana.com/radio-cristiana-dominicana"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 48, "url": "https://www.radio-dominicana.com/top-salsa-radio"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 49, "url": "https://www.radio-dominicana.com/radio-barahona-1470-am"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 50, "url": "https://www.radio-dominicana.com/radio-santa-maria"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 51, "url": "https://www.radio-dominicana.com/radio-ven-1200-am"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 52, "url": "https://www.radio-dominicana.com/kiss-949-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 53, "url": "https://www.radio-dominicana.com/cdn-1130-am"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 54, "url": "https://www.radio-dominicana.com/estrella-90"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 55, "url": "https://www.radio-dominicana.com/fieramix-la-merenguera"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 56, "url": "https://www.radio-dominicana.com/sultana-995-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 57, "url": "https://www.radio-dominicana.com/radio-disney-973-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 58, "url": "https://www.radio-dominicana.com/latina-1040-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 59, "url": "https://www.radio-dominicana.com/la-rocka-917-fm"}, {"@context": "http://schema.org", "@type": "ListItem", "position": 60, "url": "https://www.radio-dominicana.com/latina-887"}]}]
	</script>
	
	
	
	
	<script type="text/javascript" src="https://cdn.mytuner.mobi/static/ctr/js/radios.min.js?2f3695b3"></script>
	
	
	<script type="text/javascript">
	var stringRadioSlugIdList = "doRadioSlugIdList";
	var stringNumberOfSubscribedRadios = "doNumberOfSubscribedRadios";
	</script>
	
	<script type="text/javascript">
	function sendExtraRadiosEvent(slug) {
	gtag('event', 'extra-radios-click', {
	'event_category': slug
	});
	}
	</script>
	
	<script type="text/javascript">
	function generateTeamAd() {
	var origin = document.getElementById('team_ad');
	var static = 'https://cdn.mytuner.mobi/static/ctr/' + 'site/images/';
	var games = ['sudoku', 'solitaire', 'wordsearch', 'bubble', 'mahjong', 'jigsaw', 'reludi', 'minesweeper', 'dominoes', 'ai-transcribe'];
	var sites = ['https://www.sudokuonline.io/', 'https://www.solitaire365.com/', 'https://www.wordsearch365.com/', 'https://www.bubbleshooter365.com/', 'https://www.mahjongonline365.com/', 'https://www.jigsaw365.com/', 'https://www.reludi.com/', 'https://www.minesweeper-online.org/', 'https://www.dominoes365.io/', 'https://www.transcribeit.ai/'];
	var _number = Math.floor(Math.random() * games.length);
	if(origin) {
	
	var country = 'es';
	
	var a = document.createElement('a');
	a.setAttribute('target', '_blank');
	a.setAttribute('rel', 'nofollow, noopener');
	sites[_number] = sites[_number];
	var _country = country ? country + '/' : country;
	if (_number == 5) {
	a.setAttribute('href', sites[_number]);
	} else {
	a.setAttribute('href', sites[_number] + _country);
	}
	
	var image = document.createElement('img');
	image.setAttribute('alt', games[_number]);
	_country = country ? '-' + country : country;
	if (_number == 7 || _number == 8 || _number == 9) {
	games[_number] = static + games[_number] + _country + '.jpg';
	} else {
	games[_number] = static + games[_number] + _country + '.png';
	}
	image.setAttribute('src', games[_number]);
	image.setAttribute('width', 300);
	if (_number == 6) {
	image.setAttribute('height', 600);
	} else if (_number == 8) {
	image.setAttribute('width', 290);
	image.setAttribute('height', 242);
	} else {
	image.setAttribute('height', 250);
	}
	a.appendChild(image);
	origin.appendChild(a);
	}
	}
	
	generateTeamAd();
	</script>
	
	
	<script type="text/javascript">
	function checkBlockedByDisplayNone() {
	var elem = document.querySelector(".ad-box");
	var a = window.getComputedStyle(elem)?.display === "none";
	var s = 'No';
	if (a) {
	s = 'Yes';
	}
	localStorage.setItem('BlockedByDisplayNone', s);
	}
	
	function checkBlockedByUrl() {
	var URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
	function checkBlocked(callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
	if (xhr.readyState == XMLHttpRequest.DONE) {
	callback(xhr.status === 0 || xhr.responseURL !== URL);
	}
	};
	xhr.open('HEAD', URL, true);
	xhr.send(null);
	}
	checkBlocked(function(blocked) {
	var s = 'No';
	if (blocked) {
	s = 'Yes';
	}
	localStorage.setItem('BlockedByUrl', s);
	sendBlockOutput();
	});
	}
	
	function callOncePerMonth(callback) {
	const currentMonth = new Date().getMonth();
	const currentYear = new Date().getFullYear();
	const lastRun = localStorage.getItem('lastRunDate');
	
	if (lastRun) {
	const lastRunDate = new Date(lastRun);
	const lastRunMonth = lastRunDate.getMonth();
	const lastRunYear = lastRunDate.getFullYear();
	
	if (lastRunMonth === currentMonth && lastRunYear === currentYear) {
	console.log('Function has already been called this month.');
	return;
	}
	}
	callback();
	localStorage.setItem('lastRunDate', new Date().toISOString());
	}
	
	function sendSomethingNew(a, b) {
	const data = {
	a: a,
	b: b
	};
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/ajax/something_new/', true);
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	
	xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
	if (xhr.status === 200 || xhr.status === 201) {
	console.log('Success:', JSON.parse(xhr.responseText));
	} else {
	console.error('Error:', xhr.statusText);
	}
	}
	};
	
	xhr.send(JSON.stringify(data));
	}
	
	function sendBlockOutput() {
	var b = false;
	var a = false;
	var googleAnalyticsKey = 'UA-41201130-51';
	
	if (localStorage.getItem('BlockedByDisplayNone') === 'Yes' ||
	localStorage.getItem('BlockedByUrl') === 'Yes' ||
	localStorage.getItem('BlockedByClient') === 'Yes') {
	a = true;
	}
	
	function getClientID() {
	return new Promise((resolve, reject) => {
	if (typeof gtag === 'function') {
	gtag('get', googleAnalyticsKey, 'client_id', (clientID) => {
	if (clientID) {
	resolve(clientID);
	} else {
	reject('No client ID received');
	}
	});
	} else {
	reject('gtag function not available');
	}
	});
	}
	
	getClientID()
	.then(clientID => {
	b = true;
	verify(clientID, "check_client_id");
	})
	.catch(error => {
	console.warn('Error fetching client ID:', error);
	callOncePerMonth(() => {
	sendSomethingNew(a, b);
	});
	});
	
	let timeout = setTimeout(() => {
	callOncePerMonth(() => {
	sendSomethingNew(a, b);
	});
	}, 60000);
	
	function verify(clientID, eventName) {
	b = true;
	console.log('Client ID verified:', clientID);
	clearTimeout(timeout);
	callOncePerMonth(() => {
	sendSomethingNew(a, b);
	});
	}
	}
	
	
	
	function loadScript(url) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = true;
	script.onload = () => {
	localStorage.setItem('BlockedByClient', 'No');
	checkBlockedByDisplayNone();
	checkBlockedByUrl();
	};
	
	script.onerror = () => {
	localStorage.setItem('BlockedByClient', 'Yes');
	checkBlockedByDisplayNone();
	checkBlockedByUrl();
	};
	
	if (script.readyState){ //IE
	script.onreadystatechange = function(){
	if (script.readyState == 'loaded' ||
	script.readyState == 'complete'){
	script.onreadystatechange = null;
	}
	};
	}
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
	}
	
	function loadPubliftOrRefineryUsingABTest(publift_js) {
	// Function to get the value of a cookie by its name
	function getCookie(name) {
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
	let c = ca[i];
	while (c.charAt(0) == ' ') {
	c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
	return c.substring(name.length+1, c.length);
	}
	}
	return "";
	}
	
	let usePublift = true;
	let publiftPercentage = 100.0;
	
	
	if(publiftPercentage < 100.0) {
	// If cookie exists, load script based on the cookie value
	let abTestUseFuse = getCookie("abTestUseFuse");
	if (abTestUseFuse) {
	if (abTestUseFuse === "true") {
	usePublift = true;
	} else {
	usePublift = false;
	}
	} else {
	// No cookie, random A/B test
	let randomChoice = Math.random() * 100;
	if (randomChoice <= publiftPercentage) {
	document.cookie = "abTestUseFuse=true; path=/; SameSite=Strict; Secure"; // session cookie
	usePublift = true;
	} else {
	document.cookie = "abTestUseFuse=false; path=/; SameSite=Strict; Secure"; // session cookie
	usePublift = false;
	}
	}
	}
	
	if (usePublift) {
	loadScript(publift_js);
	gtag('event', 'advertising_script_publift');
	} else {
	
	gtag('event', 'advertising_script_refinery89');
	}
	}
	
	
	window.addEventListener("load",function(){
	setTimeout(() => {
	loadPubliftOrRefineryUsingABTest('https://cdn.fuseplatform.net/publift/tags/2/3164/fuse.js');
	}, 5000)
	},false);
	
	</script>
	
	<style>
	@media screen and (min-width: 1186px) {
	#extra_radio_list {
	padding: 0;
	}
	}
	</style>
	
	
	
	<script type="text/javascript">
	$("a").on('click', function(e){
	var url = $(this).attr("href");
	if($.trim(url).indexOf("javascript:") == 0) return;
	if (e.currentTarget.host != window.location.host) {
	//ga('send', 'event', 'Outbound Links', e.currentTarget.host, url, 0);
	gtag('event', e.currentTarget.host, {
	'event_category': 'Outbound Links',
	'event_label': url
	});
	var target = $(this).attr("target");
	if (e.metaKey || e.ctrlKey || target == "_blank") {
	var newtab = true;
	}
	if (!newtab) {
	e.preventDefault();
	if(target) {
	setTimeout('window.open("' + url + '", "' + target + '");', 100);
	} else {
	setTimeout('document.location = "' + url + '"', 100);
	}
	}
	}
	});
	
	
	</script>
	
	
	
	</body>
	</html>
	
 

	
	
	