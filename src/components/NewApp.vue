<template>
  <div>
    <Header/>
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
            </b-jumbotron>
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
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },    
    methods: {
      onSubmit() {
        console.log('Yesss!');
      }
    }
  }
</script>
