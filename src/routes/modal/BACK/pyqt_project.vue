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
              API Testing Automation Tool
            </p>
            <p class="sub_title">
              PyQt 기반 Postman 대체 API 자동화 테스트 도구
            </p>
            <a
              target="_blank"
              class="github_link" 
              href="https://github.com/yms06034/API-Testing-Automation-Tool">
              GITHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>PyQt5와 V8 JavaScript 엔진(py-mini-racer)을 활용하여 Postman 대체 도구를 개발했습니다.</p>
              <br />
              <p>JavaScript 런타임 구현으로 pm 객체의 주요 API를 에뮬레이션하며, Pre-request Script/Tests 실행, 환경 변수 관리, Collection Runner 등을 지원합니다.</p>
              <p> SQLite 기반 데이터 관리와 QThread를 통한 비동기 처리로 안정성을 확보했습니다.</p>
              <br />
              
              <p class="snd_title">
                Key Features
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <li style="margin-left: 20px;">API 요청 빌더 (Method, Headers, Body, Params 지원)</li>
              <li style="margin-left: 20px;">환경 변수 및 글로벌 변수 관리 시스템</li>
              <li style="margin-left: 20px;">Collection Runner로 다중 API 순차/병렬 실행</li>
              <li style="margin-left: 20px;">Pre-request Script & Tests 스크립트 에디터</li>
              <li style="margin-left: 20px;">요청 히스토리 및 결과 저장 기능</li>
              <li style="margin-left: 20px;">Excel/CSV 파일에서 테스트 데이터 일괄 임포트</li>
              <li style="margin-left: 20px;">조건부 파라미터 생성 및 URL 자동 생성</li>
              <br />

              <p class="snd_title">
                Service INFO
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p></p>
              <strong>USE TECH</strong>
              <li style="margin-left: 20px;">
                Python, PyQt5, V8 JavaScript Engine (py-mini-racer), SQLite, QThread, Git
              </li>
              <br />
              <strong>Tools and Technologies used</strong>
              <li style="margin-left: 20px;">
                Python 3.10+ with PyQt5 for desktop GUI
              </li>
              <li style="margin-left: 20px;">
                V8 JavaScript Engine integration (py-mini-racer)
              </li>
              <li style="margin-left: 20px;">
                SQLite database for collections and environment data
              </li>
              <li style="margin-left: 20px;">
                Multi-threading with QThread for non-blocking operations
              </li>
              <li style="margin-left: 20px;">
                Custom implementation of Postman's pm API
              </li>
              <li style="margin-left: 20px;">
                JSON handling for request/response processing
              </li>
              <p></p>
              <br />
              <p class="snd_title">
                Core Implementation
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p><strong>JavaScript Runtime Implementation</strong></p>
              <li style="margin-left: 20px;">py-mini-racer를 통한 V8 엔진 임베딩으로 네이티브 JavaScript 실행 환경 구축</li>
              <li style="margin-left: 20px;">Postman의 pm 객체 API를 Python으로 구현 (environment, globals, request, response 등)</li>
              <li style="margin-left: 20px;">샌드박스 환경에서 안전한 스크립트 실행 및 메모리 격리</li>
              <li style="margin-left: 20px;">JSON 직렬화/역직렬화를 통한 Python-JavaScript 간 데이터 교환</li>
              <li style="margin-left: 20px;">chai.js 스타일의 assertion 라이브러리 내장으로 테스트 작성 편의성 제공</li>
              <img
                class="content_img"
                src="../../../assets/project/BACK/QtAA_js_runner.py.png"
                alt="QtAA_js_runner" />
              <br />
              <br />
              <br />
              <p><strong>Multi-threading Implementation</strong></p>
              <li style="margin-left: 20px;">QThread 기반 비동기 처리로 API 테스트 중 UI 응답성 유지</li>
              <li style="margin-left: 20px;">pyqtSignal을 활용한 스레드 간 안전한 통신 구현</li>
              <li style="margin-left: 20px;">Pre-request Script와 Tests 스크립트의 순차적 실행 보장</li>
              <li style="margin-left: 20px;">에러 핸들링을 통한 안정적인 멀티스레드 환경 구축</li>
              <img
                class="content_img"
                src="../../../assets/project/BACK/QtAA_Qthread.png"
                alt="QtAA_Qthread" />
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                 본 프로젝트는 회사 내부 규정에 따라 소스 코드는 공개할 수 없으며, <a
                  target="_blank"
                  class="link"
                  href="https://github.com/yms06034/API-Testing-Automation-Tool">Github.</a>에는 상세한 프로젝트 문서만 포함되어 있습니다.
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