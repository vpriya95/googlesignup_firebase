<template>
  <div class="message-wrapper" @click.self="$close()">
    <form class="message-content login confirm" @submit.prevent="submit">
      <div class="message-title">Login</div>
      <div class="message-text">
        <input class="md-textfield" type="text" placeholder="Username" v-model="user.username">
        <input class="md-textfield" type="password" placeholder="Password" v-model="user.password">
      </div>
      <div class="buttons">
        <button class="md-button flat" type="button" @click="$close()">Cancel</button>
        <button class="md-button flat" type="submit" @click="$close()">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  data: () => {
    return {
      className: classNames(
      'Login'
       ),
      user: {
        username: '',
        password: ''
      },
    };
  }
};
</script>
<style scoped>
  .login .message-text {
    display: flex;
    flex-direction: column;

    input {
      width: auto;

      &:first-child {
        margin-bottom: 16px;
      }
    }
  }
</style>
