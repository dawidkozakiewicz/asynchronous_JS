const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        console.log(response)
    if (response.status === 200) {
        const data = await response.json()
        console.log(data)
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location')
        }
    })
}

getPuzzle('8').then((puzzle) => {
    console.log(puzzle)
}).catch((pomidor) => {
    console.log(`Error: ${pomidor}`)
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})