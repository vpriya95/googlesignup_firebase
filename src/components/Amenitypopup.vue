<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      >
      <div class="popup-body">
      <header
      class="modal-header"
      id="modalTitle"
      >
      <slot name="header">
      <button
        type="button"
        class="btn-close"
        @click="close"
        aria-label="Close modal"
        >
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <div class="text-left">
        <h2 > Amenities</h2>
      </div>
    </slot>
  </header>
  <section  class="modal-body" id="modalDescription">
    <div class="amenities" v-for="amenity in amenities">
        <h5 class="amenity_name" v-text="amenity.amenity_name"></h5>
        <p v-text="amenity.amenity_desc"></p>
        <hr>
    </div>
  </section>
</div>
</div>
</div>
</transition>
</template>

<script>
import classNames from 'classnames';
export default {
  // name: 'popup',
  methods: {
    close() {
      this.$emit('close');
    },
  },
  data() {
    return {
      className: classNames(
        'amenitypopup'
      ),
      amenities: [
        {
          amenity_name: "Wifi",
          amenity_desc: "touble bed available",
          amenity_icon: "",
        },
        {
          amenity_name: "Wifi",
          amenity_desc: "touble bed available",
          amenity_icon: "",
        },
        {
          amenity_name: "Wifi",
          amenity_desc: "touble bed available",
          amenity_icon: "",
        },
        {
          amenity_name: "Wifi",
          amenity_desc: "touble bed available",
          amenity_icon: "",
        },
        {
          amenity_name: "Wifi",
          amenity_desc: "touble bed available",
          amenity_icon: "",
        },
        {
          amenity_name: "Wifi",
          amenity_desc: "touble bed available",
          amenity_icon: "",
        },
        {
          amenity_name: "Wifi",
          amenity_desc: "touble bed available",
          amenity_icon: "",
        }
      ],
    };
  }
};
</script>

<style type="text/css">
  header#modalTitle.modal-header{
    display: block;
  }
</style>
<style scoped>
  body{
    overflow: hidden !important;
  }
  .amenities{
    padding: 15px;
  }
  .text-left{
    /*float: left;*/
    display: block;
    left: 0;
    padding: 5px 0 0 10px;
    color: #353535;
    font-weight: 400;
  }
  .popup-body{
    width:500px;
    margin: 0 auto;
    background: #FFFFFF; 
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: rgba(255, 255, 255, 0);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    overflow-y: auto;
    /*width: 500px;*/
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: 1px solid rgba(255, 0, 0, 0);
    border-radius: 50px;
    font-size: 20px;
    padding: 0 8px;
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
  @media (max-width: 700px) {
    .popup-body{
        width: 100%;
      }
  } 
</style>