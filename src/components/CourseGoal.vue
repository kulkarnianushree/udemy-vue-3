<template>
    <li v-for="goal in goals" :key="goal">
        <slot :item="goal" :fav="'Kulkarni'"></slot>
    </li>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Learn Vue', 'become Vue Developer']
        }
    }
}
</script>
