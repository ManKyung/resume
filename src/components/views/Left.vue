<template>
    <section class="split-image">
    </section>
</template>

<script>
export default {
    name: 'Left',
    data() {
        return {
        }
    },
    created() {
        this.$EventBus.$on('background-image', (image) => {
            $('.split-image').css('background-image','url('+image+')');
        });
    },
}
</script>