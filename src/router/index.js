import { createRouter, createWebHistory } from 'vue-router'

// Main Pages
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

// Buyer Pages
import BuyerBenefits from '@/pages/buyer/BuyerBenefits.vue'
import BuyerCategories from '@/pages/buyer/BuyerCategories.vue'
import BuyerSearch from '@/pages/buyer/BuyerSearch.vue'

// Seller Pages
import SellerBenefits from '@/pages/seller/SellerBenefits.vue'
import SellerOnboarding from '@/pages/seller/SellerOnboarding.vue'
import SellerRegistration from '@/pages/seller/SellerRegistration.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Samhita Bazaar'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us - Samhita Bazaar'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us - Samhita Bazaar'
    }
  },
  // Buyer Routes
  {
    path: '/buyer-benefits',
    name: 'BuyerBenefits',
    component: BuyerBenefits,
    meta: {
      title: 'Buyer Benefits - Samhita Bazaar'
    }
  },
  {
    path: '/buyer-categories',
    name: 'BuyerCategories',
    component: BuyerCategories,
    meta: {
      title: 'Product Categories - Samhita Bazaar'
    }
  },
  {
    path: '/buyer-search',
    name: 'BuyerSearch',
    component: BuyerSearch,
    meta: {
      title: 'Search Products - Samhita Bazaar'
    }
  },
  // Seller Routes
  {
    path: '/seller-benefits',
    name: 'SellerBenefits',
    component: SellerBenefits,
    meta: {
      title: 'Seller Benefits - Samhita Bazaar'
    }
  },
  {
    path: '/seller-onboarding',
    name: 'SellerOnboarding',
    component: SellerOnboarding,
    meta: {
      title: 'Seller Onboarding - Samhita Bazaar'
    }
  },
  {
    path: '/seller-registration',
    name: 'SellerRegistration',
    component: SellerRegistration,
    meta: {
      title: 'Sell on ONDC - Samhita Bazaar'
    }
  },
  // 404 Page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      title: 'Page Not Found - Samhita Bazaar'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Samhita Bazaar'
  next()
})

export default router