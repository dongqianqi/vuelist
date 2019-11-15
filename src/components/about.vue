<template>
<div>
<h1>我是about组件</h1>
<h2><font color="red"> {{num}}</font></h2>
</div>

</template>
<script>
export default {
    data() {
        return {
            num:""
        }
    },
    created() {
        console.log(this.$route);
        this.num=this.$route.params.id;
    },
}
</script>