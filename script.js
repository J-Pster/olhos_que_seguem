const morty = document.getElementById('morty');
const body = document.querySelector('body');
const rekt = morty.getBoundingClientRect();
const mortyX = rekt.left + (rekt.width / 2);
const mortyY = rekt.top + (rekt.height / 2);

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angulo = calculateAngle(mouseX, mouseY, mortyX, mortyY);
  
  // Agora vamos girar os olhos
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angulo}deg)`;
    morty.style.filter = `hue-rotate(${angulo}deg)`;
    body.style.filter = `invert(${Math.abs(angulo) / 180})`;
  });
})

const calculateAngle = (x1, y1, x2, y2) => {
  const dy = y2 - y1;
  const dx = x2 - x1;
  const rad = Math.atan2(dy, dx); // Calcula em radianos [-PI, PI]
  const deg = rad * 180 / Math.PI; // Transforma em graus [-180, 180]
  return deg;
}