
//Creamos y exportamos la función que hace la petición de gifs
//Es async ya que debemos hacer so del await para la petición
//Recibe por argumento la category introducida por el input del user
export const getGifs = async (category) => {

    //Almacenamos en una constante la url utilizada para hacer muestra peticion de gifs
    //Le pasamos nuestra api_key, así como la categoria (que se la pasamos con la propiedad 'q' de query, que recibe un string). Por último le enviamos un valor para la propiedad limit, que limita el numero de resultados
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ij8CUrY6dc9bzEFQTo323Sl3CGD38MJr&q=${category}&limit=20`;

    //Almacenamos en la constante 'resp' el resultado de la fetch a la url creada.
    //Usamos el await ya que debemos esperar a que la fetch finalice antes de continuar con el resto de código de la función
    const resp = await fetch(url);

    //Desestructuramos el array 'data' proveniente del resultado de la response formateado a json
    //Usamos el await porque debemos esperar a que se cree el json de la response para poder extraer los datos de él
    const { data } = await resp.json();

    //Almacenamos en una constante el resultado de mapear la 'data' y extraer de echa los datos necesarios
    const gifs = data.map(img => ({
        //De cada objeto que recibimos, extraemos su id, title y url
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //Retornamos los gifs obtenidos 
    return gifs;
}