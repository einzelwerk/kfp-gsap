import { prev } from './Helpers';

const svgClose = `
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L1 7M1 1L7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;

const file = document.querySelector('.js-attached-files');
const dt = new DataTransfer();
const attachedArea = document.querySelector('.attached-files-area');
const placeHolderText = document.querySelector(
  '.career-proposal__file-placeholder-text'
);
const placeHolderTextVal = document.querySelector(
  '.career-proposal__file-placeholder-text'
)?.innerText;

function removeFile(DataTransfer, elem) {
  const name = prev(elem, '.attached-files__item-name').innerHTML;
  elem.closest('.attached-files__item').remove();
  for (let i = 0; i < DataTransfer.items.length; i += 1) {
    if (name === dt.items[i].getAsFile().name) {
      DataTransfer.items.remove(i);
    }
  }
  file.files = DataTransfer.files;

  // eslint-disable-next-line no-use-before-define
  updateForm(DataTransfer);
}

function listener() {
  document.querySelectorAll('.attached-files__item-delete').forEach((elem) => {
    elem.addEventListener('click', () => removeFile(dt, elem));
    elem.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        removeFile(dt, elem);
        e.preventDefault();
      }
    });
  });
}

function updateForm(DataTransfer) {
  if (DataTransfer.files.length > 0) {
    attachedArea.classList.add('has-files');
    placeHolderText.innerText = `${dt.files.length} Dateien hochgeladen`;
  } else {
    attachedArea.classList.remove('has-files');
    placeHolderText.innerText = placeHolderTextVal;
  }
  listener();
}

function addFiles(e) {
  for (let i = 0; i < e.target.files.length; i += 1) {
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
  // eslint-disable-next-line no-restricted-syntax
  for (const fileS of e.target.files) {
    dt.items.add(fileS);
  }
  e.target.files = dt.files;
  updateForm(dt);
}

file?.addEventListener('change', (e) => addFiles(e));
