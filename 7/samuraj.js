function hello(name) {

    return function (day) {

        console.log(`Czesc ${name}, jak tam ${day} u Ciebie?`)

    }
}

const user = hello('Jan')

console.log(user)

console.log(user('sroda'))

console.log(hello('Maciek')('poniedzialek'))

console.dir(user)

console.log(user('wtorek'))

// *******************************


const dodaj = function(a) {

    let b = 10
    return function (c) {
        return a + b + c
    }

}


const dodajDo20 = dodaj(10)
console.log(dodajDo20)
console.log(dodajDo20(10))


// ********************************** 


function licznik(start) {

     let liczbaWywolan = start

     return function() {
         return ++liczbaWywolan
     }
}

const count = licznik(0)
count()
count()
console.log(count())

// domknięcie występuje wtedy, gdy funkcja może zapamiętać i uzyskac dostęp do swojego zakresu leksykalnego nawet po jej wywołaniu na zewnątrz tego zakresu
// domknięcie to dostęp do zmiennej która została stworzona wewnątrz zakresu innej funkcji, która zakończyła już swoje działania