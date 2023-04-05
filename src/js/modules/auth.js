// const LS_AUTH_KEY = 'auth';

// let currentUser = null;

// const createAccount = (email, password, userName) => {
//     return new Promise((res, rej) => {
//         const users = JSON.parse(localStorage.getItem(LS_AUTH_KEY) || '[]');
//         const ifUnique = !users.some(user => user.email === email 
//             && user.password === password 
//             && user.userName === userName)
//             if(ifUnique) {
//                 const newUser = {
//                     id: Date.now(),
//                     email, 
//                     password, 
//                     userName,
//                 }
        
//                 users.push(newUser);
//                 localStorage.setItem(LS_AUTH_KEY, JSON.stringify(users));
//                 currentUser = newUser;
//                 res(newUser);
//             } else {
//                 rej(new Error("Can't create user with such credentials"))
//             }

//     })

// };
// const loginAcc = (email, password) => {
//     return new Promise((res, rej) => {
//         const users = JSON.parse(localStorage.getItem(LS_AUTH_KEY) || '[]');
//         const user = user.find(user => user.email === email 
//             && user.password === password);
//         if (user) {
//             res(user);
//             currentUser = newUser;
//         } else {
//             rej("Wrong credentials")
//         }
//     })
// };
// const logout = () => {};
// const getUser = () => {
    
// };

// export {
//     createAccount,
//     loginAcc,
//     logout,
//     getUser,
// }