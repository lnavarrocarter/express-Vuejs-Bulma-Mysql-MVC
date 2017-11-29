<template>
<div class="container-body">
   <nav class="level">
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Tweets</p>
            <p class="title">{{ tweets }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Following</p>
            <p class="title">{{ follow }}</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            tweets : 2541,
            follow : 5841
        }
    }
}
</script>

<style lang="css">

</style>
