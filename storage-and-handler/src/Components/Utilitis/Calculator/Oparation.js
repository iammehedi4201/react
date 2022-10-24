const add =(valueOne,valueTwo) =>{

      const result = valueOne+valueTwo;

      return result;

}

const multipication=(valueOne,valueTwo)=>{

     
    const result = valueOne+valueTwo;

    return result;
}

const sumOfTotal =(arrOfContainer)=>{

    const sumOfElement =(previousValue,currentValue)=>{

        const total = previousValue+currentValue.Price;

        return total;

    }

      const total = arrOfContainer.reduce(sumOfElement,0);

      return total;

}


export {
    add,
    multipication,
    sumOfTotal as getTotal
           
 }


