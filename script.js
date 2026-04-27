let selectedMood = "";

function selectMood(mood) {
  selectedMood = mood;
  document.getElementById("selected").innerText = "Selected: " + mood;
}

function logMood() {
  const name = document.getElementById("name").value;

  if (!name || !selectedMood) {
    alert("Please enter name and select mood");
    return;
  }

  const data = JSON.parse(localStorage.getItem("moods")) || [];

  const entry = {
    name,
    mood: selectedMood,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  };

  data.push(entry);
  localStorage.setItem("moods", JSON.stringify(data));

  displayMoods();
}

function displayMoods() {
  const list = document.getElementById("moodList");
  list.innerHTML = "";

  const data = JSON.parse(localStorage.getItem("moods")) || [];
  const today = new Date().toLocaleDateString();

  const todayData = data.filter(d => d.date === today);

  todayData.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = `${item.name} feels ${item.mood} at ${item.time}`;
    list.appendChild(div);
  });
}

window.onload = displayMoods;
