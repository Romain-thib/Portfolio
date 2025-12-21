<template>
  <footer
    class="w-full py-6 text-center
         bg-stone-200 dark:bg-slate-800
         border-t border-stone-300 dark:border-slate-700
         text-zinc-600 dark:text-slate-400"
  >
    <p class="text-sm">
      © {{ new Date().getFullYear() }} Romain — {{ $t('ui.footer_text') }}
    </p>
  </footer>
</template>
