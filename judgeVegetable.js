function judgeVegetable(vegetables, metric) {
  let submitter;
  var maxMetric = vegetables[0][metric];
  for(let i = 0 ; i < vegetables.length; i++) {
    if(vegetables[i][metric] >= maxMetric) {
      maxMetric = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }

  return submitter;
}

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
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));