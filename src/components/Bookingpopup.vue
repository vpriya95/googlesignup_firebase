<script>
import classNames from 'classnames';
import vSelect from 'vue-select';
import Datepicker from 'vuejs-datepicker';
import StarRating from 'vue-star-rating';
import { Btn } from 'mdbvue';

const state = {
  date1: new Date()
};

export default {
  // name: 'popup',
  methods: {
    close() {
      this.$emit('close');
    },
  },
  components: {
    'v-select' : vSelect,
    'datepicker': Datepicker,
    StarRating,
    Btn
  },
  data() {
    return {
      className: classNames(
        'bookingpopup'
      ),
      price:"₹739",
      rating: 4,
      disabled: {to: state.date1},
      disabled2: {to: new Date(state.date1.getTime() + 86400000)},
      setHighlightedDays (elem) {
        if (elem.target.value === 'undefined') {
          return "";
        }
        let highlightedDays = elem.target.value.split(',').map(day => parseInt(day));
        this.highlighted = {
          from: this.highlighted.from,
          to: this.highlighted.to,
          daysOfMonth: highlightedDays
        };
      },
      highlighted: {},
      selected: null,
    };
  }
};
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="booking-pop">
           
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>     
            <div class="pts">
            <h5>{{price}}<small> per night</small></h5>
            <star-rating class="starrates"  v-model="rating" v-bind:star-size="10" active-color="#008489" :read-only="true" :show-rating="false"></star-rating><small>240</small>
            <hr>
            <form class="bookingform">
              <small class="al">Dates</small>
              </br>  
              <div class="picker">
                <datepicker style="border:0;" class="start" id="ks1" :disabled="disabled" placeholder="Check In" v-on:change="setHighlightedDays"></datepicker>
                <span  class="fa fa-long-arrow-right fa-lg" aria-hidden="true"></span>
                <datepicker id="ks2" class="end" :disabled="disabled2" :highlighted="highlighted" placeholder="Check Out">      
                </datepicker>
              </div>
                <small class="al">Guests</small>
                </br>
                <v-select v-model="selected" :options="['foo','bar']"></v-select>
                <center>
                <btn class=" bookingbtn" >Book</btn>
                </center>
                <small class="text-center"><p>You won’t be charged yet</p></small>
            </form>
          </div>
          </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:  rgba(146, 146, 146, 0.51);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  div.starrates.vue-star-rating{
    display: inline-block ;
    padding-right: 5px
  }
  .booking-pop{
    width: 400px;
    background: #FFFFFF;
    margin: 8em auto;
    padding: 25px;
    z-index: 999;
    border: 1px solid #d1d1d178;
    box-shadow: 1px 1px white;
  }
  .start{
    float: left;
    width: 40%;
    margin: 0;
    padding: 0;
  }
  .end{
    float: right;
    width: 40%;
    margin: 0;
    padding: 0;
  }
  .pts{
    margin: 0 1em;
  }
  .modal {
    background: rgba(255, 255, 255, 0);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    margin: 0 auto;
    border: 1px solid rgba(255, 0, 0, 0);
    border-radius: 50px;
    font-size: 20px;
    padding: 0 8px;
    margin: 10px 0;
    color: rgb(118, 118, 118);
    background: #f8f8f8;
    float: none;
  }
  .btn-close:hover {
    box-shadow: 1px 1px 5px 1px rgb(198, 202, 202);
  }
  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .picker{
    border: 1px solid rgb(221, 221, 221);
    display: inline-block;
    width: 100%;
    padding: 5px;
  }
  .bookingbtn{
        width: 100%;
        margin: 15PX 0;
      }
  @media (max-width: 700px) {
    .booking-pop{
        width: 100%;
        margin: 2em 0 0 0;
        height: 100%;
      }

  } 
</style>