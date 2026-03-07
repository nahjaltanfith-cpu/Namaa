import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs`;

interface PdfViewerProps {
  url: string;
  title?: string;
}

const PdfViewer = ({ url, title }: PdfViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.5);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);
        const doc = await pdfjsLib.getDocument(url).promise;
        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load PDF:", err);
        setLoading(false);
      }
    };
    loadPdf();
  }, [url]);

  useEffect(() => {
    const renderPage = async () => {
      if (!pdfDoc || !canvasRef.current) return;
      const page = await pdfDoc.getPage(currentPage);
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (!context) return;

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport }).promise;
    };
    renderPage();
  }, [pdfDoc, currentPage, scale]);

  const goToPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(3, s + 0.25));
  const zoomOut = () => setScale((s) => Math.max(0.5, s - 0.25));

  return (
    <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrev}
            disabled={currentPage <= 1}
            className="p-2 rounded-lg hover:bg-muted disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm font-medium text-foreground min-w-[80px] text-center">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage >= totalPages}
            className="p-2 rounded-lg hover:bg-muted disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        {title && (
          <span className="text-sm font-semibold text-foreground hidden md:block">{title}</span>
        )}
        <div className="flex items-center gap-1">
          <button onClick={zoomOut} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ZoomOut size={18} />
          </button>
          <span className="text-xs font-medium text-muted-foreground min-w-[45px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button onClick={zoomIn} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ZoomIn size={18} />
          </button>
        </div>
      </div>

      {/* PDF Canvas */}
      <div
        ref={containerRef}
        className="overflow-auto bg-muted/30"
        style={{ maxHeight: "750px" }}
      >
        {loading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex justify-center p-4">
            <canvas ref={canvasRef} className="shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
