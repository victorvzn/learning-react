import { Link } from '../Link'

console.log('Estamos importando el archivo About.jsx desde el Home.jsx y no es necesario --> Solución: Lazy load')

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: {
      hiMyNameIs: '¡Hola! Me llamo',
      andMore: 'y estoy creando un clon de React Router hecho en un directo por midudev.',
      visiteHis: 'Visita su',
      originalRepo: 'repositorio original',
      toSee: 'para ver el midu-router.'
    },
    button: 'Ir al home'
  },
  en: {
    title: 'About us',
    description: {
      hiMyNameIs: 'Hi! My name is',
      andMore: 'and I am creating a clone of React Router made in a live by midudev.',
      visiteHis: 'Visit his',
      originalRepo: ' original repository',
      toSee: 'to see the midu-router.'
    },
    button: 'Go to home page'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1628824799790112769/ePP_0Vtg_400x400.jpg'
          alt='Foto de victorvzn'
          width={200}
          height={200}
        />
        <p>
          {i18n.description.hiMyNameIs} <a href='https://victorvillazon.com' target='_blank' rel='noreferrer'>Victor Villazón</a> {i18n.description.andMore}
        </p>
        <p>
          {i18n.description.visiteHis} <a href='https://github.com/midudev/aprendiendo-react'>{i18n.description.originalRepo}</a> {i18n.description.toSee}
        </p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
