<template>
  <main id="vue-modal-dialogs">
    <dialogs-wrapper tag="div" transition-name="fade" @enter="transitionEnter"></dialogs-wrapper>
    <article>
      <login></login>
    </article>
  </main>
</template>

<script>
  import HeaderPage from './docs/HeaderPage.vue';
  
  export default {
    name: 'IndexPage',
    components: {
    HeaderPage,
  }
  };
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  section {
    margin: 80px 0;
  }
  
  main form {
    height: 500px;
    width: 600px;
    padding: 0 32px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .md-textfield {
    height: 36px;
    padding: 16px 0 8px 0;
    border: 0;
    border-bottom: 1px solid #9e9e9e;
    color: #212121;
    width: 350px;

    &:focus {
      padding-bottom: 7px;
      border-bottom: 2px solid #2196F3;
    }
  }

  .md-button {
    width: 200px;
    height: 60px;
    padding: 0 16px;
    border: 0;
    border-radius: 2px;
    flex-shrink: 0;
    text-transform: uppercase;
    color: white;
    background-color: #2196F3;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.33);
    transition: 0.33s ease;

    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.33);
    }

    &:active {
      background-color: #1976D2;
    }

    &.flat {
      color: #2196F3;
      background-color: transparent;
      box-shadow: none;

      &:active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .one-button {
    margin: 16px 0;
    text-align: center;
  }

  .message-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.33);
  }

  .message-title {
    font-size: 16px;
    font-weight: bold;
  }

  .message-content {
    padding: 32px;
    border-radius: 2px;
    margin: 0 16px;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.33);
    display: block;
  }

  .confirm {
    padding-bottom: 16px;
  }

  .message-text {
    margin: 16px 0;
    font-size: 14px;
    text-align: left;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  
</style>

