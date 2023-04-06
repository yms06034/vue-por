<template>
  <div class="particles"> 
    <Particles
      id="tsparticles"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#ffffff'
          },
          size: 'cover',
        },
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#999999'
          },
          links: {
            color: '#999999',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }" />

    <div class="textlanding">
      <div class="text_area">
        <p>SUNG</p>
        <img
          class="logo_img"
          src="~assets/kim_logo.png"
          alt="kimLogo" />
        <p style="padding-right: 40px">
          JIN
        </p>
        <hr class="top_hr" />
        <ul style="padding-top: 20px">
          <li class="img_li">
            <a href="https://github.com/yms06034">
              <img
                class="img"
                src="~assets/github.png"
                alt="github" />
            </a>
          </li>
          <li class="img_li">
            <a href="https://www.linkedin.com/in/sungjin-kim-7229ba259/">
              <img
                class="img"
                src="~assets/linkedin.png"
                alt="linkedin" />
            </a>
          </li>
          <li class="img_li">
            <a href="javascript:void(0)">
              <img
                class="img"
                src="~assets/notion.png"
                alt="notion" />
            </a>
          </li>
          <li class="img_li">
            <a href="mailto:yms06034@gmail.com">
              <img
                class="img"
                src="~assets/mail.png"
                alt="mail" />
            </a>
          </li>
        </ul>
      </div>
      <div class="text_content">
        <p class="margin-0">
          Welcome to Sung Jin Kim Portfolio Page
        </p>
        <p class="margin-0">
          I Develop and code beautifully things, and I love what I do.
        </p>
      </div>

      <div class="scrollBtn">
        <a
          @click="scrollVisit()"
          class="scroll_a">
          VISIT
        </a>
        <a
          @click="scrollpor()"
          class="scroll_a">
          PORTFOLIO
        </a>
      </div>
    </div>

    <div>
      <a 
        @click="scrollVisit()"
        class="arrow_area">
        <p class="arrow_bottom">
          ﹀
        </p>
      </a>
    </div>
  </div>
  <!-- VISIT AREA -->
  <section
    v-if="stage === 1"
    class="visit_section"
    ref="visit">
    <div class="container">
      <div class="content_row">
        <div class="img_area">
          <img
            class="img"
            src="~assets/github.png"
            alt="profile" />
        </div>
        <div class="text_area">
          <p>안녕하세요, 저는 연주하는 개발자 김성진입니다.</p>
          <p>
            Data Analytics를 시작으로 Data에 관심이 생겨 Backend 개발에 대한 경험을 쌓기 시작했습니다.
            <br /> Data에 대한 이해와 왜 DataDriven이 시장에서 각광을 받는지에 대해 배우게 되었습니다.
          </p>
          <p>
            Data에 대한 이해와 왜 DataDriven이 시장에서 각광을 받는지에 대해 배우게 되었습니다.
            <br /> 저는 Data에 대해 자연스럽게 호기심이 생기며 Data Enigneer을 위해 끊임없이 노력하고 있습니다.
          </p>
          <div class="btn_area">
            <a
              class="bbtn"
              href="https://github.com/yms06034">GITHUB</a>
            <a
              class="bbtn"
              href="mailto:yms06034@gmail.com">MAIL</a>
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- TECH STACK AREA -->
  <section
    class="techsection"
    v-if="stage === 1"
    ref="techstack">
    <div class="container">
      <div class="content">
        <p class="title">
          TECH STACK
        </p>
        <hr style="width: 100px; height: 1px; border:none;color:#333;background-color:#333;" />
        <center />
        <p class="summary">
          The technology used by the previous company and the technology stack and currently studying.
        </p>
      </div> 
      <div class="content_row">
        <div class="tents_p">
          <img
            class="tents_img"
            src="~assets/data_engineer.png"
            alt="data_engineer" />
          <p class="title">
            Data Engineer
          </p>
          <p>
            collecting, managing, and converting 
            raw data into information that  
            can be interpreted by data scientists and 
            business analysts.
          </p>
          <a class="modal_data">
            +
          </a>
        </div>
        <div class="tents_p">
          <img
            class="tents_img"
            src="~assets/data_engineer.png"
            alt="data_engineer" />
          <p class="title">
            BackEnd Developer
          </p>
          <p>
            allows a database and
            an application to communicate with
            writing APIs, creating libraries, and working with system components
          </p>
          <a class="modal_data">
            +
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- PORTFOLIO AREA -->
  <section
    v-if="stage === 1"
    ref="portfolio">
    PORTFOLIO
  </section>
  <div style="height:1000px"></div>
