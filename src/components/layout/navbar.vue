<template>
    <b-navbar class="navbar is-dark has-shadow">
        <template #brand>
            <b-navbar-item href="/">
                <img 
                    src="@/assets/placeholder-logo.png"
                    alt="Logo"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="/">
                Home 
            </b-navbar-item>
            <b-navbar-item href="/about">
                About 
            </b-navbar-item>
            <b-navbar-item href="/contact">
                Contact
            </b-navbar-item>
            <b-navbar-item href="/calculator">
                Calculator
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
