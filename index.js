const lodash = require('lodash');

const array = [1, 2, 3, 4, 5, 2, 7];

const arrayUnico = lodash.uniq(array);

console.log(arrayUnico);