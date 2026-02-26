document.getElementById("collapseCriar")
  .addEventListener("show.bs.collapse", function () {

    const container = document.getElementById("dynamicContent");

    // Evita duplicar
    if (!container.innerHTML.trim()) {

      const original = document.getElementById("configuradorContent");
      container.innerHTML = original.innerHTML;

    }

});