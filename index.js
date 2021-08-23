var embedPDF = function (element, pdfUrl) {
    element.innerHTML = "<embed src=\"" + pdfUrl + "\" type=\"application/pdf\" width=\"100%\" height=\"100%\">";
};
window.embedPDF = embedPDF;
