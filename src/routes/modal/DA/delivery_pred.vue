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
              Delivery Predicting System
            </p>
            <p class="sub_title">
              E-commerce 배송 Data를 활용한 정시 배송 예측 시스템 입니다.
            </p>
            <a
              class="github_link" 
              target="_blank"
              href="https://github.com/yms06034/Delivery-Predicting-System">
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
                <a target="_blank" href="https://www.youtube.com/watch?v=8cdfO1uUD2k&list=PLMEcO50qH7UziRtCK8Ocp41_B-qwtFVgg&index=1&t=245s">
                  프로젝트 유튜브 영상 링크 (클릭)<br />
                  https://www.youtube.com/watch?v=8cdfO1uUD2k&list=PLMEcO50qH7UziRtCK8Ocp41_B-qwtFVgg&index=1&t=245s
                </a>
              </p>

              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>해외 Shopping Data를 활용해 정시 배송 예측을 하는 프로젝트 입니다.</p>
              <p>결측치와 이상치에 대해 분석을 진행하고 정의한 가설을 확인합니다.</p>
              <p></p>
              <p> XGBoost 모델을 사용해 예측을 하였으며, SelectKBest를 적용해 Features 이전 모델과 비교하여 최종 모델을 선택하였습니다.</p>
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/231072990-cdc256eb-832c-4cc6-8e61-12961b5dd25c.png"
                alt="img" />
              <p>
                분석 및 예측에 대한 결과는 제 <a
                  target="_blank"
                  class="link"
                  href="https://github.com/yms06034/Delivery-Predicting-System/blob/master/PROJECT_ML.ipynb">Repositories</a>에서 확인 할 수 있습니다.
              </p>
              <br />
              <p class="snd_title">
                DATA
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />              
              <li>ID: ID Number of Customers.</li>
              <li>Warehouse block: The Company have big Warehouse which is divided in to block such as A,B,C,D,E.</li>
              <li>Mode of shipment:The Company Ships the products in multiple way such as Ship, Flight and Road.</li>
              <li>Customer care calls: The number of calls made from enquiry for enquiry of the shipment.</li>
              <li>Customer rating: The company has rated from every customer. 1 is the lowest (Worst), 5 is the highest (Best).</li>
              <li>Cost of the product: Cost of the Product in US Dollars.</li>
              <li>Prior purchases: The Number of Prior Purchase.</li>
              <li>Product importance: The company has categorized the product in the various parameter such as low, medium, high.</li>
              <li>Gender: Male and Female.</li>
              <li>Discount offered: Discount offered on that specific product.</li>
              <li>Weight in gms: It is the weight in grams.</li>
              <li>Reached on time: It is the target variable, where 1 Indicates that the product has NOT reached on time and 0 indicates it has reached on time.</li>
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                The source code of the project are of course on <a
                  class="link"
                  target="_blank"
                  href="https://github.com/yms06034/Delivery-Predicting-System">Github.</a>
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