
import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

//Un hook no es mas que una función que regresa un objeto. Recibimos la categoría buscada por el user
export const useFetchGifs = ( category ) => {

    //Creamos nuestro hook 'useState', lo iniciamos con un array vacío, que será el array que contenga las imágenes de los gifs
    //Contiene el arra 'images' y su función modificadora 'setImages'. Tanto el array como dicha función serán constantes
    const [images, setImages] = useState([]);

    //Creamos otro useState para manejar el posible mensaje de carga. Se inicia en true, que significa que la web está cargando
    const [isLoading, setIsLoading] = useState(true)

    //Función que obtiene las imágenes y las envía al array de imágenes del useState haciendo uso de su funcion modificadora
    //Es async, ya que manejaremos el await para esperar a la recepción de los gifs antes de continuar 
    const getImages = async () => {
        //Almacenamos en una constante los gifs obtenidos mediante nuestra función getGifs
        const newImages = await getGifs(category);
        //Seteamos los gifs obtenidos en el array de gifs
        setImages(newImages);
        //Se indica que ya terminó de cargar, y por tanto, debe desaparecer el mensaje de carga
        setIsLoading(false);
    }

    //Hacemos uso del hook useEffect, éste se encarga de realizar una determinada acción solo cuando se cunplan los requisitos que le indicamos. En este caso, el array de requisitos estará vacío, con lo cual, el useEffect solo se ejecutará la primera vez que se renderizçce nuestro componente
    useEffect(() => {
        //Invocamos la función que obtiene y setea los gifs en el array de imágenes 
        getImages();
    }, [])

    return {
        //images: images,
        images,
        //isLoading: isLoading
        isLoading
    }

}