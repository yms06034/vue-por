<template>
  <Transition
    name="modal"
    appear>
    <div
      class="modalto modal-overlay"
      @click.self="$emit('close')">
      <div class="modal_window">
        <div class="modal_content">
          <div class="page-title">
            <p class="title">
              VGAME_DATA ANALYSIS
            </p>
            <p class="sub_title">
              2016년까지의 게임 판매량 데이터를 분석한 프로젝트 입니다.
            </p>
            <a
              class="github_link" 
              href="https://github.com/yms06034/vgames2_data">
              GIBHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>게임 판매량은 1970년대부터 2016년도까지 북미, 유럽, 일본, 그 이외 지역으로 나뉘어 기록되이었습니다.</p>
              <p>분석에는 전체 데이터 중, 마지막 연도인 16년도에 사용중인 플랫폼 중 가장 출시년도가 빠른 플랫폼의 출시일부터 사용했습니다(플랫폼은 X360, 2005년 부터 2016년 까지).</p>
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/230531609-01fa48ca-22c6-434c-8dd7-a81b661a9b6c.png"
                alt="kobert" />
              <p>사용자가 원하는 노래 제목을 적으면 가사를 크롤링 해온 후 Bert에 학습 시켜 6 Class로 나눠진 감정으로 색상별로 보여준다.</p>
              <br />
              <p class="snd_title">
                Pipeline
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />              
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/230531750-a0d2d303-2667-45be-bfbd-ad5892873deb.png"
                alt="pipeline" />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                You can read the scientific paper on 
                <a
                  class="link"
                  href="https://koreascience.kr/article/JAKO202031458603832.pdf">Music Visualization.</a> 
                The source code of the project are of course on <a
                  class="link"
                  href="https://github.com/yms06034/kobert_class">Github.</a>
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
            width: 100%;
            height: 100%;
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