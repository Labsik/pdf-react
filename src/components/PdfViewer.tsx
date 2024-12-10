import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

interface PdfViewerProps {
  fileUrl: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const PdfViewer = ({ fileUrl }: PdfViewerProps) => (
  <Worker workerUrl="/pdf.worker.min.js">
      <Viewer fileUrl={fileUrl} />
  </Worker>
);

export default PdfViewer;
