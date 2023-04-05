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
              mode: 'push'
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
    </div>
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

<style lang="scss">
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
    }
  }
</style>