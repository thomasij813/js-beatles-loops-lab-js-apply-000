// add solution here
function theBeatlesPlay(musicians, instruments) {
  const outputArr = []
  for (var i = 0; i < musicians.length; i++) {
    const musician = musicians[i]
    const instrument = instruments[i]
    outputArr.push(`${musician} plays ${instrument}`)
  }
  return outputArr
}