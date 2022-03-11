
// MailerLite Universal -->
(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
let c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
let _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

let ml_account = ml('accounts', '1264578', 'o0x0s5n1h4', 'load');
// End MailerLite Universal -->


// Google Function
(function(i,s,o,g,r,a,m){
	i['GoogleAnalyticsObject']=r;
		i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];
		a.async=1;
		a.src=g;
		m.parentNode.insertBefore(a,m)
})
	(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-39236557-9', 'auto');
	ga('send', 'pageview');
 // End Google Function

// NOTE : Add functionallity to comment button
/*
let socialMedia = "<a href='https://www.facebook.com/The-Weekly-Stupid-381670372234061/' target='blank'></a>";
socialMedia += "<a href='http://www.twitter.com/theweeklystupid' target='blank'></a>";
socialMedia += "<a href='http://www.instagram.com/theweeklystupid' target='blank'></a>";
socialMedia += "<a href='https://shop.spreadshirt.com/the-weekly-stupid' target='blank'></a>";



document.getElementById("social").innerHTML = socialMedia;
*/

// NOTE : load nav area
	const current_location = ((document.location.href.split("/").pop()).split(".",1));
	const body_id = document.getElementsByTagName("body")[0].id;
	let nav_menu = "<ul>";
	// NOTE : home page
	nav_menu += "<li><a href='index.html'";
	nav_menu += body_id == "index"?" id='nav_sel'":"";
	nav_menu += ">HOME</a></li>";
	// NOTE : why help
	nav_menu += "<li><a href='whyhelp.html'";
	nav_menu += body_id == "whyhelp"?" id='nav_sel'":"";
	nav_menu += ">Why Help</a></li>";
	// NOTE : flutter faqs
	nav_menu += "<li><a href='faq.html'";
	nav_menu += body_id == "faqs"?" id='nav_sel'":"";
	nav_menu += ">Flutter Faqs</a></li>";
	// NOTE : sightings
	nav_menu += "<li><a href='sightings.html'";
	nav_menu += body_id == "sightings"?" id='nav_sel'":"";
	nav_menu += ">Sightings</a></li>";
	// NOTE : contact
	nav_menu += "<li><a href='contact.html'";
	nav_menu += body_id == "contact"?" id='nav_sel'":"";
	nav_menu += ">Contact</a></li>";
	// NOTE : projects
	nav_menu += "<li><a href='projects.html'";
	nav_menu += body_id == "projects"?" id='nav_sel'":"";
	nav_menu += ">Projects</a></li>";
	nav_menu += "<li><a onclick=\"ml_account('webforms','1273656','h0p0b2','show')\">Newsletter</a></li>";

	nav_menu += "</ul>";

	document.getElementById("main_nav").innerHTML = nav_menu;
	/*
	nav_menu = "<ul>";
	nav_menu += "<li><a href='index.html'>HOME</a></li>";
	nav_menu += "<li><a href='faq.html'>FAQ</a></li>";
	nav_menu += "<li><a href='policy.html'>POLICY</a></li>";
	nav_menu += "<li><a href='contact.html'>CONTACT</a></li>";
	nav_menu += "<li><a href='original_site/index.html' target='blank'>ORIGINAL</a></li>";
	nav_menu += "</ul>";

	document.getElementById("lower_nav").innerHTML = nav_menu;
	*/

// NOTE : COPYRIGHT
 document.getElementById("copyright").innerHTML = "&copy;2018 - " + new Date().getFullYear() + " FlutterBird.org, All rights reserved.";

