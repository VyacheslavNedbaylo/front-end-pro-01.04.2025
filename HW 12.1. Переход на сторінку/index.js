let savedLink = null;
document.getElementById("enterLinkBtn").addEventListener("click", function () {
  const link = prompt("Введіть посилання (URL):");
  try {
    const url = new URL(link);
    savedLink = url.href;
    alert("Посилання збережено!");
  } catch (error) {
    alert("Це не валідне посилання!");
  }
});

document.getElementById("goToLinkBtn").addEventListener("click", function () {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert("Спочатку введіть коректне посилання!");
  }
});
