<template>
  <footer
    class="w-full py-6 text-center
         bg-stone-400 dark:bg-slate-950
         border-t border-slate-700
         text-zinc-800 dark:text-slate-400"
  >
    <p class="text-sm">
      © {{ new Date().getFullYear() }} Romain — {{ $t('ui.footer_text') }}
    </p>
  </footer>
</template>
