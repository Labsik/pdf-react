export const saveToHistory = (file: string): void => {
  const history = getHistory();
  history.push(file);
  localStorage.setItem('pdfHistory', JSON.stringify(history));
};

export const getHistory = (): string[] => {
  const history = localStorage.getItem('pdfHistory');
  return history ? JSON.parse(history) : [];
};