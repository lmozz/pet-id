const readJson = async () => {
    try {
        const response = await fetch('source/js/data.json');
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return null;
        }
        return await response.json();;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return null;
    }
};
(async () => {
    let json = await readJson();
    if (json == null) {
        alert('Hubo un error intentando leer la información de esta mascota');
        return;
    }
    write(json);
})();