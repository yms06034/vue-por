<template>
  <Transition
    name="modal"
    appear>
    <div
      class="modalto modal-overlay">
      <div class="modal_window">
        <div class="modal_content">
          <div class="page-title">
            <button
              class="close-x-btn"
              @click="$emit('close')">
              ×
            </button>
            <p class="title">
              StartupsPlace Project
            </p>
            <p class="sub_title">
              키워드 하나로 찾는 신규 창업자를 위한 창업 관련 DATA &amp; DashBorad 개발
            </p>
            <a
              class="github_link" 
              href="https://github.com/yms06034/StartupsPlace">
              GIBHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>본 프로젝트는 신규 창업자를 위해 원하는 창업 관련 키워드 하나로 찾는 정보 사이트 입니다.</p>
              <br />
              - 코로나 시대가 끝나갈 무렵 다시 일상의 활기를 찾고 있는 시대가 천천히 찾아 오고 있습니다.<br />
              - 다시 창업을 하는 사람들이 많아지고 있고, 또한 무인가게도 많이 늘어났습니다.<br />
              - 그렇기에 창업 관련 정보를 한 사이트에서 편리하게 볼 수 있도록 개발 한 사이트 입니다.<br /> <br /><br />
              <p class="snd_title">
                Service INFO
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <strong><li>지역 별 프렌차이즈 정보</li></strong>
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/230846334-1d385242-e41b-459b-95d6-99f66f88fdbb.gif"
                alt="img" />
              <p>
                위 페이지의 자세한 코드는 <a
                  class="link"
                  href="https://github.com/yms06034/StartupsPlace/blob/master/startupsplace/routes/chart_route.py">여기</a>에서 확인 가능합니다.
              </p>
              <strong><li>키워드에 따른 창업정보 페이지</li></strong>
              <br />
              <img
                src="https://user-images.githubusercontent.com/98085184/230844648-fbe65c20-e20c-4700-8722-7b7cff364e42.gif"
                alt="startupsplace" />
              <p style="margin-top: 10px"></p>
              <p>
                위 페이지의 자세한 코드는 <a
                  class="link"
                  href="https://github.com/yms06034/StartupsPlace/blob/master/startupsplace/routes/query_route.py">여기</a>에서 확인 가능합니다.
              </p>
              <br /><br />
              <p class="snd_title">
                Pipeline
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />              
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/230840969-bb3e6f8b-37d2-4d0e-9358-cf539796e16a.png"
                alt="pipeline" />
              <p>네이버, 카카오, 구글의 API를 가져와 데이터 전처리 후 DB에 담아주고 Flask로 넘겨주었습니다.</p>
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                The source code of the project are of course on <a
                  class="link"
                  href="https://github.com/yms06034/StartupsPlace">Github.</a>
              </p>
            </div>
          </div>
          <!-- <div class="page_close-btn">
            <button
              class="close_btn"
              @click="$emit('close')">
              CLOSE
            </button>
          </div> -->
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
    width: 820px;
    height: 700px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 2010;
    .modal_content {
      position: relative;
      width: 100%;
      background-color: rgb(255, 255, 255);
      padding: 0 60px;
      .page-title {
        position: relative;
        top: 0px;
        left: 0px;
        width: 100%;
        max-width: 820px !important;
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
          margin: 0;
        }
        .sub_title {
          margin-top: 10px;
        }
        .github_link {
          margin-top: 25px;
          margin-bottom: 30px;
          border: 2px solid $primary;
          padding: 8px 10px;
          color: $primary;
          border-radius: .3rem;
          transition: all .2s;
          &:hover {
            transition: all .2s;
            background: $primary;
            color: #fff;
          }
        }
        .close-x-btn {
          position: absolute;
          top: 0px;
          right: 1px;
          width: 30px;
          height: 30px;
          border: none;
          background: none;
          font-size: 50px;
          cursor: pointer;
          color: #666;
          &:hover {
            color: #000;
          }
        }
      }
      .snd_title {
        margin: 0;
        text-align: left;
        font-size: 18px;
      }
      .page_content {
        text-align: left !important;
        overflow: hidden auto;
        position: relative;
        width: 100%;
        height: 440px;
        margin: 0px 0px 50px;
        .description {
          font-size: 15px;
          p {
            margin-bottom: 10px;
            padding-right: 5px;
            .link {
              color: $primary;
              &:hover {
                color: #111;
                text-decoration: underline;
              }
            }
          }
          .snd_title {
            font-size: 20px;
          }
          .content_img {
            margin-top: 30px;
            margin-bottom: 30px;
            width: 95%;
            height: 95%;
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