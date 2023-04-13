<template>
  <header>
    <div class="header_area">
      <div class="Home">
        <a href="/">HOME</a>
      </div>
      <div class="pad-15">
        <a @click="scrollVisit()">INFO</a>
        <a @click="scrollpor()">PORTFOLIO</a>
        <a @click="scrollcontact()">CONTACT</a>
      </div>
    </div>
  </header>

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
            <a href="https://woozy-trader-79d.notion.site/KimSungJin-Resume-d9fa05dbf9854b60b048267f55e56f53">
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
    ref="visit"
    id="visit">
    <div class="container">
      <div class="content_row">
        <div class="img_area">
          <img
            class="img"
            src="~assets/myCharacter.png"
            alt="profile" />
        </div>
        <div class="text_area">
          <p>안녕하세요, 저는 연주하는 개발자 김성진입니다.</p>
          <p>
            Data Analytics를 시작으로 Data에 대해 많이 배웠습니다.
            <br /> Data에 대한 이해와 왜 DataDriven이 시장에서 각광을 받는지에 대해 배우게 되었습니다.
          </p>
          <p>
            저는 Data에 대해 자연스럽게 호기심이 생기며 Data Enigneer을 위해 끊임없이 노력하고 있습니다.
          </p>
          <div class="btn_area">
            <a
              class="bb-bbtn"
              href="https://woozy-trader-79d.notion.site/KimSungJin-Resume-d9fa05dbf9854b60b048267f55e56f53">RESUME</a>
            <a
              class="bbtn"
              href="https://github.com/yms06034">GITHUB</a>
            <a
              class="bbtn"
              href="mailto:yms06034@gmail.com">MAIL</a>
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
          <a
            @click="ddopenModal" 
            class="modal_data">
            +
          </a>
          <BackModal
            @close="ddcloseModal"
            v-if="data_modal" />
        </div>
        <div class="tents_p">
          <img
            class="tents_img"
            src="~assets/backend.png"
            alt="data_engineer" />
          <p class="title">
            BackEnd Developer
          </p>
          <p>
            allows a database and
            an application to communicate with
            writing APIs, creating libraries, and working with system components
          </p>
          <a 
            class="modal_data"
            id="data_show-modal"
            @click="openModal">
            +
          </a>
          <Modal
            @close="closeModal"
            v-if="modal" />
        </div>
      </div>
    </div>
  </section>
  <!-- PORTFOLIO AREA -->
  <section
    class="por_section"
    v-if="stage === 1"
    ref="portfolio">
    <div class="container">
      <div class="content">
        <p class="title">
          PORTFOLIO
        </p>
        <hr style="width: 100px; height: 1px; border:none;color:#333;background-color:#333;" />
        <p class="summary">
          It's the projects I've been worked on.
        </p>
      </div>
      <div class="content_row">
        <div class="all_btn">
          <button
            class="btn_b activate"
            ref="showAll" 
            href="javascript:void(0)"
            @click="openShowAll">
            Show All
          </button>
          <button
            class="btn_b"
            ref="DataEngineer" 
            href="javascript:void(0)"
            @click="openEng">
            Data Engineer
          </button>
          <button
            class="btn_b"
            ref="DataAnalysis" 
            href="javascript:void(0)"
            @click="openAna">
            Data Analysis
          </button>
          <button
            class="btn_b"
            ref="Backend" 
            href="javascript:void(0)"
            @click="openBack">
            Backend
          </button>
        </div>
        <porShowAll v-if="ShowAll">
          openShow
        </porShowAll>
        <porDataEngineer v-if="DataEngineer">
          openEng
        </porDataEngineer>
        <porDataAnalysis v-if="DataAnalysis">
          openAna
        </porDataAnalysis>
        <porBackend v-if="Backend">
          openBack
        </porBackend>
      </div>
    </div>
  </section>
  <!-- CONTACT AREA -->
  <section 
    ref="contact"
    class="content_section">
    <div class="container">
      <div class="content">
        <div class="title">
          CONTACT
        </div>
        <div class="summary">
          "우리는 모두 이 사실을 알고 있다.
          계속 노력하면 성공할 수 있다는 걸 그 속도가 느릴지언정 <strong style="color:#ff8100;">'절대'</strong> 포기하지 말라, 목표는 보이는 것보다 가까이 있을 때가 있다.”
          <p class="sub_text">
            항상 이런 마음가짐으로 모든일에 최선을 다합니다.
          </p>
          <p class="sub_mail">
            email at   
            <a
              class="mail"
              href="mailto:yms06034@gmail.com">
              yms06034@gmail.com.
            </a>
          </p>
        </div>
        <div class="btn_area">
          <a
            class="bb-bbtn"
            href="https://woozy-trader-79d.notion.site/KimSungJin-Resume-d9fa05dbf9854b60b048267f55e56f53">RESUME</a>
          <a
            class="bbtn"
            href="https://github.com/yms06034">GITHUB</a>
          <a
            class="bbtn"
            href="mailto:yms06034@gmail.com">MAIL</a>
        </div>
      </div>
    </div>
  </section>
  <!-- SCROLL TOP BTN -->
  <div
    v-show="scY">
    <button
      class="scroll_top_btn"
      @click="toTopBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.999 511.999"
        style="enable-background:new 0 0 511.999 511.999"
        xml:space="preserve"><path
          transform="rotate(-134.999 167.189 174.56)"
          style="fill:#a5f2e5"
          d="M120.885 112.176h92.607v124.766h-92.607z" /><path d="M149.836 269.347c1.651 1.652 3.816 2.477 5.98 2.477s4.329-.825 5.98-2.477L256 175.143l94.204 94.204a8.463 8.463 0 0 0 11.962 0l77.441-77.441a8.455 8.455 0 0 0 0-11.959l-43.308-43.308a8.456 8.456 0 0 0-11.96 0 8.455 8.455 0 0 0 0 11.959l37.329 37.329-65.481 65.481-165.514-165.51 65.481-65.481 85.33 85.33a8.456 8.456 0 0 0 11.96 0 8.456 8.456 0 0 0 0-11.96l-91.309-91.31A8.463 8.463 0 0 0 256.154 0c-.052 0-.104.007-.156.008-.051-.001-.102-.008-.155-.008a8.459 8.459 0 0 0-5.98 2.477L72.394 179.946a8.457 8.457 0 0 0 0 11.96l77.442 77.441zm28.721-171.644 65.482 65.481-88.224 88.224-65.482-65.481 88.224-88.224z" /><path
            style="fill:#62d9c7"
            d="m341.484 105.746-85.33-85.33-65.481 65.482 165.51 165.509 65.481-65.481-37.329-37.329a8.455 8.455 0 0 1 0-11.959l-30.891-30.891a8.455 8.455 0 0 1-11.96-.001z" /><path
              transform="rotate(-134.999 167.186 414.732)"
              style="fill:#a5f2e5"
              d="M120.882 352.346h92.607v124.766h-92.607z" /><path
                style="fill:#62d9c7"
                d="m341.484 345.922-85.33-85.33-65.481 65.481 165.51 165.509 65.481-65.481-37.329-37.329a8.455 8.455 0 0 1 0-11.959l-30.891-30.891a8.456 8.456 0 0 1-11.96 0z" /><path d="M396.296 376.813a8.456 8.456 0 0 0-11.96 0 8.456 8.456 0 0 0 0 11.96l37.329 37.329-65.481 65.481-165.51-165.51 65.481-65.481 85.33 85.33a8.456 8.456 0 0 0 11.96 0 8.455 8.455 0 0 0 0-11.959l-91.31-91.309a8.463 8.463 0 0 0-5.981-2.477c-.052 0-.104.007-.156.008-.052-.001-.104-.008-.156-.008a8.459 8.459 0 0 0-5.98 2.477L72.394 420.121a8.457 8.457 0 0 0 0 11.96l77.441 77.441c1.651 1.652 3.816 2.477 5.98 2.477s4.329-.825 5.98-2.477l94.204-94.204 94.204 94.204a8.463 8.463 0 0 0 11.962 0l77.441-77.441a8.455 8.455 0 0 0 0-11.959l-43.31-43.309zm-217.739-38.935 65.482 65.481-88.224 88.224-65.482-65.481 88.224-88.224z" /></svg>
    </button>
  </div>
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
import BackModal from "../components/Modal/DataEngineer";
import Modal from "../components/Modal/Backend";

