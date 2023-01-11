background = function(ee) {
	if(ee=='show')
	{
		bg = document.querySelector("#background");
		bg.setAttribute('style','height:100%;width:100%;background-color:rgba(255,255,255,0.8);');
		} else if(ee=='hide') {
		
		bg = document.querySelector("#background");
		bg.setAttribute('style','height:0px;width:0px;background-color:rgba(255,255,255,0.8);');
	}
}

menu = function() {
	background('show');
	me = document.querySelector('#menu');
	me.setAttribute('style','height:20em;');
	
}




randy = function() {
	let x = Math.floor((Math.random() * 999999) + 100000);
	document.querySelector('#refer').value += x;
}




tracking = function() {
	background('show');
	tr = document.querySelector('#tracking');
	tr.setAttribute('style','width:25em;height:calc(100% - 64px);');
	
}
home = function() {
	background('hide');
	
		document.querySelector("#menu").setAttribute('style','height:0px;width:100%;');
		document.querySelector("#tracking").setAttribute('style','height:0px;width:0px;');
		document.querySelector("#checkout").setAttribute('style','height:0px;width:0px;');
}

loading = function() {
	ld = document.querySelector('#loader');
	ld.setAttribute('style','height:100%;width:100%;');
	window.setTimeout(function(){
	ld.setAttribute('style','height:0px;width:0px;');
	}, 4000);
}











window.onhashchange = function() {
	switch(location.hash.replace("#",""))
	{ case "menu":
	menu();
	break;
	case "tracking":
	tracking()
	break;
	case "checkout":
	checkout()
	break;
	default:
	home();
	break;}
	
	
}

window.onpageshow = function() {
	location.hash = "";
	
	randy();
	
}


fail = function() {
	window.setTimeout(function() {
	f = document.querySelector('#fail');
	f.style.display = "block";
	}, 2000);
}

checkout = function() {
	background('show');
	ch = document.querySelector('#checkout');
	ch.setAttribute('style','left:50%;');
}



payment = function() {
	window.setTimeout(function() {
	ps1 = document.querySelector('#checkout .slide1');
	ps2 = document.querySelector('#checkout .slide2');
	ps1.style.display = 'none';
	ps2.style.display = 'block';
	}, 2000);
	
}




checkForm = function() {
	ry = 0;
	fi = document.querySelectorAll('#formin .cform');
	for(let i = 0; i < fi.length; i++) {
		ce = fi[i];
		
		if(ce.value.length<3)
		{
			ce.style.border = '1px solid red';
			ry++;
		} else {
			
			ce.style.border = '';
		}
	}
	
	if(ry>0) {
		
	} else {
		 loading();
		 rers = document.querySelector('#region').value.split(':');
		 rer = rers[0];
		  document.querySelector('#prov').innerHTML = rer;
		 payment();
		  document.querySelector('#checkout').scrollTo(0,0);
		  document.querySelector('.slide2').scrollTo(0,0);
	}
	
}


