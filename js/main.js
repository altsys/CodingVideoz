const inputs = document.querySelectorAll('.controllers input');

function hundleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', hundleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', hundleUpdate));
