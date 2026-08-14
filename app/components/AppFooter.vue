<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer>
        <div class="container footer-inner">
            <p>&copy; {{ year }} <a href="mailto:loc@nugwin.net" target="_blank" rel="noopener noreferrer">Loc Nguyen</a></p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    border-top: 1px solid var(--color-border);
    color: var(--color-text-muted);
}

.footer-inner {
    padding-block: 28px;
}

p {
    margin: 0;
    font-size: 0.9rem;
}
</style>
