export function addItemLS(storageName, item) {
  localStorage.setItem(storageName, JSON.stringify(item));
}
export function getItemFromLS(storageName) {
  if (storageName) {
    const data = localStorage.getItem(storageName);
    if (data) return JSON.parse(data);
    else return null;
  } else return null;
}
