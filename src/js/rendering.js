import handbasket from '../images/handbasket.png';
import evolution from '../images/evolution.png';
import feature from '../images/feature.png';
import william from '../images/william.png';
import edit from '../images/edit.png';
import archive from '../images/archive.png';
import deleteIt from '../images/deleteIt.png';

export function noteCategory(
  data,
  editNoteId,
  taskActiveEl,
  taskArchivedEl,
  randomActiveEl,
  randomArchivedEl,
  ideaActiveEl,
  ideaArchivedEl,
  quoterActiveEl,
  quoterArchivedEl,
) {
  let note = '';
  let activeEl = '';
  let archivedEl = '';

  return data
    .map(el => {
      switch (el) {
        case 'Task':
          note = handbasket;
          activeEl = taskActiveEl.length;
          archivedEl = taskArchivedEl.length;
          break;
        case 'Random Thought':
          note = evolution;
          activeEl = randomActiveEl.length;
          archivedEl = randomArchivedEl.length;
          break;
        case 'Idea':
          note = feature;
          activeEl = ideaActiveEl.length;
          archivedEl = ideaArchivedEl.length;
          break;
        case 'Quote':
          note = william;
          activeEl = quoterActiveEl.length;
          archivedEl = quoterArchivedEl.length;
          break;
        default:
          note = handbasket;
          break;
      }
      return `<tr id="${el.id}" class='archived'>
  <td><img class="noteIcon" src='${note}' alt='note' width='30' height='30' /></td>
  <td>${el}</td>
  <td>${activeEl}</td>
  <td>${archivedEl}</td>
  
  
</tr>`;
    })
    .join('');
}

export function noteCategoryEl(data) {
  let note = '';

  const btnSub = document.getElementById('sbtBtn');
  btnSub.classList.remove('isHidden');

  return data
    .map(el => {
      switch (el.category) {
        case 'Task':
          note = handbasket;
          break;
        case 'Random Thought':
          note = evolution;
          break;
        case 'Idea':
          note = feature;
          break;
        case 'Quote':
          note = william;
          break;
        default:
          note = handbasket;
          break;
      }
      return `<tr id="${el.id}" class='active'>
  <td><img class="noteIcon" src='${note}' alt='note' width='30' height='30' /></td>
  <td>${el.name}</td>
  <td>${el.created}</td>
  <td>${el.category}</td>
  <td>${el.сontent}</td>
  <td>${el.dates}</td>
  <td><img  src='${edit}' alt='edit' width='30' height='30' /></td>
  <td><img  src='${archive}' alt='archive' width='30' height='30' /></td>
  <td><img  src="${deleteIt}" alt='delete' width='30' height='30' /></td>
</tr>`;
    })
    .join('');
}

export function archivedMarkupEl(data) {
  let note = '';
  return data
    .map(el => {
      switch (el.category) {
        case 'Task':
          note = handbasket;
          break;
        case 'Random Thought':
          note = evolution;
          break;
        case 'Idea':
          note = feature;
          break;
        case 'Quote':
          note = william;
          break;
        default:
          note = handbasket;
          break;
      }
      return `<tr id="${el.id}" class='archived'>
  <td><img class="noteIcon" src='${note}' alt='note' width='30' height='30' /></td>
  <td>${el.name}</td>
  <td>${el.created}</td>
  <td>${el.category}</td>
  <td>${el.сontent}</td>
  <td>${el.dates}</td>
  <td><img  src='${edit}' alt='edit' width='30' height='30' /></td>
  <td><img  src='${download}' alt='download' width='30' height='30' />archived</td>
  <td><img  src="${deleteIt}" alt='delete' width='30' height='30' /></td>
</tr>`;
    })
    .join('');
}