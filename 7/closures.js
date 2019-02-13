const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

// Tipper
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}
const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))
console.log(tip30(100))


// Nie ma jednej funkcji, która pobiera dwa argumenty za rachunek i procent końcowy. 
// Zamiast tego mamy funkcję createTipper, która zwraca funkcję.
// CreateTipper dostaje procent napiwków za pomocą pojedynczego argumentu. 
// To zwraca funkcję, która zwraca całkowity rachunek.
// Zamknięcie utworzone przez funkcję wewnętrzną daje jej dostęp do wartości bazowej i kwoty do obliczenia.
// Patent currying przekształcił createTipper w generator funkcji
// Generuje funkcje, które mają obliczyć napiwek o ustalonym procencie.