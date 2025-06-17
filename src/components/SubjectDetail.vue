<script setup>
import { useSubjectStore } from "@/stores/subjects";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

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
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-600">{{ error }}</div>

    <div
      v-else-if="subject"
      class="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-5"
    >
      <h1 class="text-3xl font-bold text-[#e87000] mb-2">
        {{ subject.subject_area }}
      </h1>

      <p class="text-gray-600 text-md">
        <strong>Department:</strong>
        {{ subject.subject_area_department?.name || "N/A" }}
      </p>

      <div v-if="subject.overview" class="mt-4">
        <h2 class="text-xl font-semibold mb-1">Overview</h2>
        <p class="text-gray-700">{{ subject.overview }}</p>
      </div>

      <div v-if="subject.why_this" class="mt-4">
        <h2 class="text-xl font-semibold mb-1">Why Choose This Subject?</h2>
        <p class="text-gray-700">{{ subject.why_this }}</p>
      </div>

      <div v-if="subject.requirement" class="mt-4">
        <h2 class="text-xl font-semibold mb-1">Requirements</h2>
        <p class="text-gray-700">{{ subject.requirement }}</p>
      </div>

      <div v-if="subject.tuition_fee" class="mt-4">
        <h2 class="text-xl font-semibold mb-1">Tuition Fee</h2>
        <p class="text-gray-700">{{ subject.tuition_fee }}</p>
      </div>

      <div class="text-sm text-gray-400 pt-6 border-t mt-6">
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

    <div v-else class="text-center text-gray-500">Subject not found.</div>
  </div>
</template>
