export async function randomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      if (randomNumber > 50) {
        resolve(randomNumber);
      } else {
        reject("Error: the number is to small");
      }
    }, 3000)
  })
} 
