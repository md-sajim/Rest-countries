const loadcountris = (country) => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => discountrydata(data));
};
const discountrydata = (countries) => {
  console.log(countries[0]);
  const allConntriesHTML = countries.map((country) => getCountryHTML(country));
  const restDiv = document.getElementById("rest-div");
  restDiv.innerHTML = allConntriesHTML.join(" ");
  //   console.log(allConntriesHTML[0]);
};
const getCountryHTML = (country) => {
  return `
    <div class='country'>
    <h2>${country.name}</h2>
    <img src="${country.flags.png}" alt="">
    </div>
    `;
};
loadcountris();
