// add solution here
function theBeatlesPlay(musicians, instruments) {
  return musicians.map(function(musician, i) {
    return `${musician} plays ${instruments[i]}`
  })
}