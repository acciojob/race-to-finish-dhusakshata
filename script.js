window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPromise() {
  const randomTime = getRandomTime(1000, 5000); // Time in milliseconds between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
}

for (let i = 0; i < 5; i++) {
  window.promises.push(createPromise());
}

Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `The first promise resolved with: ${result} milliseconds.`;
  })
  .catch((error) => {
    // This block will not be executed since Promise.any() will resolve with the first fulfilled promise.
    console.error(error);
  });

