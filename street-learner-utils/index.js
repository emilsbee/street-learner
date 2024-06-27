import fs from 'fs';

fs.readFile('./export.geojson', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const streets = JSON.parse(data).features;
  const streetNames = [];
  for (const street of streets) {
    if (street.properties.name) {
      streetNames.push(street.properties.name)
    }
  }
  
  const uniqueStreetNames = [...new Set(streetNames)];

  console.log(uniqueStreetNames.length);
});