</template>

<script setup>
import { loadFull } from "tsparticles";
const particlesInit = async engine => {
    await loadFull(engine);
};
const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

console.log(particlesInit);
console.log(particlesLoaded);
</script>

<script>
export default {
  data() {
    return {
      stage: 1
    };
  },
  methods: {
    scrollVisit() {
      const _this = this;
      _this.$refs.visit.scrollIntoView({ behavior: "smooth" });
    },
    scrollpor() {
      const _this = this;
      _this.$refs.portfolio.scrollIntoView({ behavior: "smooth" });
    },
    scrolltach() {
      const _this = this;
      _this.$refs.techstack.scrollIntoView({ behavior: "smooth" });
    },
  }
}
</script>

<style lang="scss" scoped>
$primary: #69b3a2;
$font : 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  .particles {
    position: relative;
    overflow: hidden;
    text-align: center;
    #tsparticles {
      width: 100%;
      height: 600px;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }
    .textlanding {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      max-width: 600px;
      padding: 2em 3em;
      .text_area {
        p {
          display: inline;
          font-size: 35px;
          line-height: 1.75;
        }
        .logo_img {
          width: 100px;
          height: auto;
          margin: 0 10px;
          margin-bottom: 20px;
        }
        .top_hr {
          width: 100px;
          height: 1px;
          border: none;
          color: #000;
          background-color: #000;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .img_li {
          width: 50px;
          height: 50px;
          display: inline-block;
          margin-right: 15px;
          &:last-child {
            margin-right: 0;
          }
          .img {
            width: 100%;
            height: 100%;
            opacity: .6;
            transition: all .2s;
            &:hover {
              opacity: 1;
              transition: all .2s;
            }
          }
        }
      }
    .text_content {
      padding-top: 20px;
      font-weight: 400;
      font-size: 16px;
      .margin-0 {
        margin-bottom: 8px !important;
      } 
    }
    .scrollBtn {
      padding-top: 20px;
      font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      .scroll_a {
        cursor: pointer;
        border: 2px solid $primary;
        padding: 16px 36px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        display: inline-block;
        user-select: none;
        border-radius: 0.25rem;
        color: $primary;
        transition: all .2s;
        font-size: 18px;
        margin-right: 20px;
        &:hover {
          text-decoration: none;
          background: $primary;
          color: #fff;
          transition: all .2s;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .arrow_area {
    cursor: pointer;
    text-decoration: none;
    .arrow_bottom {
      font-size: 80px;
      color: #69b3a2;
      display: inline-block;
    }
  }
}
.visit_section {
  padding: 150px 0;
  background: #f8f9fa;
  .container {
    max-width: 1140px;
    padding: 0 15px;
    .content_row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .img_area {
        width: 250px;
        height: auto;
        margin-right: 70px;
        max-width: 33.333333%;
        .img {
          width: 100%;
        }
      }
      .text_area {
        text-align: left;
        max-width: 66.666667%;
        .btn_area {
          font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          padding-top: 10px;
          .bbtn {
            padding: 7px 13px;
            border: 1px solid $primary;
            border-radius: 5px;
            color: $primary;
            transition: all .2s;
            margin-right: 15px;
            &:hover {
              background: $primary;
              color: #fff;
              transition: all .2s;
            }
            &:last-child {
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
}

.techsection {
  padding: 150px 0;
  .container {
    text-align: center;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    .content {
      .title {
        font-size: 35px;
        font-weight: 500;
      }
      .summary {
        color: #6c757d;
        font-family: $font;
      }
    }
    .content_row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 80px;
      .tents_p {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 28%;
        margin-right: 20px;
        .tents_img {
          width: 110px;
          height: auto;
        }
        .title {
          margin-top: 20px;
          font-family: $font;
          color: $primary;
          font-size: 24px;
        }
        .modal_data {
          font-size: 25px;
          text-decoration: none;
          color: $primary;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
