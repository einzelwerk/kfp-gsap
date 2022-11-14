import {prev} from './Helpers';

const svgClose = `
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L1 7M1 1L7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;

const file = document.querySelector('.js-attached-files');
const dt = new DataTransfer();
const attachedArea = document.querySelector('.attached-files-area');
const placeHolderText = document.querySelector('.career-proposal__file-placeholder-text');
const placeHolderTextVal = document.querySelector('.career-proposal__file-placeholder-text')
  ?.innerText;

function updateForm(dt) {
  if (dt.files.length > 0) {
    attachedArea.classList.add('has-files');
    placeHolderText.innerText = `${dt.files.length} Dateien hochgeladen`;
  } else {
    attachedArea.classList.remove('has-files');
    placeHolderText.innerText = placeHolderTextVal;
  }
  document.querySelectorAll('.attached-files__item-delete').forEach(elem => {
    elem.addEventListener('click', e => removeFile(dt, elem));
    elem.addEventListener('keydown', e => {
      if (e.key === ' ') {
        removeFile(dt, elem);
        e.preventDefault();
      }
    });
  });
}

function addFiles(e) {
  for (let i = 0; i < e.target.files.length; i++) {
    const fileWrap = `<span class='attached-files__item-name'>${e.target.files[i].name}</span>`;
    const fileItem = document.createElement('span');
    fileItem.classList.add('attached-files__item');
    const fileArea = document.querySelector('.attached-files');
    fileItem.insertAdjacentHTML('beforeend', fileWrap);
    fileItem.insertAdjacentHTML(
      'beforeend',
      `<span class="attached-files__item-delete" role="button" tabindex="0" title="Datei löschen">${svgClose}</span>`
    );
    fileArea.append(fileItem);
  }
  for (let file of e.target.files) {
    dt.items.add(file);
  }
  e.target.files = dt.files;
  updateForm(dt);
}

function removeFile(dt, elem) {
  const name = prev(elem, '.attached-files__item-name').innerHTML;
  elem.closest('.attached-files__item').remove();
  for (let i = 0; i < dt.items.length; i++) {
    if (name === dt.items[i].getAsFile().name) {
      dt.items.remove(i);
    }
  }
  file.files = dt.files;

  updateForm(dt);
}

file?.addEventListener('change', e => addFiles(e));
