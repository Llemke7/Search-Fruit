// script.js
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', /* ... list of fruits ... */ 'Tamarind', 'Yuzu'];

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
