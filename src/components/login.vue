<template>

  <div class="newsletter container-fluid" id="newsletter">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Inscription</h1>
            <form>
            <div class="emailBox">
              <div class="champ">
              <label class="align-self-star" for="name">Votre prénom</label>
              <input class="form-control" type="text" id="name" name="name" minlength="4" placeholder="prenom ici" required>
              </div>
              <div class="champ">
              <label for="emailAddress">Votre adresse mail</label><br>
              <input class="form-control" id="emailAddress" type="email" size="30" maxLength="30" required
                     placeholder="adresse mail là" pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
                     title="Merci de fournir uniquement une adresse mail">
              </div>

            </div>
            <div class="champ">
            <input class="btn btn-dark" type="submit" id="valide" value="S'inscrire">
            </div>
          </form>

        </div>

        <div class="col-md-6 text-center">
          <img v-bind:src="require('../assets/dance2.jpg')" alt="service-image" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Login',
 data() {
   return {
     input: {
       emailAddress: "",
       password: ""
     },
   }

 }
}
</script>


<style scoped>

.champ{
  padding-top: 20px;
}

.newsletter{
  padding-top: 70px;
  padding-bottom: 70px;
}

img {
  width: 100%;
}

label {
  font-size: 15px;
  text-align: left!important;

}

h1 {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}

h4 {
  font-weight: bold;
  color: #FECF98;
  text-transform: uppercase;
}



#login {
 width: 400px;
 border: 2px solid #CCCCCC;
 background-color: white;
 margin: auto;
 margin-top: 20px;
 padding: 20px;

}
#map{
 margin-left: 470px;
 margin-top: 20px;
}

</style>
