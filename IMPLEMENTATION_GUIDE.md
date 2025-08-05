# Vue.js Global Header Implementation Guide

## 🎯 Overview

This guide shows you how to implement a global header for all landing pages in your Vue.js application. The header includes navigation, dropdowns, and a "SELL ON ONDC" button, just like the Samhita Bazaar design you showed.

## 📁 Project Structure

```
src/
├── components/
│   └── common/
│       └── GlobalHeader.vue     # ✅ Global header component
├── layouts/
│   └── DefaultLayout.vue        # ✅ Layout wrapper with header
├── pages/
│   ├── Home.vue                 # ✅ Landing pages
│   ├── About.vue
│   ├── Contact.vue
│   ├── buyer/
│   │   ├── BuyerBenefits.vue    # ✅ Buyer section pages
│   │   ├── BuyerCategories.vue
│   │   └── BuyerSearch.vue
│   └── seller/
│       ├── SellerBenefits.vue   # ✅ Seller section pages
│       ├── SellerOnboarding.vue
│       └── SellerRegistration.vue
├── router/
│   └── index.js                 # ✅ Vue Router configuration
├── App.vue                      # ✅ Root component
└── main.js                      # ✅ App bootstrap
```

## 🚀 How to Use the Global Header

### 1. **The Global Header Component**

Located at `src/components/common/GlobalHeader.vue`, this component includes:

- **Brand Logo**: Samhita Bazaar with store icon
- **Navigation Menu**: Home, About Us, Products (dropdown), Sellers (dropdown), Contact
- **CTA Button**: "SELL ON ONDC" button
- **Mobile Menu**: Responsive hamburger menu
- **Active States**: Highlights current page

### 2. **Layout System**

The `DefaultLayout.vue` automatically includes the global header:

```vue
<template>
  <div class="default-layout">
    <GlobalHeader />  <!-- Global header appears on all pages -->
    <main class="main-content">
      <slot />        <!-- Page content goes here -->
    </main>
    <footer>...</footer>
  </div>
</template>
```

### 3. **Creating New Landing Pages**

To create a new landing page that uses the global header:

```vue
<template>
  <div class="your-page">
    <!-- Your page content here -->
    <!-- The global header is automatically included -->
  </div>
</template>

<script>
export default {
  name: 'YourPage'
}
</script>
```

That's it! The page will automatically have the global header.

### 4. **Adding New Routes**

To add a new page to the navigation, update `src/router/index.js`:

```javascript
const routes = [
  // ... existing routes
  {
    path: '/your-new-page',
    name: 'YourNewPage',
    component: () => import('@/pages/YourNewPage.vue'),
    meta: {
      title: 'Your Page - Samhita Bazaar'
    }
  }
]
```

Then add the link to the header navigation in `GlobalHeader.vue`:

```vue
<li class="nav-item">
  <router-link class="nav-link" to="/your-new-page" @click="closeMobileMenu">
    Your Page
  </router-link>
</li>
```

## 🎨 Customization

### Header Styling

The header uses scoped CSS in `GlobalHeader.vue`. Key classes:

- `.navbar-brand` - Logo styling
- `.sell-btn` - CTA button styling  
- `.nav-link` - Navigation links
- `.dropdown-menu` - Dropdown menus

### Adding Dropdown Items

To add items to existing dropdowns or create new ones:

```vue
<li class="nav-item dropdown" ref="yourDropdown">
  <a class="nav-link dropdown-toggle" href="#" @click.prevent="toggleYourDropdown">
    Your Menu
  </a>
  <ul class="dropdown-menu" :class="{ show: isYourDropdownOpen }">
    <li><router-link class="dropdown-item" to="/item1">Item 1</router-link></li>
    <li><router-link class="dropdown-item" to="/item2">Item 2</router-link></li>
  </ul>
</li>
```

## 📱 Mobile Responsiveness

The header is fully responsive with:
- Hamburger menu for mobile devices
- Collapsible navigation
- Touch-friendly dropdown menus
- Optimized spacing for small screens

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Start Development Server

```bash
npm run dev
# or
yarn dev
```

### 3. Build for Production

```bash
npm run build
# or
yarn build
```

## 🌟 Key Features

✅ **Consistent Design**: Same header across all pages  
✅ **Responsive**: Works on all device sizes  
✅ **Accessible**: Proper ARIA labels and keyboard navigation  
✅ **SEO Friendly**: Proper meta tags and semantic HTML  
✅ **Fast Loading**: Optimized with Vite bundler  
✅ **Easy Maintenance**: Single header component to update  

## 📝 Example Pages Included

1. **Home** (`/`) - Main landing page with hero section
2. **About** (`/about`) - About us page
3. **Contact** (`/contact`) - Contact information
4. **Buyer Benefits** (`/buyer-benefits`) - Benefits for buyers
5. **Buyer Categories** (`/buyer-categories`) - Product categories
6. **Seller Benefits** (`/seller-benefits`) - Benefits for sellers
7. **Seller Registration** (`/seller-registration`) - Sell on ONDC form

## 🎯 Next Steps

1. **Add More Pages**: Create additional landing pages using the same pattern
2. **Customize Styling**: Modify colors, fonts, and spacing in the CSS
3. **Add Analytics**: Integrate tracking for navigation clicks
4. **Optimize Images**: Add proper alt tags and lazy loading
5. **Add Animations**: Enhance with smooth transitions and micro-interactions

## 💡 Tips

- Always test the header on mobile devices
- Keep navigation menus simple and intuitive
- Use consistent naming for routes and components
- Add loading states for better user experience
- Implement proper error handling for navigation

Your global header is now ready and will appear consistently across all your landing pages! 🎉