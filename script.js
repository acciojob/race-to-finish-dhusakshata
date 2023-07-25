window.promises = [];

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

// Adding promises to the window.promises array
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();
const promise4 = createPromise();
const promise5 = createPromise();

window.promises.push(promise1);
window.promises.push(promise2);
window.promises.push(promise3);
window.promises.push(promise4);
window.promises.push(promise5);

Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `The first promise resolved with: ${result} milliseconds.`;
  })
  .catch((error) => {
    // This block will not be executed since Promise.any() will resolve with the first fulfilled promise.
    console.error(error);
  });


