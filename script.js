const eye = document.querySelector('.eye');
document.addEventListener('mousemove', (e) => {
  console.log(e);
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const eyeCenterX = eye.getBoundingClientRect().left + eye.getBoundingClientRect().width / 2;
  const eyeCenterY = eye.getBoundingClientRect().top + eye.getBoundingClientRect().height / 2;
  const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
  eye.style.transform = `rotate(${angle * 180 / Math.PI}deg)`;
});
  eye.style.transform = `translate(-50%,-50%) rotate(${angle * 180 / Math.PI}deg)`;
