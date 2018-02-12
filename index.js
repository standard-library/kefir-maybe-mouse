import { Kefir as K } from "kefir";

function supportsHover() {
  try {
    document.createEvent("TouchEvent");
    return false;
  } catch (e) {
    return true;
  }
}

function maybeMouseEnter(element) {
  if (supportsHover()) {
    return K.fromEvents(element, "mouseenter");
  } else {
    return K.never();
  }
}

function maybeMouseLeave(element) {
  if (supportsHover()) {
    return K.fromEvents(element, "mouseleave");
  } else {
    return K.never();
  }
}

exports.maybeMouseEnter = maybeMouseEnter;

exports.maybeMouseLeave = maybeMouseLeave;