import porShowAll from "./portfolio/ShowAll";
import porDataEngineer from "./portfolio/DataEngineer";
import porDataAnalysis from "./portfolio/DataAnalysis";
import porBackend from "./portfolio/Backenddev";

export default {
  components: {
    porShowAll,
    porDataEngineer,
    porDataAnalysis,
    porBackend,
    BackModal,
    Modal
  },
  data() {
    return {
      navigations : [
        {
          name: 'INFO',
          href: '',
        },
        {
          name: 'PORTFOLIO',
          href: ''
        },
        {
          name: 'CONTACT',
          href: ''
        }
      ],
      stage: 1,
      showModal: false,
      modal: false,
      data_modal: false,
      ShowAll: true,
      DataEngineer: false,
      DataAnalysis: false,
      Backend: false,
      scY: 0,
      scrollTimer: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0
      }, 200);
    },
    toTopBtn() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollVisit() {
      const _this = this;
      _this.$refs.visit.scrollIntoView({ behavior: "smooth" });
    },
    scrollpor() {
      const _this = this;
      _this.$refs.portfolio.scrollIntoView({ behavior: "smooth" });
    },
    scrollcontact() {
      const _this = this;
      _this.$refs.contact.scrollIntoView({ behavior: "smooth" });
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    ddopenModal() {
      this.data_modal = true;
    },
    ddcloseModal() {
      this.data_modal = false;
    },
    openShowAll() {
      this.$refs.showAll.classList.add('activate');
      this.$refs.DataEngineer.classList.remove('activate');
      this.$refs.DataAnalysis.classList.remove('activate');
      this.$refs.Backend.classList.remove('activate');

      this.ShowAll = true;
      this.DataEngineer = false;
      this.DataAnalysis = false;
      this.Backend = false;
    },
    openEng() {
      this.$refs.showAll.classList.remove('activate');
      this.$refs.DataEngineer.classList.add('activate');
      this.$refs.DataAnalysis.classList.remove('activate');
      this.$refs.Backend.classList.remove('activate');

      this.ShowAll = false;
      this.DataEngineer = true;
      this.DataAnalysis = false;
      this.Backend = false;
    },
    openAna() {
      this.$refs.showAll.classList.remove('activate');
      this.$refs.DataEngineer.classList.remove('activate');
      this.$refs.DataAnalysis.classList.add('activate');
      this.$refs.Backend.classList.remove('activate');
      
      this.ShowAll = false;
      this.DataEngineer = false;
      this.DataAnalysis = true;
      this.Backend = false;
    },
    openBack() {
      this.$refs.showAll.classList.remove('activate');
      this.$refs.DataEngineer.classList.remove('activate');
      this.$refs.DataAnalysis.classList.remove('activate');
      this.$refs.Backend.classList.add('activate');
      
      this.ShowAll = false;
      this.DataEngineer = false;
      this.DataAnalysis = false;
      this.Backend = true;
    },

  }
}
</script>

