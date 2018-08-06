import * as firebase from "firebase";


// Initialize Firebase
const config = {
    apiKey: "AIzaSyAwRUQrwtVbe79hnZzkJXsxcWShoigu1ac",
    authDomain: "expensify-f3275.firebaseapp.com",
    databaseURL: "https://expensify-f3275.firebaseio.com",
    projectId: "expensify-f3275",
    storageBucket: "",
    messagingSenderId: "412540854554"
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

//child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database
// .ref('expenses')
// .on('value',(snapshot) =>{
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//        })
//     });
//     console.log(expenses)
    
// })


// database
// .ref('expenses')
// .once('value')
// .then((snapshot) =>{
//     const expenses = {]
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//         console.log(expenses)
//     })
// })


// database.ref('expenses').push({
//     description: 'Electricity bill',
//     note: '',
//     amount: 100,
//     createdAt: 355466778
// })

// database.ref('expenses').push({
//     description: 'Phone',
//     note: '',
//     amount: 43535.44,
//     createdAt: 45637869999
// })
// database.ref('expenses').push({
//     description: 'shopping',
//     note: '',
//     amount: 546677.77,
//     createdAt: 678454377
// })

// database.ref('expenses/-LHh4ISvIPLwJPU8MWH6').remove()





// database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name}  is a  ${val.job.title}  at  ${val.job.company}`)
// })

// data subscription setup
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// }, (e)=>{
//     console.log('Error occured', e)
// });

// setTimeout(() => {
//     database.ref('age').set(78)

// }, 4000)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)

// }, 8000)

// setTimeout(() => {
//     database.ref('age').set(48)

// }, 12000)


// database.ref('location/city')
// .once('value')
// .then((snapshot)=>{
//    const val = snapshot.val()
//    console.log(val)

// }).catch((e)=>{
//     console.log('error', e)
// })

// database.ref().set({
//     name: 'Ejeh',
//     age: 26,
//     stresslevel: 6,
//     job: {
//     title: 'Software developer',
//     company: 'Google'

//     }, 
//     location: {
//         city: 'philadelphia',
//         country: 'united States'
//     }
// }).then(() => {
//     console.log('data was saved to the database!')
// }).catch((e) => {
//     console.log('An error occured', e)
// })


// // firebase/delete
// database
//     .ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data was removed')
//     }).catch((e) => {
//         console.log('error occured', e)
//     })


// // firebase/update
// database.ref().update({
//     stresslevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })


// firebase/update
// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// })

//   database.ref('age').set(28)
//   database.ref('location/city').set('New York')

//   database.ref('attributes').set({
//       height: 30,
//       weight: 20
//   }).then(() =>{
//       console.log('Added an attribute with height n weight property')
//   }).catch((e)=>{
//     console.log('An error occured')

//   })

//   console.log('I made a request to change data');
