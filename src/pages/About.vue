<script setup>
    import Timeline from '../components/about/Timeline.vue'
    import TimelineItem from '../components/about/TimelineItem.vue'
</script>

<template>
  <div class="min-h-screen pt-15 pb-12 mb-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 max-w-40xl mx-auto">

      <div class="mx-10 mt-1 flex flex-col items-center justify-start">
  <h2 class="text-4xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-amber-400 text-center">
    {{ $t("presentation.title") }}
  </h2>

    <div>
      </div>
        <!-- Option 3: Accordion style avec bordure gauche -->
        <div class="w-full max-w-3xl space-y-4">
          <div class="border-l-4 border-amber-400 dark:border-amber-500 pl-6 py-4 bg-stone-50 dark:bg-slate-900/50 rounded-r-xl">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ $t("presentation.description1") }}
            </p>
          </div>
          
          <div class="border-l-4  pl-6 py-4 bg-stone-50 dark:bg-slate-900/50 rounded-r-xl">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ $t("presentation.description2") }}
            </p>
          </div>
          
          <div class="border-l-4 border-amber-400 dark:border-amber-500 pl-6 py-4 bg-stone-50 dark:bg-slate-900/50 rounded-r-xl">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ $t("presentation.description3") }}
            </p>
         </div>
      </div>
    </div>

      <div class="mx-10 flex flex-col items-center justify-start 2xl:ml-[0%] mr-10 lg:mt-0 lg:border-l lg:border-slate-300 dark:lg:border-amber-400 lg:pl-12">
        <Timeline>
        </Timeline>
      </div>
      
    </div>
  </div>
</template>