const contadores = document.querySelectorAll('.numero-estatistica');
const duracao = 2000; 

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            iniciarContagem(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); 

function iniciarContagem(elemento) {
    const valorFinal = parseInt(elemento.getAttribute('data-final'));
    let valorAtual = 0;

    const passo = valorFinal / (duracao / 10);

    const timer = setInterval(() => {
        valorAtual += passo;

        if (valorAtual >= valorFinal) {
            clearInterval(timer);
            valorAtual = valorFinal;
        }
        
        elemento.textContent = Math.floor(valorAtual).toLocaleString('en-US'); 

    }, 10);
}

contadores.forEach(contador => {
    observer.observe(contador);
})


