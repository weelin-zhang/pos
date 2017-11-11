<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs type="card">
          <el-tab-pane label="点餐">
            <el-table width="100%" :data="tableData" border>
              <el-table-column prop="goodsName" label="商品名称" width="120">
                
              </el-table-column>              
              <el-table-column prop="count" label="数量" width="70">
                
              </el-table-column>              
              <el-table-column prop="price" label="金额" width="90">
                
              </el-table-column>
              <el-table-column label="操作" width="120" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small"
                  @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
                  <el-button type="text" size="small"
                  @click="handleReduce(scope.$index, scope.row)"><i class="el-icon-minus"></i></el-button>
                  <el-button type="text" size="small"
                  @click="handleAdd(scope.$index, scope.row)"><i class="el-icon-plus"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total-div">
              <span>订单详情</span>数量: {{ totalCount }}   金额: ￥{{ Sum }}
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="clearAll">删除</el-button>
              <el-button type="success" @click="checkOut">结账</el-button>
            </div>

          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17" id="goods-list">
        <div class="often-goods" id="abc">
          <div class="title">
            常用商品
          </div>
          <div class="often-goods-lists">
            <ul>
              <li v-for="(good, index) in oftenGoods" @click="addOrderList(good)">
                <span>{{good.goodsName}}</span>
                <span class="price">￥{{ good.price }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cooklist">
                  <li v-for="(good, index) in type0Goods" @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg">
                    </span>
                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小吃">
              <div>
                <ul class="cooklist">
                  <li v-for="(good, index) in type1Goods" @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg">
                    </span>
                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}</span>
                  </li>
                </ul>
              </div>

            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cooklist">
                  <li v-for="(good, index) in type2Goods" @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg">
                    </span>
                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cooklist">
                  <li v-for="(good, index) in type3Goods" @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg">
                    </span>
                    <span class="foodName">{{ good.goodsName }}</span>
                    <span class="foodPrice">￥{{ good.price }}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  created(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(resp=>{
      // console.log(resp.data)
      this.oftenGoods=resp.data
    })
    .catch(error=>{
      console.log(error)
    })

    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(resp=>{
      this.type0Goods = resp.data[0]
      this.type1Goods = resp.data[1]
      this.type2Goods = resp.data[2]
      this.type3Goods = resp.data[3]      
    })
    .catch(error=>{
      console.log(error)
    })
  },
  mounted(){
    var h = document.body.clientHeight
    document.getElementById('order-list').style.height=h+'px'
    console.log(h)
  },
  data () {
    return {
      tableData: [
      ],
      oftenGoods: [
        {
          goodId: 1,
          goodsName: '鸡腿',
          price: 10, 
        }
      ],
      type0Goods:[
      ],
      type1Goods:[
      ],
      type2Goods:[
      ],
      type3Goods:[
      ],
    }
  },

  computed: {
    totalCount(){
      let total=0
      for(let i=0;i<this.tableData.length;i++){
        total+=this.tableData[i].count
      }
      return total
    },
    Sum(){
      let sum=0
      for(let i=0;i<this.tableData.length;i++){
        sum+=this.tableData[i].count*this.tableData[i].price
      }
      return sum
    }
  },
  methods: {
    addOrderList(good){
      // 判断是否已经在订单列表中
      let isHave=false
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId==good.goodsId){
          isHave=true
        }
      }
      if(isHave){
        //改变商品数量
        let arr=this.tableData.filter(g=>g.goodsId==good.goodsId)
        arr[0].count++;
      }else{
        let newGoods={goodsId:good.goodsId,goodsName:good.goodsName,price:good.price,count:1}
        this.tableData.push(newGoods)
      }
      
    },
    handleDelete(index, row){
      // this.tableData.splice(index,1)
      this.tableData=this.tableData.filter(g=>g.goodsId!==row.goodsId)
    },
    handleReduce(index, row){
      if(row.count>0){
        row.count--
        if(row.count==0){
          this.handleDelete(index, row)
        }
      }
    },   
    handleAdd(index, row){
      row.count++
    },
    //清空全部账单
    clearAll(){
      this.tableData=[]
    },

    // 模拟结账
    checkOut(){
      if(this.totalCount!=0){
        console.log('结账')
        this.tableData=[]
        this.$message({
          message: '结账成功,thx',
          type: 'success'
        });
      }else{
        this.$message.error('当前没商品')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-btn{
  margin-top: 10px;
}
.pos-order {
  background-color: #f9fafc;
/*  border: 1px solid blue;
*/}


.title{
  height: 25px;
  margin: 10px;
  text-align: left;
}
.ofter-goods{
  overflow: hidden;
}
.often-goods-lists ul li{
  list-style: none; 
  float: left;
  background-color: #fff;
  padding: 5px;
  margin:10px;
}
.price{
  color: blue;
}

.goods-type{
  clear: both;
  padding: 20px;
}

.cooklist li{
  list-style: none;
  width: 23%;
  height: 80px;
  margin: 5px;
  background-color: #fff;
  float: left;
}


img{
  width: 80px;
  height: 80px;
}

.foodImg{
  float: left;
  display: block;
}
.foodName{
  color: red;
  font-size:15px;
  padding-left: 10px;
  margin:10px;
  display: block;
}

.total-div{
  width: 100%;
  height: 30px;
  line-height: 30px;
  border: 1px solid gray;
}
.total-div span{
  float: left;
  margin-left: 10px;
  font-weight: blod;
}
</style>
