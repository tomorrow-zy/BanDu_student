<template>
  <div class="homebookcontent">
    <div class="row" v-for="(item, index) in data" :key="index">
      <div class="bookwapper" @click="onBookClick(item)">
        <BookCard :src="item.src" :text="item.title"/>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '../../components/home/bookcard'
export default {
  components: {
    BookCard
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    onBookClick (item) {
      this.$emit('onBookClick', item)
    }
  }
}
</script>

<style scoped>
.homebookcontent{
  display: flex;
  flex-flow: nowrap;
}
</style>