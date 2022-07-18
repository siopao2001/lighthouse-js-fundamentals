function merge (array1, array2){
    
    let array3 = array1.concat(array2)
    return array3.sort((a,b)=>a-b)
     
}

console.log(merge([10, 1, 8], [2, 7, 6]))