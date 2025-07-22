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
              BERT MUSIC VISUALZATION
            </p>
            <p class="sub_title">
              노래 가사 텍스트의 감성분석에 기반 한 음악 시각화 웹 개발 프로젝트 입니다.
            </p>
            <a
              target="_blank"
              class="github_link" 
              href="https://github.com/yms06034/kobert_class">
              GIBHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Youtube
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p style="margin-bottom: 40px;">
                <a target="_blank" href="https://www.youtube.com/watch?v=K3b5ykx6h9E&list=PLMEcO50qH7UziRtCK8Ocp41_B-qwtFVgg&index=3&t=26s">
                  프로젝트 유튜브 영상 링크 (클릭)<br />
                  https://www.youtube.com/watch?v=K3b5ykx6h9E&list=PLMEcO50qH7UziRtCK8Ocp41_B-qwtFVgg&index=3&t=26s
                </a>
              </p>
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>본 프로젝트는 사용자가 원하는 노래 가사를 크롤링을 해온 후 NLP Modal에 인식시켜 음악 가사의 감성분석을 해주는 프로젝트입니다.</p>
              <p>
                NLP 관련 프로젝트를 찾고 있을 때 김혜란 박사님의 
                <a
                  target="_blank"
                  class="link"
                  href="https://koreascience.kr/article/JAKO202031458603832.pdf">논문</a>을 보고 진행하게 되었다. 논문을 보면 이러한 연구를 한 계기를 `감정표현에 어려움을 겪는 발달 장애인들의 창작활동과 심리분석 및 의사소통을 쉽게 해주는 예술창작 및 교육 플랫폼으로 확장되기를 기대한다.`라고 적혀 있다.
              </p>
              <p>친척 중에도 청각 장애인분이 계시는데 진동을 통해 음악을 느끼신다. 거기에 더불어 역동적인 시각적 표현까지 더해지면 더욱 풍부한 음악을 느낄 수 있지 않을까 싶어서 개발하게 되었다.</p>
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/230531609-01fa48ca-22c6-434c-8dd7-a81b661a9b6c.png"
                alt="kobert" />
              <p>사용자가 원하는 노래 제목을 적으면 가사를 크롤링 해온 후 Bert에 학습 시켜 6 Class로 나눠진 감정으로 색상별로 보여준다.</p>
              <p>
                Bert에 대한 Code는 <a
                  target="_blank"
                  class="link"
                  href="https://github.com/yms06034/kobert_class/tree/master/kobert/models">여기 클릭</a>를 해서 보실 수 있습니다.
              </p>
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
                  target="_blank"
                  class="link"
                  href="https://koreascience.kr/article/JAKO202031458603832.pdf">Music Visualization.</a> 
                The source code of the project are of course on <a
                  target="_blank"
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