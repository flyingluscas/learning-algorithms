function fizzBuzz (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log('Fizz Buzz')
      continue
    }

    if (i % 3 === 0) {
      console.log('Fizz')
      continue
    }

    if (i % 5 === 0) {
      console.log('Buzz')
      continue
    }

    console.log(i)
  }
}

fizzBuzz(20)
