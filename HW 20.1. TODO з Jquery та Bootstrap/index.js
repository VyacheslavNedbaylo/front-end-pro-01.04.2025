$(document).ready(function () {
  $("#addTaskBtn").click(function () {
    const taskText = $("#taskInput").val().trim();
    if (taskText === "") {
      alert("Введіть завдання!");
      return;
    }

    const $li = $(
      `<li>${taskText} <button class="deleteBtn">Видалити</button></li>`
    );
    $("#taskList").append($li);
    $("#taskInput").val("");
  });

  $("#taskList").on("click", ".deleteBtn", function () {
    $(this).closest("li").remove();
  });

  $("#taskList").on("click", "li", function (e) {
    if ($(e.target).hasClass("deleteBtn")) return;

    const taskText = $(this).contents().get(0).nodeValue.trim();
    $("#modalTaskContent").text(taskText);
    const modal = new bootstrap.Modal(document.getElementById("taskModal"));
    modal.show();
  });
});
