<template>

  <row >
  <div class="col-md-7">
        <div class="content-box">
          <span>Hlo.. {{test}}</span>
          <h2 class="text-default-color">Hi, Nithya! Let’s get started listing your space.</h2>
          <span style="color:#bbb;"><strong>STEP 1 </strong></span>
          <h4 class="text-default-color">What kind of place do you have?</h4>
          <row>
            <div class="col-md-5 col-sm-12 space-1">    
            
              <select v-model="selected_roomType" class="form-control select mt-2" id="sel1">
                <option v-for="option in options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
            <div class="col-md-5 col-sm-12">    
            
            
                <select v-model="selected_guest" class="form-control select mt-2" id="sel2">
                <option v-for="n in 16" :value="n">for {{ n }} guests</option>
               </select>
            </div>
            <div class="col-md-2"></div>
      </row>
       <div class="mt-2">
        <gmap-autocomplete class="form-control col-md-10 col-sm-12" placeholder="Enter a location" :value="description"
        @place_changed="setPlace">
        </gmap-autocomplete>
       <!--  <input type="text" class="form-control col-md-10 col-sm-12" id="usr" placeholder="Enter a location"> -->
      </div>
       <btn class="" value="Continue">Continue</btn>
        </div>


        <!--Panel-->

        <card class="panel-card">
        <card-body>
        <img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png">
        <!-- <h4 class="card-title">Panel title</h4> -->
        <p class="card-text">Listing for a month, we think you could earn.</p>
        <!-- <div class="flex-row">
        <a class="card-link">Card link</a>
        <a class="card-link">Another link</a>
        </div> -->
        </card-body>
        </card>
        <!--/.Panel-->
        
      </div>
      <div class="col-md-5">
       <img src="../assets/flower.svg" />
      </div>
    </row>
  

</template>


<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import Container from '../components/Container.vue';
import Row from '../components/Row.vue';
import Column from '../components/Col.vue';
import Btn from '../components/Button.vue';
import Card from '../components/Card.vue';
import CardImg from '../components/CardImg.vue';
import CardHeader from '../components/CardHeader.vue';
import CardBody from '../components/CardBody.vue';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAdGNDI0COpfc1Hz009rqioZdklYtsm55E',
    libraries: 'places',
    // libraries: 'places', //// If you need to use place input
  }
});
export default {
  props:
  {
    stepNiti:{
      type:String,
    }
  },
  name: 'GridPage',
  components: {
    Container,
    Row,
    Column,
    Btn,
    Card,
    CardImg,
    CardHeader,
    CardBody,
  },
  data(){
    return {
      test:"got it",
      step:"1",
      status: null,
      siteName: "Dropinn",
      selected_roomType: 1,
      options: [
        { text: 'Entire place', value: 1 },
        { text: 'Private room', value: 2 },
        { text: 'Shared room', value: 3 }
      ],
      selected_guest: 1,
      currencies: [
        { text: 'USD $', value: 'USD $' },
        { text: 'INR ₹', value: 'INR' },
        { text: 'EUR €', value: 'EUR' },
        { text: 'SGD $', value:'SGD'}
      ],
      description: '',
      latLng: {}
    };

  },
  methods:{
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
    } 
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 700px) and (min-width: 320px)  {
.content-box{
 margin: 0;
}
}
.content-box{
  margin: 58px 93.5px 55px 100px
}
.select { 
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  font-size: 16px;
}
@media only screen and (max-width: 960px) and (min-width: 600px)  {
.navbar-nav{
  display: none !important;
}
}
/* CAUTION: IE hackery ahead */
.select::-ms-expand { 
    display: none; /* remove default arrow in IE 10 and 11 */
}
/* target Internet Explorer 9 to undo the custom arrow */
@media screen and (min-width:0\0) {
    .select {
        background:none\9;
        padding: 5px\9;
    }
}
.panel-card
{
  background-color: #e5faf9;
  margin: 58px 93.5px 55px 100px;
  width: 40%;
}
 .text-default-color{
  color: #484848 !important;
}

</style>