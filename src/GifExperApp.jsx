//Los hooks es lo primero que se importa, los hooks permiten usar el estado y otras características de React. Son simples funciones
//La palabra 'use' indica que se trata de un hook
import { useState } from "react";

//Importamos los componentes creados (no es necesario indicar el nombre de 'index', ya que por defecto javascript buscará el archivo con ese nombre dentro del directorio indicado)
import { AddCategory, GifGrid } from "./components";

//Creamos nuestro function component GifExpertApp
export const GifExpertApp = () => {
  //Desestructuramos del useState el valor y la función devuelta, el valor lo recibe por argumento, en este caso, el valor de 'value' se almacena en 'counter', y la función setCounter será la que indique las modificaciones que sufrirá ese valor 'counter'
  const [categories, setCategories] = useState(["Pokemon", "Dragon Ball"]);

  //Función que maneja el input recibido desde el componente 'AddCategory' y lo añade al array de categories
  const onAddCategory = (newCategory = '') => {

    //Comprobamos si la nueva categoría ya existe en el array actual, si es así, devolvemos un return vacío para que se salga de la función
    if (categories.includes(newCategory)) return;

    //Añadimos la categoría al array de categories
    //Otra forma de hacerlo setCategories( cat => [category, ...cat])
    setCategories([newCategory, ...categories]);
  };

  //Para poder retornar varios elementos en gual línea jerárquica, colocamos los indicadores de un elemento vacío, esto indica a react que deseamos hacer uso de un fragment que contenga varios elementos en su interior sin necesidad de tener que crear un nuevo div para ello
  return (
    //Hacemos uso de corchetes para usar expresones o variables.
    //Para imprimir objetos => JSON.stringify( nameObj)
    //Intentar imprimir una función asíncrona es intentar imprimir una promesa, que al fin y al cabo es un obj, así que requiere serialización
    //Imprimir función => functionName( args )
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      {/* Le pasamos una propiedad llamada onNewCategory que contiene la referencia a la funcion 'onAddCategory' que se encarga de añadir categorias nuevas al array de categorias*/}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Botón que, al ser pulsado, ejecuta la función que añadirá una nueva categoría al array de categories */}
      {/* Para que funcione bien y no de fallos ni agregue objetos vacíos, debemos integrar el botón en el componente AddCategory */}
      <button onClick={onAddCategory}>Agregar</button>

      {/* Entre corchetes (porque es una expresión de código javascript) colocamos el map() del arreglo de categories, con cada category recibida, retornamos un nuevo elemento de component GifGrid. Dicho elemento debe contener una propiedad 'key' que lo identifque (que en este caso será la misma categtoría), así como recibirá tambien la categoría enviada por el input del user mediante una property llamada 'category' */}
      {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
      ))
      }

      {/* gif item */}
    </>
  );
};
