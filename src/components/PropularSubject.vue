<script setup>
import SubjectCard from "./SubjectCard.vue";
import { useSubjectStore } from "@/stores/subjects";
import { computed, onMounted, ref, watch } from "vue";

const subjectStore = useSubjectStore();

const fetchSubjects = subjectStore.fetchSubjects;
const loading = computed(() => subjectStore.loading);
const error = computed(() => subjectStore.error);
const subjectsData = computed(() => subjectStore?.subjectsData);

const subjects = ref(null);

watch(subjectsData, (newSubjectsData) => {
  subjects.value = newSubjectsData;
});

onMounted(() => {
  fetchSubjects();
});
</script>

<template>
  <div>
    <h2
      class="text-center font-farro text-5xl font-bold text-[#e87000] uppercase"
    >
      Explore Popular Subjects
    </h2>
    <p class="text-center font-farro text-xl mt-2.5 mb-6 text-[#212529bf]">
      Discover the top subjects chosen by students worldwide.
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <SubjectCard v-for="data in subjects" :key="data.id" :data="data" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
