

//Custom hook creado por nosotro
import { useFetchGifs } from "../hooks/useFetchGifs";

//
import { GifItem } from "./GifItem";

//Creamos el componente GifGrid, recibe por argumento la propiedad 'category'
export const GifGrid = ({ category }) => {

  //Desestructuramos lo necesario de nuestro custom hook 'useFetchGifs'
  const { images, isLoading } = useFetchGifs(category);

  //Retornamos la estructura de nuestro componente
  return (
    <>
      {/* Título de la categoría buscada */}
      <h3>{category}</h3>

      {/* Mensaje de carga. Utilizamos un 'if acortado' que consiste en que si alguno de los dos valores regresa false, no se ejecuta nada de lo que hay en su interior, en este caso, dicha evaluación solo depende de si 'isLoading' es true o no, ya que el h2 está explícitamente indicado y no da lugar a recibir alguna modificación por su parte */}
      {
        isLoading && <h2>Cargando...</h2>
      }

      {/* class no porque es palabra reservada */}
      <div className='card-grid'>
        {/* mapeamos el array de imagenes y desestructuramos de él el 'id' para la key, y con el operador spread, asignamos a la variable 'img' todas las properties recibidas, para así pasarselas como props al componente GifItem. Estos datos se los pasamos al componente GifItem */}
        {images.map(
          (img) =>
            <GifItem
              key={img.id}
              {...img} />
        )}
      </div>
    </>
  );
};
