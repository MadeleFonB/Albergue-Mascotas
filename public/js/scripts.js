document.getElementById('mascot').addEventListener('change', (event) => {
    const code = document.getElementById('mascot').value;
    document.getElementById('towns').length = 0;
    dataTowns.filter(town => town.mascota == code).forEach(townAux => {
        document.getElementById('towns').add(new Option( townAux.name, townAux.code));
    })
});


/*document.getElementById('dpto').addEventListener('change', (event) => {
    const code = document.getElementById('dpto').value;
    document.getElementById('towns').length = 0;
    dataTowns.filter(town => town.department == code).forEach(townAux => {
        document.getElementById('towns').add(new Option( townAux.name, townAux.code));
    })
});*/
