<template>
    <div class="profile">
        <h3>Profile page</h3>
        <p>Username: {{getUser.username}}</p>
        <p>Email: {{getUser.email}}</p>
        <p>Phone: {{getUser.phone}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        getUser(){
            return this.$store.getters.getUser
        }
    }
}
</script>

<style>

</style>