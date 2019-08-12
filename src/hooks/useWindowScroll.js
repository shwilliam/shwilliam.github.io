import {useState, useEffect} from 'react'

const useWindowScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const onScroll = () => setIsScrolled(window.scrollY > 30)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return [isScrolled]
}

export default useWindowScroll
