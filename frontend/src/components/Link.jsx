// import './css/app.css'

function Link({alt,className,href,src,target="_BLANK"}) {

  return (
    <>
      <a href={href}  target={target} rel={target!=="_BLANK"?"":"noopener noreferrer"} draggable="false">
        <img className={className} src={src} alt={alt} draggable="false"/>
      </a>
    </>
  )
}

export default Link