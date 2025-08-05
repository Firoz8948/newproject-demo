# Vue.js Project Structure Guide

## Recommended Folder Structure

```
src/
├── assets/                 # Static assets (images, fonts, etc.)
│   ├── images/
│   ├── icons/
│   └── styles/
│       ├── globals.css
│       ├── variables.css
│       └── components/
├── components/             # Reusable Vue components
│   ├── common/            # Common/shared components
│   │   ├── GlobalHeader.vue
│   │   ├── GlobalFooter.vue
│   │   ├── Button.vue
│   │   └── Modal.vue
│   ├── forms/             # Form-related components
│   │   ├── ContactForm.vue
│   │   └── SearchForm.vue
│   └── ui/                # UI-specific components
│       ├── Card.vue
│       ├── Navbar.vue
│       └── Dropdown.vue
├── layouts/               # Layout components
│   ├── DefaultLayout.vue
│   ├── AuthLayout.vue
│   └── AdminLayout.vue
├── pages/                 # Page components (views)
│   ├── Home.vue
│   ├── About.vue
│   ├── Contact.vue
│   ├── buyer/
│   │   ├── BuyerBenefits.vue
│   │   ├── BuyerCategories.vue
│   │   └── BuyerSearch.vue
│   └── seller/
│       ├── SellerOnboarding.vue
│       ├── SellerBenefits.vue
│       └── SellerRegistration.vue
├── router/                # Vue Router configuration
│   ├── index.js
│   └── routes.js
├── store/                 # Vuex/Pinia store (state management)
│   ├── index.js
│   ├── modules/
│   │   ├── auth.js
│   │   ├── products.js
│   │   └── user.js
├── utils/                 # Utility functions
│   ├── api.js
│   ├── helpers.js
│   └── constants.js
├── services/              # API services
│   ├── authService.js
│   ├── productService.js
│   └── userService.js
├── composables/           # Vue 3 composables (if using Composition API)
│   ├── useAuth.js
│   ├── useApi.js
│   └── useLocalStorage.js
├── directives/            # Custom Vue directives
│   └── clickOutside.js
├── plugins/               # Vue plugins
│   ├── fontawesome.js
│   └── bootstrap.js
├── main.js               # Main entry point
└── App.vue               # Root component
```

## How to Organize by Feature

For larger applications, you might want to organize by feature:

```
src/
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   │   ├── LoginForm.vue
│   │   │   └── SignupForm.vue
│   │   ├── pages/
│   │   │   ├── Login.vue
│   │   │   └── Signup.vue
│   │   ├── store/
│   │   │   └── authStore.js
│   │   └── services/
│   │       └── authService.js
│   ├── products/
│   │   ├── components/
│   │   │   ├── ProductCard.vue
│   │   │   └── ProductList.vue
│   │   ├── pages/
│   │   │   ├── ProductCatalog.vue
│   │   │   └── ProductDetails.vue
│   │   └── store/
│   │       └── productStore.js
│   └── marketplace/
│       ├── buyer/
│       └── seller/
├── shared/               # Shared across features
│   ├── components/
│   ├── utils/
│   └── services/
└── core/                # Core app functionality
    ├── layouts/
    ├── router/
    └── store/
```

## File Naming Conventions

1. **Components**: PascalCase (e.g., `GlobalHeader.vue`, `ProductCard.vue`)
2. **Pages/Views**: PascalCase (e.g., `Home.vue`, `ProductDetails.vue`)
3. **Services**: camelCase (e.g., `authService.js`, `productService.js`)
4. **Utils**: camelCase (e.g., `helpers.js`, `constants.js`)
5. **Store modules**: camelCase (e.g., `userStore.js`, `productStore.js`)

## Component Organization Best Practices

1. **Single Responsibility**: Each component should have one clear purpose
2. **Composition over Inheritance**: Use composition to build complex components
3. **Props and Events**: Clear interface between parent and child components
4. **Scoped Styles**: Use scoped CSS to avoid style conflicts
5. **Reusability**: Build components that can be reused across the application