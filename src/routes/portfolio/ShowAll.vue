<template>
  <p class="top_title">
    Show All
  </p>
  <div class="container">
    <div class="content">
      <!-- Airflow ETL Project -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="openAirflow">
            <img
              class="img_img"
              src="~assets/project/DE/airflow_project.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                Airflow ETL Project
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">다양한 도시에 대한 온도, 인구 및 이민 통계와 함꼐 DA, DS, 다른 연구원들에게 제공할만한 ETL 파이프라인을 구축</p>
            </div>
          </a>
          <Dairflow 
            @click="closeAirflow"
            v-if="d_airflow" />
        </figure>
      </div>

      <!-- Yelp Review Recommendation -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="openYelp">
            <img
              class="img_img"
              src="~assets/project/DA/yelp_review.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                Yelp Review Recommendation
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">Yelp의 Review Data를 활용해 각 식당의들은 개선방안을 추천해주는 분석입니다.</p>
            </div>
          </a>
          <Yelp 
            @click="closeYelp"
            v-if="yelp" />
        </figure>
      </div>

      <!-- Real Click Stream Analysis -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="openKafka">
            <img
              class="img_img"
              src="~assets/project/DE/kafka.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                Java ClickStream Analysis for Kafka, Flink
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">JAVA를 사용해 Log Data를 만들어 실시간 클릭 데이터를 대시보드로 넘기는 Pipeline 프로젝트</p>
            </div>
          </a>
          <DKafka 
            @click="closeKafka"
            v-if="d_kafka" />
        </figure>
      </div>

      <!-- ML XGBOOST Project -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="openSparkml">
            <img
              class="img_img"
              src="~assets/project/DE/spark_ml.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                Artist Recommendation System (Spark ML)
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">Spark Mllib를 활용해 Music Artist Recommendation System</p>
            </div>
          </a>
          <Sparkml 
            @click="closeSparkml"
            v-if="sparkml" />
        </figure>
      </div>


      <!-- ML XGBOOST Project -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="openDelivery">
            <img
              class="img_img"
              src="~assets/project/DA/delivery_pred.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                Delivery Predicting System
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">E-commerce 배송 Data를 활용한 정시 배송 예측 시스템 입니다.</p>
            </div>
          </a>
          <Delivery 
            @click="closeDelivery"
            v-if="delivery" />
        </figure>
      </div>

      <!-- Donone Project -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="d_openDonone">
            <img
              class="img_img"
              src="~assets/project/DE/donone.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                ETL PIPELINE PROJECT (AIRFLOW)
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">실제 쇼핑몰 데이터 Airflow를 활용해 Pipeline으로 처리한 프로젝트 입니다.</p>
            </div>
          </a>
          <Donone 
            @click="d_closeDonone"
            v-if="d_donone" />
        </figure>
      </div>

      <!-- Spark_SQL Project -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="d_openSparkSql">
            <img
              class="img_img"
              src="~assets/project/DE/spark_sql.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                SPARK SQL PROJECT
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">Spark Sql를 활용한 Data Analysis &amp; DB </p>
            </div>
          </a>
          <DSparkSQL 
            @click="d_closeSparkSql"
            v-if="d_sparksql" />
        </figure>
      </div>

      <!-- FirstStep Project -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="d_openFirst">
            <img
              class="img_img"
              src="~assets/project/BACK/firststep.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                FLASK PIPELINE PROJECT
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">키워드 기반 여행지 추천 프로젝트 입니다.</p>
            </div>
          </a>
          <DFirststep 
            @click="d_closeFirst"
            v-if="d_firststep" />
        </figure>
      </div>

      <!-- Kobert Project -->
      <div class="item">
        <figure class="img_area">
          <a
            style="cursor:pointer;"
            @click="openKobert">
            <img
              class="img_img"
              src="~assets/project/DA/kobert.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                NLP PROJECT (Deep learning)
                <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
                <p class="sub_title">Bert를 활용한 가사 감성 분석 &amp; 시각화</p>
              </a>
            </div>
          </a>
          <Kobert 
            @click="closeKobert"
            v-if="kobert" />
        </figure>
      </div>

      <!-- ICU_with_HF -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="openIh">
            <img
              class="img_img"
              src="~assets/project/DA/in_hospital.png"
              alt="project" />
            <div class="text_box">
              <a
                class="sub_text">
                In Hospital Mortality Prediction
                <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
                <p class="sub_title">MIMIC-III 데이터를 사용해 중환자실에 입원한 심부전 환자들의 사망 여부 예측 프로젝트</p>
              </a>
            </div>
          </a>
          <Inhospotal 
            @click="closeIh"
            v-if="in_hospital" />
        </figure>
      </div>

      <!-- VGame2_data_Analysis -->
      <div class="item">
        <figure class="img_area">
          <a
            style="cursor:pointer;"
            @click="openVgame">
            <img
              class="img_img"
              src="~assets/project/DA/vgame.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                GAME DATA ANALYSIS
                <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
                <p class="sub_title">1970년 부터 2016년까지의 전 세계 게임 판매량 데이터를 분석</p>
              </a>
            </div>
          </a>
          <Vgame2 
            @click="closeVgame"
            v-if="vgame" />
        </figure>
      </div>

      <!-- startupsplace -->
      <div class="item">
        <figure class="img_area">
          <a
            style="cursor:pointer;"
            @click="b_openStartups">
            <img
              class="img_img"
              src="~assets/project/DE/startupsplace.png"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                StartupsPlace Project
                <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
                <p class="sub_title">키워드 하나로 찾는 신규 창업자를 위한 창업 관련 DATA &amp; DashBorad 개발</p>
              </a>
            </div>
          </a>
          <Startupsplace 
            @click="b_closeStartups"
            v-if="b_startupspalce" />
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
// DE
import DFirststep from "../modal/BACK/firststep";
import DSparkSQL from "../modal/DE/spark_sql";
import Donone from '../modal/DE/donone';
import Sparkml from '../modal/DE/spark_ml';
import DKafka from '../modal/DE/kafka';
import Dairflow from '../modal/DE/airflow_project';

