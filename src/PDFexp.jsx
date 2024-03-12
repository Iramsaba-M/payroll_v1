// DesignedPage.js
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PDFexp = () => {
  const contentRef = useRef(null);

  const generatePDF = () => {
    if (contentRef.current) {
      html2canvas(contentRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210; // Width of A4 paper in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('designed-page.pdf');
      });
    }
  };

  return (
    <div>
      <h1>Your Designed Page</h1>
      <div ref={contentRef}>
        {/* ... your existing content ... */}
        <p>This is your content.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        {/* ... more content ... */}
      </div>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PDFexp;
