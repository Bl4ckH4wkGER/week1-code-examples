
class Book {
    constructor(title) {
        // console.log('initial object', this);
        this.title = title;
        // console.log('after book constructor', this);
    }

    printTitle() {
        console.log(this.title);
    }

    static sameTitles(b1, b2) {
        return b1.title === b2.title;
    }
}

class ComicBook extends Book {
    constructor(title, issueNumber) {
        super(title);
        this.issueNumber = issueNumber;
        // console.log('final object', this);
    }
}

const spiderMan = new ComicBook('Spiderman', 1);
spiderMan.printTitle();

// const habit = new Book('The Power of Habit');
// const becoming = new Book('Becoming');

// habit.printTitle();
// becoming.printTitle();

// console.log(
//     Book.sameTitles(habit, becoming)
// );