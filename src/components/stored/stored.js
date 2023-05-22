// lưu vào item
export function stored(data){
  const jsonData = JSON.stringify(data)
  localStorage.setItem('itemList', jsonData)
}