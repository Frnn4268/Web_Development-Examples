const columns = document.querySelectorAll('.column');
const addColumnButton = document.getElementById('addColumn');

columns.forEach(column => {
  column.addEventListener('dragover', e => {
    e.preventDefault();
  });

  column.addEventListener('drop', e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain');
    const card = document.getElementById(cardId);
    column.appendChild(card);
  });
});

let cardIdCounter = 0;

function createCard(column) {
  const card = document.createElement('div');
  card.className = 'card';
  card.draggable = true;
  card.id = `card${cardIdCounter}`;
  card.textContent = `Tarea ${cardIdCounter}`;
  
  card.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', card.id);
  });

  column.appendChild(card);
  cardIdCounter++;
}

addColumnButton.addEventListener('click', () => {
  const newColumn = document.createElement('div');
  newColumn.className = 'column';
  const columnName = prompt('Ingrese el nombre de la nueva columna:');
  newColumn.innerHTML = `<h2>${columnName}</h2>`;
  
  newColumn.addEventListener('dragover', e => {
    e.preventDefault();
  });

  newColumn.addEventListener('drop', e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain');
    const card = document.getElementById(cardId);
    newColumn.appendChild(card);
  });

  columns[columns.length - 1].insertAdjacentElement('afterend', newColumn);
});

const addTaskButtons = document.querySelectorAll('.add-task-button');

addTaskButtons.forEach((button, columnIndex) => {
  button.addEventListener('click', () => {
    const taskTitle = prompt('Ingrese el título de la tarea:');
    const taskDescription = prompt('Ingrese la descripción de la tarea:');
    
    if (taskTitle && taskDescription) {
      createCard(columns[columnIndex], taskTitle, taskDescription);
    }
  });
});

function createCard(column, taskTitle, taskDescription) {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    card.id = `card${cardIdCounter}`;
    
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = taskTitle;
    
    const cardDescription = document.createElement('p');
    cardDescription.textContent = taskDescription;
    
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    
    card.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', card.id);
    });
  
    column.appendChild(card);
    cardIdCounter++;
  }

createCard(columns[0]);
createCard(columns[1]);
createCard(columns[2]);
