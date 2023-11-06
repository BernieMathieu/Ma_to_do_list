

function ajouterTache() {
    const taskName = document.getElementById("taskName").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const taskList = document.getElementById("taskList");

    if (taskName === "" || startDate === "" || endDate === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }
     

    const tache = {
        nom: taskName,
        dateDebut: startDate,
        dateFin: endDate
    };

    

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<strong>${tache.nom}:</strong> Début le ${tache.dateDebut}, Fin le ${tache.dateFin}`;
    taskList.appendChild(taskItem);

    document.getElementById("taskName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    
}