<script setup>
    import Timeline from '../components/about/Timeline.vue'
</script>

<template>
  <div class="min-h-[80vh] pt-14 pb-1 my-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 max-w-40xl mx-auto">

      <div class="mx-10 mt-1 flex flex-col items-center justify-start">
        <div class="mb-16">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
            {{ $t("presentation.title") }}<span class="text-emerald-600">.</span>
          </h2>
          <div class="w-20 h-2 bg-emerald-600 rounded-full"></div>
        </div>

        <div class="w-full max-w-3xl space-y-4">
          <div class="border-l-4 border-emerald-600 pl-6 py-4  rounded-r-xl">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ $t("presentation.description1") }}
            </p>
          </div>
              
          <div class="border-l-4  pl-6 py-4 rounded-r-xl">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ $t("presentation.description2") }}
            </p>
          </div>
          
          <div class="border-l-4 border-emerald-600 pl-6 py-4 rounded-r-xl">
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ $t("presentation.description3") }}
            </p>
          </div>
        </div>
      </div>

      <div class="mx-10 mt-15 flex flex-col items-center justify-start 2xl:ml-[0%] mr-10 lg:mt-0 lg:border-l  lg:border-emerald-600 lg:pl-12">
        <Timeline>
        </Timeline>
      </div>
    </div>
  </div>
</template>