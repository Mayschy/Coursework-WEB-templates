document.addEventListener("DOMContentLoaded", function() {
    const sidebarNavigation = document.querySelector(".navigation");
    const dropdownContent = document.querySelector(".dropdown-content");
    const categoriesData = [
        { name: "Category 1", url: "category1.html", subcategories: ["Subcategory 1-1", "Subcategory 1-2"] },
        { name: "Category 2", url: "category2.html", subcategories: ["Subcategory 2-1", "Subcategory 2-2"] },
        { name: "Category 2", url: "category2.html", subcategories: ["Subcategory 2-1", "Subcategory 2-2"] },
        { name: "Category 3", url: "category3.html", subcategories: ["Subcategory 3-1", "Subcategory 3-2"] }
        
    ];

    // Функция для создания элемента списка
    function createListItem(item) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        listItem.appendChild(link);

        if (item.subcategories && item.subcategories.length > 0) {
            const subList = document.createElement("ul");
            item.subcategories.forEach(subcategory => {
                const subListItem = document.createElement("li");
                const subLink = document.createElement("a");
                subLink.href = item.url.replace(/(\.html)$/, "-" + subcategory.replace(/\s/g, "").toLowerCase() + "$1");
                subLink.textContent = subcategory;
                subListItem.appendChild(subLink);
                subList.appendChild(subListItem);
            });
            listItem.appendChild(subList);
        }

        return listItem;
    }

    // Создание списка в оглавлении, если оно есть
    const sidebarExists = sidebarNavigation !== null;
    if (sidebarExists) {
        categoriesData.forEach(category => {
            sidebarNavigation.appendChild(createListItem(category));
        });
    }

    // Создание списка в шапке
    categoriesData.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");
        const categoryLink = document.createElement("a");
        categoryLink.textContent = category.name;
        categoryLink.href = category.url; 
        categoryElement.appendChild(categoryLink);

        const subcategoriesDiv = document.createElement("div");
        subcategoriesDiv.classList.add("subcategories");
        category.subcategories.forEach(subcategory => {
            const subcategoryLink = document.createElement("a");
            subcategoryLink.textContent = subcategory;
            subcategoryLink.href = category.url.replace(/(\.html)$/, "-" + subcategory.replace(/\s/g, "").toLowerCase() + "$1");
            subcategoriesDiv.appendChild(subcategoryLink);
        });
        categoryElement.appendChild(subcategoriesDiv);

        dropdownContent.appendChild(categoryElement);
    });

    // Показывать и скрывать выпадающее меню в шапке при наведении
    dropdownContent.parentElement.addEventListener("mouseenter", function() {
        dropdownContent.style.display = "block";
    });

    dropdownContent.parentElement.addEventListener("mouseleave", function() {
        dropdownContent.style.display = "none";
    });
});


/*Кнопка разработичков и их окно*/
document.addEventListener("DOMContentLoaded", function() {
    const developersBtn = document.getElementById("developersBtn");
    const developersModal = document.getElementById("developersModal");
    const closeModalBtn = document.querySelector(".close-btn");

    developersBtn.addEventListener("click", function() {
        developersModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function() {
        developersModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === developersModal) {
            developersModal.style.display = "none";
        }
    });
});
 

/*АНимации провориа ленты */

const images1 = ['rep/image1.jpg', 'rep/image2.jpg', 'rep/image3.jpg', 'rep/image4.jpg', 'rep/image5.jpg', 'rep/image6.jpg', 'rep/image7.jpg', 'rep/image8.jpg', 'rep/image9.jpg'];
const images2 = ['rep/image10.png', 'rep/image11.png', 'rep/image12.png', 'rep/image13.png', 'rep/image14.png', 'rep/image15.png', 'rep/image16.png', 'rep/image17.png', 'rep/image18.png'];

// Индекс текущего изображения в каждой ленте
let currentIndex1 = 0;
let currentIndex2 = 0;

// Функция для отображения изображений в ленте
function showImages(carouselId, images, index) {
    const carousel = document.getElementById(carouselId);
    carousel.innerHTML = '';
    for (let i = index; i < index + 3; i++) {
        if (i < images.length) {
            const img = document.createElement('img');
            img.src = images[i];
            carousel.appendChild(img);
        }
    }
}

// Инициализация лент
showImages('carousel1', images1, currentIndex1);
showImages('carousel2', images2, currentIndex2);

// Обработчики событий для кнопок прокрутки
document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const carouselId = this.parentNode.previousElementSibling.id;
        const images = carouselId === 'carousel1' ? images1 : images2;
        let currentIndex = carouselId === 'carousel1' ? currentIndex1 : currentIndex2;
        if (currentIndex + 3 < images.length) {
            currentIndex += 3;
        } else {
            currentIndex = 0; 
        }
        showImages(carouselId, images, currentIndex);
        if (carouselId === 'carousel1') {
            currentIndex1 = currentIndex;
        } else {
            currentIndex2 = currentIndex;
        }
        document.getElementById(carouselId).classList.add('slide-next');
        setTimeout(() => {
            document.getElementById(carouselId).classList.remove('slide-next');
        }, 500); // Время анимации в миллисекундах
    });
});

document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const carouselId = this.parentNode.previousElementSibling.id;
        const images = carouselId === 'carousel1' ? images1 : images2;
        let currentIndex = carouselId === 'carousel1' ? currentIndex1 : currentIndex2;
        if (currentIndex - 3 >= 0) {
            currentIndex -= 3;
        } else {
            currentIndex = images.length - 3; 
        }
        showImages(carouselId, images, currentIndex);
        if (carouselId === 'carousel1') {
            currentIndex1 = currentIndex;
        } else {
            currentIndex2 = currentIndex;
        }
        document.getElementById(carouselId).classList.add('slide-prev');
        setTimeout(() => {
            document.getElementById(carouselId).classList.remove('slide-prev');
        }, 500); // Время анимации в миллисекундах
    });
});

// Функция для отображения изображений в ленте
function showImages(carouselId, images, index) {
    const carousel = document.getElementById(carouselId);
    carousel.innerHTML = '';
    for (let i = index; i < index + 3; i++) {
        if (i < images.length) {
            const img = document.createElement('img');
            img.src = images[i];
            carousel.appendChild(img);
        }
    }
}

