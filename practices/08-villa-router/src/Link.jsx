import { BUTTONS, EVENTS } from './constants'

export function navigate (href) {
  // 1. Con el objeto History, cambiamos la url, usando el método pushState().
  // pero sin refrescar la página, solo que refleje el cambio en la url.
  // Parámetros: data, unused, url
  window.history.pushState({}, '', href)
  // 2. Crear un evento personalizado, para qvisar que hemos cambiado de url
  // IMPORTANT: No hay una forma de escruchar el evento pushstate
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  // 3. Enviamos el evento a quien lo quiera escucahr
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    // event.preventDefault()
    const isMainEvent = event.button === BUTTONS.primary // Primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // Navegación con SPA
    }
  }

  return (
    <a
      onClick={handleClick}
      href={to}
      target={target}
      {...props}
    />
  )
}
