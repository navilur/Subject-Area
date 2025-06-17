<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const goToDetails = () => {
  router.push(`/subject/${props.data.id}`);
};
</script>

<template>
  <Card class="shadow-lg rounded-xl">
    <template #header>
      <img
        src="@/assets/subject.jpg"
        class="w-full h-48 object-cover rounded-t-xl"
      />
    </template>
    <template #title>
      {{ data?.subject_area }}
    </template>
    <template #footer>
      <Button
        label="Details"
        icon="pi pi-shopping-cart"
        style="background-color: #e87000; border: none; width: 100%"
        class="hover:bg-orange-600"
        @click="goToDetails"
      />
    </template>
  </Card>
</template>
