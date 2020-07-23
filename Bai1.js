array = [1, 25, 7, -7, -3, 12, -22, 0];

function sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function abs(value) {
    return value < 0 ? -value : value;
}

function sortWithAbs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (abs(array[j]) > abs(array[i]) ||
                ((abs(array[j]) === abs(array[i])) && array[i] < 0)) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function sortPositive(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((array[j] < 0 && array[i] >= 0)
                || (array[j] > array[i] && array[i] >= 0 && array[j] >= 0)
                || (array[j] > array[i] && array[i] < 0 && array[j] < 0)) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(sort(array));
console.log(sortWithAbs(array));
console.log(sortPositive(array));