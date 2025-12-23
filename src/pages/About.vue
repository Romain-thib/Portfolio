<script setup>
    import Timeline from '../components/about/Timeline.vue'
    import TimelineItem from '../components/about/TimelineItem.vue'
</script>

<template>
  <div class="min-h-screen pt-15 pb-12 mb-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 max-w-15xl mx-auto">

      <div class="mx-10 mt-1 flex flex-col items-center justify-start">
        <h2 class="text-4xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-amber-400 text-center">
          {{ $t("presentation.title") }}
        </h2>

        <p class="text-justify leading-relaxed text-lg text-slate-700 dark:text-slate-300 
                  w-full max-w-xl p-10 bg-stone-200 dark:bg-slate-900
                  border border-stone-300 dark:border-slate-800 rounded-xl">
          {{ $t("presentation.description1") }}
          <br><br>
          {{ $t("presentation.description2") }}
          <br><br>
          {{ $t("presentation.description2") }}
        </p>
      </div>

      <div class="mx-10 mt-15 flex flex-col items-center justify-start 2xl:ml-[0%] mr-5 h-200 lg:mt-0 lg:border-l lg:border-slate-300 dark:lg:border-amber-400 lg:pl-12">
        <Timeline>
          <TimelineItem
            :title="$t('timeline.but.title')"
            :subtitle="$t('timeline.but.subtitle')"
            :description="$t('timeline.but.description')"
          />

          <TimelineItem
            :title="$t('timeline.lycee.title')"
            :subtitle="$t('timeline.lycee.subtitle')"
            :description="$t('timeline.lycee.description')"
          />
        </Timeline>
      </div>

    </div>
  </div>
</template>