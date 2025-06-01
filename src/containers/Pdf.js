
import React from 'react';
import JsPDF from 'jspdf';

function Pdf(props) {
    const generatePDF = () => {
        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }

    return (
        <button onClick={generatePDF} type="button" > Export PDF</button>
    );
}

export default Pdf;