<template>
  <p class="top_title">
    Data Analysis
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
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
              href="/" 
              class="sub_text">
              프레이저 밸리(Fraser Valley) 주택 소유자에게 서비스를 제공하는 고급 맞춤형 주거용 리노베이터입니다.
            </a>
          </div>
        </figure>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  
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
            }
          }
        }
      }
    }
  }
</style>
