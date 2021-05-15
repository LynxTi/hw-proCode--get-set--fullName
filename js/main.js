const person = {
    firstname: 'Ivan',
    surname: 'Ivanov',
    patronymic: 'Ivanovich', 
    age: 25,

    get fullName () {
        return this.surname  + ' ' + this.firstname + ' ' + this.patronymic;
    }, 

    set fullName (nameUser) {
        const newName = nameUser.split(' ');

        this.surname = newName[0];
        this.firstname = newName[1];
        this.patronymic = newName[2];
    }
}

console.log(person.fullName);
person.fullName = 'Petrov Petr Petrovich';
console.log(person.fullName);