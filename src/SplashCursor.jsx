import { useEffect } from 'react'

const SplashCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.style.position = 'fixed'
    cursor.style.width = '20px'
    cursor.style.height = '20px'
    cursor.style.borderRadius = '50%'
    cursor.style.background = 'aqua'
    cursor.style.pointerEvents = 'none'
    cursor.style.zIndex = '9999'
    document.body.appendChild(cursor)

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
      document.body.removeChild(cursor)
    }
  }, [])

  return null
}

export default SplashCursor