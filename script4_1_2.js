"use strict";

/* Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true*/


//s5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const post_new = new Post('May', 'hello', new Date(2019, 11, 25, 9, 30, 0));
console.log(post_new);
post_new.edit('welcome home');
console.log(post_new);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const attached_new = new AttachedPost('admin', 'you are banned', new Date(2020, 12, 3, 3, 14, 0));
console.log(attached_new);
attached_new.makeTextHighlighted();
attached_new.edit('you are not banned');
console.log(attached_new);

//s6
class Post_s6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post_s6_new = new Post_s6('Linda', 'bye', new Date(2021, 1, 13, 1, 14, 0));
console.log(post_s6_new);
post_s6_new.edit('gule-gule');
console.log(post_s6_new);


class AttachedPost_s6 extends Post_s6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached_s6_new = new AttachedPost_s6('admin', 'welcome to our chat', new Date());
console.log(attached_s6_new);
attached_s6_new.makeTextHighlighted();
attached_s6_new.edit('sorry, we are closed');
console.log(attached_s6_new);