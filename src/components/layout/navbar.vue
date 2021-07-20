<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item href="/">
                <img 
                    src="@/assets/tampa-bay-lightning.svg"
                    alt="Tampa Bay Lightning Bitches!"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="/">
                Home 
            </b-navbar-item>
            <b-navbar-item href="#">
                About 
            </b-navbar-item>
            <b-navbar-item href="#">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'NavBar',
    components: {},
    data() {
        return {

        }
    },
}
</script>
