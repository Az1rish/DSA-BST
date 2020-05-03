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

// console.log(isBST(buildNumbers()));

function nthLargest(tree, n, count = 0) {
    if (tree == null || count >= n) {
        return;
    }
    nthLargest(tree.right, n, count);
    count++;
    if (count == n) {
        console.log(tree.key) ;
    }
    nthLargest(tree.left, n, count);
}
// nthLargest(buildNumbers(), 3);

function isBalanced(tree) {
    function minDepth(tree, count = 0) {
        if (tree === null) {
            return 0;
        }
        if (!tree.right && !tree.left) {
            return count + 1;
        } else if (tree.right && !tree.left) {
            return height(tree.right, count + 1)
        } else if (!tree.right && tree.left) {
            return height(tree.left, count + 1)
        } else if (tree.right && tree.left) {
            return height(tree.right, count + 1) > height(tree.left, count + 1)
            ? height(tree.left, count + 1)
            : height(tree.right, count + 1);
        }
    }
    function maxDepth(tree, count = 0) {
        if (tree === null) {
            return 0;
        }
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

    // console.log('min', minDepth(tree), 'max', maxDepth(tree));
    if (maxDepth(tree) - minDepth(tree) <= 1) {
        return true;
    } else {
        return false;
    }
}

// console.log(isBalanced(buildLetters()));

function mathHeight(tree) {
    if (!tree) {
        return 0;
    }
    return 1 + Math.max(mathHeight(tree.left), mathHeight(tree.right));
}

// console.log(mathHeight(buildNumbers()));

function createSameBST(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) {
        return false;
    }
    if (arr1.length === 0) {
        return true;
    }

    let lessThanArr1 = [];
    let greaterThanArr1 = [];
    let lessThanArr2 = [];
    let greaterThanArr2 = [];

    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] < arr1[0]) {
            lessThanArr1.push(arr1[i]);
        } else {
            greaterThanArr1.push(arr1[i]);
        }
    }

    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] < arr2[0]) {
            lessThanArr2.push(arr2[i]);
        } else {
            greaterThanArr2.push(arr2[i]);
        }
    }
    return createSameBST(lessThanArr1, lessThanArr2) && createSameBST(greaterThanArr1, greaterThanArr2);
}

console.log(createSameBST([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));
