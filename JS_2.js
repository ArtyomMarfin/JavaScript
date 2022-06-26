// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
// if (age < age_2) {
//     console.log("You don’t have access cause your age is " + age + " It’s less then ")
// } else if(age >= age_2 && age <  age_3) {
//     console.log("Welcome !")
// } else if(age > age_3) {
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work")
// }
// }
// checkAge(17)
// checkAge(18)
// checkAge(60)
// checkAge(61)



// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
// if(age && !isNaN(age)){
// if (age < age_2) {
//     console.log("You don’t have access cause your age is " + age + " It’s less then ")
// } else if(age >= age_2 && age <  age_3) {
//     console.log("Welcome !")
// } else if(age > age_3) {
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work")
// } 
// } else console.log('Not an integer value')
// }
// checkAge(17)
// checkAge(18)
// checkAge(60)
// checkAge(61)
// checkAge('aaa')



// const age_2 = 18
// const age_3 = 60

// const checkAge = function(age) {
// if (age && !isNaN(age)) {
// if (age < age_2) {
//     console.log("You don’t have access cause your age is " + age + " It’s less then ")
// } else if(age >= age_2 && age <  age_3) {
//     console.log("Welcome !")
// } else if(age > age_3) {
//     console.log("Keep calm and look Culture channel")
// } else {
//     console.log("Technical work")
// }
// } else console.log('Not an integer value')
// }
// checkAge(17)
// checkAge(18)
// checkAge(60)
// checkAge(61)
// checkAge('aaa')
// checkAge('20')
// checkAge('0')
// checkAge('')


const age_2 = 18
const age_3 = 60
const div = document.getElementById('d')
const checkAge = function(age) {
if (age && !isNaN(age)) {
if (age < age_2) {
    alert("You don’t have access cause your age is " + age + " It’s less then ")
} else if(age >= age_2 && age <  age_3) {
    alert("Welcome !")
} else if(age > age_3) {
    alert("Keep calm and look Culture channel")
} else {
    alert("Technical work")
}
} else alert('Not an integer value')
}

// let a = prompt('Enter your age')
// checkAge(a)

checkAge(prompt('Enter your age'))