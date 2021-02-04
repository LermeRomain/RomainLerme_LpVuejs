<template>
  <div class="background container-fluid">
    <div class="banner_content container">
      <div class="row">
        <div class="col-md-6">

          <h1>L'enterrement<br>de demain !</h1>
          <p> Marre des ceremonie nul apporte de la joie de la danse et ... voila paye</p>
          <button class="btn btn-primary" type="button" >Découvrir</button>
          <button class="btn btn-dark" type="button" >Nous contacter</button>
        </div>
          <div class="col-md-6 text-center">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Banner'

}
</script>

<style scoped>


h1, p {
  color: white;
  padding-bottom: 15px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
}

p{
  font-size: 15px;
  font-weight: lighter;
}

.col-md-6 {
  padding: 15px;
  padding-top: 50px;
}

.background{
  padding-top: 100px;
  background-color: #FECF98;
  padding-bottom: 70px;
}
.btn-primary {
  background-color: #E3A964;
  border-color: #E3A964 ;
  margin-right: 15px;
}

.btn:hover {
  transform: scale(1.1);
}

img{
  width: 100%;
}
</style>
