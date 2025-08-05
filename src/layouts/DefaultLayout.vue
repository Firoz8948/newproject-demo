<template>
  <div class="default-layout">
    <!-- Global Header -->
    <GlobalHeader />
    
    <!-- Main Content Area -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- Global Footer -->
    <footer class="bg-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-0">&copy; 2024 Samhita Bazaar. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-end">
            <a href="#" class="text-decoration-none me-3">Privacy Policy</a>
            <a href="#" class="text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    GlobalHeader
  }
}
</script>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

footer {
  margin-top: auto;
}

footer a {
  color: #6c757d;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #007bff;
}
</style>