async function imputValue(){ 
    const segmentInput = document.querySelector('#segment');
    try {
        var values = await localStorage.getItem('value');

    } catch (error) {
        return alert("Não foi possível acessar o  local storage");
        
    }
    

    switch(values){
        case "lojaDeVestuario": {
            segmentInput.value = 'loja de vestuario';
            break;
        }
        case "lojaDeSapatos": {
            segmentInput.value = 'loja de sapatos';
            break;
        }
        case "lojaDeAcessorios": {
            segmentInput.value = 'loja de acessorios';
            break;
        }
        case "otica": {
            segmentInput.value = 'otica';
            break;
        }
        case "locacoesDiversas": {
            segmentInput.value = 'locacoes diversas';
            break
        }
        case "ofincinas": {
            segmentInput.value = 'ofincinas';
            break;
        }
        case "prestadoresDeServicos": {
            segmentInput.value = 'prestadores de servicos';
            break;
        }
        case "mineMercados": {
            segmentInput.value = 'mine mercados';
            break;
        }
        case "padarias": {
            segmentInput.value = 'padarias';
            break;
        }
        case "acougues": {
            segmentInput.value = 'acougues';
            break;
        }
        case "peixarias": {
            segmentInput.value = 'peixarias';
            break;
        }
        case"varejo": {
            segmentInput.value = 'varejo';
            break;
        }
        case "baresERestaurantes": {
            segmentInput.value = 'bares e restaurantes';
            break;
        }
        case "foodTrucks": {
            segmentInput.value = 'food trucks';
            break;
        }
        case "transportes": {
            segmentInput.value = 'transportes';
            break;
        }
        case "hoteisEPousadas": {
            segmentInput.value = 'hoteis e pousadas';
            break;
        }
        case "consultoriosEClinicasMedicas": {
            segmentInput.value = 'consultorios e clinicas medicas';
            break;
        }
        case "postosDeCombustiveis": {
            segmentInput.value = 'postos de combustiveis';
            break;
        }
        case "manufaturasEPequenasFabricas": {
            segmentInput.value = 'manufaturas e pequenas fabricas';
            break;
        }
        case "autoPecas": {
            segmentInput.value = 'auto pecas';
            break;
        }
        case "petShop": {
            segmentInput.value = 'pet shop';
            break;
        }
        case "atacadoEDistribuicao": {
            segmentInput.value = 'atacado e distribuicao';
            break;
        }
        case "farmacias": {
            segmentInput.value = 'farmacias';
            break;
        }
        case "franquias": {
            segmentInput.value = 'franquias';
            break;
        }
        case "pecuaria":{
            segmentInput.value = 'pecuaria';
            break;
        }

    }


    return segmentInput.value;
}
function cellphoneNumber(){
    const cellphone = document.querySelector("#cellphone");
    const ddd = document.querySelector("#ddd");
    const number = document.querySelector("#number");

    cellphone.value = ddd.value + number.value;

    return cellphone;

}
imputValue();

