// Code your solution here
const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, input) {
    
    const results = drivers.filter(driver => driver.toLowerCase() === input.toLowerCase())
    return (results)
}

function fuzzyMatch(drivers, input) {
const results = drivers.filter(driver => driver[0] === input[0] )
return (results)
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, input) {
const results = drivers.filter(driver => driver.name === input)
return (results)
}

matchName(drivers, "Bobby")
