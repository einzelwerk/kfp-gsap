export const next = function(elem, selector) {
  var nextElem = elem.nextElementSibling;

  if (!selector) {
    return nextElem;
  }

  if (nextElem && nextElem.matches(selector)) {
    return nextElem;
  }

  return null;
};
export const prev = function(elem, selector) {
  var prevElem = elem.previousElementSibling;

  if (!selector) {
    return prevElem;
  }

  if (prevElem && prevElem.matches(selector)) {
    return prevElem;
  }

  return null;
};
