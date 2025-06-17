import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useSubjectStore = defineStore("subjectStore", () => {
  // State
  const subjectsData = ref(null);
  const singleSubjectsData = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Actions
  const fetchSubjects = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get("test/popular-subject-area");
      subjectsData.value = response.data.rows.data;
    } catch (error) {
      error.value = error.message;
    } finally {
      loading.value = false;
    }
  };

  const fetchSingleSubject = async ({ id }) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get(`subject-area-details?id=${id}`);
      singleSubjectsData.value = response.data;
    } catch (error) {
      error.value = error.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    fetchSubjects,
    fetchSingleSubject,
    loading,
    error,
    subjectsData,
    singleSubjectsData,
  };
});
