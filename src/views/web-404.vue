<template>
    <div class="container">
        <div class="box title s-max">
            <h1>Not found :(</h1>
        </div>
        <div class="box s-normal">
            <p>I couldn't find the page you put in the address bar.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
  flex-direction: column;
}

</style>

<script>
export default {
    data() {
        return {
            timeout: null,
        };
    },
    created() {
        const router = this.$router;
        this.timeout = setTimeout(() => router.replace("/"), 5000);
    },
    beforeRouteLeave(to, from, next) {
        clearTimeout(this.timeout);
        next();
    },
};
</script>