export function next(elem, selector) {
  const nextElem = elem.nextElementSibling;

  if (!selector) {
    return nextElem;
  }

  if (nextElem && nextElem.matches(selector)) {
    return nextElem;
  }

  return null;
}
export function prev(elem, selector) {
  const prevElem = elem.previousElementSibling;

  if (!selector) {
    return prevElem;
  }

  if (prevElem && prevElem.matches(selector)) {
    return prevElem;
  }

  return null;
}
