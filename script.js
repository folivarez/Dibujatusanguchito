var palabra = "feeeeddeee";



//letrasUnicas(palabra);

//tipoPalabra('maximiliano');


//darVuelta();

function letrasUnicas(texto){
	var palabraFinal = '';
	var aux = texto[0];
	console.log('palabra ' + texto);
	palabraFinal += aux;
	for (var i = 0; i < texto.length ; i++) {
				
		
		if(texto[i] != aux){
			
			aux=texto[i];
			palabraFinal += texto[i];
		}

	}

	console.log("Final " + palabraFinal);

}



function tipoPalabra(texto){

	//console.log('palabra ' + texto);
	var cont = 0;

	for (var i = 0; i < texto.length ; i++) {

		for (var n = 0; n < i ; n++) {
		
				//console.log(n);
				if(texto[i] == texto[n]){
					cont++;
					console.log(texto[i] + ' - ' + texto[n] + '  ' + cont);
				}	
		}
		
	}


	console.log('cont  ' + cont);

	if(cont > 0){
		console.log('NO es un isograma');
	}
	else{
		console.log('Es un isograma');
	}
	

}



function darVuelta(numero){

	//var numero = '123456789';
	var numeroFinal = ""

	for (var i = numero.length -1; i >= 0; i--) {
		numeroFinal += numero[i];
	}

	//console.log(numeroFinal);
	return numeroFinal;
}





console.log("test - " + testDarVuelta());

function testDarVuelta(){
	let resultado = darVuelta('123456789')
	return '987654321' == resultado;
}



