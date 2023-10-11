// 1)

// let k = +prompt('k ning qiymatini kiriting');
// console.log(typeof k);
// let n = 10;

// for (let i = 0; i < n; i++) {
//     console.log(k);
// }

// 2)

// let a = +prompt('a ning qiymatini kiritish');
// let b = +prompt('b ning qiymatini kiritish');
// let count = 0;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//         count += 1
//     }
//     console.log('ularning soni ' + count);
// } else {
//     alert('a ning qiymati b ning qiymatidan katta bo\'lishi mumkin emas')
// }

// 3)

// let a = +prompt("a ning qiymatini kiriting");
// let b = +prompt("b sni qiymatini kiriting");
// let count = 0;
// if (a < b) {
//   for (let i = b -1; i > a; i--) {
//     console.log(i);
//     count += 1
//   }
//   console.log('soni: '+ count );
// }
// else {
//    alert(' you made a mistake')
// }

// 4)

// let narx = +prompt('konfetning narxini kiriting')

// for (let i = 1; i <= 10; i++) {
//    let res =  i * narx
//    console.log(i + ' kilogram konfet narxi', res);
// }

// 5)

// let narx = +prompt('konfetning narxini kiriting')

// for (let i = 0.1; i <= 1; i += 0.1) {
//    let res =  i * narx
//    console.log(i + ' kilogram konfet narxi', res);
// }


// 6)

// let narx = +prompt('konfetning narxini kiriting')

// for (let i = 1; i <= 2; i += 0.2) {
//    let res =  i * narx
//    console.log(i + ' kilogram konfet narxi', res);
// }

// 7)

// let a = +prompt('a ning qiymatini kiritish');
// let b = +prompt('b ning qiymatini kiritish');
// let count = 0;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         count += i
//     }
//     console.log('ularning yigindisi ' + count);
// } else {
//     alert('a ning qiymati b ning qiymatidan katta bo\'lishi mumkin emas')
// }


// 8)

// let a = +prompt('a ning qiymatini kiritish');
// let b = +prompt('b ning qiymatini kiritish');
// let count = 1;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         count *= i
//     }
//     console.log('ularning kopaytmasi ' + count);
// } else {
//     alert('a ning qiymati b ning qiymatidan katta bo\'lishi mumkin emas')
// }

// 9)

// let a = +prompt('a ning qiymatini kiritish');
// let b = +prompt('b ning qiymatini kiritish');
// let count = 0;
// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         count += i*i
//     }
//     console.log('ularning kvadratlari yigindisi ' + count);
// } else {
//     alert('a ning qiymati b ning qiymatidan katta bo\'lishi mumkin emas')
// }


// 10)

// let n = +prompt(' sonni kiriting');
// let s = 0;
// let count = 0
// if ( n > 0 ){

//    for( let i=0; i<n; i++){
//       s = 1/(1+i)
//       count += s;
//    }
//    console.log(count);
// }

// 11)

// let n = +prompt(' sonni kiriting');
// let s = 0;
// let count = 0
// if ( n > 0 ){

//    for( let i=0; i<n; i++){
//       s = n*n+(n+1+i)*(n+1+i)
//       count += s;
//    }
//    console.log(count);
// }

// 12)

// let n = +prompt('sonni kiriting');
// let s = 0;
// let count = 1;
// if ( n > 0){
//      for ( let i=1; i<=n; i++){
//         s= 1+i/10
//        count *= s;
//      }
//      console.log(count);
// }