<style lang="scss" scoped>
$primary: #69b3a2;
$font : 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
$font2: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;

header { 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 3000;
  .header_area {
    margin: 0 auto;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media screen and (max-width: 1200px) {
      padding: 0 25px;
    }
    .Home {
      a {
        color: $primary;
        font-size: 18px;
        &:hover {
          color: #111;
          font-weight: bold;
        }
      }
    }
    .pad-15 {
      color: #000;
      font-family: $font !important;
      a {
        margin-right: 40px;
        &:last-child {          
          margin-right: 0;
        }
        &:hover {
          color: $primary;
          cursor: pointer;
          padding-bottom: 15px;
          border-bottom: 3px solid $primary;
        }
      }
    }
  }
}

  .particles {
    position: relative;
    overflow: hidden;
    text-align: center;
    #tsparticles {
      width: 100%;
      height: 700px;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      padding-top: 100px;
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
        padding: 16px 30px;
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
          margin-top: 15px;
          font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          padding-top: 10px;
          .bb-bbtn {
            padding: 7px 13px;
            border: 1px solid $primary;
            border-radius: 5px;
            transition: all .2s;
            background: $primary;
            margin-right: 15px;
            color: #fff;
            &:hover {
              color: $primary;
              background: #fff;
              transition: all .2s;
            }
          }
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
          font-size: 30px;
          text-decoration: none;
          color: $primary;
          cursor: pointer;
          transition: all .2s;
          &:hover {
            color: #1e7a65;
            transition: all .2s;
          }
        }
      }
    }
  }
}

.por_section {
  padding: 150px 0;
  background: #f8f9fa;
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
      font-family: $font;
      .all_btn {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 60px;
        .btn_b {
          border-radius: 5px;
          background: #fff;
          border: 2px solid $primary;
          color: $primary;
          padding: 10px 20px;
          transition: all .3s;
          margin-right: 15px;
          &:hover {
            transition: all .3s;
            background: $primary;
            color: #fff;
          }
          &:last-child {
            margin-right: 0;
          }
        }
        .activate {
          background: $primary;
          color: #fff;
        }
      }
    }
  }
}

.content_section {
  padding: 150px 0;
  .container {
    text-align: center;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    .content {
      .title {
        font-size: 40px;
        font-weight: 500;
        font-family: $font;
        margin-bottom: 20px;
      }
      .summary {
        margin: 0 auto;
        color: #464748;
        font-family: $font;
        max-width: 800px;
        padding: 0 70px;
        .sub_text {
          margin-top: 10px;
        }
        .sub_mail {
          font-weight: 500;
          font-family: $font2;
          .mail {
            color: $primary;
            font-weight: 500;
            &:hover {
              color: #072645;
              font-weight: bold;
            }
          }
        }
      }
      .btn_area {
        margin-top: 50px;
        font-family: $font;
        .bb-bbtn {
          padding: 16px 30px;
          border: 2px solid $primary;
          border-radius: 5px;
          transition: all .2s;
          background: $primary;
          margin-right: 15px;
          color: #fff;
          &:hover {
            color: $primary;
            background: #fff;
            transition: all .2s;
          }
        }
        .bbtn {
          padding: 16px 30px;
          border: 2px solid $primary;
          border-radius: 5px;
          transition: all .2s;
          margin-right: 15px;
          color: $primary;
          &:hover {
            color: #fff;
            background: $primary;
            transition: all .2s;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
.scroll_top_btn {
  z-index: 3000;
  position: fixed;
  right: 30px;
  bottom: 40px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid $primary;
  width: 60px;
  height: 60px;
  background: none;
}
</style>
