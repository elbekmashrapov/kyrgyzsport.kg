// Данные товаров
const products = [
  // ========== Одежда ==========
  {
    id: 1,
    name: "Футболка Nike Dri-FIT",
    price: 2500,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9",
    sizes: ["S", "M", "L", "XL"],
    category: "Одежда",
    subcategory: "Футболки",
    brand: "Nike",
    rating: 4.7,
    description: "Дышащая футболка с технологией отвода влаги"
  },
  {
    id: 2,
    name: "Шорты Adidas Running",
    price: 1800,
    image: "https://inter-sport.s3.amazonaws.com/products/IY0704/black_black/IY0704-1_resized_800X800.png",
    sizes: ["S", "M", "L"],
    category: "Одежда",
    subcategory: "Шорты",
    brand: "Adidas",
    rating: 4.5,
    description: "Легкие шорты с карманом для мелочей"
  },
  {
    id: 3,
    name: "Легинсы Puma Train",
    price: 2200,
    image: "https://usmall.ru/image/000/00/00/3d7ed3fcff010c9c30050d973c461896.jpeg",
    sizes: ["XS", "S", "M", "L"],
    category: "Одежда",
    subcategory: "Легинсы",
    brand: "Puma",
    rating: 4.6,
    description: "Эластичные легинсы с высокой талией"
  },
  {
    id: 4,
    name: "Куртка The North Face",
    price: 4500,
    image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/933147s.jpg?im=Resize,width=750",
    sizes: ["M", "L", "XL"],
    category: "Одежда",
    subcategory: "Куртки",
    brand: "The North Face",
    rating: 4.8,
    description: "Ветрозащитная куртка с мембраной"
  },

  // ========== Обувь ==========
  {
    id: 5,
    name: "Кроссовки Nike Air Zoom",
    price: 6500,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    sizes: ["38", "39", "40", "41", "42", "43"],
    category: "Обувь",
    subcategory: "Кроссовки",
    brand: "Nike",
    rating: 4.9,
    description: "Беговые кроссовки с амортизацией"
  },
  {
    id: 6,
    name: "Бутсы Adidas Predator",
    price: 5500,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    sizes: ["39", "40", "41", "42", "43"],
    category: "Обувь",
    subcategory: "Бутсы",
    brand: "Adidas",
    rating: 4.7,
    description: "Футбольные бутсы для натурального газона"
  },

  // ========== Аксессуары ==========
  {
    id: 7,
    name: "Рюкзак Under Armour",
    price: 3200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    sizes: ["25 л"],
    category: "Аксессуары",
    subcategory: "Рюкзаки",
    brand: "Under Armour",
    rating: 4.4,
    description: "Водонепроницаемый рюкзак с USB-портом"
  },
  {
    id: 8,
    name: "Бутылка CamelBak",
    price: 1200,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    sizes: ["750 мл"],
    category: "Аксессуары",
    subcategory: "Бутылки",
    brand: "CamelBak",
    rating: 4.3,
    description: "Бутылка с клапаном для одной руки"
  },

  // ========== Экипировка ==========
  {
    id: 9,
    name: "Мяч Nike Premier League",
    price: 2800,
    image: "https://ir.ozone.ru/s3/multimedia-1-r/c1000/6997957803.jpg",
    sizes: ["Размер 5"],
    category: "Экипировка",
    subcategory: "Мячи",
    brand: "Nike",
    rating: 4.6,
    description: "Официальный мяч Английской Премьер-лиги"
  },
  {
    id: 10,
    name: "Гантели Reebok",
    price: 2990,
    image: "https://yogamarket.com.ua/wp-content/uploads/2020/04/ganteli-dlya-fitnesa-Reebok-1-3kg-nabor-RAWT-11156.jpg",
    sizes: ["5 кг", "10 кг"],
    category: "Экипировка",
    subcategory: "Гантели",
    brand: "Reebok",
    rating: 4.5,
    description: "Гантели с неопреновым покрытием"
  },
  {
    id: 11,
    name: "Коврик Liforme Yoga",
    price: 3500,
    image: "https://s.alicdn.com/@sc04/kf/H1a79e4b51c1948de9c4bb3e77bd46be51.jpg_300x300.jpg",
    sizes: ["183×61 см"],
    category: "Экипировка",
    subcategory: "Коврики",
    brand: "Liforme",
    rating: 4.8,
    description: "Коврик с разметкой для правильных асан"
  },
  {
    id: 12,
    name: "Скакалка Speed Rope",
    price: 800,
    image: "https://www.reebok.in.ua/image/cache/catalog/01012017/B92310_01-500x500.jpg",
    sizes: ["3 м"],
    category: "Экипировка",
    subcategory: "Скакалки",
    brand: "Reebok",
    rating: 4.2,
    description: "Скоростная скакалка для кроссфита"
  },

  // ========== Дополнительно ==========
  {
    id: 13,
    name: "Перчатки для фитнеса",
    price: 900,
    image: "https://sport-vsk.ru/upload/iblock/196/ak7yz87q7p5z3mxo2721qn4aw216h4w1.jpg",
    sizes: ["S", "M", "L"],
    category: "Экипировка",
    subcategory: "Перчатки",
    brand: "Harbinger",
    rating: 4.1,
    description: "Перчатки с защитой от мозолей"
  },
  {
    id: 14,
    name: "Спортивные носки Nike",
    price: 600,
    image: "https://images.prom.ua/4468337931_noski-muzhskie-nike.jpg",
    sizes: ["36-40", "41-45"],
    category: "Одежда",
    subcategory: "Носки",
    brand: "Nike",
    rating: 4.0,
    description: "Носки с усиленной пяткой и носком"
  },
  {
    id: 15,
    name: "Повязка на голову Adidas",
    price: 400,
    image: "https://cdnby.sportmaster.com/upload/mdm/media_content/resize/adc/418_557_70a6/108451110299.jpg",
    sizes: ["Универсальная"],
    category: "Аксессуары",
    subcategory: "Головные уборы",
    brand: "Adidas",
    rating: 3.9,
    description: "Термоповязка для занятий на холоде"
  }
];


