

const logo = document.querySelectorAll('#logoname path');

for (let i = 0; i<logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}