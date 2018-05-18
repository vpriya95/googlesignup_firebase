<template>
	<transition name="modal-fade">
	<div class="modal-backdrop">
	<div class="modal" role="dialog" aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
	<center>
      <div class="popup-helppage">
     <!-- <div class="header" id="popup-header"> -->
     	<div class="header" id="popup-header" style="text-align:center">
     	<span class="header-text">DropInn Help</span>
     	<button type="button" class="btns-close float-right" @click="close"  aria-label="Close modal"><i class="fa fa-times" aria-hidden="true"></i></button>
     	</div>
     <div class="help-popup">
        <row >
        <div style="height: 50px; margin-top: 65px !important;">
        <input class="form-control" type="search" placeholder="Ask a question or search by keyword" aria-label="Search">

		<div class="_3sm8fo" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 20px; width: 20px; display: block; fill: rgba(51, 48, 48, 0.43);"><path d="m23.53 22.47-6.81-6.81a9.46 9.46 0 0 0 2.28-6.16 9.5 9.5 0 1 0 -9.5 9.5c2.35 0 4.5-.86 6.16-2.28l6.81 6.81a.75.75 0 0 0 1.06-1.06zm-14.03-4.97a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill-rule="evenodd"></path></svg></div>
        </div>
         <span class="float-left" style="margin-top: 40px !important;">Suggested Articles</span><br/>
         <ul style="list-style-type:none; -webkit-padding-start: 0px;">
         	<div class="list">
         	<div class="condent-list1">
         	<a href="#"><li style="color: #484848 !important;">Getting Started Guide</li></a></div>
         	<div class="_1agttal float-right"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: rgb(51, 48, 48);"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></div>
         	</div>
         	<br/>

         	<div class="list">
            <div class="condent-list2">
         	<a href="#"><li style="color: #484848 !important;">How is the price determined for my reservation?</li></a></div>
         	<div class="_1agttal"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: rgb(51, 48, 48);"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></div>
         	</div><br/>

         	<div class="list">
         	<div class="condent-list3">
         	<a href="#"><li style="color: #484848 !important;">How do reviews work?</li></a></div>
         	<div class="_1agttal"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: rgb(51, 48, 48);"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></div>
         	</div><br/>

         	<div class="list">
            <div class="condent-list4">
         	<a href="#"><li style="color: #484848 !important;">Does Airbnb provide professional photography services?</li></a></div>
         	<div class="_1agttal"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: rgb(51, 48, 48);"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></div>
         	</div><br/>

         	<div class="list">
         	<div class="condent-list5">
         	<a href="#"><li style="color: #484848 !important;">How do I cancel my reservation?</li></a></div>
         	<div class="_1agttal"><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: rgb(51, 48, 48);"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></div>
         	</div>
         </ul>
		</row>
        </div>
         <div class="footer py-3" id="footer-help">
        <button type="button" class="btn btn-success" id="footer-button"style="">Visit the Help Center</button>
       </div>
        </div>
      </center>
      </div>
      </div>
      </transition>
      </template>
<script>
import classNames from 'classnames';
import MdInput from '../components/MdInput.vue';
import MdTextarea from '../components/MdTextarea.vue';

export default {

  components: {
    'mdinput': MdInput,
    'mdtextarea': MdTextarea,
  },
  data() {
    return {
      className: classNames(
        'HelpPage'
      ),
      siteName: "DropInn",
    };
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
  .btns-close {
    border: 1px solid rgba(255, 0, 0, 0);
    border-radius: 50px;
    font-size: 20px;
    padding: 0 8px;
    color: rgb(118, 118, 118);
    background: #f8f8f8;
    float: left;
    margin-top: 15px;
    margin-right: 30px;

  }
  .btns-close:hover {
    box-shadow: 1px 1px 5px 1px rgb(198, 202, 202);
  }
  #footer-button{
   border-radius: 4px !important;
   background-color: #008489 !important;
   width: 100% !important;
	}
  #footer-help{
    margin-top: 288px;
    z-index: 3;
    padding: 30px;
    border-top: 1px solid #b1afaf78;
   }
	._3sm8fo{
     width: 42px !important;
	 display: inline-block !important;
	 vertical-align: middle !important;
	 margin: -78px 270px 0 0 !important;
	}
	.modal-backdrop {
    position: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    background-color: transparent !important;
  }
  .modal {
    overflow: scroll; 
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    background: rgba(248, 250, 255, 0);
  }
  .popup-helppage{
    background: #FFFFFF !important;
    float: right !important;
    height: 100% !important;
    width: 28% !important;
    border-radius: 3px ;
    z-index: 3 ;
    border: 1px solid #adadad59;
    box-shadow: 1px 1px #6b6464e0;
  }
  .help-popup{
  	padding: 25px !important;
    height: 100% !important;
  }
  #popup-header{
  	border-bottom: 1px solid #afacac66;
  	padding: 0px !important;
  	background: #ffffff !important;
  	z-index: 3 !important;
  	position: fixed !important;
  	height: 60px !important;
  	width: 28% !important;
  	  }
  	  .header-text{
  	  	margin-top: 10% !important;
  	  }
  .form-control{
  	 padding-left: 13% !important;
  	 height: 50px !important;
    }
  ._1agttal{
  	float: right !important;
  	margin-top: 2% !important;
    }
  .list{
  	float: left !important;
    width: 100% !important;
    margin: 20px 0px !important;
    }
   .condent-list1{
     float: left !important; 
     margin-left: -23% !important;
     width: calc(100% - 24px) !important;
     color: #484848 !important;
   }
   .condent-list1:hover{
      text-decoration: underline !important;
   }
   .list :focus{
   	  opacity: 1; 
   	  background: #495057cf;
   }
  .condent-list2{
  	 text-align: -webkit-auto;
     float: left !important; 
     width: calc(100% - 24px) !important;
     color: #484848 !important;
   }
   .condent-list2:hover {
    text-decoration: underline !important;
   }
  .condent-list3{
     float: left !important; 
     margin-left: -68px;
     width: calc(100% - 24px) !important;
     color: #484848 !important;
   }
   .condent-list3:hover {
    text-decoration: underline !important;
   }
    .condent-list4{
     float: left !important; 
     text-align: -webkit-auto !important;
     width: calc(100% - 24px) !important;
     color: #484848 !important;
   }
   .condent-list4:hover {
    text-decoration: underline !important;
   }
    .condent-list5{
     float: left !important; 
     margin-left: -30px;
     width: calc(100% - 24px) !important;
     color: #484848 !important;
   }
   .condent-list5:hover {
    text-decoration: underline !important;
    text-shadow: #484848;
   }
</style>
