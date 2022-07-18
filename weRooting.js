const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 9
    }
  ]
  
  const metric = 'plumpness'




    let redValue = Math.max(vegetables[0][metric], vegetables[1][metric], vegetables[2][metric])

       for(let i = 0; i<vegetables.length; i++){
            if (vegetables[i][metric]===redValue) {
                console.log (vegetables[i].submitter)
            }
                    } 
    

