<template>
    <div id="directives" class="has-background-light">
        <div class="columns is-desktop">
            <div class="column">
                <h2 class="subtitle is-5">v-text</h2>    
                <div class="content">Message: <b>{{message}}</b></div>
                <h2 class="subtitle is-5">v-html</h2> 
                <div class="content" v-html="sampleHTML"></div>
                <h2 class="subtitle is-5">v-show</h2>
                <div class="content" v-show="isDisplay"><b> ... v-show = isDisplay ... </b></div>
                <h2 class="subtitle is-5">v-if / v-else</h2>
                <div class="content" v-if="2 > 1"><b> ... v-if = 2 > 1 ... </b></div>
                <div class="content">
                    <b-button @click="toggleIsRender" type="is-primary">Toggle isRender</b-button>
                </div> 
                <div class="content" v-if="isRender"><b>isRender = true</b></div>
                <div class="content" v-else><b>else isRender = false</b></div> 
                <h2 class="subtitle is-5">v-for</h2>       
                <div class="content">                    
                    <p><span>{{ rawHTML }}</span></p>
                    <ul>
                        <li v-for="number in numbers" :key="number">{{ number }}</li>
                    </ul>
                </div>
                <h2 class="subtitle is-5">:src</h2>
                <div class="content">
                    <img :src="imageSrc" width="50%" />
                </div>
                <h2 class="subtitle is-5">v-model</h2>
                <div class="content">                    
                    <b-field label="Message:">
                        <b-input v-model="message"/>
                    </b-field>
                    <p>Message is: {{ message }}</p> 
                </div>           
                <div class="content">
                    <b-field label="Multi-line Textarea:">
                        <b-input type="textarea" v-model="multilineText"></b-input>
                    </b-field>
                    <p style="white-space: pre-line;">{{ multilineText }}</p>
                </div>
                <div class="content">
                    <b-checkbox id="checkbox" v-model="checked">
                        {{ checked }}
                    </b-checkbox>
                </div>
                <div class="content">
                    <b-radio v-model="picked" name="number" native-value="One">One</b-radio>
                    <b-radio v-model="picked" name="number" native-value="Two">Two</b-radio>
                    <b-radio v-model="picked" name="number" native-value="Three">Three</b-radio>
                    <p class="content">
                        Picked: {{ picked }}
                    </p>
                </div>
                <div class="content">
                    <b-field label="Fruit">
                        <b-select placeholder="Select one" v-model="selected" v-on:change="getSelectedFruit($event)">
                            <option v-for="fruit in fruits" :value="fruit" :key="fruit">
                                {{ fruit }}
                            </option>
                        </b-select>
                    </b-field>
                    <p>Selected: {{ selected }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueDirectives',
    data() {
        return {
            picked: 'One',
            selected: null,
            fruits: ['Apple', 'Banana', 'Cherry'],
            message: 'Default Message',
            multilineText: 'Sample Text',
            checked: false,
            sampleHTML: '<ol> <li>One</li> <li>Two</li> <li>Three</li> </ol>',
            rawHTML: '<ul> <li v-for="number in numbers" :key="number">{{ number }}</li> </ul>',
            isDisplay: true,
            isRender: true,
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            imageSrc: 'https://vetstreet.brightspotcdn.com/dims4/default/b39c83f/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F4b%2F79%2Fed7633494767bd00d07d97604c98%2FAP-W8EG6F-ph645080113.jpg',
        }
    },
    methods: {
        toggleIsRender() {
            this.isRender = !this.isRender;
        },
        getSelectedFruit: function(selected) {
            console.log(selected); 
        },
    }
}
</script>

<style>
h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 0;
}
#directives {
    margin: 20px auto;
    border: 1px solid #999;
    border-radius: 6px;
    padding: 10px;
    /* background-color: #ececec; */
    text-align: left;
}
</style>
