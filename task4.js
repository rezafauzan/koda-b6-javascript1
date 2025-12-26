// let tempSource = ['celcius', 'reamur', 'fahrenheit', 'kelvin']
// let tempDestination = ['celcius', 'reamur', 'fahrenheit', 'kelvin']

// tempSource.forEach((x) => {
//     tempDestination.forEach((y) => {
//         let tempor = `
//         if(${x} === ${y}){
//         // ${x} to ${y}
//         }
//         `
//         console.log(tempor)
//     })
// })

// if (tempSource === 'celcius' && tempDestination === 'reamur') {
//     temp = temp * 4/5
// }
// if (tempSource === 'celcius' && tempDestination === 'fahrenheit') {
//     temp = temp * 9/5 + 32
// }
// if (tempSource === 'celcius' && tempDestination === 'kelvin') {
//     temp = temp + 273.15
// }
// // Reamur to Other
// if (tempSource === 'reamur' && tempDestination === 'celcius') {
//     temp = temp * 5/4
// }
// if (tempSource === 'reamur' && tempDestination === 'fahrenheit') {
//     temp = temp * 9/4 + 32
// }
// if (tempSource === 'reamur' && tempDestination === 'kelvin') {
//     temp = temp * 5/4 + 273.15
// }
// // Fahrenheit to Other
// if (tempSource === 'fahrenheit' && tempDestination === 'celcius') {
//     temp = (temp - 32) * 5/9
// }
// if (tempSource === 'fahrenheit' && tempDestination === 'reamur') {
//     temp = (temp - 32) * 4/9
// }
// if (tempSource === 'fahrenheit' && tempDestination === 'kelvin') {
//     temp = (temp + 459.67) * 5/9
// }
// // Kelvin to Other
// if (tempSource === 'kelvin' && tempDestination === 'celcius') {
//     temp = temp - 273.15
// }
// if (tempSource === 'kelvin' && tempDestination === 'reamur') {
//     temp = (temp - 273.15) * 4/5
// }
// if (tempSource === 'kelvin' && tempDestination === 'fahrenheit') {
//     temp = temp * 9/5 - 459.67
// }

// while(true){

// }

let temp = 40
let tempSource = 'reamur'
let tempDestination = 'fahrenheit'

// Celcius to Other
switch (tempSource) {
    case 'celcius':
        switch (tempDestination) {
            case 'reamur':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 4 / 5)}`)
                break
            case 'fahrenheit':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 9 / 5 + 32)}`)
                break
            case 'kelvin':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp + 273.15)}`)
                break
            case 'celcius':
                console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                break
            default:
                console.log('Pilihan sumber atau tujuan tidak valid')
                break
        }
        break
    case 'reamur':
        switch (tempDestination) {
            case 'celcius':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 5 / 4)}`)
                break
            case 'fahrenheit':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 9 / 4 + 32)}`)
                break
            case 'kelvin':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 5 / 4 + 273.15)}`)
                break
            case 'reamur':
                console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                break
            default:
                console.log('Pilihan sumber atau tujuan tidak valid')
                break
        }
        break
    case 'fahrenheit':
        switch (tempDestination) {
            case 'celcius':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp - 32) * 5 / 9)}`)
                break
            case 'reamur':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp - 32) * 4 / 9)}`)
                break
            case 'kelvin':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp + 459.67) * 5 / 9)}`)
                break
            case 'fahrenheit':
                console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                break
            default:
                console.log('Pilihan sumber atau tujuan tidak valid')
                break
        }
        break
    case 'kelvin':
        switch (tempDestination) {
            case 'celcius':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp - 273.15)}`)
                break
            case 'reamur':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp - 273.15) * 4 / 5)}`)
                break
            case 'fahrenheit':
                console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 9 / 5 - 459.67)}`)
                break
            case 'kelvin':
                console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                break
            default:
                console.log('Pilihan sumber atau tujuan tidak valid')
                break
        }
        break
    default:
        console.log('Pilihan sumber atau tujuan tidak valid')
        break
}