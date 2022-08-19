<template>
  <MainLayout>
    <div class="container">
    <SBCard />
    </div>
  </MainLayout>
</template>

<script lang="ts">
import Vue from "vue";
import MainLayout from "~/page-layouts/MainLayout.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { MainLayout },
});
</script>
