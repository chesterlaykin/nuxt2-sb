<template>
  <div id="header" class="header">
    <div class="header__inner container">
      <div id="logo">Logo</div>
      <nav>
          <ul>
            <li>Things</li>
            <li>Links</li>
            <li>About</li>
          </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
    height: 55px;
    border-bottom: grey 1px solid;
    padding-block: 12px;
    
  &__inner {
    display: flex;
    width: 1000px;
  }
}
</style>
