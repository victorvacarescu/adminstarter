<template>
    <div>
        <b-nav tabs>            
            <b-nav-item>
                <router-link to="/">
                    <a target="_blank">Inapoi</a>
                </router-link>
            </b-nav-item>                         
            <b-nav-item disabled>Counter 1/10</b-nav-item>
        </b-nav>
    </div> 
</template>

<script>
    export default {
        name: "Login",
        data () {               
            return {
                msg: 'Care e treaba aici?'
            }
        },
        methods:{
            
        }
    }
</script>