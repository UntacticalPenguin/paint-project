let grid_number = 128;
let container = document.querySelector(".container");

container.style['grid-template-columns'] = 'repeat(' + grid_number + ', ' + (1024/grid_number) + 'px)';
container.style['grid-template-rows'] = 'repeat(' + grid_number + ', ' + (1024/grid_number) + 'px)';



for (i = 0; i<((grid_number*grid_number)); i++){
  let element = document.createElement('div');
  element.classList.add('edited_square');
  element.style.width = (1024/grid_number) + 'px'
  element.style.height = (1024/grid_number) + 'px'
  container.appendChild(element)
}

document.getElementsByClassName('edited_square').style.height = (1024/grid_number)+'px';
document.getElementsByClassName('edited_square').style.width = (1024/grid_number)+'px';