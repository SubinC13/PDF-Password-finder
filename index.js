import { PDFExtract } from 'pdf.js-extract';
const pdfExtract = new PDFExtract();

const check = async (filePath, password) => {
    const options = { password };
    try {
        console.log(`\nAttempting with password: "${password}"`);
        const data = await pdfExtract.extract(filePath, options);
        console.log('Password is correct ===', password);
        
        return data;

    } catch (error) {
        const errorMsg = error.message.toLowerCase();
        if (errorMsg.includes('password') || errorMsg.includes('encrypt') || errorMsg.includes('incorrect')) {
        console.log('Incorrect password!');
        } else {
        console.log('Error:', error.message);
        }
        
        return null;
    }
}

const filePath = './pdf/test_protected.pdf'; // Excat path of the PDF
const resolve = async (a) => {
    const response = await check(filePath, String(a));
    return response;
}

async function runLoop() {
    for (let i=1950; i<2000; i++) {
        const secnond = i + ""; // Incase any secondry string you have you can attact it here
        await resolve(secnond);
    }
}

runLoop();