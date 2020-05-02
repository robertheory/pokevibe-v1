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