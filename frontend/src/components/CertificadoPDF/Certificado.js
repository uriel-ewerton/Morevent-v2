import React, { useRef } from 'react';
import { Document, Page, Text, PDFDownloadLink } from '@react-pdf/renderer';

function Certificado() {
  const pdfRef = useRef(null);

  const handleDownload = () => {
    if (pdfRef && pdfRef.current) {
      pdfRef.current.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'certificado.pdf';
        link.click();
      });
    }
  };

  return (
    <div>
      <PDFDownloadLink document={<Document ref={pdfRef}><Page><Text>Certificado de Conclusão</Text></Page></Document>} fileName="certificado.pdf">
        {({ loading }) => (loading ? 'Loading...' : 'Download')}
      </PDFDownloadLink>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default Certificado;