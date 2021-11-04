<template>
  <header>
    <nav>
      <h1>
        <router-link :to="{ name: 'CoachesList' }">
          Coach Finder
        </router-link>
      </h1>
      <ul>
        <li>
          <router-link :to="{ name: 'CoachesList' }">
            All coaches
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'RequestsReceive' }">
            Requests
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;

    &:active,
    &:hover,
    &.router-link-active {
      border: 1px solid #f391e3;
    }
  }

  h1 {
    margin: 0;

    a {
      color: white;
      margin: 0;

      &:hover,
      &:active,
      &.router-link-active {
        border-color: transparent;
      }
    }
  }

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 0.5rem;
    }
  }
}
</style>
