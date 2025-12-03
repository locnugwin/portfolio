<script lang="ts" setup>
    import { PhLinkedinLogo, PhGithubLogo } from "@phosphor-icons/vue";
</script>

<template>
    <h1>Hi, I'm Loc.</h1>
    <p>A Computer Science and Mathematics student</p>
    <div class="flex items-center gap-2">
        <a 
            href="https://www.linkedin.com/in/locnugwin/" 
            target="_blank" 
            aria-label="Open LinkedIn (opens in new tab)"
        >
            <PhLinkedinLogo :size="32" />
        </a>
        <a 
            href="https://github.com/locnugwin" 
            target="_blank" 
            aria-label="Open GitHub (opens in new tab)"
        >
            <PhGithubLogo :size="32" />
        </a>
    </div>
</template>
