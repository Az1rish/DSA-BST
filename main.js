const BinarySearchTree = require('./bst');

function buildNumbers() {
    let numbers = new BinarySearchTree();

    numbers.insert(3, 3);
    numbers.insert(1, 1);
    numbers.insert(4, 4);
    numbers.insert(6, 6);
    numbers.insert(9, 9);
    numbers.insert(2, 2);
    numbers.insert(5, 5);
    numbers.insert(7, 7);

    return numbers;
}

// console.log(buildNumbers());

function buildLetters() {
    let letters = new BinarySearchTree();

    letters.insert('E', 'E');
    letters.insert('A', 'A');
    letters.insert('S', 'S');
    letters.insert('Y', 'Y');
    letters.insert('Q', 'Q');
    letters.insert('U', 'U');
    letters.insert('E', 'E');
    letters.insert('S', 'S');
    letters.insert('T', 'T');
    letters.insert('I', 'I');
    letters.insert('O', 'O');
    letters.insert('N', 'N');

    return letters;
}

// console.log(buildLetters().right);

function tree(t){
    if(!t){
        return 0;
    }
    console.log(tree(t.left) + t.value + tree(t.right))
}

tree(buildLetters());