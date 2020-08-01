// from data.js
var ufoReport = data;

// YOUR CODE HERE!

// get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Loop through data and console.log each UFO report object

data.forEach(function(sightings) {console.log(sightings);
});

// Use d3 to append one table row 'tr' for each ufo report object
data.forEach(function(sightings) {console.log(sightings);
var row = tbody.append("tr")
});

// Step 3: Use Object.entries to console.log each UFO report value
data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach
    (function([key, value]) 
    {console.log(key, value);
    });
});

// Use d3 to update each cell's text with ufo report values

data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);


// Append a cell to the row
var cell = row.append("td");
cell.text(value);
});
});

// Refactor to use Arrow functions

// Select button and form
var button = d3.select("#filter-btn");

var form = d3.select("#form")

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// function to delete table for future filtering

function deleteTable() {
  d3.select("tbody")
  .selectAll("tr").remove()
  .selectAll("td").remove()
}

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing and delete previous table
    d3.event.preventDefault();
    deleteTable();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(ufoReport);
  
    var filteredData = ufoReport.filter(ufoReport => ufoReport.datetime === inputValue);
  
    console.log(filteredData);



  // Update html table based on filtered data

  filteredData.forEach(function(selections) {
    console.log(selections);
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    })
  })
  
    
}

