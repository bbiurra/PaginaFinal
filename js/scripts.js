// Botón Cv

function openPDF(file){ windows.open(file,'resizable,scrollbars');}

//Botones sección entrevistas

var clic1 = document.getElementById("texto1");
var clic2 = document.getElementById("texto2");
var clic3 = document.getElementById("texto3");
var clic4 = document.getElementById("texto4");


function mostrar(){
    if(clic1.style.display == "block"){
        clic1.style.display = "none";
    } else {
        clic1.style.display = "block";
    }
}

function Mostrar(){
    if(clic2.style.display == "block"){
        clic2.style.display = "none";
    } else {
        clic2.style.display = "block";
    }
}

function MostrarC(){
    if(clic3.style.display == "block"){
        clic3.style.display = "none";
    } else {
        clic3.style.display = "block";
    }
}

function MostrarF(){
    if(clic4.style.display == "block"){
        clic4.style.display = "none";
    } else {
        clic4.style.display = "block";
    }
}

/*Botón desarrollo web*/

var desarrollo = document.getElementById("web");

function mostrarweb(){
    if(desarrollo.style.display == "block"){
        desarrollo.style.display = "none";
    } else {
        desarrollo.style.display = "block";
    }
}

/*Botones de menú de Desarrollo Web*/


/*
$('.conceptosbtns').click(function(){
    $('.textoconceptos.visible').addClass('oculto');
    $('.textoconceptos.visible').removeClass('visible');
    var valor = $(this).value();
    
    if ($('#disenadorweb')){
        $('.textoconceptos.visible').addClass('visible');
        $('.textoconceptos.visible').removeClass('oculto');
    }else {
        $('.textoconceptos.visible').addClass('oculto');
        $('.textoconceptos.visible').removeClass('visible');
    }
        
    
});
*/
var botones = document.getElementById("desarrolladorweb");

function aparece(){
    if (botones.style.display == "block"){
        botones.style.display = "none";
    } else {
        botones.style.display = "block";
    }
}

var botones1 = document.getElementById("disenadorweb");

function aparece1(){
    if (botones1.style.display == "none"){
        botones1.style.display = "block";
        botones2.style.display = "none";
    } else {
        botones1.style.display = "none";
    }
}

var botones2 = document.getElementById("progcompu");

function aparece2(){
    if (botones2.style.display == "block"){
        botones2.style.display = "none";
    } else {
        botones2.style.display = "block";
    }
}
var botones3 = document.getElementById("algoritmo");

function aparece3(){
    if (botones3.style.display == "block"){
        botones3.style.display = "none";
    } else {
        botones3.style.display = "block";
    }
}

var botones4 = document.getElementById("lengprogra");

function aparece4(){
    if (botones4.style.display == "block"){
        botones4.style.display = "none";
    } else {
        botones4.style.display = "block";
    }
}
var botones5 = document.getElementById("lengaltonivel");

function aparece5(){
    if (botones5.style.display == "block"){
        botones5.style.display = "none";
    } else {
        botones5.style.display = "block";
    }
}
var botones6 = document.getElementById("lengbajonivel");

function aparece6(){
    if (botones6.style.display == "block"){
        botones6.style.display = "none";
    } else {
        botones6.style.display = "block";
    }
}
var botones7 = document.getElementById("html");

function aparece7(){
    if (botones7.style.display == "block"){
        botones7.style.display = "none";
    } else {
        botones7.style.display = "block";
    }
}
var botones8 = document.getElementById("css");

function aparece8(){
    if (botones8.style.display == "block"){
        botones8.style.display = "none";
    } else {
        botones8.style.display = "block";
    }
}
var botones9 = document.getElementById("javascript");

function aparece9(){
    if (botones9.style.display == "block"){
        botones9.style.display = "none";
    } else {
        botones9.style.display = "block";
    }
}

/*Botón Competencias Transversales*/

var compet = document.getElementById("competencias");

function mostrarcompetencias(){
    if(compet.style.display == "block"){
        compet.style.display = "none";
    } else {
        compet.style.display = "block";
    }
}
var botones10 = document.getElementById("compconcpt1");

function aparece10(){
    if (botones10.style.display == "block"){
        botones10.style.display = "none";
    } else {
        botones10.style.display = "block";
    }
}

var botones11 = document.getElementById("compconcpt2");

function aparece11(){
    if (botones11.style.display == "block"){
        botones11.style.display = "none";
    } else {
        botones11.style.display = "block";
    }
}
var botones12 = document.getElementById("compconcpt3");

function aparece12(){
    if (botones12.style.display == "block"){
        botones12.style.display = "none";
    } else {
        botones12.style.display = "block";
    }
}
var botones13 = document.getElementById("compconcpt4");

function aparece13(){
    if (botones13.style.display == "block"){
        botones13.style.display = "none";
    } else {
        botones13.style.display = "block";
    }
}


/*
$(document).ready(function() {
    $("input[type=button]").click(function(event){
        var valor = $(event.target).val();
        if(valor == "Competencias transversales"){
            $("#compconcpt1").show();
            $("#compconcpt2").hide();
        } else if (valor == "Desarrollo Web") {
            $("#compconcpt1").hide();
            $("#compconcpt2").show();
        }
            // Otra cosa
        }
    });
});
*/