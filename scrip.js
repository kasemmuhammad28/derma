
let x = 100;
let y = '200';

let z = x + + y;

function miniTest(value){
    if(value === 100200){
        return 'hereWillBeConcatination';
    }else if(value === 300){
        return 'hereWillBeAddition';
    }else{
       throw console.error('somethingWentWrong');
    }
}

miniTest(z);

