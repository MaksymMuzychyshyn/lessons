export const getSection = num => {
  const getSpan = document.querySelector(`span[data-number="${num}"]`);
  const result = getSpan.closest('.box').dataset.section;
  return result;
};