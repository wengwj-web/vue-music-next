<template>
  <m-header></m-header>
  <tab></tab>
  <router-view :style="viewStyle" />
  <player />
</template>

<script>
import Header from '@/components/header/header'
import Player from '@/components/player/player'
import Tab from '@/components/tab/tab'
import { mapState } from 'vuex'
export default {
  components: {
    MHeader: Header,
    Tab,
    Player
  },
  computed: {
    viewStyle() {
      const bottom = this.playlist.length ? '60px' : '0'
      return {
        bottom
      }
    },
    ...mapState([
      'playlist'
    ])
  }
}
</script>
