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
      title: 'meta.home.title',
      description: 'meta.home.description'
    }
  },
  {
    path: '/apartments',
    component: Apartments,
    metadata: {
      title: 'meta.apartments.title',
      description: 'meta.apartments.description'
    }
  },
  {
    path: '/camping',
    component: Camping,
    metadata: {
      title: 'meta.camping.title',
      description: 'meta.camping.description'
    }
  },
  {
    path: '/cafe',
    component: Cafe,
    metadata: {
      title: 'meta.cafe.title',
      description: 'meta.cafe.description'
    }
  },
  {
    path: '/products',
    component: Products,
    metadata: {
      title: 'meta.products.title',
      description: 'meta.products.description'
    }
  },
  {
    path: '/parcels',
    component: Parcels,
    metadata: {
      title: 'meta.parcels.title',
      description: 'meta.parcels.description'
    }
  },
  {
    path: '/contact',
    component: Contact,
    metadata: {
      title: 'meta.contact.title',
      description: 'meta.contact.description'
    }
  }
] 