<template>
  <p class="top_title">
    Show All
  </p>
  <div class="container">
    <div class="content">
      <!-- DATA ENGINEER PROEJECT -->
      <div class="item">
        <figure class="img_area">
          <a 
            @click="openDeModal">
            <img
              class="img_img"
              src="https://www.yan-holtz.com/img/portfolio/GenMapComp.png"
              alt="project" />
            <div class="text_box">
              <a
                class="sub_text">
                DATA ENGINEER PROJECT
              </a>
            </div>
          </a>
          <Deproject 
            @click="closeDeModal"
            v-if="demodal" />
        </figure>
      </div>




      <!-- DATA ANALYSIS PROEJECT -->
      <!-- Kobert Project -->
      <div class="item">
        <figure class="img_area">
          <img
            class="img_img"
            src="~assets/project/DA/kobert.png"
            alt="project" />
          <div class="text_box">
            <a
              @click="openKobert" 
              class="sub_text">
              NLP PROJECT (Deep learning)
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p class="sub_title">Bert를 활용한 가사 감성 분석 &amp; 시각화</p>
            </a>
          </div>
          <Kobert 
            @click="closeKobert"
            v-if="kobert" />
        </figure>
      </div>

      <!-- VGame2_data_Analysis -->
      <div class="item">
        <figure class="img_area">
          <img
            class="img_img"
            src="~assets/project/DA/vgame.png"
            alt="project" />
          <div class="text_box">
            <a
              @click="openVgame" 
              class="sub_text">
              VAME DATA ANALYSIS
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p class="sub_title">1970년 부터 2016년까지의 전 세계 게임 판매량 데이터를 분석</p>
            </a>
          </div>
          <Vgame2 
            @click="closeVgame"
            v-if="vgame" />
        </figure>
      </div>



      <!-- BACKEND PROEJECT -->
      <div class="item">
        <figure class="img_area">
          <a 
            @click="openBaModal">
            <img
              class="img_img"
              src="https://www.yan-holtz.com/img/portfolio/GenMapComp.png"
              alt="project" />
            <div class="text_box">
              <a
                class="sub_text">
                DATA ENGINEER PROJECT
              </a>
            </div>
          </a>
          <Backproject 
            @click="closeBaModal"
            v-if="backmodal" />
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
// DE
import Deproject from "../modal/DE/deproject";
// DA
import Kobert from "../modal/DA/kobert_class";
import Vgame2 from "../modal/DA/vgame2"

// BACK
import Backproject from "../modal/BACK/backproject";

export default {
  components: {
    Backproject,
    Kobert,
    Vgame2,
    Deproject,
  },
  data() {
    return {
      backmodal: false,
      kobert: false,
      vgame: false,
      demodal: false,
    }
  },
  methods: {
    openBaModal() {
      this.backmodal = true;
    },
    closeBaModal() {
      this.backmodal = false;
    },
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
    openDeModal() {
      this.demodal = true;
    },
    closeDeModal() {
      this.demodal = false;
    }
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