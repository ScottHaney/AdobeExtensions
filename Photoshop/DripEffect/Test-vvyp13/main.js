async function showLayerNames() {
    const app = require("photoshop").app;
    const allLayers = app.activeDocument.layers;
    const allLayerNames = allLayers.map(layer => layer.name);
    const sortedNames = allLayerNames.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    document.getElementById("layers").innerHTML = `
      <ul>${
        sortedNames.map(name => `<li>${name}</li>`).join("")
      }</ul>`;

      async function convertToSmartObject() {
        let result;
        let psAction = require("photoshop").action;
      
        let command = [
            // Convert to Smart Object
            {"_obj":"newPlacedLayer"}
        ];
        result = await psAction.batchPlay(command, {});
      }
      
      async function runModalFunction() {
        await require("photoshop").core.executeAsModal(convertToSmartObject, {"commandName": "Action Commands"});
      }
      
      await runModalFunction();
    
}

document.getElementById("btnPopulate").addEventListener("click", showLayerNames);