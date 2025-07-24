import { useEffect } from 'react'
import './App.css'
import Header from './layouts/Header'
import HeroSection from './layouts/HeroSection'
import About from './layouts/About'
import Gallery from './layouts/Gallery'

function App() {
  const windowScroll = () => {
    window.onscroll = function () {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
      } else {
        header.classList.remove('nav-fixed');
      }
    }
  }

  const burgerMenu = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    })
  }

  const windowClickArea = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    window.addEventListener('click', function (e) {
      if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
      }
    })
  }

  useEffect(() => {
    windowScroll()
    burgerMenu()
    windowClickArea()
  }, []);
  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Gallery/>
    </>
  )
}

export default App
