



//декоратор - це спеціальна функція, яка огортає іншу функію, додаючи до неї додадкові можливості 
//це юзаєтся коли треба розширити функцію певним функціоналом не змінюючи дії

// практичне застосування:
// 1 логування -  додавання до журналу  для відстеження викликів функцій
// 2 обмеження - обмеження виклику функціі
// 3 валідація данних - перевірка параметрів перед виконанням основної функції


// ==== логування ====
function logex(callBack) {
    return function(...args){
          console.log('start')
        const result = callBack(...args)
        console.log('end')
        return result
    }
}
      
const sum = (a,b) => a + b
const sumLog = logex(sum)
console.log(sumLog(5,6))



// ==== обмеження лпо виклику
function limitCalls(callBack, limit) {
    let calls = 0
    return function(...args) {
        if (calls => limit) {
            console.error('limit')
            return null
        }
        calls++
        return callBack(...args)
    }
}

let sumLimit = limitCalls(sum, 3)
console.log(sumLimit(5,5))
console.log(sumLimit(56,5))
console.log(sumLimit(56,55))
console.log(sumLimit(56,55))



// ==== Memoizate (Кешування) ====
// JSON.stringify - метод який перетворює данні у стрінг ( для зберігання в браузері)
// JSON.parse -для перетворення данних у звичайний формат (видаляє string)

function Memoizate(callBack) {
    const cashe = new Map() // змінна для кешування
    return function(...args) {
        const key = JSON.stringify(args)
    }
}

