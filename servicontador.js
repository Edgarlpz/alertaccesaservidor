var fecha_js=new Date();
var segundos = fecha_js.getSeconds();
var hora = fecha_js.getHours(); 
var minutos = fecha_js.getMinutes();

	//setTimeout(relojero,10000);
	relojero();

function relojero(){
	mi_hora=hora;
	mi_hora+=":";
	mi_hora+=minutos;
	mi_hora+=":";
	mi_hora+=segundos;
	process.stdout.write("\u001b[2J\u001b[0;0H");
	console.log(mi_hora);

	segundos=segundos+1;

	if(segundos==20){
		console.log("borrando datos...");
		borra();
	}

	if(segundos==10){
		console.log("Revisando registro de conexion...");
		revisa();
	}
 
if (segundos == 60) {
  segundos = 0;
  minutos++;
  if (minutos == 60) {
    minutos = 0;
    if(hora>9){
    	if (hora<20) {
    		actualiza();
			console.log("Acualizando los datos...");
		}
	}
    hora++;
    if (hora == 24) {
		fecha_js=new Date();
		segundos = fecha_js.getSeconds();
		hora = fecha_js.getHours(); 
		minutos = fecha_js.getMinutes();
    }
  }
}
	setTimeout(relojero,1000);
}

function borra() {
	var data='borra';
    var request=require('request');
    var res=require('response');
	var express=require('express');
	var app=express();
    request({
        method: 'POST',
		url:'http://localhost:8080/Alertaccesa/checkon.php', 
        form: {valor:data}
    },function(err,httpResponse,body){ });

}

function revisa() {
	var data='revisa';
    var request=require('request');
    var res=require('response');
	var express=require('express');
	var app=express();
    request({
        method: 'POST',
		url:'http://localhost:8080/Alertaccesa/checkon.php', 
        form: {valor:'revisa'}
    },function(err,httpResponse,body){ });

    console.log("Enviando datos");
}

function actualiza() {
	var data='actualiza';
    var request=require('request');
    var res=require('response');
	var express=require('express');
	var app=express();
    request({
        method: 'POST',
		url:'http://localhost:8080/Alertaccesa/checkon.php', 
        form: {valor:data}
    },function(err,httpResponse,body){ });

    console.log("Enviando datos");
}