import countries from './countries_data.js'

// função para contar o número de línguas diferentes no arquivo 'countries_data'
function languageCounter(countries){
    const LanguagesSet = new Set()
    for (const country of countries) {
        for (const language of country.languages) {
            LanguagesSet.add(language)
        }
    }
    console.log(`Existem ${LanguagesSet.size} Línguas diferentes no arquivo\n`)
}
languageCounter(countries)

// função para mostrar um determinado número das línguas mais faladas no arquivo 'countries_data'
function mostSpokenLanguages(countries, num){ 
    const LanguagesSet = new Set()
    const LanguagesArray = []
    for (const country of countries) {
        for (const language of country.languages) {
            // adicionando linguas diferentes ao set LanguagesSet
            LanguagesSet.add(language)
            // adicionando todas as linguas de cada país ao array LanguagesArray
            LanguagesArray.push(language)
        }
    }
    const mostSpokenLanguages = []
    for (const lang of LanguagesSet) {
        const filteredLang = LanguagesArray.filter((lng) => lng === lang)
        // adicionando as línguas e o número de países em que elas são faladas
        mostSpokenLanguages.push({ language: lang, count: filteredLang.length })
    }
    // organizando o array em ordem descrescente
    mostSpokenLanguages.sort((a, b) => b.count-a.count);
    console.log(`As ${num} Líguas mais faladas são:`)
    // escrevendo no console apenas um determinado número de países
    for (let i = 0; i < num; i++) {
        // condição ternária para determinar se a palavra 'País' será escrita no singular ou plural
        let word = mostSpokenLanguages[i].count > 1 ? 'Países' : 'País'
        console.log(`${mostSpokenLanguages[i].language} em ${mostSpokenLanguages[i].count} ${word}`)
    }
}
mostSpokenLanguages(countries,10)