const slider = document.querySelector('.slider');
let sliderItems; // Объявляем переменную вне функции
let currentSlide = 0;
const slidesToShow = 3;


// Функция для создания элементов слайдера динамически
function createSliderItems() {
    const items = [
        { img: 'img/tank.png', title: 'Военная техника', desc: 'Мощные и технологичные машины, предназначенные для ведения боевых действий и обеспечения безопасности.' },
        { img: 'img/tramvay.jpg', title: 'Железнодорожный транспорт', desc: 'Система передвижения, обеспечивающая эффективную и масштабную перевозку пассажиров. Включает в себя локомотивы, вагоны, пути, станции и всю необходимую инфраструктуру.' },
        { img: 'img/vagon.jpg', title: 'Вагоны', desc: 'Специализированные транспортные единицы, используемые в железнодорожных перевозках. Разнообразие типов вагонов – от пассажирских до грузовых.' },
        { img: 'img/chp.jpeg', title: 'Промышленное оборудование', desc: 'Машины и инструменты охватывает широкий спектр, от станков и конвейеров до сложных автоматизированных систем управления.' },
        { img: 'img/artil.jpg', title: 'Артиллерия', desc: 'Системы вооружения дальнего действия, использующие различные виды снарядов для поражения целей.' },
        { img: 'img/train.png', title: 'Локомотивы', desc: 'Мощные двигательные установки, тянущие железнодорожные составы. Различаются по типу тяги (электрическая, тепловозная, дизельная).' }
    ];

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('slider-item');
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        slider.appendChild(itemDiv);
    });
    // Обновляем sliderItems после создания элементов
    updateSliderItems();
    updateSliderWidth();
}


// Функция обновления sliderItems
function updateSliderItems() {
  sliderItems = document.querySelectorAll('.slider-item');
}


// Функция обновления ширины слайдера
function updateSliderWidth() {
    const totalWidth = sliderItems.length * sliderItems[0].offsetWidth + (sliderItems.length - 1) * 20; // Добавил отступ между слайдами
    slider.style.width = `${totalWidth}px`;
}


// Функция переключения слайдов
function switchSlide(direction) {
    currentSlide = (currentSlide + direction + sliderItems.length) % sliderItems.length;
    const translateX = -currentSlide * sliderItems[0].offsetWidth;
    slider.style.transform = `translateX(${translateX}px)`;
}

function smoothScrollToTarget(event) {
    event.preventDefault(); // Предотвратить стандартное поведение ссылки
    const target = document.getElementById('about');
    target.scrollIntoView({ behavior: 'smooth' });
  }


// Слушатели событий для кнопок навигации
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


prevBtn.addEventListener('click', () => switchSlide(-1));
nextBtn.addEventListener('click', () => switchSlide(1));


// Инициализация
createSliderItems();

// Обработка изменения размера окна
window.addEventListener('resize', updateSliderWidth);


