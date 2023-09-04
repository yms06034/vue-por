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
              Yelp Review Recommendation
            </p>
            <p class="sub_title">
              Yelp의 Review Data를 활용해 각 식당의들은 개선방안을 추천해주는 분석입니다.
            </p>
            <a
              class="github_link" 
              href="https://github.com/yms06034/Restaurant-Review_Analysis/blob/master/Yelp_%EB%A6%AC%EB%B7%B0_%EB%B6%84%EC%84%9D.ipynb">
              GIBHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>한 연구에 따르면 별점 1개를 올리면 매출이 약 60% 증가하는 것으로 나타났다고 합니다.</p>
              <p>따라서 Yelp의 리뷰데이터를 확인하여 각 7가지의 요리 유형이 있는 식당을 분석하여 손님의 관심사항을 분석하여 개선해 나갈 것입니다.</p>
              <p>Review 데이터를 활용하기 위해 SVM model을 구현하여 긍정적인 단어와 부정적인 단어를 나눠 해당 식당의 높은점수를 준 이유와 낮은 점수를 준 이유를 확인하였습니다.</p>
              <p></p>
              <img
                class="content_img"
                src="../../../assets/project/DA/yelp_result.png"
                alt="img" />
              <p>
                분석 및 예측에 대한 결과는 제 <a
                  class="link"
                  href="https://github.com/yms06034/Restaurant-Review_Analysis/blob/master/Yelp_%EB%A6%AC%EB%B7%B0_%EB%B6%84%EC%84%9D.ipynb">Repositories</a>에서 확인 할 수 있습니다.
              </p>
              <br />
              <p class="snd_title">
                DATA
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />              
              <strong>Business table</strong>
              <li>business_id: ID of the business</li>
              <li>name: 식당 이름</li>
              <li>address: 주소</li>
              <li>city: 도시</li>
              <li>state: 주</li>
              <li>postal_code: 우편번호</li>
              <li>latitude: 위도</li>
              <li>longitude: 경도</li>
              <li>stars: 평균 평점</li>
              <li>review_count: 고객이 기재한 리뷰 수</li>
              <li>is_open: 1 영업중, 0 영업하지 않는 경우</li>
              <li>categories: 식당 범주</li>
              <br />
              <strong>Review table</strong>
              <li>review_id: ID of the review</li>
              <li>user_id: ID of the user</li>
              <li>business_id: ID of the business</li>
              <li>stars: 평가 점수</li>
              <li>date: 리뷰 작성 날짜</li>
              <li>text: 리뷰 작성글</li>
              <li>useful: 해당 리뷰가 유용하다고 투표한 사용자 수</li>
              <li>funny: funny 투표한 사용자 수</li>
              <li>cool: cool에 투표한 사용자 수</li>
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                The source code of the project are of course on <a
                  class="link"
                  href="https://github.com/yms06034/Restaurant-Review_Analysis/blob/master/Yelp_%EB%A6%AC%EB%B7%B0_%EB%B6%84%EC%84%9D.ipynb">Github.</a>
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