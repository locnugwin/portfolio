<template>
  <h1>Projects</h1>
  <br />

  <section v-for="item in projects" :key="item.name" class="project">
    <div class="content">
      <h2 class="title">{{ item.name }}</h2>
      <p class="meta">
        <a v-if="item.githubUrl" :href="item.githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span aria-hidden="true"> · </span>{{ item.dates }}
      </p>
      <div class="description">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  margin-bottom: 32px;
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
</style>
