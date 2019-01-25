function harmlessRansomNote (noteText, magazineText) {
  const noteArray = noteText.split(' ')
  const magazineArray = magazineText.split(' ')
  const magazineObject = {}
  let noteIsPossible = true

  magazineArray.forEach((word) => {
    if (!magazineObject[word]) {
      magazineObject[word] = 0
    }

    magazineObject[word]++
  })

  noteArray.forEach((word) => {
    if (magazineObject[word]) {
      magazineObject[word]--
    } else {
      noteIsPossible = false
    }
  })

  return noteIsPossible
}

const isPossibleNote = harmlessRansomNote(
  'this is a secret note for you from a secret admirer',
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
)

console.log(isPossibleNote)
