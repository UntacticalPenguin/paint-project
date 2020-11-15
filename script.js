function create_grid(grid_number){
  let container = document.querySelector(".container");
  container.style['grid-template-columns'] = 'repeat(' + grid_number + ', ' + (768/grid_number) + 'px)';
  container.style['grid-template-rows'] = 'repeat(' + grid_number + ', ' + (768/grid_number) + 'px)';
  for (i = 0; i<((grid_number*grid_number)); i++){
    let element = document.createElement('div');
    element.classList.add('edited_square');
    element.style.width = (768/grid_number) + 'px'
    element.style.height = (768/grid_number) + 'px'
    container.appendChild(element)
  }
}

function delete_grid(){
  let container = document.querySelector(".container");
  while (container.firstChild){
    container.removeChild(container.lastChild);
  }
}

btn_list = document.querySelectorAll("p");
for (btn of Array.from(btn_list)){
  btn.addEventListener("click", event => {
    delete_grid();
    let numbr = parseInt(event.target.textContent);
    create_grid(numbr);
    for (selector_btn of Array.from(btn_list)){
      selector_btn.style.color = "black";
      selector_btn.style.backgroundColor = "white";
    }
    event.target.style.color = "white";
    event.target.style.backgroundColor = "grey";
  })
}

/*let btn_list = document.querySelectorAll('p');

for (btn of Array.from(btn_list)){
  btn.addEventListener("click", event => {
    for (btn_select of Array.from(document.querySelectorAll('p'))){
      btn_select.style.backgroundColor = 'white';
      btn_select.style.color = 'black';
    }
    event.target.style.backgroundColor = 'grey';
    event.target.style.color = 'white';
    create_grid(parseInt(event.target.textContent));
    delete_grid();
  })
}

function delete_grid(){
  delete_list = document.querySelectorAll('.edited_square');
  for (elem of Array.from(delete_list)){
    elem.remove();
  }
}

function create_grid(grid_number){
  let container = document.querySelector(".container");
  container.style['grid-template-columns'] = 'repeat(' + grid_number + ', ' + (768/grid_number) + 'px)';
  container.style['grid-template-rows'] = 'repeat(' + grid_number + ', ' + (768/grid_number) + 'px)';
  for (i = 0; i<((grid_number*grid_number)); i++){
    let element = document.createElement('div');
    element.classList.add('edited_square');
    element.style.width = (768/grid_number) + 'px'
    element.style.height = (768/grid_number) + 'px'
    container.appendChild(element)
  }
  square = document.getElementsByClassName('edited_square');
  square.style.height = (768/grid_number)+'px';
  square.style.width = (768/grid_number)+'px';
  existing = true;
}

*/

