<template>
  <Transition
    name="modal"
    appear>
    <div
      class="modalto modal-overlay"
      @click.self="$emit('close')">
      <div class="modal_window">
        <div class="modal_content">
          <!-- <slot /> <= SignUP.vue에서 내용 불러올 때 사용 -->
          <div class="page-title">
            <img
              class="back_img"
              src="../../assets/backend.png"
              alt="backendimg" />
            <p class="title">
              BackEnd Developer
            </p>
          </div>
          <hr style="width: 50%; border-top:1px solid rgba(0, 0, 0, .2);" />
          <div class="page_content">
            <div class="text_area">
              <p class="title">
                Languages I Speak
              </p>
              <div class="content">
                <p>Python</p>
                <p>javascript</p>
              </div>
            </div>
            <div class="text_area">
              <p class="title">
                FrontEnd Development
              </p>
              <div class="content">
                <p>HTML</p>
                <p>CSS</p>
                <p>SASS</p>
                <p>BOOTSTRAP</p>
                <p>VUE.JS</p>
              </div>
            </div>
            <div class="text_area">
              <p class="title">
                Backend Development
              </p>
              <div class="content">
                <p>Django</p>
                <p>Flask</p>
                <p>Heroku</p>
                <p>AWS</p>
              </div>
            </div>
            <div class="text_area">
              <p class="title">
                Database
              </p>
              <div class="content">
                <p>mongoDB</p>
                <p>MySql</p>
                <p>Postgresql</p>
              </div>
            </div>
          </div>
          <div class="page_close-btn">
            <button
              class="close_btn"
              @click="$emit('close')">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
$primary: #69b3a2;
$font : 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #69b3a2; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #5cb29e; 
}

.modalto {
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
  .modal_window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    position: fixed;
    width: 520px;
    height: 700px;
    margin: -345px auto 0px -260px;
    top: 50%;
    left: 50%;
    z-index: 2010;
    .modal_content {
      position: relative;
      width: 100%;
      background-color: rgb(255, 255, 255);
      .page-title {
        top: 0px;
        left: 0px;
        width: 100%;
        max-width: 520px !important;
        // height: 110px;
        padding: 20px 20px 0 20px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .back_img {
          width: 100px;
          height: auto;
          margin-bottom: 15px;
        }
        .title {
          font-size: 23px;
          font-weight: 400;
          color: #111;
          line-height: 1.2;
          font-family: $font;
        }
      }
      .page_content {
        text-align: left;
        overflow: hidden auto;
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        height: 440px;
        // padding: 0px 40px 20px;
        margin: 0px 0px 50px;
        .text_area {
          margin-bottom: 20px;
          .title {
            font-size: 18px;
            color: $primary;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .content {
            text-align: center;
            margin-bottom: 10px !important;
            p {
              margin: 0;
              font-family: $font;
              font-weight: 500;
            }
          }
        }
      }
      .page_close-btn {
        position: absolute;
        bottom: 0px;
        width: 100%;
        display: flex;
        -webkit-box-pack: justify;
        place-content: center space-between;
        .close_btn {
          flex-grow: 1;
          height: 50px;
          width: 100%;
          text-align: center;
          border: 0px;
          background: $primary;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
        }
      }
    }
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
}
</style>