<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" v-bind:alt="title" >
            </a>
            <div class="navbar-burger burger" data-target="menu">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <div id="menu" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
                Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/documentation/overview/start/">
                Docs
                </a>
                <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                    Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                    Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Components
                </a>
                </div>
            </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                <p class="control">
                    <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="EXVUEBUMY" target="_blank" href="#">
                    <span class="icon">
                        <i class="fa fa-twitter"></i>
                    </span>
                    <span>
                        Tweet
                    </span>
                    </a>
                </p>
                <p class="control">
                    <a class="button is-primary" href="">
                    <span class="icon">
                        <i class="fa fa-github"></i>
                    </span>
                    <span>Download</span>
                    </a>
                </p>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data: function () {
        return {
            title : 'Express-Vue-Bulma-Mysql MVC Starter Kit'
        }
    }
}
</script>

<style lang="css">

</style>
