<template>
  <div>
    <video
      id="vid1"
      width="500"
      height="300"
      class="video-js"
      preload="auto"
      poster="//vjs.zencdn.net/v/oceans.png"
      controls
      data-setup="{}"
    >
      <source
        src="http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8"
        type="application/x-mpegURL"
      />
    </video>
  </div>
</template>

<script>
export default {
  name: 'PlayerComponent'
}
</script>

<style>

</style>
