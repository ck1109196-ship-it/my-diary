function saveEntry(){
  const entry = document.getElementById('entry').value;
  localStorage.setItem('diaryEntry', entry);
  alert("Diary entry saved!");
}