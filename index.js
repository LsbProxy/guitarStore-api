var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var cors = require('cors');
var flatten = require('lodash/flatten');

app.listen(port, function(){
  console.log('Node is listening on port '+ port + '...')
});

app.use(function middleware(req, res, next) {
	console.log(req.method + ' ' + req.path + ' - ' + req.ip);
	next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());


const guitars = {
		'Electric Guitars': {
			'Single Cut': [
				['Gibson 1959 Les Paul Cherry Sunburst Light Aged', 'https://images.musicstore.de/images/0640/gibson-1959-les-paul-historic-select-heritage-cherry-sunburst-light-aged-hs9-50022_1_GIT0043447-000.jpg', '€ 4,800'],
				['Gibson 1959 Les Paul Standard Figured VOS Washed Cherry', 'https://images.musicstore.de/images/0960/gibson-59-les-paul-standard-figured-vos-washed-cherry-97764_1_GIT0043403-000.jpg', '€ 3,735.00'],
				['Gretsch Custom Shop G6134 Penguin Relic Lake Placid Blue', 'https://images.musicstore.de/images/0640/gretsch-custom-shop-g6134-penguin-relic-lake-placid-blue-uc16021353_1_GIT0037033-000.jpg', '€ 4,939.00'],
				['Gibson Historic 1957 Les Paul VOS Antique Goldtop', 'https://images.musicstore.de/images/0640/gibson-historic-1957-les-paul-vos-antique-goldtop-78294_1_GIT0046891-000.jpg', '€ 3,864.70'],
				['Gibson Les Paul Standard Trans Amber', 'https://images.musicstore.de/images/0640/gibson-les-paul-standard-trans-amber_1_GIT0046355-000.jpg', '€ 2,184.03'],
				['Gibson Les Paul Standard 2018 Blood Orange Burst', 'https://images.musicstore.de/images/0640/gibson-les-paul-standard-2018-blood-orange-burst_1_GIT0042723-000.jpg', '€ 1,867.23'],
				['Epiphone Les Paul ES Pro Faded Cherry', 'https://images.musicstore.de/images/0640/epiphone-les-paul-es-pro-faded-cherry_1_GIT0040131-000.jpg', '€ 409.20'],
				['Epiphone Les Paul Standard Plus PRO Heritage Sunburst', 'https://images.musicstore.de/images/0640/epiphone-les-paul-standard-plus-pro-hs-heritage-cherry-burst_1_GIT0024536-000.jpg', '€ 365.50'],
				['ESP LTD EC-258 Black Satin', 'https://images.musicstore.de/images/0640/esp-ltd-ec-258-black-satin_1_GIT0045010-000.jpg', '€ 354.62'],
				['Epiphone Les Paul Studio Wine Red', 'https://images.musicstore.de/images/0640/epiphone-les-paul-studio-wine-red_1_GIT0045469-000.jpg', '€ 335.30'],
				['Epiphone Les Paul Studio Turquoise', 'https://images.musicstore.de/images/0640/epiphone-les-paul-studio-turquoise_1_GIT0045468-000.jpg', '€ 335.30'],
				['ESP LTD EC-256 Electric Guitar Snow White', 'https://images.musicstore.de/images/0640/esp-ltd-ec-256-snow-white_1_GIT0041499-000.jpg', '€ 332.80'],
				['ESP LTD EC-256FM Electric Guitar See Thru Purple Sunburst', 'https://images.musicstore.de/images/0640/esp-ltd-ec-256fm-see-thru-purple-sunburst_1_GIT0041502-000.jpg', '€ 331.93'],
				['Epiphone Les Paul Standard Lefthand, Ebony', 'https://images.musicstore.de/images/0640/epiphone-les-paul-standard-lefthand-eb-ebony_1_GIT0013090-000.jpg', '€ 331.93'],
				['ESP LTD EC-200 STBCS Sea Thru Black Cherry Satin', 'https://images.musicstore.de/images/0640/esp-ltd-ec-200-stbcs-see-thru-black-cherry-satin_1_GIT0038297-000.jpg', '€ 326.90'],
				['Vintage Reissued V100HB Flamed Honeyburst', 'https://images.musicstore.de/images/0640/vintage-reissued-v100hb-flamed-honeyburst_1_GIT0038204-000.jpg', '€ 326.90'],
				['Vintage Icon Series V100MRPGM Distressed Lemon Drop', 'https://images.musicstore.de/images/0960/vintage-icon-v100mrpgm-distressed-lemon-drop_1_GIT0013289-000.jpg', '€ 326.89'],
				['Epiphone SG Special Vintage Edition Heritage Cherry Sunburst', 'https://images.musicstore.de/images/0640/epiphone-sg-special-vintage-edition-heritage-cherry-sunburst_1_GIT0042556-000.jpg', '€ 125.20'],
				['Jack & Danny New LS100 WH (White)', 'https://images.musicstore.de/images/0640/jack-und-danny-new-ls100-wh-white-_1_GIT0042332-000.jpg', '€ 116.81'],
				['Jack & Danny New LS100 CSB (Cherry Sunburst)', 'https://images.musicstore.de/images/0640/jack-und-danny-new-ls100-csb-cherry-sunburst-_1_GIT0042331-000.jpg', '€ 116.81'],
				['Jack & Danny New LS100 BK Black', 'https://images.musicstore.de/images/0640/jack-und-danny-new-ls100-bk-black_1_GIT0042330-000.jpg', '€ 116.80'],
				['Epiphone Les Paul Special VE VWW Vintage Worn Walnut', 'https://images.musicstore.de/images/0640/epiphone-les-paul-special-ve-vww-vintage-worn-walnut_1_GIT0038892-000.jpg', '€ 113.40'],
				['Epiphone Les Paul Express VS Vintage Sunburst', 'https://images.musicstore.de/images/0640/epiphone-les-paul-express-vs-vintage-sunburst_1_GIT0030629-000.jpg', '€ 113.40'],
				['Epiphone Les Paul Special VE VWHCS Vintage Worn Heritage Cherry', 'https://images.musicstore.de/images/0640/epiphone-les-paul-special-ve-vwhcs-vintage-worn-heritage-cherry_1_GIT0038890-000.jpg', '€ 113.40'],
				['Epiphone Les Paul Special VE VWCH Vintage Worn Cherry', 'https://images.musicstore.de/images/0640/epiphone-les-paul-special-ve-vwch-vintage-worn-cherry_1_GIT0038888-000.jpg', '€ 113.40'],
				['Gusle', 'http://www.gajde.com/wp-content/uploads/2012/11/gusle2.png', 'Будите прави српски витез и узмите за џабе'],
				['Jack & Danny Electric guitar LSC Gold Top P90', 'https://images.musicstore.de/images/0640/jack-und-danny-electric-guitar-lsc-gold-top-p90_1_GIT0040096-000.jpg', '€ 108.40'],
				['Epiphone Les Paul SL Vintage Sunburst', 'https://images.musicstore.de/images/0640/epiphone-les-paul-sl-vintage-sunburst_1_GIT0042549-000.jpg', '€ 108.40'],
				['Epiphone Les Paul Special VE VWEB Vintage Worn Ebony', 'https://images.musicstore.de/images/0640/epiphone-les-paul-special-ve-vweb-vintage-worn-ebony_1_GIT0038889-000.jpg', '€ 106.70'],
				['Epiphone Les Paul Special VE VWVS Vintage Worn Vintage Sunburst', 'https://images.musicstore.de/images/0960/epiphone-les-paul-special-ve-vwvs-vintage-worn-vintage-sunburst_1_GIT0038891-000.jpg', '€ 104.20'],
				['Epiphone Les Paul Express EB Ebony', 'https://images.musicstore.de/images/0640/epiphone-les-paul-express-eb-ebony_1_GIT0030628-000.jpg', '€ 101.70'],
				['Jack & Danny LS300 Cherry Sunburst', 'https://images.musicstore.de/images/0640/jack-und-danny-ls300-cherry-sunburst_1_GIT0000944-002.jpg', '€ 9999.99'],
				['Epiphone Les Paul SL Sunset Yellow', 'https://images.musicstore.de/images/0640/epiphone-les-paul-sl-sunset-yellow_1_GIT0042545-000.jpg', '€ 83.19'],
				['Epiphone Les Paul SL Ebony', 'https://images.musicstore.de/images/0640/epiphone-les-paul-sl-ebony_1_GIT0042547-000.jpg', '€ 83.19'],
				['Epiphone Les Paul SL Heritage Cherry Sunburst', 'https://images.musicstore.de/images/0640/epiphone-les-paul-sl-heritage-cherry-sunburst_1_GIT0042548-000.jpg', '€ 84.90'],
				['Jack & Danny Electric guitar L 80 TBK Transparent Black', 'https://images.musicstore.de/images/0640/jack-und-danny-electric-guitar-l-80-tbk-transparent-black_1_GIT0023416-000.jpg', '€ 93.30'],
			].sort(),
			'ST Models': [
				['Charvel Guthrie Govan Signature HSH Caramelized Ash', 'https://images.musicstore.de/images/0640/charvel-guthrie-govan-signature-hsh-caramelized-ash_1_GIT0040704-000.jpg', '€ 2,775.00'],
				['PRS John Mayer Silver Sky Horizon', 'https://images.musicstore.de/images/0320/prs-john-mayer-silver-sky-horizon_1_GIT0045591-000.jpg', '€ 2,226.05'],
				['PRS John Mayer Silver Sky Onyx', 'https://images.musicstore.de/images/0320/prs-john-mayer-silver-sky-onyx_1_GIT0045589-000.jpg', '€ 2,199.00'],
				['ESP E-II Horizon-III FR See Thru Black', 'https://images.musicstore.de/images/0320/esp-e-ii-horizon-iii-fr-see-thru-black_1_GIT0043141-000.jpg', '€ 1,721.85'],
				['ESP LTD M-400 Black Satin', 'https://images.musicstore.de/images/0320/esp-ltd-m-400-black-satin_1_GIT0041508-000.jpg', '€ 671.40'],
				['ESP LTD MH-400M Natural Satin', 'https://images.musicstore.de/images/0320/esp-ltd-mh-400m-natural-satin_1_GIT0045050-000.jpg', '€ 626.05'],
			].sort(),
			'T Models': [
				['Maybach Teleman Thinline 1968 Custom Caddy Green Metallic', 'https://images.musicstore.de/images/0320/maybach-teleman-thinline-68-custom-caddy-green-metallic_1_GIT0046104-000.jpg', '€ 1,763.90'],
				['G&L USA ASAT Classic MN Butterscotch Blonde', 'https://images.musicstore.de/images/0320/gundl-usa-asat-classic-mn-butterscotch-blonde_1_GIT0042202-000.jpg', '€ 1,511.80'],
				['Maybach Teleman T61 Red Rooster Aged Custom Shop', 'https://images.musicstore.de/images/0320/maybach-teleman-t61-red-rooster-aged-custom-shop_1_GIT0042073-000.jpg', '€ 1,663.00'],
				['G&L USA ASAT Special Orange Flake', 'https://images.musicstore.de/images/0320/gundl-usa-asat-special-orange-flake_1_GIT0042198-000.jpg', '€ 1,427.73'],
				['ESP E-II T-B7 Baritone Snow White', 'https://images.musicstore.de/images/0320/esp-e-ii-t-b7-baritone-snow-white_1_GIT0042196-000.jpg', '€ 1,479.00'],
				['Ormsby Guitars Run 5 TXGTR Carbon 6 Multiscale Gunmetal', 'https://images.musicstore.de/images/0320/ormsby-guitars-run-5-txgtr-carbon-6-multiscale-gunmetal_1_GIT0047105-000.jpg', '€ 1,427.70'],
				['Jack & Danny Electric guitar TL-Mini BSB Butterscotch Blonde', 'https://images.musicstore.de/images/0320/jack-und-danny-electric-guitar-tl-mini-bsb-butterscotch-blonde_1_GIT0027510-000.jpg' ,'€ 73.90'],
				['Vintage Reissued V58JDAB Jerry Donahue Ash Blonde', 'https://images.musicstore.de/images/0640/vintage-reissued-v58jdab-jerry-donahue-ash-blonde_1_GIT0038220-000.jpg', '€ 300'],
				['G&L USA ASAT Classic Bluesboy RW Blue Metal Flake', 'https://images.musicstore.de/images/0640/gundl-usa-asat-classic-bluesboy-rw-blue-metal-flake_1_GIT0042205-000.jpg', '€ 1,672.27'],
				['Maybach Teleman T61 Lake Placid Blue Aged Custom Shop', 'https://images.musicstore.de/images/0640/maybach-teleman-t61-lake-placid-blue-aged-custom-shop_1_GIT0043495-000.jpg', '€ 1,671.40'],
				['Maybach Teleman T61 3-Tone Sunburst Aged Custom Shop', 'https://images.musicstore.de/images/0640/maybach-teleman-t61-3-tone-sunburst-aged-custom-shop_1_GIT0043496-000.jpg', '€ 1,595.80'],
				['Maybach Teleman T54 Wine Red Aged', 'https://images.musicstore.de/images/0640/maybach-teleman-t54-wine-red-aged_1_GIT0040009-000.jpg', '€ 1,427.73'],
				['Godin Acousticaster MN Natural', 'https://images.musicstore.de/images/0640/godin-acousticaster-mn-natural_1_GIT0040376-000.jpg', '€ 948.70'],
				['G&L Asat Classic Bluesboy Blonde Semi Hollow', 'https://images.musicstore.de/images/0640/gundl-asat-classic-bluesboy-blonde-semi-hollow_1_GIT0026295-000.jpg', '€ 503.40'],
				['G&L Asat Classic Bluesboy Semi-Hollow Clear Orange', 'https://images.musicstore.de/images/0640/gundl-asat-classic-bluesboy-semi-hollow-clear-orange_1_GIT0040660-000.jpg', '€ 503.36'],
				['G&L Asat Classic BBL Butterscotch Blonde', 'https://images.musicstore.de/images/0640/gundl-asat-classic-bbl-butterscotch-blonde_1_GIT0026299-000.jpg', '€ 461.30'],
			].sort(),
		},
		'Acoustic Guitars': {
			Dreadnought: [
				['Gibson Hummingbird Regal 2018 Rosewood Burst', 'https://images.musicstore.de/images/0320/gibson-hummingbird-regal-2018-rosewood-burst_1_GIT0043627-000.jpg', '€ 3,103.40'],
				['Martin Guitars 000-42 Authentic 1939', 'https://images.musicstore.de/images/0320/martin-guitars-000-42-authentic-1939_1_GIT0042756-000.jpg', '€ 12,603.40'],
				['Martin Guitars D-45 V', 'https://images.musicstore.de/images/0320/martin-guitars-d-45-v_1_GIT0042755-000.jpg', '€ 8,948.70'],
				['Martin Guitars D-18 Authentic 1939 Aged', 'https://images.musicstore.de/images/0320/martin-guitars-d-18-authentic-1939-aged_1_GIT0045836-000.jpg', '€ 7,058.00'],
			].sort(),
			'Other Shapes': [
				['Maton EBG 808 TE Tommy Emmanuel', 'https://images.musicstore.de/images/0320/maton-ebg-808-te-tommy-emmanuel-_1_GIT0011632-000.jpg', '€ 2,099.20'],
				['Sigma Guitars GME+', 'https://images.musicstore.de/images/0320/sigma-guitars-gme-_1_GIT0044078-000.jpg', '€ 226.10'],
				['Ibanez PC12MH-OPN Open Pore Natural', 'https://images.musicstore.de/images/0320/ibanez-pc12mh-opn-open-pore-natural_1_GIT0030446-000.jpg', '€ 102.50'],
				['PRS SE Angelus AE60E Natural', 'https://images.musicstore.de/images/0320/prs-se-angelus-ae60e-natural_1_GIT0047783-000.jpg', '€ 794.12'],
				['Stanford Roadjack Natural', 'https://images.musicstore.de/images/0320/stanford-roadjack-natural_1_GIT0045116-000.jpg', '€ 293.28'],
				['Epiphone Masterbilt Century De Luxe Classic Vintage Natural', 'https://images.musicstore.de/images/0320/epiphone-masterbilt-century-de-luxe-classic-vintage-natural_1_GIT0038925-000.jpg', '€ 545.38'],
			].sort(),
		},
		'Classical Guitars': {
			'Classical Guitars': [
				['Ortega R122 1/4 Cedar Natural', 'https://images.musicstore.de/images/0640/ortega-r122-1-4-cedar-natural-_1_GIT0034291-000.jpg', '€ 130.30'],
				['Ortega R121 1/4 WH White, incl. Bag', 'https://images.musicstore.de/images/0640/ortega-r121-1-4-wh-white-incl-bag_1_GIT0015219-000.jpg', '€ 141.20'],
				['Ortega R121 1/4 WR Wine Red', 'https://images.musicstore.de/images/0640/ortega-r121-1-4-wr-wine-red-_1_GIT0034284-000.jpg', '€ 137.80'],
				['Ortega R121-1/4 Natural Satin, incl. Gigbag', 'https://images.musicstore.de/images/0640/ortega-r121-1-4-natural-satin-incl-gigbag_1_GIT0018904-000.jpg', '€ 132.80'],
				['Jack & Danny CG-1 1/4 NT Natural', 'https://images.musicstore.de/images/0640/jack-und-danny-cg-1-1-4-nt-natural_1_GIT0030779-000.jpg', '€ 41.20'],
			].sort(),
	    }
};

// SearchResults

// /api/search?searchQuery=gibson&page=1&rpp=10&sort=name

app.get('/api/search', (req, res) => {
  
	let searchQuery = req.query.searchQuery;
	let page = req.query.page || 1;
	let rpp = req.query.rpp || 10;
	let sort = req.query.sort || 'name';  
	let indexOfLastItem = page * rpp;
	let indexOfFirstItem = indexOfLastItem - rpp;

	let matchedFilter = new RegExp(searchQuery, "i");		

	let singleCut = guitars['Electric Guitars']['Single Cut'].filter(item => matchedFilter.test(item));
	let tModels = guitars['Electric Guitars']['T Models'].filter(item => matchedFilter.test(item));
	let stModels = guitars['Electric Guitars']['ST Models'].filter(item => matchedFilter.test(item));	
	let dreadnought = guitars['Acoustic Guitars']['Dreadnought'].filter(item => matchedFilter.test(item));
	let otherShapes = guitars['Acoustic Guitars']['Other Shapes'].filter(item => matchedFilter.test(item));
	let classical = guitars['Classical Guitars']['Classical Guitars'].filter(item => matchedFilter.test(item));	

	let items = flatten([singleCut, tModels, stModels, dreadnought, otherShapes, classical]);

	let currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

	let pageNumbers = [];

	for (let i = 1; i <= Math.ceil(items.length / rpp); i++) {
		pageNumbers.push(i);
	}  

	res.status(200).json({ 
		searchQuery: searchQuery || null,
		page:  page,
		rpp: rpp,
    	pageNum: searchQuery === "" ? null : pageNumbers,
		sort: sort,
		items: searchQuery === "" ? [] : currentItems,	
	});
});

// GET List items

// /api/Electric Guitars/Single Cut?page=1&rpp=10

app.get('/api/:type/:model', (req, res) => {
  
	let type = req.params.type;
	let model = req.params.model;
	let page = req.query.page || 1;
	let rpp = req.query.rpp || 10;
	let items = [];				 

	let indexOfLastItem = page * rpp;
	let indexOfFirstItem = indexOfLastItem - rpp;
	let currentItems = guitars[type][model].slice(indexOfFirstItem, indexOfLastItem);

	let pageNumbers = [];

	for (let i = 1; i <= Math.ceil(guitars[type][model].length / rpp); i++) {
		pageNumbers.push(i);
	} 
  
	res.status(200).json({
		page:  page,
		rpp: rpp,
    	pageNum: pageNumbers,
		items: currentItems,		
	});
});

 module.exports = app;