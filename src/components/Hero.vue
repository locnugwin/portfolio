<script lang="ts" setup>
import {
  PhLinkedinLogo,
  PhGithubLogo,
  PhReadCvLogo,
  PhEnvelopeSimple,
} from "@phosphor-icons/vue";
import Headshot from "../images/Headshot.jpg";
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="flex w-full max-w-6xl items-center">
      <div class="flex flex-col gap-4">
        <h1 class="text-7xl font-bold text-neutral-900">Hi, I'm Loc.</h1>
        <p class="text-lg leading-relaxed text-neutral-600">
          Striving to create accessible web applications with an interest in
          writing clean, reusable, and scalable code.
        </p>
        <div class="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/locnugwin/"
            target="_blank"
            aria-label="Open Loc's LinkedIn (opens in new tab)"
            class="transition-transform duration-200 hover:text-neutral-800 motion-safe:hover:scale-105"
          >
            <PhLinkedinLogo :size="56" />
          </a>
          <a
            href="https://github.com/locnugwin"
            target="_blank"
            aria-label="Open Loc's GitHub (opens in new tab)"
            class="transition-transform duration-200 hover:text-neutral-800 motion-safe:hover:scale-105"
          >
            <PhGithubLogo :size="56" />
          </a>
          <a
            href="/LocNguyenResume.pdf"
            target="_blank"
            aria-label="Open Resume (opens in new tab)"
            class="transition-transform duration-200 hover:text-neutral-800 motion-safe:hover:scale-105"
          >
            <PhReadCvLogo :size="56" />
          </a>
          <a
            href="mailto:loc@nugwin.net"
            aria-label="Send an email to Loc Nguyen"
            class="transition-transform duration-200 hover:text-neutral-800 motion-safe:hover:scale-105"
          >
            <PhEnvelopeSimple :size="56" />
          </a>
        </div>
      </div>
      <img :src="Headshot.src" alt="Headshot" class="h-80 w-80 rounded-full" />
    </div>
  </div>
</template>
