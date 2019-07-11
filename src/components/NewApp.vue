<template>
  <div>
    <Header />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm='6' offset='3'>
          <div>
            <b-jumbotron>
              <template slot="lead">
                Intrebare
              </template>
              <hr class="my-4">
              <p>
                Raspuns
              </p>
              <b-button variant="primary" href="#">Submit</b-button>
              <b-button variant="success" href="#">Next</b-button>
              <b-button variant="success" href="#" @click="queryServer()">Call server</b-button>
            </b-jumbotron>
          </div>
          <div>
            <ul>
              <li v-for="user in Users" :key="user.Id">
                {{user.Nume}}
              </li>
            </ul>
            {{Test}}
          </div> 
        </b-col>
      </b-row>
    </b-container>
  </div>      
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'NewApp',    
    components: {
      Header
    },
    data() {
      return {        
        Users:[],
        Test:[]
      }
    },    
    methods: {
      onSubmit() {
        console.log('Yesss!');
      },
      queryServer () {
        console.log('da')
        this.$http.post('api/getServerInfo',{IdUser:20}).then(
          function(response) { 
           var body = response.body
           this.Users = body.Users
           this.Test = body.Test
          }
        )
      }
    }
  }
</script>
