<template>
    <div>
        <br/>
        <b-field label="Simple Calculator"
                :type=valid_input
                :message=calculation_message>
            <b-input 
                v-model="calculation"
                style="width: 50%; margin: auto"
                ref="calculator_input_field"
                rounded
            ></b-input>
        </b-field>

        <h2>{{solution}} </h2>

        <div class="columns">
            <!-- Left Column -->
            <div class="calculator_buttons_container column">
                <div style="display: inline-flex">
                    <div v-for="number in row1"
                            class="column"
                            :key="number">
                                <b-button @click="insertNumber($event)">
                                    {{ number }}
                                </b-button>
                    </div>
                </div>
                <br/>

                <div style="display: inline-flex">
                        <div v-for="number in row2"
                                class="column"
                                :key="number">
                                    <b-button @click="insertNumber($event)">
                                        {{ number }}
                                    </b-button>
                    </div>
                </div>
                <br/>

                <div style="display: inline-flex">
                    <div v-for="number in row3"
                            class="column"
                            :key="number">
                                <b-button @click="insertNumber($event)">
                                    {{ number }}
                                </b-button>
                </div>
                </div>

                <div>
                    <div>
                        <b-button @click="insertNumber">
                            0
                        </b-button>
                    </div>
                </div>
                <br/>
                        
                <div>
                    <div>
                        <b-button @click="performCalculation" rounded>
                            Calculate
                        </b-button>
                    </div>
                </div>
                <br/>

            </div>

            <!-- Right Column -->
            <div class="math_operations_container" style="position: absolute; right: 15rem; top: 15rem;">
                <b-button @click="insertNumber">+</b-button><br/>
                <b-button @click="insertNumber">-</b-button><br/>
                <b-button @click="insertNumber">/</b-button><br/>
                <b-button @click="insertNumber">*</b-button>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'Calculator',
    data() {
        return {
            calculation: '',
            valid_input: 'is-info',
            row1: [1, 2, 3],
            row2: [4, 5, 6],
            row3: [7, 8, 9],
            solution: "Solution will show up here",
            calculation_message: "Provide a mathematical expression above"
        }
    },
    methods: {
        insertNumber(e){
            console.log(e.target);
            this.calculation += (e.target.innerText);
        },
        performCalculation(){
            try{
                this.solution = "Solution: " + eval(this.$refs.calculator_input_field.value);
                this.valid_input = 'is-success'
                this.calculation_message = 'valid expression'
            } catch {
                this.valid_input = 'is-danger'
                this.calculation_message = 'invalid expression'
            }
        }
    }
}
</script>

<style>


</style>
