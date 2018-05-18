<template>
  <div class="container">
    <div class="row">
 <div class="col-md-4 content">
  <span class="opps-tit"><strong>Oops!</strong></span>
<p class="looking"><strong>We can't seem to find the page you're looking for.</strong></p>
<h4 class="erro-msg"><strong>Error code: 404 page not found</strong></h4>
<ul class="pages">
<li class="list1"><strong>Here are some helpful links instead:</strong></li>
<li class="list2"><a href="/">Home</a></li>
<li class="list3"><a href="#">Searh</a></li>
<li class="list4"><a href="#">Help</a></li>
<li class="list5"><a href="#">Travelling on SpaceDrizzel</a></li>
<li class="list6"><a href="#">Hosting on SpaceDrizzel</a></li>
<li class="list7"><a href="#">Trust & Safety</a></li>
</ul>
</div>
 <div class="col-md-8 animation">
   <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" class="hide-sm image" alt="Girl has dropped her ice cream." width="313" height="428">
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'ErrorPage'
};
</script>
<style scoped>
  .animation{
    float: right;
    margin-left: 200px;
    margin-top: -450px;
  }
  .content{
    width: 50% !important;
    float: left;
    margin-left: 50px;
    margin-top: 100px;
  }

.looking{
  font-size: 25px;
  color: #424242;
  margin-bottom: 5px
}
.erro-msg
{
 color: #616161;
 font-size: 14px;  
}
.image{
  float: right;
  position: 100px 10px;
}
.opps-tit
{
   color: #212121;
  font-size: 100px;
}
.list1{
  list-style-type: none;
  margin-left: 0px;
  color: #616161;
  

}
.list2{
  list-style-type: none;
  margin-top: 5px;
  color: #008489 !important;
}
.list3{
  list-style-type: none;
  /*margin-left: 20px;*/
  margin-top: 5px;
  color: #008489 !important;
}
.list4{
  list-style-type: none;
  /*margin-left: 20px;*/
  margin-top: 5px;
  color: #008489 !important;
}
.list5{
  list-style-type: none;
  /*margin-left: 20px;*/
  margin-top: 5px;
  color: #008489 !important;
}
.list6{
  list-style-type: none;
  /*margin-left: 20px;*/
  margin-top: 5px;
  color: #008489 !important;
}
.list7{
  list-style-type: none;
  /*margin-left: 20px;*/
  margin-top: 5px;
  color: #008489 !important;
}
.error {
text-align: left;

}
.pages{
  vertical-align: middle;
  font-size: 14px;
  margin-left: -40px;
}
a{
  color: #008489;
}
</style>
