<template>
  <p class="top_title">
    Data Engineer
  </p>
  <div class="container">
    <div class="content">
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
              <a
                class="sub_text">
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
              <a
                class="sub_text">
                FLASK PIPELINE PROJECT
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">키워드 기반 여행지 추천 프로젝트 입니다.</p>
            </div>
          </a>
          <Firststep 
            @click="d_closeFirst"
            v-if="d_firststep" />
        </figure>
      </div>

      <!-- Startupsplace Project -->
      <div class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="d_openStartups">
            <img
              class="img_img"
              src="~assets/project/DE/startupsplace.png"
              alt="project" />
            <div class="text_box">
              <a
                class="sub_text">
                StartupsPlace Project
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">키워드 하나로 찾는 신규 창업자를 위한 창업 관련 DATA &amp; DashBorad 개발</p>
            </div>
          </a>
          <Sparkupsplace
            @click="d_closeStartups"
            v-if="d_startupspalce" />
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
import Firststep from "../modal/BACK/firststep";
import DSparkSQL from "../modal/DE/spark_sql";
import Sparkupsplace from "../modal/BACK/startupsplace";

export default {
  components: {
    Firststep,
    DSparkSQL,
    Sparkupsplace,
  },
  data() {
    return {
      d_firststep: false,
      d_sparksql: false,
      d_startupspalce: false,
    }
  },
  methods: {
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
    d_openStartups() {
      this.d_startupspalce = true;
    },
    d_closeStartups() {
      this.d_startupspalce = false;
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
