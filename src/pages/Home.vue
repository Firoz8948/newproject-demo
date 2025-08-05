<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="display-4 fw-bold text-primary">REGISTER KARO</h1>
            <h2 class="display-5 fw-bold">PAISE KAMAO</h2>
            <h2 class="display-5 fw-bold mb-4">BUSINESS BADAO</h2>
            
            <p class="lead mb-4">
              Take your business online with Samhita Bazaar, reach customers across India and boost your sales!
            </p>
            
            <div class="cta-buttons">
              <router-link to="/seller-registration" class="btn btn-primary btn-lg me-3">
                REGISTER NOW
              </router-link>
              <router-link to="/about" class="btn btn-outline-primary btn-lg">
                Learn More
              </router-link>
            </div>
          </div>
          
          <div class="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Business Growth" 
              class="img-fluid rounded shadow hero-image"
            >
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="display-6 fw-bold">Why Choose Samhita Bazaar?</h2>
            <p class="lead">Join thousands of businesses growing with us</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4 text-center mb-4">
            <div class="feature-card p-4 h-100">
              <i class="fas fa-users fa-3x text-primary mb-3"></i>
              <h4>Reach More Customers</h4>
              <p>Connect with customers across India through our platform and expand your market reach.</p>
            </div>
          </div>
          
          <div class="col-md-4 text-center mb-4">
            <div class="feature-card p-4 h-100">
              <i class="fas fa-chart-line fa-3x text-primary mb-3"></i>
              <h4>Boost Sales</h4>
              <p>Increase your revenue with our marketing tools and analytics dashboard.</p>
            </div>
          </div>
          
          <div class="col-md-4 text-center mb-4">
            <div class="feature-card p-4 h-100">
              <i class="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
              <h4>Easy to Use</h4>
              <p>Simple and intuitive platform designed for businesses of all sizes.</p>
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
            <h3 class="display-6 fw-bold mb-3">Ready to grow your business?</h3>
            <p class="lead mb-4">Join thousands of businesses already selling on Samhita Bazaar</p>
            <router-link to="/seller-registration" class="btn btn-light btn-lg">
              Get Started Today
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Samhita Bazaar - Grow Your Business Online',
    meta: [
      { name: 'description', content: 'Take your business online with Samhita Bazaar. Reach customers across India and boost your sales with our e-commerce platform.' }
    ]
  }
}
</script>

<style scoped>
.hero-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.hero-image {
  transform: rotate(2deg);
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: rotate(0deg) scale(1.02);
}

.cta-buttons {
  margin-top: 2rem;
}

.features-section {
  background-color: #fff;
}

.feature-card {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.cta-section {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 40px 0;
  }
  
  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-buttons .btn {
    width: 100%;
  }
}
</style>