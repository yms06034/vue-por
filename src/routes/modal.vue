<template>
  <transition
    name="modal"
    appear>
    <div
      class="modal modal-overlay">
      <div class="modal-window">
        <div class="modal-content">
          <p>Vue.js Modal Window!</p>
          <div><input v-model="message" /></div>
          <!-- /default -->
          <!-- footer 슬롯 콘텐츠 -->
          <button @click="doSend">
            제출
          </button>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }

  &-content {
    padding: 10px 20px;
  }

  &-footer {
    background: #ccc;
    padding: 10px;
    text-align: right;
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}</style>