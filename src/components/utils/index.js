export function titleLeize(text){

    if(!text) return ''

    const lower = text.toLowerCase()

    const firstLetter = [...text[0].toUpperCase()]

    const finalText = firstLetter + lower.slice(1)

    return finalText

}


export function titleLeizeArray([text]){

    const lower = text.toLowerCase()

    const firstLetter = [...text[0].toUpperCase()]

    const finalText = firstLetter + lower.slice(1)

    return finalText

}

export function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function normalizeNameDisplay(name) {

    const splitted = name.split('_')

    const upperCase = splitted.map(part => {

        return titleLeize(part)

    })

    const result = upperCase.toString().replace(',',' ').replace(',',' ')

    return result

}

export function normalizeNameDisplayItems(name) {

    const splitted = name.split('-')

    const upperCase = splitted.map(part => {

        return titleLeize(part)

    })

    const result = upperCase.toString().replace(',',' ').replace(',',' ')

    return result

}

export function itemSearchfy(text){
    
    // [...text[0]][0] === "0" ? text.slice(1) : ''

    if ([...text[0]][0] === "0") {

        return text.slice(1)

    }

    return text.replace(' ','-').replace(' ','-')

}