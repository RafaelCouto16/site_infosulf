async function segmentsDOM(inputValue){
    console.log('inpout', inputValue);
    try {
        await localStorage.setItem('value', inputValue);

    } catch (error) {
        return alert("Não foi possível acessar o  local storage");
    }
    window.location.href= "systems.html";
    return inputValue;

};
async function createPhrase(){
    try {
        var value = await localStorage.getItem('value');

    } catch (error) {
        return alert("Não foi possível acessar o  local storage");

    }
    console.log('value1',value);

    let text = "";

    switch(value){
        case "lojaDeVestuario": {
            text = 'Para o ramo de vestuário, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "lojaDeSapatos": {
            text = 'Para o ramo de calçados, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "lojaDeTintas":{
            text = 'Para o ramo de tintas, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "lojaDeAcessorios": {
            text = 'Para o ramo de acessórios, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "contabilidades":{
            text = 'Para o ramo de contabilidade, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "oticas": {
            text = 'Para o ramo de ótica, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "locacoesDiversas": {
            text = 'Para o ramo de locações, temos os seguintes sistemas a lhe oferecer';
            break
        }
        case "oficinas": {
            text = 'Para o ramo de oficina, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "prestadoresDeServicos": {
            text = 'Para o ramo de prestação de serviços, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "mineMercados": {
            text = 'Para o ramo de mine mercado, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "padarias": {
            text = 'Para o ramo de padaria, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "acougues": {
            text = 'Para o ramo de açougues, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "peixarias": {
            text = 'Para o ramo de peixarias, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "varejo": {
            text = 'Para o ramo de varejo, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "baresERestaurantes": {
            text = 'Para o ramo de bares e rastaurantes, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "foodTrucks": {
            text = 'Para o ramo de food truck, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "transportes": {
            text = 'Para o ramo de transportes, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "hoteisEPousadas": {
            text = 'Para o ramo de hotel e pousada, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "consultoriosEClinicasMedicas": {
            text = 'Para o ramo de consultório e clínica médica, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "postosDeCombustiveis": {
            text = 'Para o ramo de posto de combustível, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "manufaturasEPequenasFabricas": {
            text = 'Para o ramo de fábricas, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "autoPecas": {
            text = 'Para o ramo de auto peças, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "petShop": {
            text = 'Para o ramo de pet shop, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "atacadoEDistribuicao": {
            text = 'Para o ramo de atacado distribuição, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "farmacias": {
            text = 'Para o ramo de farmácia, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "franquias": {
            text = 'Para o ramo de franquias, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "pecuaria":{
            text = 'Para o ramo de pecuaria, temos os seguintes sistemas a lhe oferecer';
            break;
        }
        case "construtora":{
            text = 'Para o ramo de construtora, temos os seguintes sistemas a lhe oferecer';
            break;
        }
    }

    const phraseSegments = document.querySelector('#phraseSegments');
    let span = document.createElement('span');

    let textSpan = document.createTextNode(`${text}`);
    span.appendChild(textSpan);

    phraseSegments.appendChild(span);

    return phraseSegments;
}
async function createBlocks(){
    try {
        var value = await localStorage.getItem('value');

    } catch (error) {
        return alert("Não foi possível acessar o  local storage");

    }
    console.log('value1',value);

    let array;

    switch(value){
        case "lojaDeVestuario": {
            array = ['topCell', 'tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraMagazine', 'conciliadora'];
            break;
        }
        case "lojaDeSapatos": {
            array = ['topCell', 'tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraMagazine', 'conciliadora'];
            break;
        }
        case "lojaDeAcessorios": {
            array = ['topCell', 'tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraMagazine', 'conciliadora'];
            break;
        }
        case "oticas": {
            array = ['topCell', 'tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraMagazine', 'conciliadora'];
            break;
        }
        case "locacoesDiversas": {
            array = ['tdpComercio', 'topCell', 'hiper', 'appta', 'eleve', 'sgbr', 'moura', 'conciliadora'];
            break;
        }
        case "mineMercados": {
            array = ['tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraSis', 'conciliadora'];
            break;
        }
        case "padarias": {
            array = ['tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraSis', 'conciliadora'];
            break;
        }
        case "acougues": {
            array = ['tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraSis', 'conciliadora'];
            break;
        }
        case "peixarias": {
            array = ['tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraSis', 'conciliadora'];
            break;
        }
        case "varejo": {
            array = ['tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraSis', 'conciliadora'];
            break;
        }
        case "atacadoEDistribuicao":{
            array = ['tdpComercio', 'hiper', 'appta', 'eleve', 'sgbr', 'mouraSis', 'conciliadora'];
            break;
        }
        case "postosDeCombustiveis":{
            array = ['tdpComercio', 'mouraPostos', 'conciliadora'];
            break;
        }
        case "autoPecas": {
            array = ['topCellAutoPecas', 'tdpComercio', 'mouraSis', 'appta', 'conciliadora'];
            break;
        }
        case "prestadoresDeServicos": {
            array = ['tdpServicos', 'sgbr', 'mouraOS', 'hiper'];
            break;
        }
        case "oficinas":{
            array = ['motorsw', 'tdpServicos', 'sgbr', 'mouraOS', 'conciliadora'];
            break;
        }
        case "locacoesDiversas": {
            array = ['tdpComercio', 'sgbr', 'conciliadora'];
            break
        }
        case "baresERestaurantes": {
            array = ['tdpFood', 'eleve', 'mouraCardapio', 'appta', 'sgbr', 'conciliadora'];
            break;
        }
        case "foodTrucks": {
            array = ['tdpFood', 'eleve', 'mouraCardapio', 'appta', 'sgbr', 'conciliadora'];
            break;
        }
        case "transportes": {
            array = ['tdpComercio', 'sgbr', 'conciliadora'];
            break;
        }
        case "hoteisEPousadas": {
            array = ['sgbr', 'conciliadora'];
            break;
        }
        case "consultoriosEClinicasMedicas": {
            array = ['eleveSaude', 'conciliadora'];
            break;
        }
        case "manufaturasEPequenasFabricas": {
            array = ['tdpComercio', 'sgbr'];
            break;
        }
        case "petShop": {
            array = ['mouraPet', 'tdpComercio', 'hiper', 'eleve', 'appta', 'conciliadora'];
            break;
        }
        case "farmacias": {
            array = ['tdpComercio', 'mouraFar', 'appta', 'conciliadora'];
            break;
        }
        case "pecuaria":{
            array = ['leigado', 'mouraAgro', 'conciliadora'];
            break;
        }
        case "lojaDeTintas": {
            array = ['tdpComercio', 'tdpComercio', 'sgbr', 'mouraSis', 'appta', 'conciliadora'];
            break;
        }
        case "franquias": {
            array = ['mouraFranquias', 'hiper', 'conciliadora'];
            break;
        }
        case "construtora": {
            array = ['obraPrima'];
            break;
        }
        case "contabilidades":{
            array = ["intsys", 'conciliadora']
        }
    }
    const systemArea = document.querySelector('#systems');
    const body = document.querySelector('body');

    array.map((i, index) => {
        const div = document.createElement('div');
        div.setAttribute("id", `${i}`);
        div.setAttribute("class", "segmentsBlock");

        const script = document.createElement('script');
        script.setAttribute("src", `../javascripts/segments/${i}.js`);

        systemArea.appendChild(div);
        body.appendChild(script);

        if(index % 2 === 0){
            let block = document.querySelector(`#${i}`);
            block.classList.add('lightBlue');

        }else{
            let block = document.querySelector(`#${i}`);
            block.classList.add('blue');
        }
    });

    return array;
}

createPhrase();
createBlocks();


