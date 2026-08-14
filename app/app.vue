<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="container">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
main {
  padding-block: 72px;
}

@media (width <= 680px) {
  main {
    padding-block: 48px;
  }
}
</style>
