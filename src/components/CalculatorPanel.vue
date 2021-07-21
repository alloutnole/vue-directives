<template>
    <div>
            <div class="calculator_buttons_container column">
                <div style="display: inline-flex">
                    <div v-for="number in row1"
                            class="column"
                            :key="number">
                                <b-button type="is-link is-primary" @click="insertNumber($event)" outlined>
                                    {{ number }}
                                </b-button>
                    </div>
                </div>
                <br/>

                <div style="display: inline-flex">
                        <div v-for="number in row2"
                                class="column"
                                :key="number">
                                    <b-button type="is-link is-primary" @click="insertNumber($event)" outlined>
                                        {{ number }}
                                    </b-button>
                    </div>
                </div>
                <br/>

                <div style="display: inline-flex">
                    <div v-for="number in row3"
                            class="column"
                            :key="number">
                                <b-button type="is-link is-primary" @click="insertNumber($event)" outlined>
                                    {{ number }}
                                </b-button>
                </div>
                </div>

                <div>
                    <div>
                        <b-button type="is-link is-primary" @click="insertNumber" outlined>
                            0
                        </b-button>
                    </div>
                </div>
                <br/>
                        
                <div>
                    <div>
                        <b-button type="is-link is-primary" @click="submitExpression" rounded outlined>
                            Calculate
                        </b-button>
                    </div>
                </div>
                <br/>

            </div>

            <div class="math_operations_container" style="position: absolute; right: 15rem; top: 15rem;">
                <b-button type="is-link is-primary" @click="insertNumber" outlined>+</b-button><br/>
                <b-button type="is-link is-primary" @click="insertNumber" outlined>-</b-button><br/>
                <b-button type="is-link is-primary" @click="insertNumber" outlined>/</b-button><br/>
                <b-button type="is-link is-primary" @click="insertNumber" outlined>*</b-button>
            </div>
    </div>
</template>

<script>

export default {
    name: 'CalculatorPanel',
    props: [
        "current_calculation_expression"
    ],
    data() {
        return {
            row1: [1, 2, 3],
            row2: [4, 5, 6],
            row3: [7, 8, 9],
        }
    },
    methods: {
        insertNumber(e){
            console.log(e.target);
            this.$emit('insert-number', e.target.innerText)
            // this.calculation_prop += (e.target.innerText);
        },
        submitExpression(){
            this.$emit('submit-expression', this.current_calculation_expression)
        }
    }
}
</script>
``