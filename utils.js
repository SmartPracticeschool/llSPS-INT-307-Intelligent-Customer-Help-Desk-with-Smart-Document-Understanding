// Variables and functions needed by both server and client code

/**
 * objectWithoutProperties - clear out unneeded properties from object.
 * object: object to scan
 * properties: items in object to remove
 */
const objectWithoutProperties = (object, properties) => {
  'use strict';

  var obj = {};
  var keys = Object.keys(object);
  keys.forEach(key => {
    if (properties.indexOf(key) < 0) {
      // keep this since it is not found in list of unneeded properties
      obj[key] = object[key];
    }
  });

  return obj;
};
  
/**
 * formatData - format search results into items we can process easier. This includes
 * 1) only keeping fields we show in the UI
 * 2) highlight matching words in text
 * 3) if showing 'passages', ignore all other results
 */
function formatData(data) {
  var formattedData = {};
  var newPassages = [];

  var count = 0;
  data.forEach(function(dataItem) {
    // only keep the data we show in the UI.
    if (dataItem.field === 'text') {
      count = count + 1;
      var newPassage = {
        id: count,
        text: dataItem.passage_text,
        score: dataItem.passage_score,
      };
      newPassages.push(newPassage);
    }
  });

  formattedData.results = newPassages;
  console.log('Formatting Data: size = ' + newPassages.length);
  return formattedData;
}

module.exports = {
  objectWithoutProperties,
  formatData
};
