/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
    const minMaxMultiplyResult = Math.min(minFirst, minSecond) * Math.max(maxFirst, maxSecond);
    return minMaxMultiplyResult;
    console.log(minMaxMultiplyResult);
};


/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {
    const square = Math.PI * Math.pow(radius, 2);
    return square;
    console.log(getSquareOfCircle);
};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {
    const value1 = Math.round(number * Math.pow(10, accuracy));
    const value2 = Math.pow(10, -accuracy);
    const fixedValue = +(value1 * value2).toFixed(accuracy);
    return fixedValue;
    console.log(fixedValue);
};

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */

export const getFlooroCeil = (number) => {
    if (Math.trunc(number % 2) === 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
};

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {
    let randomNumb = from + Math.random() * (to + 1 - from);
    return Math.round(randomNumb);
};


