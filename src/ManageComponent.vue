<template>
    <div>
        <h2>Manage Component</h2>
        <input type="text" ref="goal" />
        <button @click="setGoal">Set Goal</button>
        <Teleport to="body">
            <error-model v-if="inputIsInvalid" >
                <h2>{{ 'input is invalid' }}</h2>
                <p>{{ 'please enter your goal' }}</p>
                <button @click="okHandler">Okay</button>
            </error-model>
        </Teleport>
        
    </div>
</template>

<script>
import ErrorModel from './components/ErrorModel.vue';

export default {
    components: { ErrorModel },
    data() {
        return {
            inputIsInvalid: false
        };
    },
    methods: {
        setGoal() {
            const goal = this.$refs.goal.value;
            if (goal === '') {
                this.inputIsInvalid = true;
            }
        },
        okHandler(){
            this.inputIsInvalid = false
        }
    }
}
</script>
