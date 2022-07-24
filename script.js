let result = 0;
let operation = '';
let answer = 0;

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
result_Display.style.minHeight = '36px';
result_Display.innerText = '';
main_div.appendChild(result_Display);


// create button function
function numeric_btn_press(number)
{
  if (operation === '')
  {
    result_Display.innerText += number;
  }

  
  else if (operation === '=')
  {
    result_Display.innerText = '';
    operation = '';
  }

  else
  {
    result_Display.innerText = '';
    result_Display.innerText =+number;
  
    if (operation === '+')
    {
      result = result + parseInt(result_Display.innerText);
    }
  
    else if (operation === '-')
    {
      result = result - parseInt(result_Display.innerText);
    }

    else if (operation === 'x')
    {
      result = result * parseInt(result_Display.innerText);
    }

    else if (operation === 'x')
    {
      result = result * parseInt(result_Display.innerText);
    }

    else if (operation === '÷')
    {
      result = result / parseInt(result_Display.innerText);
    }

    operation = '';
  }


}

function record_User_Input()
{
  result = parseInt(result_Display.innerText);
}

function set_operation_addition()
{
  operation = '+';
  console.log('pressed +')
}

function set_operation_deduction()
{
  operation = '-';
  console.log('pressed -')
}

function set_operation_multiplication()
{
  operation = 'x';
  console.log('pressed x')
}

function set_operation_division()
{
  operation = '÷'
  console.log('pressed ÷')

}

function execute_operation()
{
  operation = '=';
  result_Display.innerText = result;
}

// create an input area to store all the number buttons.
const input_container = document.createElement('div');
input_container.style.display = 'grid';
input_container.style.gridTemplateRows = 'repeat(5, 100px)';
input_container.style.gridTemplateColumns = 'repeat(3, 1fr)';

number_pad = [1,2,3,4,5,6,7,8,9,'+',0,'=','-', 'x', '÷']
for (number_icon of number_pad)
{
  const button_div = document.createElement('div');
  button_div.classList.add('button_div');
  button_div.setAttribute('style','display: flex; justify-content: center; align-items: center')
  const number_btn = document.createElement('button');
  number_btn.style.height = '80%';
  number_btn.style.width = '80%';
  number_btn.style.fontSize = '30px';
  number_btn.innerText = number_icon;
  if (typeof(number_icon) === 'number')
  {
    number_btn.addEventListener('click', 
    ()=> numeric_btn_press(number_btn.innerText));
  }
  else if (number_icon === '+')
  {
    number_btn.addEventListener('click', record_User_Input);
    number_btn.addEventListener('click', set_operation_addition);
  }
  else if (number_icon === '-')
  {
    number_btn.addEventListener('click', record_User_Input);
    number_btn.addEventListener('click', set_operation_deduction);
  }

  else if (number_icon === 'x')
  {
    number_btn.addEventListener('click', record_User_Input);
    number_btn.addEventListener('click', set_operation_multiplication);
  }

  else if (number_icon === '÷')
  {
    number_btn.addEventListener('click', record_User_Input);
    number_btn.addEventListener('click', set_operation_division);
  }


  else if (number_icon === '=')
  {
    number_btn.addEventListener('click', execute_operation)
  }
  button_div.appendChild(number_btn)
  input_container.appendChild(button_div);
}
//Create a reset button
const Reset_btn = document.createElement('button')
Reset_btn.innerText = 'AC';
Reset_btn.addEventListener('click', ()=> 
{result = 0; 
operation='';
 answer = 0;
 result_Display.innerText = '';
})
main_div.appendChild(input_container);
main_div.appendChild(Reset_btn);
