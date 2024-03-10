document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('containerP');
  const rectangle = document.getElementById('rectangleP');

  if (container && rectangle) {
      container.addEventListener('mousemove', (event) => {
          const xRotation = (event.clientY / window.innerHeight - 1) * -50;
          const yRotation = (event.clientX / window.innerWidth - 1 ) * 100;

          rectangle.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      });
  } else {
      console.error('Container or rectangle element not found');
  }
});
