const games = [
  '662fbb2e4ed18160c3708977',
  '662fbb9fbb661a52e7615b0a',
  '662fbb6248a0d5818e77d1ba',
  '662fbb2e4ed18160c3708977',
  '662fbb2e4ed18160c3708977',
  '662fbb2e4ed18160c3708977',
  '662fbb2e4ed18160c3708977'
]
const videogames = ['662fbb6248a0d5818e77d1ba', '662fbb2e4ed18160c3708977']
let mergedGames = [...games, ...videogames]
// const filterGames = mergedGames.filter(
//   (value, index) => mergedGames.indexOf(value) === index
// )
// console.log(filterGames)

const filterGames = [...new Set(mergedGames)]

console.log(filterGames)
