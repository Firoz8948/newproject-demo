<template>
  <div id="app">
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
}

/* Bootstrap-like container */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
}

/* Bootstrap-like responsive grid */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-12 { flex: 0 0 100%; max-width: 100%; }
.col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
.col-md-6 { flex: 0 0 50%; max-width: 50%; }
.col-md-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }

@media (max-width: 768px) {
  .col-md-4, .col-md-6, .col-md-8 {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
}

[class*="col-"] {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

/* Utility classes */
.text-center { text-align: center; }
.text-end { text-align: right; }
.mb-0 { margin-bottom: 0; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 3rem; }
.mt-5 { margin-top: 3rem; }
.py-4 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 3rem; }

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0056b3;
  border-color: #004085;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.display-4 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-5 {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
}

.fw-bold {
  font-weight: 700;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.rounded {
  border-radius: 0.25rem;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.bg-light {
  background-color: #f8f9fa;
}

.text-decoration-none {
  text-decoration: none;
}

.me-3 {
  margin-right: 1rem;
}

.text-primary {
  color: #007bff;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2rem;
  }
  
  .display-5 {
    font-size: 1.5rem;
  }
}
</style>