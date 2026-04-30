const NOTA1 = document.getElementById(`nota1`);
const NOTA2 = document.getElementById(`nota2`);
const NOTA3 = document.getElementById(`nota3`);
const RES_MEDIA = document.getElementById(`media`)

function media() {
  let res_media = (parseFloat(NOTA1.value) + parseFloat(NOTA2.value) + parseFloat(NOTA3.value)) / 3 ;
  RES_MEDIA.innerHTML = `La media es de ${Math.round(res_media)}`;

  RES_MEDIA.classList.remove("hidden");

}

