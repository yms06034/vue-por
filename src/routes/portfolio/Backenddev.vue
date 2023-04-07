<template>
  <p class="top_title">
    Backend
  </p>
  <div class="container">
    <div class="content">
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="b_openFirst">
            <img
              class="img_img"
              src="~assets/project/BACK/firststep.png"
              alt="project" />
            <div class="text_box">
              <a
                class="sub_text">
                FLASK PIPELINE PROJECT
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">키워드 기반 여행지 추천 프로젝트 입니다.</p>
            </div>
          </a>
          <Firststep 
            @click="b_closeFirst"
            v-if="b_firststep" />
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
import Firststep from "../modal/BACK/firststep";

export default {
  components: {
    Firststep
  },
  data() {
    return {
      b_firststep: false,
    }
  },
  methods: {
    b_openFirst() {
      this.b_firststep = true;
    },
    b_closeFirst() {
      this.b_firststep = false;
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
