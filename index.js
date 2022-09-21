function receivesAFunction(callback){
    callback()
    return "The callback function passed to the argument has been called"
}

function returnsANamedFunction(){
    return function testFunction(){
        console.log('this is the named function that gets returned from returnsANamedFunction')
    }
}

function returnsAnAnonymousFunction(){
    return function(){}
        
    
}