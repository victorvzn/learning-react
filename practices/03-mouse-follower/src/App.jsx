import { useEffect, useState } from 'react'

function useFolloMouse () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('useEffect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias antes de ejecutar el efecto de nuevo
    return () => { // cleanup method
      console.log('cleanup') // Esta línea se ejecuta antes de desmontar el componente o antes de ejecutar el componente
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => { // cleanup method
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return {
    enabled,
    position,
    setEnabled
  }
}

function FollowMouse () {
  const { enabled, position, setEnabled } = useFolloMouse()

  const handleClick = () => setEnabled(!enabled)

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>Mouse follower</h3>
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
