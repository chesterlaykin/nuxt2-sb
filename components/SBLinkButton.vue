<template lang="">
  <div class="sb-link">
    <nuxt-link :to="buttonData.link || ''" :target="target">
      {{ buttonData.text }}
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { ISBLinkButton } from "@/types/common";
import { PropType } from "vue";
export default {
  name: "SBLinkButton",
  props: {
    buttonData: {
      type: Object as PropType<ISBLinkButton>,
    },
  },
  computed: {
    target(): any {
      return (this as any).buttonData.targetBlank ? "_blank" : null;
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
$bg-color: rgb(198, 243, 126);
.sb-link {
  background: $bg-color;
  cursor: pointer;
  font-weight: bold;
  display: inline-block;
  color: rgb(48, 48, 48);
  padding-block: 13px;
  padding-inline: 19px;
  border-radius: 1px;
  border: 1px solid transparent;
  > a {
    text-decoration: none;
    // color: darken($bg-color, 55%);
  }
  &:hover {
    background: rgb(48, 48, 48);
    border: 1px solid rgb(134, 134, 134);
    nuxt-link {
      color: $bg-color;
    }
  }

  .sb-link-icon {
    width: 14px;
    height: 14px;
    color: red;
    margin-left: 9px;
    fill: purple;
    path {
      fill: rgb(223, 40, 223);
    }
  }
}
</style>
