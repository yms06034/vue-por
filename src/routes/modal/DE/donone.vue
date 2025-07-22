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
              ETL PIPELINE PROJECT (Airflow)
            </p>
            <p class="sub_title">
              실제 쇼핑몰 데이터 Airflow를 활용해 Pipeline으로 처리한 프로젝트
            </p>
            <a
              target="_blank"
              class="github_link" 
              href="https://github.com/yms06034/Donone_PROJECT">
              GIBHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>본 프로젝트는 실제 운영 되고 있는 쇼핑몰들의 데이터를 가져와 운영자가 한 눈에 볼 수 있게 끔 DashBorad를 보여줍니다.</p>
              <br />
              <strong>기획 동기 및 의도</strong>
              <li>데이터 분석 환경 구축의 필요성 → 데이터 분석을 통한 매출 증대 목표</li>
              <li style="margin-left: 20px;">
                분산되어있는 데이터
              </li>
              <li style="margin-left: 20px;">
                주요 지표 파악의 어려움
              </li>
              <li style="margin-left: 20px;">
                고객 데이터 수집 불가
              </li>
              <li>데이터 파이프라인 구축</li>
              <li style="margin-left: 20px;">
                분산되어있는 데이터를 하나의 DB에 적재한 뒤, 한 테이블에 플랫폼 별 주문 데이터 통합
              </li>
              <br />
              <p class="snd_title">
                Service INFO
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>실제 기업의 각 플랫폼 별 데이터를 수집 및 분석하여 사업자가 활용할 수 있는 대시보드 제작 및 배포</p>
              <strong><li>데이터</li></strong>
              <li style="margin-left: 20px;">
                H-log 쇼핑몰의 각 플랫폼 별 데이터(cafe24, 스마트스토어, 에이블리)
              </li>
              <li style="margin-left: 20px;">
                사용자의 로그분석을 위해 GA를 연동한 데이터
              </li>
              <p></p>
              <strong><li>USE TECH</li></strong>
              <li style="margin-left: 20px;">
                Python, Django, Selenium, AWS, Tableau, Chart.js, Airflow
              </li>
              <br />
              <strong><li>DashBorad 구현 페이지</li></strong>
              <p></p>
              <img
                src="~assets/project/DE/donone_gif.gif"
                alt="startupsplace" />
              <br /><br />
              <p class="snd_title">
                Pipeline
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />              
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/230866641-feae6ecb-80ea-4509-8bea-e99c7b0466b2.png"
                alt="pipeline" />
              <p>Airflow 오케스트라 환경에서 API를 개발해 크롤링 진행 후 데이터 전처리 이후 RDS에 저장 해주었습니다.</p>
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                The source code of the project are of course on <a
                  target="_blank"
                  class="link"
                  href="https://github.com/yms06034/Donone_PROJECT">Github.</a>
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