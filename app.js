document.getElementById('jsonDropdown').addEventListener('change', function() {
    const fileName = this.value; // Отримуємо ім'я вибраного файлу
    fetch(fileName)
        .then(response => response.json())  // Завантажуємо JSON
        .then(data => {
            // Наповнюємо текстом контейнер
            document.getElementById('textContainer').innerHTML = data.text;
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});
