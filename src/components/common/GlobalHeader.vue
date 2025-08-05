<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <!-- Brand Logo -->
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-store brand-icon"></i>
        Samhita Bazaar
      </router-link>

      <!-- Mobile Toggle -->
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="toggleMobileMenu"
        :class="{ collapsed: !isMobileMenuOpen }"
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" :class="{ show: isMobileMenuOpen }">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="closeMobileMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click="closeMobileMenu">About Us</router-link>
          </li>
          <li class="nav-item dropdown" ref="productsDropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              @click.prevent="toggleDropdown"
              :class="{ show: isDropdownOpen }"
            >
              Products
            </a>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
              <li><router-link class="dropdown-item" to="/buyer-benefits" @click="closeDropdown">Buyer Benefits</router-link></li>
              <li><router-link class="dropdown-item" to="/buyer-categories" @click="closeDropdown">Categories</router-link></li>
              <li><router-link class="dropdown-item" to="/buyer-search" @click="closeDropdown">Search Products</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown" ref="sellersDropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              @click.prevent="toggleSellersDropdown"
              :class="{ show: isSellersDropdownOpen }"
            >
              Sellers
            </a>
            <ul class="dropdown-menu" :class="{ show: isSellersDropdownOpen }">
              <li><router-link class="dropdown-item" to="/seller-benefits" @click="closeSellersDropdown">Seller Benefits</router-link></li>
              <li><router-link class="dropdown-item" to="/seller-onboarding" @click="closeSellersDropdown">Onboarding</router-link></li>
              <li><router-link class="dropdown-item" to="/seller-registration" @click="closeSellersDropdown">Registration</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" @click="closeMobileMenu">Contact</router-link>
          </li>
        </ul>
        
        <!-- Right side button -->
        <div class="d-flex">
          <router-link to="/seller-registration" class="btn btn-primary sell-btn">
            SELL ON ONDC
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GlobalHeader',
  data() {
    return {
      isMobileMenuOpen: false,
      isDropdownOpen: false,
      isSellersDropdownOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      this.isDropdownOpen = false;
      this.isSellersDropdownOpen = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.isSellersDropdownOpen = false;
    },
    toggleSellersDropdown() {
      this.isSellersDropdownOpen = !this.isSellersDropdownOpen;
      this.isDropdownOpen = false;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
      this.isMobileMenuOpen = false;
    },
    closeSellersDropdown() {
      this.isSellersDropdownOpen = false;
      this.isMobileMenuOpen = false;
    },
    handleOutsideClick(event) {
      if (this.$refs.productsDropdown && !this.$refs.productsDropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
      if (this.$refs.sellersDropdown && !this.$refs.sellersDropdown.contains(event.target)) {
        this.isSellersDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
}
</script>

<style scoped>
.navbar-brand {
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
}

.navbar-brand:hover {
  color: #007bff;
}

.brand-icon {
  color: #007bff;
  margin-right: 8px;
}

.sell-btn {
  background-color: #1e5a96;
  border: none;
  padding: 8px 20px;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s ease;
}

.sell-btn:hover {
  background-color: #164a7a;
  color: white;
}

.navbar-nav .nav-link {
  font-weight: 500;
  color: #333 !important;
  margin-right: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #007bff !important;
}

.navbar-nav .nav-link.router-link-active {
  color: #007bff !important;
}

.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1020;
}

.dropdown-menu {
  border: 1px solid #dee2e6;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  color: #007bff;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    text-align: center;
  }
  
  .navbar-nav .nav-link {
    margin-right: 0;
    padding: 10px 0;
  }
  
  .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  
  .dropdown-menu .dropdown-item {
    padding-left: 30px;
  }
}
</style>