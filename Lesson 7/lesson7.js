function createTeam () {
    const newTeam = {};
    newTeam.country = prompt('Страна сборной по футболу?', '');
    newTeam.playerscount = prompt('Количество игроков?', '');
    newTeam.coach = prompt('Главный тренер?', '');
    newTeam.goalkeeper = prompt('Вратарь?', '');
    newTeam.formcolor = prompt('Цвет формы?', '');
    return newTeam;
}

const teams = [];
const teamcount = +prompt('Сколько сборных на турнире?', '');
for (let i = 0; i < teamcount; i++) {
    teams.push(createTeam());
}
console.log(teams);