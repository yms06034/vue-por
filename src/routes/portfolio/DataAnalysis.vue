<template>
  <p class="top_title">
    Data Analysis
  </p>
  <div class="container">
    <div class="content">
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
              <a
                class="sub_text">
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
              <a
                class="sub_text">
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
    </div>
  </div>  
</template>

<script>
import Kobert from "../modal/DA/kobert_class";
import Vgame2 from '../modal/DA/vgame2';
import Inhospotal from "../modal/DA/in_hospital"

export default {
  components: {
    Kobert,
    Vgame2,
    Inhospotal
  },
  data() {
    return {
      kobert: false,
      vgame: false,
      in_hospital: false,
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
    openIh() {
      this.in_hospital = true;
    },
    closeIh() {
      this.vgame = false;
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
