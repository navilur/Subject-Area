<script setup>
import { useSubjectStore } from "@/stores/subjects";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import SubjectDetailsSkeleton from "./SubjectDetailsSkeleton.vue";

const subjectStore = useSubjectStore();

const route = useRoute();
const subjectId = route.params.id;

const fetchSingleSubject = subjectStore.fetchSingleSubject;
const loading = computed(() => subjectStore.loading);
const error = computed(() => subjectStore.error);
const singleSubjectsData = computed(() => subjectStore?.singleSubjectsData);

const subject = ref(null);

watch(singleSubjectsData, (newSingleSubjectsData) => {
  subject.value = newSingleSubjectsData;
});

onMounted(() => {
  fetchSingleSubject({ id: subjectId });
});
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <SubjectDetailsSkeleton v-if="loading" />
    <div v-else-if="error" class="text-center text-red-600">{{ error }}</div>

    <div
      v-else-if="subject"
      class="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-5"
    >
      <h1 class="text-3xl font-bold font-farro text-[#e87000] mb-2">
        {{ subject.subject_area }}
      </h1>

      <p class="text-gray-600 text-md font-farro">
        <strong>Department:</strong>
        {{ subject.subject_area_department?.name || "N/A" }}
      </p>

      <div v-if="subject.overview" class="mt-4">
        <h2 class="text-xl font-semibold mb-1 font-farro">Overview</h2>
        <p class="text-gray-700 font-farro">{{ subject.overview }}</p>
      </div>

      <div v-if="subject.why_this" class="mt-4">
        <h2 class="text-xl font-semibold mb-1 font-farro">
          Why Choose This Subject?
        </h2>
        <p class="text-gray-700 font-farro">{{ subject.why_this }}</p>
      </div>

      <div v-if="subject.requirement" class="mt-4">
        <h2 class="text-xl font-semibold mb-1 font-farro">Requirements</h2>
        <p class="text-gray-700 font-farro">{{ subject.requirement }}</p>
      </div>

      <div v-if="subject.tuition_fee" class="mt-4">
        <h2 class="text-xl font-semibold mb-1 font-farro">Tuition Fee</h2>
        <p class="text-gray-700 font-farro">{{ subject.tuition_fee }}</p>
      </div>

      <div class="text-sm text-gray-400 pt-6 font-farro border-t mt-6">
        <p>
          Created At:
          {{ new Date(subject.created_at).toLocaleDateString() }}
        </p>
        <p>
          Updated At:
          {{ new Date(subject.updated_at).toLocaleDateString() }}
        </p>
      </div>
    </div>

    <div v-else class="text-center font-farro text-gray-500">
      Subject not found.
    </div>
  </div>
</template>
