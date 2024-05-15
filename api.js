// Función para generar un número aleatorio entre 1 y 3 (para elegir la posición de la pelota)
function randomPelota() {
    return Math.floor(Math.random() * 3) + 1;
}

// Función para el juego de elegir dónde está la pelota
function juegoPelota() {
    var posicionPelota = randomPelota();
    var eleccionJugador = parseInt(prompt("¿Dónde pensas que está la pelota? (Ingresa 1 para izquierda, 2 para medio, 3 para derecha)"));

    if (eleccionJugador === posicionPelota) {
        alert("¡Perfecto! La pelota estaba en el vaso número " + posicionPelota);
    } else {
        alert("Incorrecto, la pelota estaba en el vaso número " + posicionPelota);
    }
}

// Función para el juego de preguntas
function juegoPreguntas() {
    var color = prompt("¿Con que colores se forma el Naranja? (Ingresa dos colores separados por coma)").toLowerCase();
    if (color === "rojo,amarillo" || color === "amarillo,rojo") {
        alert("¡Correcto! El naranja se forma mezclando rojo y amarillo");
    } else {
        alert("Incorrecto. El naranja se forma mezclando rojo y amarillo");
    }
}

// Función para generar una carta aleatoria entre 1 y 6
function randomCarta() {
    return Math.floor(Math.random() * 6) + 1;
}

function juegoCartas() {
    var victoriasJugador = 0;
    var victoriasMaquina = 0;

    while (victoriasJugador < 2 && victoriasMaquina < 2) {
        // Barajar 3 cartas para el jugador
        var cartasJugador = [randomCarta(), randomCarta(), randomCarta()];

        // Generar una carta aleatoria para la máquina
        var cartaMaquina = randomCarta();

        while (cartasJugador.length > 0) {
            var eleccionJugador = parseInt(prompt("Tus cartas son: " + cartasJugador.join(", ") + ". Elige una carta para jugar:"));

            if (!cartasJugador.includes(eleccionJugador)) {
                alert("Opción inválida. Por favor, elige una carta válida");
                continue; // Volver a pedir la elección del jugador
            }

            // Mostrar las cartas seleccionadas
            alert("Tu carta: " + eleccionJugador + ", Carta de Cacho: " + cartaMaquina);

            // Determinar el ganador de la ronda
            if (eleccionJugador > cartaMaquina) {
                alert("¡Ganaste la ronda!");
                victoriasJugador++;
            } else if (cartaMaquina > Math.max(...cartasJugador)) {
                alert("Cacho gano la ronda");
                victoriasMaquina++;
            } else {
                alert("Es un empate");
            }

            // Eliminar la carta jugada por el jugador
            cartasJugador.splice(cartasJugador.indexOf(eleccionJugador), 1);

            // Mostrar el marcador actual
            alert("Marcador: Jugador " + victoriasJugador + " - " + victoriasMaquina + " Cacho");

            if (cartasJugador.length === 0 && victoriasJugador === 0 && victoriasMaquina === 0) {
                var jugarOtraVez = confirm("Empate, no gano nadie. ¿Queres volver a jugar?");
                if (jugarOtraVez) {
                    break;
                } else {
                    return; 
                }
            }
            cartaMaquina = randomCarta();
        }
    }

    // Determinar el ganador del juego
    if (victoriasJugador === 2) {
        alert("¡Felicidades! ¡Le ganaste 10k a Cachito!");
    } else {
        alert("Cacho es el ganador.");
    }
}

// Función principal para elegir un juego
function jugar() {
    var opcion = parseInt(prompt("Elige un juego: \n1. Juego de la pelota \n2. Pregunta \n3. Juego de cartas"));

    switch (opcion) {
        case 1:
            juegoPelota();
            break;
        case 2:
            juegoPreguntas();
            break;
        case 3:
            juegoCartas();
            break;
        default:
            alert("Opción inválida. Por favor, elige una opción válida.");
            jugar();
            break;
    }
}

// Llamar a la función para jugar
jugar();
