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
	$.getJSON( archivoValidacion, {id:3})

						.done(function(data2) {
										
										/*$("#cargando").css("display","none");*/
											$(data2).each(function (index, data2) {
												$("#banner").append(
											
														
												"<div class='col-xs-6 col-sm-6'><img  class='img-responsive' src='http://radiosolaimogasta.com.ar/img/banner/"+data2.url+"'></div>"
												
												
																	
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
function voto() 
{
	archivoValidacion = "http://www.radiosolaimogasta.com.ar/appc/voto.php?jsoncallback=?"
	$("#pregunta").html (" "); 
	$("#resultado").html (" "); 

	$.getJSON( archivoValidacion, {id:1})

						.done(function(data2) {
										
										/*$("#cargando").css("display","none");*/
											$(data2).each(function (index, data2) {
												$("#pregunta").append(
												
												"<p> ¿"+data2.pregunta+" ?</p>"
												
																	
												)
												$("#resultado").append(
												
												"<p> Si "+data2.si+"</p>"+
												"<p> No "+data2.no+"</p>"
												
																	
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
	
	var archivo = $('#archivo')[0].files[0];
    var numer = $("#nombre").val();
    var telefono = $("#telefono").val();
	var message = $("#mensaje").val();
	var data = new FormData();     
	data.append('archivo',archivo);
	data.append('nombre',numer);
	data.append('telefono',telefono);
	data.append('mensaje',message);
	var url='http://radiosolaimogasta.com.ar/appc/formulario.php?jsoncallback=?';
	$.ajax({
            url:url, //Url a donde la enviaremos
			type:'POST', //Metodo que usaremos
			contentType:false, //Debe estar en false para que pase el objeto sin procesar
            data:data, //Le pasamos el objeto que creamos con los archivos
            processData:false, //Debe estar en false para que JQuery no procese los datos a enviar
            cache:false
				
            })
						
		$("#alertaco").html(""); 
	$("#alertaco").css("display","block");
	$("#alertaco").append("¡Su mensaje ha sido enviado correctamente!");     		
      }
	   
function enviarvoto(){
	

    var resp = $(".resp:checked").val();

	var data = new FormData();     
	data.append('resp',resp);
	var url='http://radiosolaimogasta.com.ar/appc/enviar_voto.php?jsoncallback=?';
	$.ajax({
            url:url, //Url a donde la enviaremos
			type:'POST', //Metodo que usaremos
			contentType:false, //Debe estar en false para que pase el objeto sin procesar
            data:data, //Le pasamos el objeto que creamos con los archivos
            processData:false, //Debe estar en false para que JQuery no procese los datos a enviar
            cache:false
				
            })
						
		$("#msjvoto").html(""); 
	$("#msjvoto").css("display","block");
	$("#msjvoto").append("¡Su Voto ha sido enviado correctamente!");  
 setTimeout("location.href='index.html'", 2000);
      }


 function todas() 
				{
					$("#primera").html("");
					$("#secundarias").html("");
						archivoValidacion = "http://www.radiosolaimogasta.com.ar/appc/principal.php?jsoncallback=?"


					$.getJSON( archivoValidacion, {id:1})

					.done(function(data2) {
					
					/*$("#cargando").css("display","none");*/
						$(data2).each(function (index, data2) {
							$("#primera").append(
						
							"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
							"<H1 class='titulo_primera'>"+data2.titulo+"</h1>"+
							"<div style='float: right;   position: absolute;'>"+
								"<a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
								"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
								"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
							"<img class='img-responsive' src='http://radiosolaimogasta.com.ar/imagenes/"+data2.url+"_400.jpg'>"+
							" </a> <hr>"
							);
						});
						$("#cargando2").css("display","none");
						
					})
	
									.error( function(data2) { 
									$("#cargando2").css("display","block");
									$("#cargando2").append("<p>Compruebe su conexion a internet</p>"); } )

					$.getJSON( archivoValidacion, {id:2})

						.done(function(data2) {
										
										/*$("#cargando").css("display","none");*/
											$(data2).each(function (index, data2) {
												$("#secundarias").append(
											"<span class='title-categoria'>LOCALES</span>"+			
															"<div class='row'><a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
														
												"<div class='col-xs-12 col-sm-12'><div class='box-img-secundarias'><img  class='img-responsive' src='http://radiosolaimogasta.com.ar/imagenes/"+data2.url+"_400.jpg'></div>"+
												"<div class='box-titulo-secundarias'><H1 class='titulo_segundas'>"+data2.titulo+"</h1></div></div>"+
												"<div class='redes'>"+
													"<a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
													"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
													"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
												"</a></div> <hr>"
																	
												);
											});
											$("#cargando").css("display","none");
											
										})
											$.getJSON( archivoValidacion, {id:3})

										.done(function(data2) {
									
										/*$("#cargando").css("display","none");*/
											$(data2).each(function (index, data2) {
										
												$("#infogral").append(
												"<span class='title-categoria'>PROVINCIALES</span>"+			
															"<div class='row'><a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
														
												"<div class='col-xs-12 col-sm-12'><div class='box-img-secundarias'><img  class='img-responsive' src='http://radiosolaimogasta.com.ar/imagenes/"+data2.url+"_400.jpg'></div>"+
												"<div class='box-titulo-secundarias'><H1 class='titulo_segundas'>"+data2.titulo+"</h1></div></div>"+
												"<div class='redes'>"+
													"<a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
													"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
													"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
												"</a></div> <hr>"
																	
																	);
											
											
											});
											$("#cargando").css("display","none");
										
										})
		
				}	
	

                 
		
		
  
		 
		
		
	
			
		
	