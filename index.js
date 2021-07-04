// let rocket = document.getElementsByClassName('icon-rocket');

rocket.onmousedown = function (event) {
  let shiftX = event.clientX - rocket.getBoundingClientRect().left;
  let shiftY = event.clientY - rocket.getBoundingClientRect().top;

  rocket.style.position = 'absolute';
  rocket.style.zIndex = 1000;
  document.body.append(rocket);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    rocket.style.left = pageX - shiftX + 'px';
    rocket.style.top = pageY - shiftY + 'px';
  };

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  };

  document.addEventListener('mousemove', onMouseMove);

  rocket.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    rocket.onmouseup = null;
  };
};

rocket.ondragstart = function () {
  return false;
};