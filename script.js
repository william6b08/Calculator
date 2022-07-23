const body = document.querySelector('body')
body.style.display = 'flex';
body.style.justifyContent = 'center';
const main_div = document.createElement('div')
main_div.setAttribute('style','border: 1px solid black')
main_div.style.width = '70%';
main_div.style.height = '50%';

body.appendChild(main_div);

// Create a display panel

const result_Display = document.createElement('div');
result_Display.style.textAlign ='center';
result_Display.style.fontSize = '30px';
result_Display.innerText = 'Placeholder for answer';
main_div.appendChild(result_Display);

// create an input area to store all the number buttons.
const input_container = document.createElement('div');
input_container.style.display = 'grid';
input_container.style.gridTemplateRows = 'repeat(4, 100px)';
input_container.style.gridTemplateColumns = 'repeat(3, 1fr)';

for (let i = 0; i < 12; i ++)
{
  const button_div = document.createElement('div');
  button_div.classList.add('button_div');
  button_div.setAttribute('style','display: flex; justify-content: center; align-items: center')
  const number_btn = document.createElement('button');
  number_btn.innerText = i + 1;
  button_div.appendChild(number_btn)
  input_container.appendChild(button_div);
}

main_div.appendChild(input_container);
