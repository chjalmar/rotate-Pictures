$ = jQuery;
$(document).ready(function(){
  //Dos asuntos importantes:
	//- Que las imagenes que se usan como background arriba esten tambien en este array para que reaparezcan en la rotacion
	//  O que no aparezcan, si se desea que no aparezcan de nuevo sino solo al cargar la 1ra vez el sitio
	//- Que el servidor (donde este el Wordpress) no tenga un no cache, para que el navegador tenga en memoria las imagenes
	//y no las descargue otra vez cada vez que als quiera mostrar  
	  
  var usingImages = {};
  
  for (var i = 0; i < grillasImagenes.length; i++) {
  	if (typeof(usingImages[grillasImagenes[i].img_url]) == "undefined") {
  		usingImages[grillasImagenes[i].img_url] = {
  		  used: false,
  		  url:  grillasImagenes[i].img_url,
  		  titulo: grillasImagenes[i].titulo
  		};
  	}
  }
  
  var cuadros = 1;
  
  while (cuadros <= 5) {
  	var este = "cuadro_" + cuadros;
  	cuadros++;
  	
  	setAsUsed(este);
  	
  	var rand = (Math.floor(Math.random() * cuadros * 5) + 5) * 1000;
  	console.log(rand);  	
  	setInterval(function(cuadro) {
  	           	  return function() { 
  	           	  	$("#" + cuadro).animate({opacity: 0.0}, 10);
  	           	  	
  	           	  	var now = $("#" + cuadro).css('background-image');
                    now = now.replace('url(','').replace(')','').replace(/\"/gi, "");
  	           	  	var laUrl = getFreeImg(usingImages, now);
  	           	  	
  	           	  	//cambiar el caption
  	           	  	
  	           	  	$("#" + cuadro + " > div.inside > h2").html( usingImages[laUrl].titulo );
  	           	  	
  	           	  	//creo un elemento Image, y en su evento onload hago visible (opacity) el div que oculte
  	           	  	var bgImg = new Image();
                    bgImg.onload = function(){
                      $("#" + cuadro).animate({opacity: 1}, 500); 
                    };
                    //Si agrego la url a ambos elementos al mismo tiempo, el img y el background-image del div, puedo asumir
                    //que al terminar de cargar uno (el Image) termino tambien el background, asi que en el onload del Image
                    //puedo poner visible el cuadro
                    bgImg.src = laUrl;
                    $("#" + cuadro).css("background-image", "url("+ laUrl +")");  
  	           	  };
  	           }(este), rand);
  	
  }
  
  function setAsUsed(este) {
    var actual = $("#" + este).css('background-image');
    actual = actual.replace('url(','').replace(')','').replace(/\"/gi, "");
  	usingImages[actual].used = true;	
  }
  
  function getFreeImg(imgs, now) {
    var sig = "";
    var randImg = grillasImagenes[Math.floor(Math.random() * grillasImagenes.length)].img_url;
    
    var done = false;
    
    while (done == false) {
    	if (imgs[randImg].used == false) {
    	  sig = randImg;
    	  imgs[now].used = false;
    	  imgs[randImg].used = true;
        done = true;
      } else {
        randImg = grillasImagenes[Math.floor(Math.random() * grillasImagenes.length)].img_url;
      }
    }
    
    return sig;
  }
  
});

