//Importamos la función necesaria 'useState'
import { useState } from "react";

//Creamos el componente
//Recibimos por argumento sus props, en este caso, desestructuramos la referencia a la funcion 'onNewCategory'
export const AddCategory = ({ onNewCategory }) => {
  //Hook que hace uso del useState para recibir un valor del input, así como la función que lo modifica
  const [inputValue, setInputValue] = useState("");

  //Función que recibe el evento disparado al enviar data por el input.
  //De dicho evento, desestructuramos el target
  const onInputChange = ({ target }) => {
    //Hacemos uso de la funcion modificadora del 'inputValue' y le pasamos lo recibido por el input del form
    setInputValue(target.value);
  };

  //Funcion ejecutada en el momento que el formulario es enviado, recibe el event disparado al enviar el form
  const onSubmit = (event) => {
    
    //Con 'preventDefault()' detenemos el comportamiento por defecto del evento
    //En este caso, esta funcion está invocada por un form, cuyo comportamiento por defecto es que al ser enviado, recarga toda la web
    event.preventDefault();

    //Evitamos que el inputValue tenga menos de un caracter. Si detecta el error, invocamos un return vacío para que se salga de la función
    if(inputValue.trim().length < 1) return; 

    //Invocamos la funcion para añadir nuevaws categorias y le pasamos el inputValue del form 'limpio' sin espacios
    onNewCategory( inputValue.trim());

    //Una vez que se envíen los datos del form, queremos que el input se quede en blanco de nuevo
    setInputValue('');
};

  //Estructura retornada desde nuestro componente
  return (
    //Debe estar dentro de un form, ya que así podemos manejar la data que el user coloque dentro del input
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
