

export const GifItem = ({title, url}) => {

  return (
    <div className="card" >

        <img src={url} alt={title}/>
        <p>{title} ||
        Enlace del gif = <a href={url}>{url}</a></p>
        </div>
  )
}
