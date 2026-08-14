<template>
  <h1>Experience</h1>
  <br />

  <section v-for="item in experiences" :key="`${item.org}-${item.role}`" class="role">
    <img
      class="logo"
      :class="{ 'logo-border': item.logoBorder }"
      :src="item.logo"
      :alt="item.org"
      width="144"
      height="144"
    >
    <div class="content">
      <h2 class="title">{{ item.role }}</h2>
      <p class="meta">
        <a v-if="item.orgUrl" :href="item.orgUrl" target="_blank" rel="noopener noreferrer">{{ item.org }}</a>
        <template v-else>{{ item.org }}</template>
        <span aria-hidden="true"> · </span>{{ item.dates }}
      </p>
      <div class="description">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.role {
  display: grid;
  grid-template-columns: 144px 1fr;
  align-items: start;
  gap: 24px;
  margin-bottom: 32px;
}

.logo {
  display: block;
  width: 144px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
}

.logo-border {
  border: 1px solid var(--color-border);
}

.content {
  min-width: 0;
}

.title {
  margin: 0 0 8px;
  font-size: 1.45rem;
  line-height: 1.2;
}

.meta {
  margin: 0 0 8px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.description :last-child {
  margin-bottom: 0;
}

@media (width <= 560px) {
  .role {
    grid-template-columns: 96px 1fr;
    gap: 16px;
  }

  .logo {
    width: 96px;
  }
}
</style>
