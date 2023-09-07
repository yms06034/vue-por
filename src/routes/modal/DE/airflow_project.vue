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
              Airflow ETL Project (S3, Redshift)
            </p>
            <p class="sub_title">
              다양한 도시에 대한 온도, 인구 및 이민 통계와 함꼐 DA, DS, 다른 연구원들에게 제공할만한 ETL 파이프라인을 구축
            </p>
            <a
              class="github_link" 
              href="https://github.com/yms06034/Airflow_ETL_project">
              GIBHUB
            </a>
          </div>
          <div class="page_content">
            <div class="description">
              <p class="snd_title">
                Description
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>이번 프로젝트의 목적은 다양한 도시에 대한 온도, 인구 및 이민 통계와 함꼐 DA, DS, 다른 연구원들에게 제공할만한 ETL 파이프라인을 구축하는 것입니다.</p>
              <br />
              <p>먼저 여러 데이터 셋에서 온도, 공항, 인구 및 이민 통계 데이터를 추출하고 spark를 활용하여 json으로 변환을 하여 Redshift DB에 적제합니다.</p>
              <p>그 이후 Apache Airflow를 활용하여 json file을 s3로 마이그레이션된 데이토가 Redshift로 업로드 되고, 추가 변환을 거쳐 정규화 및 dimension 테이블로 로드 됩니다.</p>
              <br />
              <p class="snd_title">
                Service INFO
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p></p>
              <strong>USE TECH</strong>
              <li style="margin-left: 20px;">
                Python, Airflow, S3, Redshift, pyspark
              </li>
              <br />
              <strong>Tools and Technologies used</strong>
              <li style="margin-left: 20px;">
                Apache Spark - Big data || csv file의 데이터를 DataFrame으로 처리하고 json으로 변환하는 곳에 사용하였습니다. DataSet의 열을 Table에 필요한 열에 매핑하였습니다.
              </li>
              <li style="margin-left: 20px;">
                Apache Airflow - Spark에 처리된 json file을 로컬파일에서 S3로 업로드하고, 데이터 확인 및 dimension 테이블 생성하고 S3 파일을 Redshift 스테이징 테이블에 복사한 다음 ETL을 수행하여 데이터를 테이블에 로드하였습니다.
              </li>
              <li style="margin-left: 20px;">
                Amazon Redshift - s3 데이터와 dimension 테이블에 추가되는 최종 데이터를 저장합니다.
              </li>
              <li style="margin-left: 20px;">
                Amazon S3 - Spark로 처리된 json파일을 저장합니다.
              </li>
              <p></p>
              <br />
              <p class="snd_title">
                DAGs Airflow Graph View Representation
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>File Upload DAG</p>              
              <img
                class="content_img"
                src="https://github.com/yms06034/Airflow_ETL_project/raw/master/img/file_upload_dag.png"
                alt="pipeline" />
              <br />
              <p>Load Transform in Redshift DAG</p>              
              <img
                class="content_img"
                src="https://github.com/yms06034/Airflow_ETL_project/raw/master/img/load_transform_in_redshift_dag.png"
                alt="pipeline" />
              <br />
              <p class="snd_title">
                Read more
              </p>
              <hr style="width: 100%; border-top:1px solid rgba(0, 0, 0, .1);" />
              <p>
                The source code of the project are of course on <a
                  class="link"
                  href="https://github.com/yms06034/Airflow_ETL_project">Github.</a>
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