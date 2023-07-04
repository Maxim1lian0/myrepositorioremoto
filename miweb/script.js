function showAlert(){ 
    alert('te precento mi primera alerta en javascrip  ')
}
document.getElementById('play-button').addEventListener('click', function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/K8d07oMkxxc';
  iframe.width = '560';
  iframe.height = '315';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  document.getElementById('video-placeholder').appendChild(iframe);
  document.getElementById('video-placeholder').style.display = 'block';
  document.getElementById('play-button').style.display = 'none';
});

const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
     event.preventDefault();
        validateForm();
    });

  
    function validateForm() {
     const emailInput = document.getElementById('email');
     const email = emailInput.value;
     if (!validateEmail(email)) {
       alert('Por favor ingrese un correo electrónico válido.');
     } else {
       alert('Correo electrónico enviado correctamente.');
     }
    }

    function validateEmail(email) {
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
        return regex.test(email)
      }

     document.querySelector("button.button-menu-toggle")
      .addEventListener("click", function() {
     document.querySelector(".nav-links").
      classList.toggle("nav-links-responsive")})

