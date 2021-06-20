
const options = [{
    value: 'title',
    label: 'Distance'
  },
  {
    value: 200000,
    label: '<= 200.000km'
  },
  {
    value: 200001,
    label: '> 200.000km'
  },
];

const tableData=[
  {
    id: 1,
    Driver:" Marcus Lundberg",
    Company:" Aris FC",
    Distance: 75044,
    Score: 52
  },
  {
    id: 2,
    Driver:"Marcus Mena Pacheco",
    Company:"Lio LTD",
    Distance: 129417,
    Score: 95
  },
  {
    id: 3,
    Driver:"Valentine Ichtertz",
    Company:"LOTS Group",
    Distance: 244656,
    Score: 67
  },
  {
    id: 4,
    Driver:"Niklas Rosén",
    Company:"Aris FC",
    Distance:  200000 ,
    Score: 78
  }     
]

export {options, tableData}