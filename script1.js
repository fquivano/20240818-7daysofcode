/*
- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?
*/

alert("¡Hola, todos!");

const nombre = prompt("Escribe tu nombre:");
const anio = prompt("Escribe tus años:");
const lenguaje=prompt("¿Qué lenguaje de programación estás estudiando?");
const mensaje = `Hola ${nombre}, tienes ${anio} años y ya estás aprendiendo ${lenguaje} !`;
alert(mensaje);
