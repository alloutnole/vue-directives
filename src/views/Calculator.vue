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
                icon="calculator"
                type="is-success"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="clearIconClick">
                rounded
            ></b-input>
        </b-field>

        <h2>{{solution}} </h2>

        <calculator-panel
            @submit-expression="performCalculation"
            @insert-number="insertNum_or_Symbol"
            :current_calculation_expression="calculation"
        ></calculator-panel>
    </div>
</template>

<script>
import CalculatorPanel from '../components/CalculatorPanel.vue';

export default {
  components: { CalculatorPanel },
    name: 'Calculator',
    data() {
        return {
            calculation: '',
            valid_input: 'is-info',
            solution: "Solution will show up here",
            calculation_message: "Provide a mathematical expression above"
        }
    },
    methods: {
        insertNum_or_Symbol(token){
            console.log(token);
            this.calculation += (token);
        },
        performCalculation(string_expression){
            // debugger
            try{
                this.solution = "Result: " + eval(string_expression);
                this.valid_input = 'is-success'
                this.calculation_message = 'valid expression'
            } catch {
                this.valid_input = 'is-danger'
                this.calculation_message = "invalid expression: '" + string_expression + "'"
            }
        },
        clearIconClick(){
            this.calculation = ''
            this.solution = 'Result: '
        }
    }
}
</script>

<style>


</style>
