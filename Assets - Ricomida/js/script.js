// Tooltip botones
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// click alert
$( "#btn_alert" ).click(function() {
    alert("El correo fue enviado correctamente...");
});


// Selector.evento(funcion){accion}
// (selector).on("dblclick", función);

// dblclick cambio de color

// Ingredientes
$("h4:first").on("dblclick", function(){
    $("h4:first").addClass("targetdbl");
});
// Preparacion
$("h4:last").on("dblclick", function(){
    $("h4:last").addClass("targetdbl");
});

// toggle contenido de cards
$( ".clickme" ).click(function() {
    $( ".card-text" ).toggle( "slow" );
});