// Глобальные переменные
let cart = {};
let cartCount = 0;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  setupMobileMenu();
  loadCart();
});

// Рендер товаров
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-id', product.id);
    productCard.setAttribute('data-name', product.name);
    productCard.setAttribute('data-price', product.price);
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">${product.price} сом</p>
        <div class="size-buttons">
          ${product.sizes.map(size => `<button class="size-btn" onclick="selectSize(this, '${size}')">${size}</button>`).join('')}
        </div>
        <button class="add-to-cart" onclick="addToCart(this)">В корзину</button>
      </div>
    `;
    
    productsGrid.appendChild(productCard);
  });
}

// Настройка мобильного меню
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
}

// Выбор размера
function selectSize(button, size) {
  // Удаляем класс selected у всех кнопок в этом товаре
  const sizeButtons = button.parentElement.querySelectorAll('.size-btn');
  sizeButtons.forEach(btn => btn.classList.remove('selected'));
  
  // Добавляем класс selected к выбранной кнопке
  button.classList.add('selected');
  
  // Сохраняем выбранный размер в data-атрибуте товара
  const product = button.closest('.product-card');
  product.setAttribute('data-size', size);
}

// Добавление в корзину
function addToCart(button) {
  const product = button.closest('.product-card');
  const id = product.getAttribute('data-id');
  const name = product.getAttribute('data-name');
  const price = parseFloat(product.getAttribute('data-price'));
  const size = product.getAttribute('data-size');

  // Проверка выбран ли размер
  if (!size) {
    showNotification('Пожалуйста, выберите размер');
    return;
  }

  // Добавляем товар в корзину
  if (cart[id]) {
    cart[id].quantity += 1;
  } else {
    cart[id] = { name, price, size, quantity: 1 };
  }

  cartCount++;
  updateCart();
  saveCart();
  showNotification(`Товар "${name}" добавлен в корзину`);
}

// Обновление корзины
function updateCart() {
  const cartCountElement = document.getElementById('cart-count');
  const cartItemsElement = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const discountAmountElement = document.getElementById('discount-amount');
  const finalPriceElement = document.getElementById('final-price');

  // Обновляем счетчик корзины
  cartCountElement.textContent = cartCount;

  // Рендерим товары в корзине
  let cartItemsHTML = '';
  let totalPrice = 0;

  for (const itemId in cart) {
    const item = cart[itemId];
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    cartItemsHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-details">Размер: ${item.size} | ${item.price} сом × ${item.quantity} = ${itemTotal} сом</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${itemId}')"><i class="fas fa-trash"></i></button>
      </div>
    `;
  }

  // Рассчитываем скидку и итоговую сумму
  const discount = totalPrice * 0.2;
  const finalPrice = totalPrice - discount;

  // Обновляем DOM
  cartItemsElement.innerHTML = cartItemsHTML || '<p>Ваша корзина пуста</p>';
  totalPriceElement.textContent = totalPrice.toFixed(2);
  discountAmountElement.textContent = discount.toFixed(2);
  finalPriceElement.textContent = finalPrice.toFixed(2);
}

// Удаление из корзины
function removeFromCart(itemId) {
  cartCount -= cart[itemId].quantity;
  delete cart[itemId];
  updateCart();
  saveCart();
}

// Очистка корзины
function clearCart() {
  cart = {};
  cartCount = 0;
  updateCart();
  saveCart();
  showNotification('Корзина очищена');
}

// Переключение видимости корзины
function toggleCart() {
  const cartPopup = document.getElementById('cartPopup');
  cartPopup.style.display = cartPopup.style.display === 'flex' ? 'none' : 'flex';
}

// Закрытие
// Закрытие корзины
function closeCart() {
  document.getElementById('cartPopup').style.display = 'none';
}

// Отображение уведомления
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

// Глобальная переменная для хранения заказов
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Оформление заказа
function checkout() {
  if (cartCount === 0) {
    showNotification('Корзина пуста! Добавьте товары');
    return;
  }
  const modal = document.getElementById('orderModal');
  modal.style.display = 'flex';
  
  // Очищаем форму при открытии
  document.getElementById('orderForm').reset();
}

// Закрытие модального окна
function closeModal() {
  document.getElementById('orderModal').style.display = 'none';
}

// Отправка заказа
function submitOrder() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const comment = document.getElementById('comment')?.value.trim() || '';

  // Валидация данных
  if (!name || !phone || !address) {
    showNotification('Заполните все обязательные поля!');
    return;
  }

  if (!/^\+?\d{10,15}$/.test(phone)) {
    showNotification('Введите корректный номер телефона');
    return;
  }

  // Создаем объект заказа
  const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    customer: { name, phone, address, payment, comment },
    items: { ...cart },
    total: calculateTotal(),
    status: 'Новый'
  };

  // Сохраняем заказ
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  // Показываем уведомление и очищаем корзину
  showNotification(`Заказ #${order.id} оформлен! Мы вам перезвоним.`);
  closeModal();
  clearCart();
  
  // Здесь можно добавить отправку на сервер (fetch/ajax)
}

// Расчет итоговой суммы
function calculateTotal() {
  let total = 0;
  for (const itemId in cart) {
    total += cart[itemId].price * cart[itemId].quantity;
  }
  return total * 0.8; // с учетом скидки 20%
}

// Показать уведомление
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

