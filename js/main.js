function redsocial(expr,id){ 
    switch (expr) {
      case 3:

        window.plugins.socialsharing.shareViaTwitter('', null /* img */, 'http://radiosolaimogasta.com.ar/noticia.php?id=='+id);
            
        break;
      case 2:
        window.plugins.socialsharing.shareViaFacebook('', null /* img */, 'http://radiosolaimogasta.com.ar/noticia.php?id='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      case 1:
            window.plugins.socialsharing.shareViaWhatsApp('', null /* img */, 'http://radiosolaimogasta.com.ar/noticia.php?id='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      default:
        console.log(id);
    }
} 		
function init() 
{
	i=0;
	archivoValidacion = "http://www.radiosolaimogasta.com.ar/appc/carusel.php?jsoncallback=?"


	$.getJSON( archivoValidacion, {id:1})

	.done(function(data2) {
	
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
	
			if(i==0)
				{
					$(".carousel-inner").append(
					
						"<div class='item active'>"+
						"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
							"<img  src='http://www.radiosolaimogasta.com.ar/imagenes/"+data2.url+"_400.jpg'>"+
							"<div class='carousel-caption'>"+
									"<h1>"+data2.titulo+"</h1>"+
							"</div> </a></div>"
					);
				}
			else{
					$(".carousel-inner").append(
				
						"<div class='item'>"+
							"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
						"<img  class='img-responsive' src='http://www.radiosolaimogasta.com.ar/imagenes/"+data2.url+"_400.jpg'>"+
						"<div class='carousel-caption'>"+
								"<h1>"+data2.titulo+"</h1>"+
								
						"</div></a></div>"
					);
				}
			
			i++;
		});
		$("#cargando").css("display","none");
		
	})
	$.getJSON( archivoValidacion, {id:2})

						.done(function(data2) {
										
										/*$("#cargando").css("display","none");*/
											$(data2).each(function (index, data2) {
												$("#secundarias-inicial").append(
											
															"<div class=''><a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
														
												"<div class='col-xs-6 col-sm-6'><div class='box-img-secundarias'><img  class='img-responsive' src='http://radiosolaimogasta.com.ar/imagenes/"+data2.url+"_t.jpg'></div>"+
												"<div class='box-titulo-secundarias'><H1'>"+data2.titulo+"</h1></div></div>"
												
																	
												);
											});
											$("#cargando").css("display","none");
											
										})
	.error( function(data2) { 
	$("#cargando").html("");
	$("#cargando").append("<p>Error al cargar. </p>"); 
	$("#cargando").append("<p>Compruebe su conexion a internet.</p>"); 
	$("#cargando").append("<button type='button' class='btn btn-success' onclick='init()'>Intertar de Nuevo</button>"); 
	} )


	
	}

function cargar(id) {
	$("#noticia").html (" "); 
	$("#iconos").html (" "); 
	archivoValidacion = "http://radiosolaimogasta.com.ar/appc/noticia.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {id:id})
	.done(function(data) 
	{
		$("#noticia").append(
								
								"<p class='titulo_primera'>"+data.titulo+"</p> "+
								"<p class='copete_individual'>"+data.copete+"</p> "
								
							);
		$("#noticia").append(
		"<div class='pull-right'><div class='imgred col-xs-4'> <a  onclick='redsocial("+1+","+id+")'><span class='icon-whatsapp'></span></a></div>"+
		"<div class='imgred  col-xs-4'><a onclick='redsocial("+2+","+id+")'><span class='icon-facebook'></span></a></div>"+
		"<div class='imgred col-xs-4'><a onclick='redsocial("+3+","+id+")'><span class='icon-twitter'></span></a></div></div>"
		);
		$("#noticia").append( "<img  src='http://radiosolaimogasta.com.ar/imagenes/"+data.url+"_t.jpg'>"); 
		
		$("#noticia").append("<div class='copete'>"+data.cuerpo+"</div>");
				
		
		
	});

	
 }

 function enviarcorreo(){

             	var number = $("#nombre").val();
             	var telefono = $("#telefono").val();
             	/*var img = $("#archivo").files;
				alert(img);*/
             	var message = $("#mensaje").val();
				archivoValidacion = "http://radiosolaimogasta.com.ar/appc/formulario.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {nombre:number, mensaje:message,telefono:telefono})
	            .done(function(data) 
	{
	$("#alertaco").css("display","block");
		$("#alertaco").append(
								
								data.ex
								);              
             }); 
      } 
	

                 
		
		
  
		 
		
		
	
			
		
	