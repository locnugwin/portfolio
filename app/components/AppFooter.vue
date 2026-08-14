<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer>
        <div class="container footer-inner">
            <p>&copy; {{ year }} <a href="mailto:loc@nugwin.net">Loc Nguyen</a></p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    border-top: 1px solid var(--rule-color);
}

.footer-inner {
    padding-block: 1.5rem;
}

p {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.7;
}

a {
    color: inherit;
}
</style>
