import { Link } from '../Link'

export function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1628824799790112769/ePP_0Vtg_400x400.jpg'
          alt='Foto de victorvzn'
          width={200}
          height={200}
        />
        <p>
          ¡Hola! Me llamo <a href='https://victorvillazon.com' target='_blank' rel='noreferrer'>Victor Villazón</a> y estoy creando un clon de React Router hecho en un directo por midudev.
        </p>
        <p>
          Visita su <a href='https://github.com/midudev/aprendiendo-react'>repositorio original</a> para ver el midu-router.
        </p>
      </div>
      <Link to='/'>Ir al home</Link>
    </>
  )
}
