<script setup>
  const githubUrl = "https://github.com/Romain-thib"
  const linkedinUrl = "http://www.linkedin.com/in/romain-thibaut"
</script>


<template>
  <footer
    class="w-full py-14 mt-auto
           bg-stone-200 dark:bg-slate-900
           border-t border-stone-500 dark:border-slate-800"
  >
    <div class="max-w-7xl mx-auto px-6 flex flex-col items-center">
      
      <div class="flex gap-8 mb-10">
        <a :href="githubUrl" target="_blank" 
           class="flex items-center gap-3 px-5 py-2 rounded-xl bg-stone-300 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 hover:-translate-y-1 group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
               class="w-5 h-5 dark:invert group-hover:invert-0 transition-all" />
          <span class="font-bold text-sm uppercase tracking-wider">GitHub</span>
        </a>
        <a :href="linkedinUrl" target="_blank" 
           class="flex items-center gap-3 px-5 py-2 rounded-xl bg-stone-300 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 hover:-translate-y-1 group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
               class="w-5 h-5" />
          <span class="font-bold text-sm uppercase tracking-wider">LinkedIn</span>
        </a>
      </div>

      <div class="text-center">
        <p class="text-lg font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tighter">
          Romain<span class="text-emerald-600">.</span>
        </p>
        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">
          © {{ new Date().getFullYear() }} — {{ $t('ui.footer_text') }}
        </p>
      </div>

    </div>
  </footer>
</template>
