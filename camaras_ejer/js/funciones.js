function insertarDatosCamaras(){
	let objeto_peticion=new XMLHttpRequest();
	objeto_peticion.onreadystatechange=function(){
		if (objeto_peticion.status==200 && objeto_peticion.readyState==4){
			crearTabla(objeto_peticion.responseXML);
		}
	}
	objeto_peticion.open("GET","camaras.xml");
	objeto_peticion.send();
}

function crearTabla(xml){
	let latitudes=xml.getElementsByTagName("Latitud");
	let longitudes=xml.getElementsByTagName("Longitud");
	let fotos=xml.getElementsByTagName("URL");
	let obj_tabla=document.createElement("table");
	obj_tabla.style.border="2px grey dotted";
	for(i=0;i<fotos.length;i++){
		let obj_fila=document.createElement("tr");
		let obj_celda_lat=document.createElement("td");
		let obj_celda_long=document.createElement("td");
		let obj_celda_foto=document.createElement("td");
		let texto_lat=latitudes[i].childNodes[0].nodeValue;
		let texto_long=longitudes[i].childNodes[0].nodeValue;
		obj_celda_lat.innerHTML=texto_lat;
		obj_celda_long.innerHTML=texto_long;
		let imagen=document.createElement("img");
		let url_foto=fotos[i].childNodes[0].nodeValue;
		imagen.src="http://"+url_foto;
		obj_celda_foto.appendChild(imagen);
		obj_fila.appendChild(obj_celda_lat);
		obj_fila.appendChild(obj_celda_long);
		obj_fila.appendChild(obj_celda_foto);
		obj_tabla.appendChild(obj_fila);
	}
	document.getElementById("demo").appendChild(obj_tabla);
}