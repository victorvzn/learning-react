function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function lottery () {
  const result = []

  while (result.length < 6) {
    const number = randomInRange(1, 45)

    if (!result.includes(number)) {
      result.push(number)
    }
  }

  return result
}

lottery()
