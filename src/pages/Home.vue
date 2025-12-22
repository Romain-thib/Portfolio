<script setup>
import projects from '../data/projects.json'
import ThirdProject from '../components/projects/ThirdProject.vue';
import RaquetteAnimation from '../components/images/RaquetteAnimation.vue';
import BallonFoot from '../components/images/BallonFoot.vue';

const featured = projects.slice(0, 3)
</script>

<template>
  <section class="relative py-16 bg-stone-100 dark:bg-slate-900 overflow-hidden">

  <div class="absolute inset-0 pointer-events-none z-0">
    <div class="right-2/30 ml-5 top-7 opacity-100 absolute 
                w-23 sm:w-28 md:w-30 lg:w-30 xl:w-40
                mt-0 sm:mt-0 md:-mt-3 lg:-mt-3 xl:mt-10
                -mr-3 sm:mr-0 md:-mr-1 lg:-mr-2 xl:mr-0 2xl:mr-20">
      <RaquetteAnimation />
    </div>

    <div class="left-2/30 top-9 opacity-100 absolute 
                w-20 sm:w-24 md:w-28 lg:w-30 xl:w-38
                -mt-2 sm:-mt-2 md:-mt-5 lg:-mt-5 xl:mt-10
                -ml-3 sm:ml-0 md:-ml-1 lg:ml-2 xl:ml-0 2xl:ml-20">
      <BallonFoot />
    </div>
  </div>


    <h2 class="relative z-10 text-4xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-amber-400 text-center">
      {{ $t("presentation.title") }}
    </h2>

    <p class="relative z-10 px-[3%] max-w-4xl mx-auto leading-relaxed text-lg text-slate-700 dark:text-slate-300"> 
      {{ $t("presentation.description") }}
    </p>

    <ThirdProject class="relative z-10" />
  </section>  
</template>

