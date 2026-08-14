<template>
    <header>
        <nav class="nav container" aria-label="Main navigation">
            <NuxtLink to="/" class="site-name">Loc Nguyen</NuxtLink>
            <div class="nav-links">
                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                <NuxtLink to="/experience" class="nav-link">Experience</NuxtLink>
                <NuxtLink to="/research" class="nav-link">Research</NuxtLink>
                <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    border-bottom: 1px solid var(--rule-color);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding-block: 1.5rem;
}

.site-name {
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.nav-link {
    font-size: 0.95rem;
    text-decoration: none;
    color: inherit;
    opacity: 0.7;
    transition: opacity 0.15s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
    opacity: 1;
}

.nav-link.router-link-exact-active {
    opacity: 1;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.35em;
}
</style>
