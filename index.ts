
const embedPDF = (element: HTMLDivElement, pdfUrl: string) => {
	element.innerHTML = `<embed src="${pdfUrl}" type="application/pdf" width="100%" height="100%">`;
};

(window as any).embedPDF = embedPDF;