const getPuzzle = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then(data => {
      return data.puzzle;
    });
};

const getCountry = countryCode => {
  return fetch("http://restcountries.eu/rest/v2/all")
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then(data => {
      return data.find(country => country.alpha2Code === countryCode);
    });
};

const getLocation = () => {
  return fetch("http://ipinfo.io/json?token=f3eeca9b9eace1").then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Unable to fetch location");
    }
  });
};

getPuzzle("2")
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });

getLocation()
  .then(location => {
    console.log(location);
    return getCountry(location.country);
  })
  .then(country => {
    console.log(country.name);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });