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
              SPARK SQL PROJECT
            </p>
            <p class="sub_title">
              Spark Sql를 활용한 Data Analysis &amp; DB 
            </p>
            <a
              target="_blank"
              class="github_link" 
              href="https://github.com/yms06034/Spark_SQL">
              GITHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>본 프로젝트는 Spark SQL를 활용해 Data Analysis &amp; Data Wrangling를 진행한 후 DA가 사용할 수 있도록 Data Warehouse에 저장해 주었다.</p>
              <p>
                프로젝트의 자세한 코드 및 내용은 제 <a
                  target="_blank"
                  class="link"
                  href="https://github.com/yms06034/Spark_SQL">Repositories</a>에서 확인 할 수 있습니다.
              </p>
              <img
                class="content_img"
                src="https://user-images.githubusercontent.com/98085184/230559238-a03f6085-4ab6-463b-b9a8-3636881fcce6.png"
                alt="kobert" />
              <p>최대한 실무 데이터와 비슷한 데이터를 찾아 진행하였고,  Brazilian E-Commerce Public Dataset을 사용하였다</p>
              <p>위에 이미지는 해당 E-commerce Data의 DB Schema다.</p><br />

              <ul><strong>Principal Dataset</strong></ul>
              <li>Order ID</li>
              <li>Customer ID</li>
              <li>Order Status</li>
              <li>Order Purchase Timestamp</li>
              <li>Order Approved at</li>
              <li>Order Delivered Carrier date</li>
              <li>Order Delivered Customer date</li>
              <li>Order Estimated delivered date</li>
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                The source code of the project are of course on <a
                  target="_blank"
                  class="link"
                  href="https://github.com/yms06034/Spark_SQL">Github.</a>
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