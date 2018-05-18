<!-- <template>
<div class="modal" v-bind:class="[(modalstatus)?'is-active':'', modelclass]">
  <div class="modal-background"></div>
  <div class="modal-content">
    <slot></slot>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
</template>
<script>
	export default{
property:{

modelclass: {

	type: string,
default : 'mdel'
}
},
		created (){
window.eventBus.$on('modeopen',(data) =>{
this.modeldata= data
this.modelstatus = true
})
		},
		data(){
			return{
modeldata:null,
				modalstatus: false
			}
		}
	}
</script>> -->

<!-- -------------------------------------- -->
<!-- 
<btn @button_clicked='launchmodal'></btn>

<modal	:activate='activatedModal'> -->

<!-- -------------------------------------------- -->


	<!-- <div class="model" :class= 'active'>
<btn @button_clicked='launchmodal'></btn>		
    <b-modal :activate='activatedModal'  id="modalPrevent" class="modelpopup"
             ref="modal"
             size="lg"
             title="Submit your Details">
      <form @submit.stop.prevent="handleSubmit">
      <b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>
<br/><br/>
<b-form-input type="text" placeholder="Enter your Email" v-model="email"></b-form-input>
<br/><br/>
<b-form-input type="text"  placeholder="Enter your Password" v-model="password"></b-form-input>

      </form>
    </b-modal>
</div> 


<script>
Vue.components('btn'{
templates:

propps:{
	'active'

methods:{
launch(){

}
}
}
});
new Vue({
	el;'#app',

data:{
	activatemodel:''
},

	methods:{
		launchModeal(){

this.activatemodel='is-active';
		}
	}
});
</script> -->