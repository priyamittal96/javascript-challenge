// from data.js
var tableData = data;

// select the body element
let tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("")

    data.forEach((dataRow) => {
        Object.values(dataRow).foreach((value) => {
            let cell = row.append("td")
            cell.text(value)
        })
    })
}

let filters = {}
function updateFilters(){

}

// Attach an event to listen for changes to each filter 
d3.selectAll(".filter").on("change",updateFilters)

// Build the table when the page loads
buildTable(tableData)
