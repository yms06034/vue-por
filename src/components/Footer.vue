<template>
  <footer>
    <div class="footer">
      <p class="text">
        Made By © SungJIn {{ new Date().getFullYear() }}
      </p>
      <div class="contact_area">
        <a
          class="img_a"
          href="https://github.com/yms06034">
          <img
            src="~assets/github_w.png"
            alt="github" />
        </a>
        <a
          class="img_a"
          href="https://www.linkedin.com/in/sungjin-kim-7229ba259/">
          <img
            src="~assets/linkedin_w.png"
            alt="github" />
        </a>
        <a
          class="img_a"
          href="">
          <img
            src="~assets/notion_w.png"
            alt="github" />
        </a>
        <a
          class="img_a"
          href="mailto:yms06034@gmail.com">
          <img
            src="~assets/mail_w.png"
            alt="github" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scope>
@import "~/scss/main";

  footer {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 30px 0;
    font-size: 15px;
    background-color: #262626;
    text-decoration: none;
    text-align: center;
    margin-top: 100px;
    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1000px;
      margin: 0 auto;
      .text {
        color: #fff;
        margin: 0 !important;
      }
      .contact_area {
        .img_a {
          width: 40px;
          height: auto;
          display: inline-block;
          margin-right: 15px;
          opacity: .6;
          transition: all .3s;
          &:hover {
            opacity: 1;
            transition: all .3s;
          }
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
</style>