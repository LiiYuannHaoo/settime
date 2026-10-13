const startGomb = document.getElementById('startGomb');
const reflexGomb = document.getElementById('reflexGomb');

startGomb.addEventListener('click', () => {
    const random = Math.random() * 5 + 5;
    let kattido = undefined;
    setTimeout(() => {
        document.body.style.backgroundColor = 'green';
    }, random * 1000);});

reflexGomb.addEventListener('click', () => {
    if (kattido === undefined) {
        
    }
});