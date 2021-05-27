const calculate = document.getElementById('calculate');

function imc(){
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if(name !=='' && height !=='' && weight !=='' ){
        const imcvalue = (weight / (height * height)).toFixed(1);
        let valor = '';
        if(imcvalue < 18.5){
            valor = 'abaixo do peso';
        }else if(imcvalue < 25){
            valor = 'peso ideal';
        }else if(imcvalue < 30){
            valor = 'levemente acima do pose';
        }else if(imcvalue < 35){
            valor = 'com obesidade grau I'
        }else if(imcvalue < 40){
            valor = 'com obesidade grau II'
        }else{
            valor = 'com obesidade grau III, cuidado'
        }
        result.textContent = `${name} seu IMC é de: ${imcvalue}, você está ${valor}!`;
    }else{
        result.textContent = 'Porfavor preencha todos os campos!';
    }

}

calculate.addEventListener('click',imc);
