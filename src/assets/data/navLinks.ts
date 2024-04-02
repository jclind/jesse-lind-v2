import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home'
import Portfolio from '../../pages/Portfolio/Portfolio'
import Services from '../../pages/Services/Services'

export const navLinks = [
  {
    link: 'home',
    path: '/',
    component: Home,
  },
  {
    link: 'about',
    path: '/about',
    component: About,
  },
  {
    link: 'services',
    path: '/services',
    component: Services,
  },
  {
    link: 'portfolio',
    path: '/portfolio',
    component: Portfolio,
  },
  {
    link: 'contact',
    path: '/contact',
    component: Contact,
  },
]
