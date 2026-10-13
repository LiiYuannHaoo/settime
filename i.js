const startGomb = document.getElementById('startGomb');
const reflexGomb = document.getElementById('reflexGomb');
const eredmeny = document.getElementById('eredmeny');



startGomb.addEventListener('click', () => {
    startGomb.disabled = true;
    const random = Math.random() * 5 + 5;
    let kattido = undefined;

    const reflexTimeout = setTimeout(() => {
        document.body.style.backgroundColor = 'green';
        kattido = new Date();
    }, random * 1000);});

reflexGomb.addEventListener('click', () => {
    if (kattido === undefined) {
        eredmeny.textContent = 'Túl korán';
        clearTimeout(reflexTimeout);
    }else {
        const elteltido = new Date() - kattido;
        eredmeny.textContent = `Idő: ${elteltido} ms`;
    }
});