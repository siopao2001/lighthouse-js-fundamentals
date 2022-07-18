let  smartGarbage = function (trash, bin) {
  
  if (trash === "waste"){
     bin.waste = bin.waste + 1;
    return bin
  }else if(trash === "recycling") {
    bin.recycling = bin.recycling + 1;
       return bin
     }else if(trash === "compost") {
    bin.compost = bin.compost + 1;
    return bin
  }
   
 
        
  
     
}

console.log(smartGarbage("recycling",{waste: 4, recycling: 2, compost: 5}))