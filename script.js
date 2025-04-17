document.addEventListener('DOMContentLoaded', function() {
    const brandsGrid = document.querySelector('.brands-grid');
    const toggleBtn = document.querySelector('.toggle-btn');
    let isExpanded = false;
    
    // Инициализация слайдера для мобильных устройств
    function initSlider() {
        if (window.innerWidth <= 768) {
            $('.brands-grid').slick({
                dots: false,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    }
    
    // Проверка при загрузке
    initSlider();
    
    // Обработчик кнопки показать/скрыть
    toggleBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            brandsGrid.classList.remove('hidden-items');
            toggleBtn.textContent = 'Скрыть';
        } else {
            brandsGrid.classList.add('hidden-items');
            toggleBtn.textContent = 'Показать все';
        }
    });
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && !$('.brands-grid').hasClass('slick-initialized')) {
            initSlider();
        } else if (window.innerWidth > 768 && $('.brands-grid').hasClass('slick-initialized')) {
            $('.brands-grid').slick('unslick');
        }
    });
});