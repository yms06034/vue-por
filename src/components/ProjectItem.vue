<template>
  <div class="item">
    <figure class="img_area">
      <a 
        style="cursor:pointer;"
        @click="openModal">
        <img
          class="img_img"
          :src="require(`~assets/${project.image}`)"
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
        :is="modalComponent"
        @close="closeModal"
        v-if="showModal" />
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false,
      modalComponent: null
    };
  },
  methods: {
    async openModal() {
      try {
        // 동적으로 모달 컴포넌트 import
        const module = await import(`../routes/modal/${this.project.category}/${this.project.modalPath.split('/').pop()}.vue`);
        this.modalComponent = module.default;
        this.showModal = true;
      } catch (error) {
        console.error('모달 로드 실패:', error);
      }
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #69b3a2;

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
</style>