// DA
import Kobert from "../modal/DA/kobert_class";
import Vgame2 from "../modal/DA/vgame2";
import Inhospotal from "../modal/DA/in_hospital";
import Delivery from '../modal/DA/delivery_pred';
import Yelp from '../modal/DA/yelp_review';

// BACK
import Startupsplace from "../modal/BACK/startupsplace";

export default {
  components: {
    Kobert,
    Vgame2,
    Inhospotal,
    DFirststep,
    DSparkSQL,
    Startupsplace,
    Donone,
    Delivery,
    Sparkml,
    DKafka,
    Yelp,
    Dairflow,
  },
  data() {
    return {
      kobert: false,
      vgame: false,
      d_firststep: false,
      d_sparksql: false,
      in_hospital: false,
      b_startupspalce: false,
      d_donone: false,
      delivery: false,
      sparkml: false,
      d_kafka: false,
      yelp: false,
      d_airflow: false,
    }
  },
  methods: {
    openKobert() {
      this.kobert = true;
    },
    closeKobert() {
      this.kobert = false;
    },
    openVgame() {
      this.vgame = true;
    },
    closeVgame() {
      this.vgame = false;
    },
    d_openFirst() {
      this.d_firststep = true;
    },
    d_closeFirst() {
      this.d_firststep = false;
    },
    d_openSparkSql() {
      this.d_sparksql = true;
    },
    d_closeSparkSql() {
      this.d_sparksql = false;
    },
    d_openDonone() {
      this.d_donone = true;
    },
    d_closeDonone() {
      this.d_donone = false;
    },
    openIh() {
      this.in_hospital = true;
    },
    closeIh() {
      this.in_hospital = false;
    },
    b_openStartups() {
      this.b_startupspalce = true;
    },
    b_closeStartups() {
      this.b_startupspalce = false;
    },
    openDelivery() {
      this.delivery = true;
    },
    closeDelivery() {
      this.delivery = false;
    },
    openSparkml() {
      this.sparkml = true;
    },
    closeSparkml() {
      this.sparkml = false;
    },
    openKafka() {
      this.d_kafka = true;
    },
    closeKafka() {
      this.d_kafka = false;
    },
    openYelp() {
      this.yelp = true;
    },
    closeYelp() {
      this.yelp = false;
    },
    openAirflow() {
      this.d_airflow = true;
    },
    closeAirflow() {
      this.d_airflow = false;
    },
  }
}
</script>

<style lang="scss" scoped>
$primary: #69b3a2;
$font : 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  .top_title {
    font-size: 24px;
    text-align: center;
  }
  .container {
    .content {
      display: flex;
      flex-wrap: wrap;
      .item {
        flex: none;
        width: 25%;
        padding: 0.75rem;
        position: relative;
        .img_area {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          .img_img {
            width: 100%;
            height: 100%;
            transform: scale(1);
            transition: .25s ease-in-out;
          }
          .text_box {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
            background-color: $primary;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            &:hover {
                opacity: .9;
              }
            .sub_text {
              color: #fff;
              font-size: 16px;
              font-family: verdana,sans-serif;
              text-align: center;
              text-decoration: none;
              cursor: pointer;
              user-select: none;
            }
          }
        }
      }
    }
  }
</style>