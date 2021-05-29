const name = prompt('Введите Ваше имя', ''),
    age = prompt('Введите Ваш возраст', '');

if (isNaN(age)) {
    alert('Введите возраст в годах');
} else {
    alert(`Привет ${name}, Ваш возраст ${age}`);
}

const newDiv = document.createElement('div');
newDiv.classList.add('message');
newDiv.textContent = `Привет ${name}, Ваш возраст ${age}`;
document.body.append(newDiv);