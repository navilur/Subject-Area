<script setup></script>

<template>
  <!-- Header -->
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <RouterLink to="/">
        <img src="@/assets/logo.png" class="h-10 object-cover rounded-t-xl" />
      </RouterLink>
      <nav class="space-x-4 text-sm font-medium">
        <RouterLink
          to="/"
          class="hover:text-[#e87000]"
          exact-active-class="text-[#e87000] font-semibold"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="hover:text-[#e87000]"
          exact-active-class="text-[#e87000] font-semibold"
          >About</RouterLink
        >
      </nav>
    </div>
  </header>

  <main class="flex-1 container mx-auto px-4 py-8">
    <RouterView />
  </main>

  <!-- Footer -->
  <footer class="bg-gray-100 border-t text-sm mt-10">
    <div
      class="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center"
    >
      <p class="text-gray-600">&copy; 2023 Education Hub Ltd.</p>
      <div class="space-x-4 text-gray-500 mt-2 md:mt-0">
        <a href="#" class="hover:text-[#e87000]">Privacy</a>
        <a href="#" class="hover:text-[#e87000]">Terms</a>
        <a href="#" class="hover:text-[#e87000]">Contact</a>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
