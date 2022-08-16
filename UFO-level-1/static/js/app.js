// from data.js
var tableData = data;

// Display UFO sightings 
function Showtable(Sightings) {
    var tbody = d3.select("tbody");
    Sightings.forEach((records) => {
        var row = tbody.append("tr");
        Object.entries(records).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    });
};

// Clearing the Table
function deleteTable() {
    d3.select("tbody")
        .selectAll("tr").remove()
        .selectAll("td").remove();
};

console.log(tableData);
Showtable(tableData);

// Button for Filtering
var button = d3.select("#filter-btn");

button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTable();
    var Input = d3.select("#datetime").property("value");

    if (Input.trim() === "") {
        var filtered_data = tableData;
        } 
    else {
        var filtered_data = tableData.filter(Sightings =>
            Sightings.datetime === Input.trim());
        };

    console.log(filtered_data);
    Showtable(filtered_data);
});