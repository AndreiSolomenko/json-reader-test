function loadJSON(fileName) {
    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            document.getElementById('textContainer').innerHTML = data.text;
        })
        .catch(error => console.error('Error loading the JSON file:', error));
}

// Завантажуємо перший файл при відкритті сторінки
document.addEventListener("DOMContentLoaded", function() {
    const defaultFile = document.getElementById('jsonDropdown').value;
    loadJSON(defaultFile);
});

// Обробник подій для зміни селекта
document.getElementById('jsonDropdown').addEventListener('change', function() {
    loadJSON(this.value);
});
