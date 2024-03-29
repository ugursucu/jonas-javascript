'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////

// 248. Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const language = Object.values(data.languages)[0];
    const currency = Object.values(...Object.values(data.currencies))[0];

    // prettier-ignore
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('turkey');
getCountryData('portugal');
getCountryData('germany');
*/

////////////////////////////////////////////////////////////

// 250. Welcome to Callback Hell

/*
const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const requestNeighbour = new XMLHttpRequest();
    requestNeighbour.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${neighbour}`
    );
    requestNeighbour.send();

    requestNeighbour.addEventListener('load', function () {
      const [dataNeighbour] = JSON.parse(this.responseText);
      console.log(dataNeighbour);

      // Render country 2
      renderCountry(dataNeighbour, 'neighbour');
    });
  });
};

getCountryAndNeighbour('turkey');

setTimeout(() => {
  console.log('1 second past');
  setTimeout(() => {
    console.log('2 seconds past');
    setTimeout(() => {
      console.log('3 seconds past');
      setTimeout(() => {
        console.log('4 seconds past');
        setTimeout(() => {
          console.log('5 seconds past');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

////////////////////////////////////////////////////////////

// 251. Promises and the Fetch API
/*
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();
*/

/*
const request = fetch('https://restcountries.com/v3.1/name/turkey');
console.log(request);
*/

////////////////////////////////////////////////////////////

// 252. Consuming Promises

/*
const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
*/

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(...data);
      renderCountry(...data);
    });
};
*/

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('turkey');
*/

////////////////////////////////////////////////////////////

// 253. Chaining Promises

/*
const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], 'neighbour');
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 3
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};

getCountryData('portugal');
*/

////////////////////////////////////////////////////////////

// 254. Handling Rejected Promises

/*
const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], 'neighbour');
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 3
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong: ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('horolop');
*/

////////////////////////////////////////////////////////////

// 255. Throwing Errors Manually

/*
const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errMessage = 'Something went wrong: ') {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`${errMessage} (${response.status})`);
    }

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1

  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found: '
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found: '
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'horolop';

      if (!neighbour) throw new Error('No neighbour found');

      // Country 3
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found: '
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong: ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getCountryData('horolop');
// getCountryData('australia');
*/

////////////////////////////////////////////////////////////

// 258. The Event Loop in Practice
/*
console.log('Timer start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000; i++) console.log(res);
});

console.log('Test end');
*/

////////////////////////////////////////////////////////////

// 259. Building a Simple Promise

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is drawing 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed.');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed.');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed.');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed.');
  });

Promise.resolve('Success!').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

////////////////////////////////////////////////////////////

// 260. Promisifying the Geolocation API

/*
console.log('Getting position...');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(position => resolve(position), error => reject(error));
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data) {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const whereAmI = function () {
  getPosition()
    .then(function (position) {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=118290526441431171169x74597`
      );
    })
    .then(function (response) {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}.`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(function (response) {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(`${error.message}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', whereAmI);
*/

////////////////////////////////////////////////////////////

// 262. Consuming Promises with Async/Await

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data) {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country data
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  console.log(res);

  const data = await res.json();
  console.log(data[0]);

  renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');
*/

////////////////////////////////////////////////////////////

// 263. Error Handling With try...catch

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data) {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data!');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country!');
    const data = await res.json();

    renderCountry(data[0]);
  } catch (err) {
    console.error(`💥 ${err.message} 💥`);
    renderError(`💥 Something went wrong 💥: ${err.message}`);
  }
};
whereAmI();
whereAmI();
whereAmI();
console.log('FIRST');
*/

////////////////////////////////////////////////////////////

// 264. Returning Values from Async Functions

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCountry = function (data) {
  const language = Object.values(data.languages)[0];
  const currency = Object.values(...Object.values(data.currencies))[0];

  // prettier-ignore
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data!');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country!');
    const data = await res.json();

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}.`;
  } catch (err) {
    console.error(`💥 ${err.message} 💥`);
    renderError(`💥 ${err.message} 💥`);

    // Reject promise returned from async function
    throw err;
  }
};
console.log('1: Will get location');

// const city = whereAmI();
// console.log(city.json());
// whereAmI().then(city => console.log(`2: ${city}`)).catch(err => console.error(`2: ${err.message}`)).finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err}`);
  }
  console.log('3: Finished getting location');
})();
*/

////////////////////////////////////////////////////////////

// 265. Running Promises in Parallel

/*
const getJSON = function (url, errMessage = 'Something went wrong: ') {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`${errMessage} (${response.status})`);
    }

    return response.json();
  });
};

const getThreeCountries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    console.log([...data1.capital, ...data2.capital, ...data3.capital]);

    ////////////////////

    // Promise.all
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(data => data[0].capital[0]));
  } catch (err) {
    console.log(err);
  }
};
getThreeCountries('portugal', 'canada', 'tanzania');
*/

////////////////////////////////////////////////////////////

// 266. Other Promise Combinators: race, allSettled and any

/*
const getJSON = function (url, errMessage = 'Something went wrong: ') {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error(`${errMessage} (${response.status})`);
    }

    return response.json();
  });
};

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON('https://restcountries.com/v3.1/name/italy'),
    getJSON('https://restcountries.com/v3.1/name/egypt'),
    getJSON('https://restcountries.com/v3.1/name/mexico'),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON('https://restcountries.com/v3.1/name/tanzania'),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success!'),
  Promise.reject('Error!'),
  Promise.resolve('Another success!'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.all([
  Promise.resolve('Success!'),
  Promise.reject('Error!'),
  Promise.resolve('Another success!'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]

Promise.any([
  Promise.resolve('Success!'),
  Promise.reject('Error!'),
  Promise.resolve('Another success!'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
