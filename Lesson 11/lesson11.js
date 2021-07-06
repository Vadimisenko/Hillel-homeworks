document.body.insertAdjacentHTML('afterbegin', `
    <h1>Isenko Vadim</h1>
    <p>Задача: создать страницу с элементами &lt;h1&gt;, &lt;p&gt;, &lt;input&gt; и &lt;button&gt;
    без использования html, а лишь используя методы объекта window.document.
    В заголовке &lt;h1&gt; должны быть ваше имя и фамилия, в &lt;p&gt; - текст задания,
    которое вы сейчас выполняете. В &lt;input&gt; можно что-то ввести,
    если нажать на кнопку то будет выведен alert c введенным в поле значением
    и после закрытия alert'а поле будет очищаться.</p>
    <input type="text" placeholder="Введите что-нибудь" id="input"></input>
    <button id="btn"></button>
`);

btn.addEventListener('click', () => {
    alert(input.value);
    input.value = '';
});