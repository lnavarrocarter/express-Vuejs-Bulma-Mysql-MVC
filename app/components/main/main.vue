<template>
    <section class="section">
      <div class="container is-fluid">
        <navbar></navbar>
      </div>
      <section class="hero">
        <div class="hero-body">
          <div class="container center">
            <h1 class="title">
            {{ title }}
            </h1>
            <p class="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>
          </div>
        </div>
        <div class="hero-body">
          <stadistics></stadistics>
        </div>
        </section>
    </section>
</template>

<script>
const Navbar = require('./../components/main/navbar.vue');
const Stadistics = require('./../components/main/stadistics.vue');
export default {
    data: function () {
        return {
        }
    },
    components : {
      navbar: Navbar,
      stadistics : Stadistics
    }
}
</script>

<style lang="css">

</style>
