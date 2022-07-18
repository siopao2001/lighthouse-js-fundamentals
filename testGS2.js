const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 15
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 12
    }
  ]
  
  const metric = 'redness'



const judgeVegetable = function (vegetables, metric) {
    let redValue = Math.max(vegetables[0][metric], vegetables[1][metric], vegetables[2][metric]);
    let NewValue =  ''
     for (let i = 0; i<vegetables.length; i++){
             if(vegetables[i][metric]===redValue){
                  NewValue = vegetables[i].submitter
             }
     }
     return NewValue
}

  console.log(judgeVegetable(vegetables, metric))   