//// 1
// function summFn (...num) {
//     const arr = [...num]; 
//     console.log(arr);
//     const sum = arr.reduce((total, amount) => total + amount);
//     console.log(sum)
//   }
// summFn(14,8,20,210)

////2
// function cylinder (r,h) {
//   const volume = Math.PI*r*r*h;
//   const area = (2*Math.PI*r*h)+(2*Math.PI*r);
//   console.log('Volume: ', volume.toFixed(2), ', ', 'area: ', area.toFixed(2))
// }
// cylinder(1,4)

////3
// function odd (start, finish) {
//     const arr = [];
//     for (let i = start; i <= finish; i++) {
//         if (i % 2 == 1) {
//             arr.push(i)
//         }
//     }
//     console.log(arr.join(' '))
// }
// odd(0,12)

////4 
// function reverse (str) {
//     let str2 = [];
//     for (let i = 0; i < str.length; i++) { 
//     str2 += str [(str.length - 1) - i]
//     } 
//     console.log (str2)
// }
// const str = prompt ('Введите строку: ', '');
// reverse(str)

////5



////8
// function backToFront (str, num) {
//     const part = str.slice(-num); //console.log(part);
//     const str2 = part.concat(str, part);
//     console.log(str2);
// }
// backToFront('meow-meow-meow-mu', 2);

////9
// function digitSum (num) {
//     const arr = num.split(''); 
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = +arr[i]
//     }
//     const sum = arr.reduce((total, amount) => total + amount);
//     console.log(sum)
// }
// const num = prompt('Введите число: ', '');
// digitSum(num);

////10
// function role (age) {
//     switch (true) {
//         case age >= 0 && age < 15:
//             console.log ('Ребёнок')
//         break
    
//         case age >= 15 && age < 25:
//             console.log ('Молодежь')
//         break
    
//         case age >= 25 && age < 65:
//             console.log ('Взрослый')
//         break
    
//         case age >= 65 && age <= 120:
//             console.log ('Пожилой')
//         break
        
//         case age > 120:
//             console.log ('Сомнительно')
//         break
    
//         default:
//             console.log ('Вводите только цифры')
//         break    
//     }
// }

// const age = +prompt('Ваш возраст: ','');
// role(age);

