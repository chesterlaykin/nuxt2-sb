<template>
  <div class="sb-card">
    <img class="sb-card__image" src="../assets/img/joe-Qh.jpg" />

    <div class="sb-card__intro">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form
    </div>
    <div class="sb-card__description" v-html="description"></div>
    <SBLinkButton
      :button-data="{
        text: 'Try google',
        link: 'http://google.com',
        targetBlank: true,
      }"
    />
  </div>
</template>

<script lang="ts">
import SBLinkButton from "@/components/SBLinkButton.vue";
export default {
  name: "SBCard",
  components: {
    SBLinkButton
  },
  data() {
    return {
      description: `It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of using
        Lorem Ipsum is that it has a more-or-less normal distribution of letters,
        as opposed to using 'Content here, content here', making it look like
        readable English. Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy.\n \n Various
        versions have evolved over the years, sometimes by accident, sometimes on
        purpose (injected humour and the like).`,
    };
  },
};
</script>

<style lang="scss" scoped>
.sb-card {
  font-size: 16px;
  width: 300px;
  background: rgb(48, 48, 48);
  color: rgb(233, 233, 233);
  padding: 10px;
  box-shadow: 15px 13px 50px #767676c9;
  // @include sm-max {    
  //     background: red;
  // }
  &__intro {
    font-weight: 600;
  }
  &__intro-text {
    font-weight: normal;
  }
  &__image {
    border-radius: 2px;
    width: 100%;
  }
  &__intro,
  &__intro-text,
  &__image {
    margin-bottom: 13px;
  }
  &__description {
    margin-bottom: 28px;
  }

  &:deep .sb-link {
      // background: $blue;
  }
}
</style>
