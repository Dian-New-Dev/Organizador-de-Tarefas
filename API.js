const data = new Date();
const diaDoMes = data.getDate();
console.log(diaDoMes)

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    escolherQuotePeloDia(data);
  });


function escolherQuotePeloDia(citacao) {
  if (diaDoMes < 16) {
    inserirCitacaoNoDom(citacao[diaDoMes]);
  } else {
    inserirCitacaoNoDom(citacao[diaDoMes - 15])
  }
}

function inserirCitacaoNoDom(citacaoDoDia) {
  const headerH3 = document.getElementById('header-h3');
  headerH3.innerText = citacaoDoDia.text;
}