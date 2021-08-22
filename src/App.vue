<template>
  <m-header></m-header>
  <tab></tab>
  <router-view />
  <player />
</template>

<script>
import Header from '@/components/header/header'
import Player from '@/components/player/player'
import Tab from '@/components/tab/tab'
export default {
  components: {
    MHeader: Header,
    Tab,
    Player
  }
}
</script>
