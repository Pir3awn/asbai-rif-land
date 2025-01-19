import { lazy } from 'react'

// Lazy load components
const Hero = lazy(() => import('./components/Hero'))
const Apartments = lazy(() => import('./components/sections/Apartments'))
const Camping = lazy(() => import('./components/sections/Camping'))
const Cafe = lazy(() => import('./components/sections/Cafe'))
const Products = lazy(() => import('./components/sections/Products'))
const Parcels = lazy(() => import('./components/sections/Parcels'))
const Contact = lazy(() => import('./components/sections/Contact'))

export const routes = [
  {
    path: '/',
    component: Hero,
    metadata: {
      title: 'hero.welcome',
      description: 'hero.subtitle'
    }
  },
  {
    path: '/apartments',
    component: Apartments,
    metadata: {
      title: 'apartments.title',
      description: 'apartments.description'
    }
  },
  {
    path: '/camping',
    component: Camping,
    metadata: {
      title: 'camping.title',
      description: 'camping.description'
    }
  },
  {
    path: '/cafe',
    component: Cafe,
    metadata: {
      title: 'cafe.title',
      description: 'cafe.description'
    }
  },
  {
    path: '/products',
    component: Products,
    metadata: {
      title: 'products.title',
      description: 'products.description'
    }
  },
  {
    path: '/parcels',
    component: Parcels,
    metadata: {
      title: 'parcels.title',
      description: 'parcels.description'
    }
  },
  {
    path: '/contact',
    component: Contact,
    metadata: {
      title: 'contact.title',
      description: 'contact.description'
    }
  }
] 