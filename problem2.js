//what is a called back function?
//a function passed into another funciton asnan argument

//what is a callback hell?
//multiple callbacks are nested on top of eachother
//difficult to understand and maintain

//how do they occur?
//occurs when we have multiple operations that depends on eachother

acynOp1(function(result1)){

    acynOp2(function(result2)){

        acynOp3(function(result3)){

            acynOp4(function(result4)){

                acynOp5(function(result5)){


                });
                });
            });
        });
    });

    acynOp1()
    .then(function(result1){
return asyncOp2();
    })
    acynOp1()
    .then(function(result2){
return asyncOp3();
    })
    acynOp1()
    .then(function(result3){
return asyncOp4();
    })
    acynOp1()
    .then(function(result4){
return asyncOp5();
    })
    acynOp1()
    .then(function(result5){
return asyncOp5();
    })
    
    .catch(function(error){
});
