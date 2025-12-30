<script setup>
  const githubUrl = "https://github.com/Romain-thib"
  const linkedinUrl = "http://www.linkedin.com/in/romain-thibaut"
</script>


<template>
  <footer
    class="w-full py-6 text-center
           bg-stone-400 dark:bg-slate-950
           border-t border-slate-700
           text-zinc-800 dark:text-slate-400"
  >
    <!-- Liens sociaux -->
    <div class="flex justify-center gap-8 mb-4">
      <a 
        :href="githubUrl" 
        target="_blank"
        rel="noopener noreferrer"
        class="group flex flex-col items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white transition-all"
      >
        <div class="p-2 rounded-full shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub"
            class="w-8 h-auto dark:invert"
          />
        </div>
        <span class="text-sm font-medium">GitHub</span>
      </a>

      <a 
        :href="linkedinUrl" 
        target="_blank"
        rel="noopener noreferrer"
        class="group flex flex-col items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
      >
        <div class="p-3 rounded-full shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            class="w-8 h-auto"
          />
        </div>
        <span class="text-sm font-medium">LinkedIn</span>
      </a>
    </div>

    <!-- Texte -->
    <p class="text-sm">
      © {{ new Date().getFullYear() }} Romain — {{ $t('ui.footer_text') }}
    </p>
  </footer>
</template>
