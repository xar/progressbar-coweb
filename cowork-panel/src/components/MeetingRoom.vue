<template>
<div class="meetingroom">
<div class="tile is-ancestor">
  <div class="tile is-parent is-12">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/IMG_0963.jpg" alt="meeting room bratislava cowork"/>
      </figure>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child">
          <figure class="image">
            <img src="/static/img/meetingroom/IMG_0984.jpg" alt="meeting room bratislava cowork"/>
          </figure>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent is-size-4">
    <article class="tile is-child notification is-black">
        <div class="content">
          <p class="title">Meeting room 🤝</p>
          <div class="content">
            <p>Perfect for brainstorming and meeting clients</p>
            <p>Glass sealed</p>
            <p>10 seats</p>
            <p>Projector</p>
            <p>Whiteboard</p>
            <p>By renting our meeting room you are supporting community 💞</p>
          </div>
          <div class="btn-container">
            <a class="button is-black is-block is-large meeting" href="https://t.me/coworkprogressbar">{{ orderPrices.meetingRoom }}€ / hour</a>
          </div>
        </div>
      </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child">
      <figure class="image">
        <img src="/static/img/meetingroom/IMG_0970.jpg" alt="meeting room bratislava cowork"/>
      </figure>
    </article>
  </div>
</div>
<div class="columns is-centered">
    <div class="column is-12 contains-iframe-to-center" v-for="frame in href.iframes">
      <ImageFrame v-bind:url="frame" :key="frame"></ImageFrame>
    </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-12">
    <div class="tile is-parent">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/meetingroom/IMG_0966.jpg" alt="meeting room bratislava cowork"/>
        </figure>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/meetingroom/IMG_1026.jpg" alt="meeting room bratislava cowork"/>
        </figure>
      </article>
    </div>
  </div>
</div>
</div>
</template>
<script>
import ImageFrame from './ImageFrame';

export default {
  components: {
    ImageFrame
  },
  name: 'meetingroom',
  data() {
    return {
      href: {
        iframes: [
          "https://www.google.com/maps/embed?pb=!4v1547309949111!6m8!1m7!1sCAoSLEFGMVFpcFBxUjZDTVN1Ml95TENfQ29taDFIeWwwT1BBU3k5M3dkLUplWUEz!2m2!1d48.14465277777778!2d17.11530555555556!3f246.4!4f-13.89!5f0.4000000000000002"
        ],
      },
      orderPrices: {
        meetingRoom: 10
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
</style>
