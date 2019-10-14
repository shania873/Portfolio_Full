       
 <template>

     <form id="formulaire" action name="form" method="post" onsubmit="return validateForm()">
            <ul>
              <li class="half animated fadeInUp">
                <input class="input__field input__field--hoshi" placeholder="Nom" type="text" name="nom" required id="nom" />
                <p id="alert_nom"></p>
                <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li class="half animated fadeInUp">
                    <input class="input__field input__field--hoshi" placeholder="Email" type="email" name="email" id="email" required />
                    <p id="alert_email"></p>
                    <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li class="animated fadeInUp">
                    <input class="input__field input__field--hoshi" placeholder="Sujet" type="text" required id="sujet" name="sujet" />
                    <p id="alert_sujet"></p>
                    <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li class="animated fadeInUp">
                    <textarea class="input__field input__field--hoshi" placeholder="Message" name="msg" required id="msg"></textarea>
                    <p id="alert_msg"></p>
                    <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <button type="button" id="btn__contact" class="flat-button">ENVOYER</button>
                <div id="badresult">C'est pas renvoyée, essayez plus tard..</div>
                <div id="goodresult">Envoyé, merci beaucoup !</div>
                </ul>
          </form>

</template>
<script>
export default {
     	mounted: function () {

        var form = document.getElementById("formulaire");

        var email = document.getElementById("email");
        var sujet = document.getElementById("sujet");
        var nom = document.getElementById("nom");
        var msg = document.getElementById("msg");
        var btn = document.getElementById("btn__contact");
        console.log(nom);

        document.getElementById("badresult").style.display = "none";
        document.getElementById("goodresult").style.display = "none";



        btn.addEventListener("click", function loadDoc(ev) {
            console.log("contact!");

            if (!sujet.checkValidity()) {
                sujet.style.border = "solid 3px #ad0000";

                document.getElementById("alert_sujet").innerHTML =
                    "Votre sujet est requis";
            } else {
                sujet.style.border = "solid 0px #ad0000";
                document.getElementById("alert_sujet").style.display = "none";
            }
            if (!nom.checkValidity()) {
                nom.style.border = "solid 3px #ad0000";
                document.getElementById("alert_nom").innerHTML =
                    "Votre nom est requis";
            } else {
                nom.style.border = "solid 0px #ad0000";
                document.getElementById("alert_nom").style.display = "none";
            }
            if (!email.checkValidity()) {
                email.style.border = "solid 3px #ad0000";
                document.getElementById("alert_email").innerHTML =
                    "Votre e-mail est requis";
            } else {
                email.style.border = "solid 0px #ad0000";
                document.getElementById("alert_email").style.display = "none";
            }
            if (!msg.checkValidity()) {
                msg.style.border = "solid 3px #ad0000";
                document.getElementById("alert_msg").innerHTML =
                    "Votre message est requis";
            } else {
                msg.style.border = "solid 0px #ad0000";
                document.getElementById("alert_msg").style.display = "none";
            }
            if (!form.checkValidity()) {
                document.getElementById("alert_nom").innerHTML =
                    "Votre nom est requis";
                document.getElementById("alert_email").innerHTML =
                    "Votre  email est requis";
                document.getElementById("alert_sujet").innerHTML =
                    "Votre sujet est requis";
                document.getElementById("alert_msg").innerHTML =
                    "Votre msg est requis";
            } else {
                document.getElementById("alert_nom").style.display = "none";
                document.getElementById("alert_email").style.display = "none";
                document.getElementById("alert_sujet").style.display = "none";
                document.getElementById("alert_msg").style.display = "none";
                envoidata();
            }

            function envoidata() {
                const promise = new Promise((resolve, reject) => {
                    var formElement = document.getElementById("formulaire");
                    var request = new XMLHttpRequest();
                    request.open(
                        "POST",
                        "http://carolinevanaerschot.be/php/contact.php"
                    );
                    request.onload = () => {
                        console.log(formElement.checkValidity());
                        if (request.status == 200) {
                            resolve(request.response);
                        } else {
                            reject(Error(request.statusText));
                        }
                    };
                    request.onerror = () => {
                        reject(Error("Error fetching data."));
                    };
                    ev.preventDefault();
                    request.send(new FormData(formElement));

                });

                promise.then(
                    data => {
                        document.getElementById("goodresult").style.display = "block";
                    },
                    error => {
                        document.getElementById("badresult").style.display = "block";

                    }
                );
            }
        });


    }
}
</script>