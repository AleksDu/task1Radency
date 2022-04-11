import handbasket from '../images/handbasket.png';
import evolution from '../images/evolution.png';
import feature from '../images/feature.png';
import william from '../images/william.png';
import edit from '../images/edit.png';
import archive from '../images/archive.png';
import deleteIt from '../images/deleteIt.png';
import data from '../data.json';

export function noteCategory() {
  const storage = getData();
  let html = '';
  storage.forEach(category => {
    const key = Object.keys(category);
    html += `
    ${key
      .map(el => {
        return `
        <tr id="${el.id}" class='archived'>
        <td><img class="noteIcon" src='${el.name}' alt='note' width='30' height='30' /></td>
<td>${el}</td>
 <td>${category[key].active}</td>
<td>${category[key].archived}</td>`;
      })
      .join('')}
`;
  });
  return html;
}

function getData() {
  const allCategories = data.map(item => item.category);
  const uniqueCategories = [...new Set(allCategories)];
  const filteredCategories = uniqueCategories.map(uniqueCategory => {
    const cat = {
      [uniqueCategory]: {
        active: 0,
        archived: 0,
      },
    };
    data.forEach(item => {
      if (item.category === uniqueCategory) {
        cat[uniqueCategory].active += 1;
      }
    });
    data.forEach(item => {
      if (item.category === uniqueCategory && item.isActive === 'false') {
        cat[uniqueCategory].archived += 1;
        cat[uniqueCategory].active -= 1;
      }
    });

    return cat;
  });
  return filteredCategories;
}

// export function noteCategory(
//   data,
//   editNoteId,
//   taskActiveEl,
//   taskArchivedEl,
//   randomActiveEl,
//   randomArchivedEl,
//   ideaActiveEl,
//   ideaArchivedEl,
//   quoterActiveEl,
//   quoterArchivedEl,
// ) {
//   console.log(data);
//   let note = '';
//   let activeEl = '';
//   let archivedEl = '';

//   return data
//     .map(el => {
//       switch (el) {
//         case 'Task':
//           note = handbasket;
//           activeEl = taskActiveEl.length;
//           console.log(taskActiveEl);
//           archivedEl = taskArchivedEl.length;

//           break;
//         case 'Random Thought':
//           note = evolution;
//           activeEl = randomActiveEl.length;
//           archivedEl = randomArchivedEl.length;
//           break;
//         case 'Idea':
//           note = feature;
//           activeEl = ideaActiveEl.length;
//           archivedEl = ideaArchivedEl.length;
//           break;
//         case 'Quote':
//           note = william;
//           activeEl = quoterActiveEl.length;
//           archivedEl = quoterArchivedEl.length;
//           break;
//         default:
//           note = handbasket;
//           break;
//       }
//       return `<tr id="${el.id}" class='archived'>
//   <td><img class="noteIcon" src='${note}' alt='note' width='30' height='30' /></td>
//   <td>${el}</td>
//   <td>${activeEl}</td>
//   <td>${archivedEl}</td>

// </tr>`;
//     })
//     .join('');
// }

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
  <td><img  src='${archive}' alt='archive' width='30' height='30' />archived</td>
  <td><img  src="${deleteIt}" alt='delete' width='30' height='30' /></td>
</tr>`;
    })
    .join('');
}
