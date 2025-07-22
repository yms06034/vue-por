<template>
  <p class="top_title">
    Show All
  </p>
  <div class="container">
    <div class="content">
      <div 
        v-for="project in allProjects" 
        :key="project.id"
        class="item">
        <figure class="img_area">
          <a 
            style="cursor:pointer;"
            @click="openModal(project.id)">
            <img
              class="img_img"
              :src="require(`~/assets/${project.image}`)"
              alt="project" />
            <div class="text_box">
              <a class="sub_text">
                {{ project.title }}
              </a>
              <hr style="width: 100%; border-top:1px solid rgba(255, 255, 255, .9);" />
              <p style="color:#ffffff;">{{ project.description }}</p>
            </div>
          </a>
          <component 
            :is="modalComponents[project.id]"
            @close="closeModal(project.id)"
            v-if="modalStates[project.id]" />
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
import { projects } from '../../data/projects';
import pyqt_project from '../modal/BACK/pyqt_project.vue';

import DSparkSQL from "../modal/DE/spark_sql";
import Donone from '../modal/DE/donone';
import Sparkml from '../modal/DE/spark_ml';
import DKafka from '../modal/DE/kafka';
import Dairflow from '../modal/DE/airflow_project';

import Kobert from "../modal/DA/kobert_class";
import Vgame2 from "../modal/DA/vgame2";
import Inhospotal from "../modal/DA/in_hospital";
import Delivery from '../modal/DA/delivery_pred';
import Yelp from '../modal/DA/yelp_review';

import Startupsplace from "../modal/BACK/startupsplace";
import DFirststep from "../modal/BACK/firststep";


export default {
  components: {
    pyqt_project,
    DFirststep,
    DSparkSQL,
    Donone,
    Sparkml,
    DKafka,
    Dairflow,
    Kobert,
    Vgame2,
    Inhospotal,
    Delivery,
    Yelp,
    Startupsplace,
  },
  data() {
    const modalStates = {};
    const modalComponents = {};
    
    projects.forEach(project => {
      modalStates[project.id] = false;
      modalComponents[project.id] = project.modalComponent;
    });
    
    return {
      allProjects: projects,
      modalStates,
      modalComponents
    }
  },
  methods: {
    openModal(projectId) {
      this.modalStates[projectId] = true;
    },
    closeModal(projectId) {
      this.modalStates[projectId] = false;
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