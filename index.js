// add solution here
function theBeatlesPlay(musicians, instruments) {
  const outputArr = []
  for (var i = 0; i < musicians.length; i++) {
    const musician = musician[i]
    const instrument = instrument[i]
    outputArr.push(`${musician} plays ${instrument}`)
  }
  return outputArr
}