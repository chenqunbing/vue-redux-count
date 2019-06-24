<template>
  <div class="hello">
    <div class="btn" @click="numReduce">-</div>
    <div class="num">{{count}}</div>
    <div class="btn" @click="numAdd">+</div>
  </div>
</template>

<script>
import store from '../store/index'
import { add, reduce } from '../action/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: 0
    }
  },
  created() {
    this.unsubscribe = store.subscribe(() => {
      console.log(store)
        let data = store.getState();
        console.log('data',data);
        this.count = data.count
    });
  },
  destroyed() {
    if(this.unsubscribe) {
      this.unsubscribe()
    }
  },
  methods: {
    numAdd () {
      store.dispatch(add)
    },
    numReduce () {
      store.dispatch(reduce)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    display: flex;
  }
  .btn{
    width: 80px;
    line-height: 60px;
    background: #eeeeee;
    color: #000
  }
  .num{
    line-height: 60px;
    padding: 0 40px;
  }
</style>
