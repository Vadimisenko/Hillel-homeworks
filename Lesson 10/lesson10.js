class TodoItem {
    constructor (id, header, descr, done) {
        this.id = id;
        this.header = header;
        this.descr = descr;
        this.done = done;
    }
}

class TodoList {
    constructor () {
    }

    items = [];

    completeAll() {
        this.items.forEach(elem => elem.done = true); 
    }

    add() {
        const id = +prompt('Введите id задачи', '');
        const header = prompt('Введите заголовок задачи', '');
        const descr = prompt('Введите описание задачи', '');
        let done = prompt('Задача выполнена? (да, нет)', '');
            if (done === 'да') {
                done = true;
            } else {
                done = false;
            }

        const item = new TodoItem (id, header, descr, done)
        this.items.push(item);
    }
}

const list1 = new TodoList;
list1.add();
list1.add();
list1.add();

console.log(list1.items);
