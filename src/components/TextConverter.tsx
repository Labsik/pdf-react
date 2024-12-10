import { useState } from 'react';
import { getHistory, saveToHistory } from '@utils/history';
import HistoryPdf from './HistoryPdf';
import PdfViewer from './PdfViewer';
import { convertToPdf } from '@api/convertToPdf';

const TextConverter = () => {
  const [text, setText] = useState<string>('');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>(() => getHistory());


  const handleConvert = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = await convertToPdf(text);
      setPdfUrl(url);
      saveToHistory(url);
      setHistory(getHistory());
    } catch (err) {
      console.log('error', err);
      setError('Failed to convert text to PDF. Please try again');
    } finally {
      setLoading(false);
      setText('')
    }
  };


  return (
    <div className="flex flex-row justify-between w-full p-4">
      <div className="flex-1 mr-8">
        <textarea
        className="w-full p-2 border rounded-md mb-4"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert to PDF"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 disabled:bg-gray-400"
        onClick={handleConvert}
        disabled={loading || text.trim() === ''}
      >
        {loading ? 'Converting...' : 'Convert to PDF'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {pdfUrl &&
        <div className="w-full max-w-4xl mt-8"><PdfViewer fileUrl={pdfUrl} /></div>
      }
      </div>

      <div className="w-1/3">
        <h3>History: </h3>
        <ul>
          {history.length === 0 && <p>You have not added any docs yet</p>}
          {history.length > 0 && history.map((file, index) => (
             <HistoryPdf  key={file} file={file} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextConverter;
