const countries = [
  ['Brazil', 'Brasília'],
  ['Italy', 'Rome'],
  ['Japan', 'Tokyo'],
]
const countriesMap = new Map(countries)
console.log(countriesMap)
// Map(3) {"Brazil" => "Brasília", "Italy" => "Rome", "Japan" => "Tokyo"}
console.log(`Existem ${countriesMap.size} Países no Map`)
// Existem 3 Países no Map
for (const countries of countriesMap){
  console.log(countries)
}
/*
[ 'Brazil', 'Brasília' ]
[ 'Italy', 'Rome' ]
[ 'Japan', 'Tokyo' ]
*/
for (const [countries, city] of countriesMap){
  console.log(countries, city)
}
/*
Brazil Brasília
Italy Rome
Japan Tokyo
*/