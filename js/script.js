//Funcion solo letras
function sololetras(e){
	key=e.keycode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras=" abcdefghijklmnñopqrstuvwxyz";
    especiales ="8-37-38-46-164";
    teclado_especial=false;
    for(var i in especiales){
    	if(key==especiales[i]){
    		teclado_especial=true;break;
    	}  
    } 
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
    	return false;
    } 
}

//funcion validar el correo
function validarcorreo(correo){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if(esValido==true){
            alert('Entrada exitosa');
        } 
        else{
            alert('el correo electronico no es valido');
        }      
    }