class TodoList {
    constructor () {
    }

    items = [];

    completeAll() {
        this.items.forEach(elem => elem.done = true); 
    }

    add() {
        let todoItem = {};
        todoItem.id = +prompt('Введите id задачи', '');
        todoItem.header = prompt('Введите заголовок задачи', '');
        todoItem.descr = prompt('Введите описание задачи', '');
        let isDone = prompt('Задача выполнена? (да, нет)', '');
            if (isDone === 'да') {
                todoItem.done = true;
            } else {
                todoItem.done = false;
            }
        this.items.push(todoItem);
    }
}

list1 = new TodoList()
list1.add();
list1.add();
list1.add();

console.log(list1.items);