const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formEValido = false;

function validadeNome(nomeCompleto) {
   const nomeCompletoArray = nomeCompleto.split(" ");
   console.log(nomeCompletoArray);
   return nomeCompletoArray.length >= 2;
}

form.addEventListener('submit', (event) => {
   event.preventDefault();

   const numeroContaBeneficiario = document.getElementById("numero-conta");
   const valorDeposito = document.getElementById("valor-deposito");

   const mensagemSucesso = `Montante de: <b>${valorDeposito.value} </b>depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

   let formEValido = validadeNome(nomeBeneficiario.value);
   
   if(!formEValido) {

       document.querySelector(".error-message").style.display = "block"
       nomeBeneficiario.style.border = "solid 2px red";

   } else {

       const containerMessageSucesso = document.querySelector(".sucess-message");
       containerMessageSucesso.innerHTML = mensagemSucesso;
       containerMessageSucesso.style.display = "block";        
       
        setTimeout (() => {
               containerMessageSucesso.style.display = "none"; 

               return;
        }, 3000);

        nomeBeneficiario.value = "";
        numeroContaBeneficiario.value = "";
        valorDeposito.value = "";

   }

})


nomeBeneficiario.addEventListener('keyup', event => {
        console.log(event.target.value);
        formEValido = validadeNome(event.target.value);
        console.log(formEValido);

        if(!formEValido) {

                nomeBeneficiario.classList.add("error");
                document.querySelector(".error-message").style.display = "block";

        } else {

                nomeBeneficiario.classList.remove("error")
                document.querySelector(".error-message").style.display = "none";

        }

        if(nomeBeneficiario.value === "" ) {
                nomeBeneficiario.classList.remove("error")
                document.querySelector(".error-message").style.display = "none";
        }

});
