const numbers = document.getElementById('numbers');
const submit = document.getElementById('submit');
const error = document.getElementById('error');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const resul4 = document.getElementById('result4');
submit.addEventListener('click',function(){
let massive = numbers.value.split(',');

console.log(massive);
minNumber(massive);
oddNumbers(massive);
idOfMaxNumber(massive);
lessThanZero(massive);
if(numbers.value === ''){
    numbers.classList.add('error');
    error.innerHTML='value should be a number';
    result.innerHTML = '';
    result2.innerHTML = '';
    result3.innerHTML = '';
    result4.innerHTML = '';
}

});
function validate(inp) {
    inp.value = inp.value.replace(/[^-\d,.]*/g, '')
                         .replace(/([,-.])[,.]+/g, '$1')
                         .replace(/([-])[-]+/g, '$1')
                         .replace(/(\d)[-]+/g, '$1')
                         .replace(/^[^\d]*(\d+([,.]\d+[.,])\d+[,.]\d+[,.]\d+[,.]\d+[,.]\d+[,.]\d+[,.]\d+[,.]\d+[,.]\d+[,.]\d+[,.]?).*$/g, '$1');


                        }
numbers.addEventListener('click',function(){
    numbers.classList.remove('error');
    error.innerHTML = '';
    });


function oddNumbers(numbers){
    let zero = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            zero++;
        }
    }
    result2.innerHTML = 'Кількість парних чисел: '+ zero;
    console.log('Парних чисел: '+zero);
}

function minNumber(list){
     let min = list[0];
    for(let i = 0; i < list.length; i++){
         if(min > list[i]){
            min = list[i];
        }
    }
result.innerHTML = 'Min: ' + min;
console.log('Min: '+ min);
 }


    function idOfMaxNumber(list){
        let zero = 0;
        let max = list[0];
        for(let i = 0; i < list.length; i++){
            if(max<list[i]){
                zero = i;
            }
        }
        result3.innerHTML = 'Id максимального числа: '+ zero;
        console.log('Id of max: '+ zero);
    }
    function lessThanZero(list){
        let zero = 0;
        for(let i = 0; i < list.length; i++){
            if(list[i] < 0){
                zero++;
            }
        }
        resul4.innerHTML ='Кількість відємних чисел: ' + zero;
        console.log('Кількість відємних чисел: ' + zero);
    }



    