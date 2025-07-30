import { useEffect } from 'react'
import './App.css'
import Header from './layouts/Header'
import HeroSection from './layouts/HeroSection'
import About from './layouts/About'
import Gallery from './layouts/Gallery'
import Skills from './layouts/Skills'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'

function App() {
  const windowScroll = () => {
    window.onscroll = function () {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
      const btnScrollBack = document.querySelector('#btn-scroll')

      if (window.pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
        btnScrollBack.classList.remove('hidden');
        btnScrollBack.classList.add('flex');
      } else {
        header.classList.remove('nav-fixed');
        btnScrollBack.classList.remove('flex');
        btnScrollBack.classList.add('hidden');
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
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
