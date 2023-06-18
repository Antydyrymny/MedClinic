// function getTop3(score) {
//     return score
//         .sort((a, b) => a - b)
//         .reverse()
//         .slice(0, 3);
// }
// console.log(getTop3([1, 10, 5, 1, 12, 8]));

// function replaceCurrencyNameWithSymbol(str, currencyName, currencySymbol) {
//     const regex = new RegExp(currencyName, 'g');
//     return str.replace(regex, currencySymbol);
// }

// // function isNotNull(el: number | null): el is number {
// //   return el !== null;
// // }

// const obj = { n: 1, s: 2 };
// Object.defineProperty(obj, 'n', { enumerable: false });
// console.log({ ...obj });

// // Object.prototype.toString = function () {
// //     return '1';
// // };

// console.log(Object.freeze({}));
// const a = Object.freeze({});
// a.a = 2;
// console.log(a);

async function requestWithRetry(request, attempts = 1) {
    let res, err;
    for (let i = 0; i < attempts; i++) {
        try {
            res = await request();
            return res;
        } catch (e) {
            err = e;
        }
    }
    return Promise.reject(err);
}

async function requestWithTimeout(request, timeout) {
    return new Promise((resolve, reject) => {
        request().then(resolve);
        setTimeout(() => {
            reject();
        }, timeout);
    });
}

// page 1-based
// function getParticipants(arr, track, size, page) {
//    const arr2 = arr.filter(i => i.track === track);
//     for (let i = 0; i < arr2.length; i++) {
//      for (let j = i + 1; j < arr2.length; j++) {
//        if (arr2[i].name > arr2[j].name) {
//          const temp = arr2[i];
//          arr2[i] = arr2[j];
//          arr2[j] = temp;
//        }
//      }
//    }

//    const arr3 = [];

//    const first = size * (page - 1);
//    for (let i = 0; i < arr2.length; i++) {
//        if (first <= i && i < first + size) {
//            arr3.push(arr2[i]);
//        }
//    }

//    return arr3;
//  }

function excludePaths(obj, paths) {
    const newObj = {};

    function dfs(src, target, prefix) {
        Object.keys(src).forEach((prop) => {
            const path = prefix ? prefix + '.' + prop : prop;
            if (!paths.includes(path)) {
                const value = src[path];
                if (typeof value === 'object' && value !== null) {
                    target[path] = {};
                    dfs(value, target[path], path);
                } else {
                    target[path] = value;
                }
            }
        });
    }
    dfs(obj, newObj, '');
    return newObj;
}

// function excludePaths(obj, paths) {
//   const newObj = {};

//   function dfs(src, dst, prefix) {
//     Object.keys(src).forEach(key => {
//       const path = prefix ? `${prefix}.${key}` : key;
//       if (!paths.includes(path)) {
//         const value = src[key];
//         if (typeof value === 'object' && value !== null) {
//           dst[key] = {};
//           dfs(value, dst[key], path);
//         } else {
//           dst[key] = value;
//         }
//       }
//     });
//   }

//   dfs(obj, newObj, '');

//   return newObj;
// }
// console.log(Math.pow(-3, 2));

// function countShips(sea) {
//     let ships = 0;
//     for (let y = 0; y < sea.length; y++) {
//         for (let x = 0; x < sea[0].length; x++) {
//             if (sea[y][x] === 0) continue;
//             drownShip(y, x);
//             ships++;
//         }
//     }
//     return ships;

//     function drownShip(y, x) {
//         sea[y][x] = 0;
//         if (x < sea[0].length - 1 && sea[y][x + 1] === 1) drownShip(y, x + 1);
//         if (y < sea.length - 1 && sea[y + 1][x] === 1) drownShip(y + 1, x);
//     }
// }

function countShips2(sea) {
    const seaSize = Math.sqrt(sea.length);
    let ships = 0;
    for (let i = 0; i < sea.length; i++) {
        if (sea[i] === 0) continue;
        drownShip(i);
        ships++;
    }
    return ships;

    function drownShip(i) {
        sea[i] = 0;
        const y = Math.floor(i / seaSize);
        const x = i % seaSize;
        if (y < seaSize - 1 && sea[i + seaSize] === 1) drownShip(i + seaSize);
        if (x < seaSize - 1 && sea[i + 1] === 1) drownShip(i + 1);
    }
}

// const a = [
//     [0, 1, 1, 0],
//     [1, 0, 0, 1],
//     [0, 0, 0, 1],
//     [0, 0, 0, 0],
// ];

const b = [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
const c = [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0];

console.log(countShips2(c));
