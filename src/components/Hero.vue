<script lang="ts" setup>
    import { PhLinkedinLogo, PhGithubLogo } from "@phosphor-icons/vue";
</script>

<template>
    <h1>LOC NGUYEN</h1>
    <h1>SOFTWARE ENGINEER</h1>
    <div class="flex items-center gap-2">
        <a 
            href="https://www.linkedin.com/in/locnugwin/" 
            target="_blank" 
            aria-label="Open LinkedIn (opens in new tab)"
            class="hover:text-neutral-800"
        >
            <PhLinkedinLogo :size="32" />
        </a>
        <a 
            href="https://github.com/locnugwin" 
            target="_blank" 
            aria-label="Open GitHub (opens in new tab)"
            class="hover:text-neutral-800"
        >
            <PhGithubLogo :size="32" />
        </a>
    </div>
    <p>Striving to create accessible web applications with an interest in writing clean, reusable, and scalable code.</p>
</template>
