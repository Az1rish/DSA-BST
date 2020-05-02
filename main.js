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
    numbers.insert(21, 21);
    numbers.insert(13, 13);
    numbers.insert(43, 43);
    numbers.insert(66, 66);
    numbers.insert(997, 997);
    numbers.insert(23, 23);
    numbers.insert(58, 58);
    numbers.insert(77, 77);
    numbers.insert(68, 68);
    // numbers.remove(3);
    // numbers.insert(3, 3);
    // numbers.insert(3, 3);

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
    return tree(t.left) + t.value + tree(t.right)
}

// console.log(tree(buildNumbers()));

function totalNodes(tree) {
    if(!tree) {
        return 0;
    }
    return totalNodes(tree.left) + 1 + totalNodes(tree.right);
}

// console.log(totalNodes(buildNumbers()));

function height(tree, count = 0) { 
    if (!tree.right && !tree.left) {
        return count + 1;
    } else if (tree.right && !tree.left) {
        return height(tree.right, count + 1)
    } else if (!tree.right && tree.left) {
        return height(tree.left, count + 1)
    } else if (tree.right && tree.left) {
        return height(tree.right, count + 1) > height(tree.left, count + 1)
        ? height(tree.right, count + 1)
        : height(tree.left, count + 1);
    }
}

// console.log(height(buildNumbers()));
// console.log(height(buildLetters()));

function isBST(tree) { 
    // console.log(tree);
    function helper(tree, minRange, maxRange) {
        if (tree == null) {
            return true;
        }
        if (tree.key < minRange || tree.key > maxRange) {
            return false;
        }
        return helper(tree.left, minRange, tree.key - 1) && helper(tree.right, tree.key + 1, maxRange);
    }

    if (helper(tree, Number.MIN_VALUE, Number.MAX_VALUE)) {
        return true; 
    }
    return false;
}

console.log(isBST(buildNumbers()));

function nthLargest(tree, n, count = 0) {
    if (tree == null || count > n) {
        return;
    }
    nthLargest(tree.right, n, count);
    count++;
    console.log(count);
    if (count == n) {
        return tree.key;
    }
    nthLargest(tree.left, n, count);
}

console.log(nthLargest(buildNumbers(), 3));