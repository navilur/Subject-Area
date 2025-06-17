<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useSubjectStore } from "@/stores/subjects";
import SubjectCard from "./SubjectCard.vue";
import SubjectCardSkeleton from "./SubjectCardSkeleton.vue";

const subjectStore = useSubjectStore();

const fetchSubjects = subjectStore.fetchSubjects;
const loading = computed(() => subjectStore.loading);
const subjectsData = computed(() => subjectStore.subjectsData);

const rowsPerPage = ref(8);
const first = ref(0);
const currentSubjects = ref([]);

watch(subjectsData, (newSubjects) => {
  if (newSubjects) {
    updatePaginatedSubjects();
  }
});

function updatePaginatedSubjects() {
  const start = first.value;
  const end = start + rowsPerPage.value;
  currentSubjects.value = subjectsData.value.slice(start, end);
}

function onPageChange(event) {
  first.value = event.first;
  rowsPerPage.value = event.rows;
  updatePaginatedSubjects();
}

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
      <SubjectCardSkeleton v-if="loading" v-for="n in 8" :key="n" />

      <SubjectCard
        v-else
        v-for="data in currentSubjects"
        :key="data.id"
        :data="data"
      />
    </div>

    <div class="mt-6 flex justify-center">
      <Paginator
        :first="first"
        :rows="rowsPerPage"
        :totalRecords="subjectsData?.length || 0"
        :rowsPerPageOptions="[8, 12, 24]"
        @page="onPageChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
