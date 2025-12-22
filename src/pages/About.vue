
<script setup>
    import projects from '../data/projects.json'
    import Timeline from '../components/about/Timeline.vue'
    import TimelineItem from '../components/about/TimelineItem.vue'
</script>


<template>
    <h2 class="relative z-10 text-4xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-slate-100 text-center">
      {{ $t("presentation.title") }}
    </h2>

    <p class="relative z-10 px-[3%] max-w-4xl mx-auto leading-relaxed text-lg text-slate-700 dark:text-slate-300"> 
      {{ $t("presentation.description") }}
    </p>
  <Timeline>
    <TimelineItem>Lycée (2016–2019)</TimelineItem>
    <TimelineItem>BUT Informatique (2023–Aujourd'hui)</TimelineItem>
  </Timeline>
</template>
