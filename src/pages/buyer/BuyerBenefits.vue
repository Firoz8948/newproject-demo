<template>
  <div class="buyer-benefits-page">
    <!-- Page Header -->
    <section class="page-header bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="display-4 fw-bold">Buyer Benefits</h1>
            <p class="lead">Discover amazing products and enjoy exclusive benefits</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits Grid -->
    <section class="benefits-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4" v-for="benefit in benefits" :key="benefit.id">
            <div class="benefit-card h-100">
              <div class="card-icon">
                <i :class="benefit.icon"></i>
              </div>
              <h4>{{ benefit.title }}</h4>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="mb-3">Ready to start shopping?</h3>
            <router-link to="/buyer-categories" class="btn btn-light btn-lg">
              Browse Categories
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BuyerBenefits',
  data() {
    return {
      benefits: [
        {
          id: 1,
          icon: 'fas fa-shipping-fast fa-3x text-primary',
          title: 'Fast Delivery',
          description: 'Get your products delivered quickly with our efficient logistics network.'
        },
        {
          id: 2,
          icon: 'fas fa-shield-alt fa-3x text-primary',
          title: 'Secure Payments',
          description: 'Shop with confidence using our secure payment gateway and buyer protection.'
        },
        {
          id: 3,
          icon: 'fas fa-tag fa-3x text-primary',
          title: 'Best Prices',
          description: 'Enjoy competitive prices and exclusive deals from verified sellers.'
        },
        {
          id: 4,
          icon: 'fas fa-headset fa-3x text-primary',
          title: '24/7 Support',
          description: 'Get help whenever you need it with our dedicated customer support team.'
        },
        {
          id: 5,
          icon: 'fas fa-star fa-3x text-primary',
          title: 'Quality Products',
          description: 'Browse authentic products from trusted sellers with verified reviews.'
        },
        {
          id: 6,
          icon: 'fas fa-undo fa-3x text-primary',
          title: 'Easy Returns',
          description: 'Hassle-free return policy for your peace of mind and satisfaction.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-header {
  border-bottom: 3px solid #007bff;
}

.benefit-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.card-icon {
  margin-bottom: 1.5rem;
}

.cta-section {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}
</style>