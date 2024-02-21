const button = document.querySelector(".btn");
button.addEventListener("click", async function () {
  const inputText = document.getElementById("textarea").value;
  const arr = inputText.split(" ");
  postData(arr);
});
const postData = async (arr) => {
  const res = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arr),
  });

  const data = await res.json();
  render(data);
};

function render(data) {
  const root = document.getElementById("root");
  root.insertAdjacentHTML(
    "beforeend",
    `<p>Количество уникальный слов: ${data.size}</p>`
  );
  root.insertAdjacentHTML(
    "beforeend",
    `<ul>${data.newArray.map((item) => `<li>${item}</li>`).join("")}</ul>`
  );
}
