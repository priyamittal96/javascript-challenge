// from data.js
var tableData = data;

// select the body element
let tbody = d3.select("tbody")

function buildTable(data) {
    tbody.html("")

    data.forEach((dataRow) => {
        let row = tbody.append("tr")
        Object.values(dataRow).forEach((value) => {
            let cell = row.append("td")
            cell.text(value)
        })
    })
}

let filters = {}
function updateFilters(){
    console.log(d3.select(this))
    let changeElement = d3.select(this).select("input");

    let elementValue = changeElement.property("value");

    let filterId = changeElement.attr("id")
    
    if(elementValue){
        filters[filterId] = elementValue
    }
    else {
        delete filters[filterId]
    }
    filterTable()
}

function filterTable() {
    let filteredData = tableData;

    Object.entries(filters).forEach(([key,value]) => {
        filteredData = filteredData.filter(row => row[key] === value)
    })

    buildTable(filteredData)
}

// Attach an event to listen for changes to each filter 
d3.selectAll(".filter").on("change",updateFilters)

// Build the table when the page loads
buildTable(tableData)
