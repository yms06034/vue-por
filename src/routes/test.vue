<template>
  <div class="text-on-img">
    <div class="background-wrap">
      <div class="content">
        <span>Title</span>
        <span>Content</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-wrap {
  background-image: url('https://image.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg');
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  opacity: 0;
  background: red;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
}

.content span {
  color: black;
}

.content span:nth-child(1) {
  font-size: 25px;
  font-weight: bold;
}

.content span:nth-child(2) {
  font-size: 20px;
}
</style>