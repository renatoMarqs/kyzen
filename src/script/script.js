document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    // Função para mostrar um slide específico e destacar o ponto correspondente
    function showSlide(index) {
        // Remove a classe 'active' de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Adiciona a classe 'active' ao slide e dot correspondentes
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Inicializa o carrossel mostrando o primeiro slide
    showSlide(currentIndex);

    // Adiciona o evento de clique para os pontos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Opcional: Adiciona navegação automática
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000); // Muda de slide a cada 5 segundos
});