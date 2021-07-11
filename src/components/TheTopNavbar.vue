<template>
  <nav class="nav">
    <div class="links">
      <div class="left-inks">
        <span>Men’s</span>
        <span>Women’s</span>
        <span>Search</span>
      </div>
      <div class="right-links">
        <span>English</span>
        <span>My account</span>
        <span>Bag (0)</span>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';
.nav {
  font-size: 0.875rem;
  color: $top-nav-font-color;
  display: flex;
  justify-content: center;
  width: 100%;
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .left-inks {
    > span {
      padding-right: 2.5rem;
    }
  }
  .right-links {
    > span {
      padding-left: 2.5rem;
    }
  }
  @media (max-width: 720px) {
    .links {
      font-size: 0.675rem;
    }
    .left-inks {
      > span {
        padding-right: 1rem;
      }
    }
    .right-links {
      > span {
        padding-left: 1rem;
      }
    }
  }
  @media (max-width: 320px) {
    .links {
      font-size: 0.575rem;
    }
  }
  @media (max-width: 280px) {
    .links {
      font-size: 0.47rem;
    }
  }
}
</style>
