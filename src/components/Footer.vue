<template>
 <div class="footer">
   <div class="container text-center">
     <a href="#"><i class="fab fa-instagram"></i></a>
     <a href="#"> <i class="fab fa-facebook-f"></i></a>
     <a href="#"><i class="fab fa-linkedin-in"></i></a>
     <a href="#"><i class="fab fa-youtube"></i></a>
     <a href="#"><i class="fab fa-twitter"></i></a>
     <div class="row container">
       <div class="col-md-3 text-center block_2">
         <h5>Pages</h5>
         <div class="menub">
         <a href="#">Accueil</a>
         <a href="#">À propos</a>
         <a href="#">Contact</a>
         </div>
       </div>

       <div class="col-md-3 text-center block_2">
         <h5>Informations</h5>
         <div class="menub">
         <a href="#">Mentions légales</a>
         <a href="#">Politique de cookies</a>
         <a href="#">Confidentialité</a>
         </div>
       </div>

       <div class="col-md-3 text-center">
         <h5>Contactez-nous</h5>
         <div class="menub block_2">
           <p><i class="fas fa-phone"></i> 06 12 34 56 78</p>
           <p><i class="fas fa-map-marker-alt"></i> route du goulag,<br></p>
         </div>
       </div>

       <div class="icon col-md-3 text-center block_2">
     <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99180.6332193097!2d125.67207167718999!3d39.02911725842702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357e02dae64f4337%3A0xd40677e21771aa95!2sPyongyang%2C%20Cor%C3%A9e%20du%20Nord!5e0!3m2!1sfr!2sfr!4v1604565786486!5m2!1sfr!2sfr"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </div>
     </div>
     <p>Tous droits réservés©</p>


   </div>

			</div>
</template>


<script>
export default {
    name:'Footer'
}

</script>


<style>

a {
  color: white;
  font-weight: lighter;
}
p{
  font-weight: lighter;
}

a:hover {
  color: #FECF98;
}

.block_2 {
  padding-bottom: 50px;
}

#map {
  padding: 10px;
  width: 300px;
}

h5 {
  color: #FECF98;
}

.menub {
  display: grid;
}

.fab {
  font-size: 20px;
  color: white;
  margin:10px;
  padding-bottom: 40px;

}

.fas {
  margin-right:7px;
}

.fab:hover{
  color: #FECF98;
}

.footer{
  background-color: #343a40;
  padding-top: 40px;
  padding-bottom: 30px;
  color: white;
}
</style>
