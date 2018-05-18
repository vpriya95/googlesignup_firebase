<template>
     <navbar position="top" class="navbar-dark default-color" name="Just Deploy" href="/">
          <navbar-collapse class="nav-menu">
            <navbar-nav right>
               <navbar-item waves-fixed><a href="#/login" class="navepopup" @click="showModals"><span>Log In</span></a></navbar-item>
            <div>
               <navbar-item waves-fixed><a href="#/signup" class="navepopup" @click="showModals"><span>Sign Up</span></a></navbar-item>
            </div>
          </navbar-nav>
          </navbar-collapse>
    </navbar>
 </template>
<script>
import Navbar from '@/components/Navbar.vue';
import NavbarItem from '@/components/NavbarItem.vue';
import NavbarNav from '@/components/NavbarNav.vue';
import NavbarCollapse from '@/components/NavbarCollapse.vue';
import EdgHd from '@/components/EdgeHeader.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    EdgHd,
  },
  data(){
    return {
      status: null,
      siteName: "JustDeploy",
      bannerContent: "Introducing JustDeploy Plus",
    };
  },
};

</script>

<style scoped>
.navbar {
    background-color: #ff5722ff !important;
    padding-right: 1rem !important;
    font-weight: 300;
}
@media only screen and (max-width: 960px) and (min-width: 600px)  {
.navbar-nav{
  display: none !important;
}
}
.navbar-dark .navbar-brand, 
{
  color: #ffffff !important;
}
a .navesignup span{
color: #ffffff !important;
font-weight: 400 !important;
}
a .navepopup span{
color: #ffffff !important;
font-weight: 400 !important;
}
a .navehelp span{
color: #ffffff !important;
font-weight: 400 !important;
}
a .navesHIW span{
  color: #ffffff !important;
  font-weight: 400 !important;
}
</style>
