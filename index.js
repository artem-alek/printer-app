 
const Tesseract = require('tesseract.js')
const fs = require('fs')

// let image = require('path').resolve('./files/file0001.png');

// Tesseract.recognize(image)
//     .then(data => {
//         // console.log('then\n', data.text);
//         // let indexOrder = data.text.indexOf('Order #');
//         // let orderNumber = data.text.slice(41, 54);
//         // console.log(indexOrder, orderNumber)

//         // let indexOrder = data.text.indexOf('Sequence #');
//         // let orderNumber = data.text.slice(41, 54);
//         // console.log(indexOrder, orderNumber)

//         // let indexOrder = data.text.indexOf('Delivery Date:');
//         // let orderNumber = data.text.slice(41, 54);
//         // console.log(indexOrder, orderNumber)
        
//     createTextFile(data.text);
        
//     })
//     .catch(err => {
//         console.log('catch\n', err);
//     })
//     .finally(e => {
//         console.log('finally\n');
//         process.exit();
//     });

// function createTextFile(text) {

//     console.log(text);

//     fs.writeFileSync('testfile.txt', text);
// }

function parseTelafloraOrder() {
    let orderData = ''
    try {  
        orderData = fs.readFileSync('testfile.txt', 'utf8');
    } catch(e) {
        console.log('Error:', e.stack);
    } 

    console.log(orderData.indexOf('Order # '))
    console.log(orderData.indexOf('Sequence # '))
    var orderIndexStart = orderData.indexOf('Order # ')
    var orderIndexEnd = orderData.indexOf('Sequence # ')
    var orderNumber = orderData.slice(orderIndexStart, orderIndexEnd - 1)
    console.log(orderNumber)

    // let splicedText = orderData.split('Order #')
    // console.log(splicedText)

    /* Regex Expressions
    recipient info /Manufacturer Part Number:\s*(\S+)/
    */
}

parseTelafloraOrder();