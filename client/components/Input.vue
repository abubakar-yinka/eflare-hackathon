<template>
  <div>
      <div class="col-12 ">

<div class="col-12 d-flex justify-content-center mt-4">


    <div class="form-
group col-4">
<label for="">Temperature</label>
    <input v-model="temp" type="" class="form-control" readonly>
</div>


 <div class="form-
group col-4">
<label for="">Moisture Level</label>
    <input v-model="moisture" type="" class="form-control" readonly>
</div>

</div>


<div class="col-12 d-flex justify-content-center mt-4">


    <div class="form-
group col-4">
<label for="">Water Injection</label>
    <input type="" class="form-control" readonly>
</div>


 <div class="form-
group col-4">
<label for="">Pressure Levels</label>
    <input type="" class="form-control" readonly>
</div>

</div>


<div class="col-12 d-flex justify-content-center mt-4">


    <div class="form-
group col-4">
<label for="">Gas Flow Rate</label>
    <input type="" class="form-control" readonly>
</div>


 <div class="form-
group col-4">
<label for="">Gas Injection</label>
    <input type="" class="form-control" readonly>
</div>

</div>

<div class="col-12 d-flex justify-content-center mt-4">


    <div class="form-
group col-4">
<label for="">Number of wells</label>
    <input type="" class="form-control" readonly>
</div>


 <div class="form-
group col-4">
<label for="">Water Rate</label>
    <input type="" class="form-control" readonly>
</div>




</div>

      </div>

      <div class="submit col-lg-12 d-flex justify-content-center mt-4">
          <button class="col-6 mt-2 py-2 font-weight-bold" type="submit">Simulate</button>
      </div>
  </div>
</template>

<script>
//import axios from 'axios'
export default {

    data(){
        return{
            temp:'hii',
            moisture:70,
            injection:'500',
            pressure:''
        }
    }

}
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=Gothic+A1:300,300i,400,400i,500,500i,600,600i,700,700i|Martel:300,300i,400,400i,700,700i,900,900i|Work+Sans:600,700&display=swap");
label{
   color: #FFF;
   font-family: "Gothic A1", sans-serif;
   font-size: 1.2rem;
   font-weight:bold;
}

*{
font-family: "Gothic A1", sans-serif;
}

input{
    background: #0A0912;
    border: 1.3px solid #191931;
}

.submit button{
    background: #191931;
    color:#fff;
    border:none;
}

.submit button:hover{
    border:1px solid #fff;
}
</style>