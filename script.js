
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  let results = [];
  
  const inputLowerCase = str.toLowerCase();
  for (const fruitName of fruit) {
    if (fruitName.toLowerCase().includes(inputLowerCase)) {
      results.push(fruitName);
    }
  }

  return results;
}

function searchHandler(e) {
  
  const inputVal = e.target.value;

  const results = search(inputVal);
  
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  
  suggestions.innerHTML = '';

  if (inputVal === '') {
    return; 
  }

  for (const result of results) {
    const li = document.createElement('li');
    li.textContent = result;
    suggestions.appendChild(li);
  }
  if (results.length > 0) {
    suggestions.classList.add('has-suggestions');
  }
}

function useSuggestion(e) {
 
  const clickedSuggestion = e.target.textContent;
  
  input.value = clickedSuggestion;

  suggestions.innerHTML = '';
}

input.addEventListener('input', searchHandler); 
suggestions.addEventListener('click', useSuggestion);
