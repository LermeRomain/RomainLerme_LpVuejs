<template>
  <div class="background container-fluid" id="video">
    <div class="banner_content container">
      <div class="row">
        <div class="col-md-6">
          <h1>Découvrez comment ça marche!</h1>
          <p>Petite danse, déhanche énervé, pleureuse, que du plaisir en gros</p>
          <button class="btn btn-dark" type="button" >Contacter l'équipe Coffee</button>
        </div>

        <div class="col-md-6 text-center">
          <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/O9ejXv5Er6M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <iframe class="facebook text-center" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCoffinDanceMemes.FuneralDancingMemes&width=450&layout=standard&action=like&size=small&share=true&height=35&appId" width="140" height="25" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Video'

}
</script>

<style scoped>

.facebook {

}



h1, p {
  color: white;
  padding-bottom: 5px;
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
}

.background{
  padding-top:70px;
  background-color: #FECF98;
  padding-bottom: 70px;
}

.btn:hover {
  transform: scale(1.1);
}



@media screen and (max-width: 1300px){
  #video {
    width: 400px;
    height: 220px;
  }
}
</style>
