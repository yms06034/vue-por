<template>
  <p class="top_title">
    Show All
  </p>
  <div class="container">
    <div class="content">
      <div class="item">
        <figure class="img_area">
          <img
            class="img_img"
            src="https://www.yan-holtz.com/img/portfolio/GenMapComp.png"
            alt="project" />
          <div class="text_box">
            <a
              @click="openDeModal"
              class="sub_text">
              DATA ENGINEER PROJECT
            </a>
          </div>
          <Deproject 
            @click="closeDeModal"
            v-if="demodal" />
        </figure>
      </div>
      <div class="item">
        <figure class="img_area">
          <img
            class="img_img"
            src="https://www.yan-holtz.com/img/portfolio/GenMapComp.png"
            alt="project" />
          <div class="text_box">
            <a
              @click="openDaModal" 
              class="sub_text">
              DATA ANALYSIS PROJECT
            </a>
          </div>
          <Daproject 
            @click="closeDaModal"
            v-if="damodal" />
        </figure>
      </div>
      <div class="item">
        <figure class="img_area">
          <img
            class="img_img"
            src="https://www.yan-holtz.com/img/portfolio/GenMapComp.png"
            alt="project" />
          <div class="text_box">
            <a
              @click="openBaModal"
              class="sub_text">
              BACKEND PROJECT
            </a>
          </div>
          <BackProject 
            @click="closeBaModal"
            v-if="backmodal" />
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
import BackProject from "../modal/BACK/backproject";
import Daproject from "../modal/DA/daproject";
import Deproject from "../modal/DE/deproject";

export default {
  components: {
    BackProject,
    Daproject,
    Deproject
  },
  data() {
    return {
      backmodal: false,
      damodal: false,
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
    openDaModal() {
      this.damodal = true;
    },
    closeDaModal() {
      this.damodal = false;
    },
    openDeModal() {
      this.demodal = true;
    },
    closeDeModal() {
      this.demodal = false;
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
