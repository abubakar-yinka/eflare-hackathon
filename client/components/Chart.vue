<template>
  <div class="d-flex justify-content-center" >

      <div class="d-flex flex-column  shadow col-10 align-items-center" style="overflow-y:0;">





       <div id="chart-container">
      <fusioncharts
       style="height:30vh;" 
      :type="type"
      :width="width"
      :height="height"
      :dataformat="dataFormat"
      :dataSource="dataSource"
      >
      </fusioncharts>
    </div>


  
    </div>
 

 
<!-- <div v-if="loading" class="over-loader d-flex justify-content-center align-items-center">
 <cube-spin></cube-spin>
</div> -->

  </div>
</template>

<script>



const chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];

// STEP 3: Configure your chart
const dataSource = {
  chart: {
    caption: "Countries With Most Oil Reserves [2017-18]",
    subcaption: "In MMbbl = One Million barrels",
    xaxisname: "Years",
    yaxisname: "Amount",
    numbersuffix: "K",
    theme: "fusion"
  },
  data: chartData
  };



export default {

    mounted(){
        // setTimeout(() => {
        
        //    this.loading=false
        // }, 3000);
    },

    methods:{
toggleState(){

  this.increase=false
  this.decrease=true
},

toggleIncrease(){
    this.increase=true
  this.decrease=false
}
    },
    
data(){
    return{
        // Preparing the chart data
 

 "type": "line",
      "renderAt": "chart-container",
      "width": "550",
      "height": "250",
      "dataFormat": "json",
      dataSource,
      loading:true,
      increase:true,
      decrease:false,
      showGraph:false
    }
},
 
}
</script>

<style scoped>

.over-loader{
    background: #180C2E ;
    position: absolute;
    height: 100vh;
    width:100%;
    top:0;
}


button{
  border: 2px solid purple;
  border-radius: 5px;
}

</style>