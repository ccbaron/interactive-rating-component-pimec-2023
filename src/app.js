
// 1. SELECCIÓN DE ELEMENTOS //

const spanRatings = document.querySelectorAll('#ratings-range span'); // Todos los números de rating (1-5)
const btnSubmit = document.querySelector('button'); // Botón de enviar
const divFrontComponent = document.getElementById('frontside-component'); // Cara frontal
const divBackComponent = document.getElementById('backside-component');  // Cara posterior
const spanSelectedRating = document.getElementById('selected-rating'); // Donde mostraremos el rating

// 2. VARIABLE DE ESTADO (para guardar el rating seleccionado)

let ratingSeleccionado = null;

// 3. FUNCIÓN PARA MANEJAR CLIC EN LOS RATINGS

function manejarClicRating(evento) {
    // Obtenemos el elemento clickeado
    const spanClickeado = evento.target;

    // Quitamos las clases a todos los ratings
    spanRatings.forEach(function (spanRating) {
        spanRating.classList.remove('bg-orange', 'text-black', 'font-bold');
    });

    // Añadimos clases al seleccionado
    spanClickeado.classList.add('bg-orange', 'text-black', 'font-bold');

    // Guardamos el valor seleccionado
    ratingSeleccionado = spanClickeado.getAttribute('data-rating');

    // Habilitamos el botón
    btnSubmit.disabled = false;
}

// 4. FUNCIÓN PARA MANEJAR EL ENVÍO

function manejarEnvio(evento) {
    evento.preventDefault(); // Evitamos que recargue la página

    if (!ratingSeleccionado) return; // Si no hay selección, no hacemos nada

    // Mostramos el rating seleccionado
    spanSelectedRating.textContent = ratingSeleccionado;

    // Cambiamos de vista
    divFrontComponent.style.display = 'none';
    divBackComponent.style.display = 'block';
}

// 5. ASIGNAR EVENTOS A LOS ELEMENTOS

spanRatings.forEach(function (spanRating) {
    spanRating.addEventListener('click', manejarClicRating);
});

btnSubmit.addEventListener('click', manejarEnvio);