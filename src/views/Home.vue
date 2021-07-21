<template>
    <div>
        <h2 class="title">Home</h2>
        <collapse />
        <directives />
    </div>
</template>

<script>
import Collapse from '@/components/Collapse.vue'
import Directives from '@/components/Directives.vue'

export default {
    name: 'Home',
    components: {
        Collapse,
        Directives,
    },
    data() {
        return {
        }
    },
}
</script>
