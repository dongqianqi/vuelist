<template>
  <div>
      <!-- <input type="button" value="跳转" @click="go"> -->
       <el-table :data="tableData" style="width: 80%">
         <el-table-column  label="图片"> 
           <template slot-scope="scope">
             <div>
               <img class="lazy" :data-original="scope.row.img" alt="" width="100px" height="100px" style="border:1px solid red">
             </div>
           </template>
         </el-table-column>
    <el-table-column prop="ct" label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型">
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="sizenum"
      layout="total, prev, pager, next"
      :total="totlepage">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        tableData: [],
        currentPage:1,
        sizenum:10,
        totlepage:1
      }
  },
  created() {
    this.go();
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage=val;
        this.go();
      },
    go(){
      // this.$router.push('/detail?nav=123');
      // 易园接口不跨越
      /**/
      this.$http.get('http://route.showapi.com/341-2',{
        params: {
            showapi_appid: '46452',
            page: this.currentPage,
            maxResult: this.sizenum,
            showapi_sign: 'c3bc2247155b4219bffb60cac4fd315c'
        }
      }).then(res=>{
        console.log(res)
        this.totlepage=res.data.showapi_res_body.allNum;
        this.tableData=res.data.showapi_res_body.contentlist;
      })
    },
  },
}
</script>

<style>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
