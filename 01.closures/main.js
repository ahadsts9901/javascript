const spend = (personName) =>{
    let coins = 3
    return () =>{
        coins--
        if(coins){
            console.log(`${personName} has ${coins} coins left`);
        }else{
            console.log(`${personName} is out of coins`);
        }
    }
}

const son = spend("son")
const daughter = spend("daughter")

son()
son()
daughter()
son()
daughter()
daughter()