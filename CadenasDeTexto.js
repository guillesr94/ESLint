// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

// - Duplica el archivo del ejercicio de la sesión 04-Textos

// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)

// - Crea el fichero .eslintrc.json

// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
/*eslint-disable*/
// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
/* eslint-enable */
// - Crea un script en el package.json para corregir automáticamente todos los errores

// - Ejecuta el script a través del terminal

// - Una cadena de texto con tu Nombre
const nombre = "Guillermo";
// - Otra cadena de texto con tu Apellido
let apellido = "Suarez";

/* eslint-disable */
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
/* eslint-enable */

let estudiante = `${nombre} ${apellido}`;
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
console.log(estudiante.toUpperCase());
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
console.log(estudiante.toLowerCase());
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length);
// - Una variable que contenga la primera letra del Nombre
console.log(nombre.slice(0, 1));
// - Otra variable que contenga la última letra del Apellido
console.log(apellido.slice(apellido.length - 1));
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let cadenaSinEspacios = estudiante.replace(/\s+/g, "");
console.log(cadenaSinEspacios);
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let comprobar = estudiante.includes(nombre);
console.log(comprobar);
