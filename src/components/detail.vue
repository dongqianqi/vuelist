<template>
<div>
<h1> 我是详情页</h1>
 <h3>传过来的参数是：{{id}}</h3>
</div>

</template>
<script>
export default {
    data() {
        return {
            id:""
        }
    },
    created() {
         console.log(this.$route);
      this.id=this.$route.query.nav;
    },
}
</script>
<style>
</style>