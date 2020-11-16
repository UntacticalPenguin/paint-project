let isdrawing = false;

function create_grid(grid_number){
  let container = document.querySelector(".container");
  container.style['grid-template-columns'] = 'repeat(' + grid_number + ', ' + (768/grid_number) + 'px)';
  container.style['grid-template-rows'] = 'repeat(' + grid_number + ', ' + (768/grid_number) + 'px)';
  for (i = 0; i<((grid_number*grid_number)); i++){
    let element = document.createElement('div');
    element.classList.add('edited_square');
    element.style.width = (768/grid_number) + 'px';
    element.style.height = (768/grid_number) + 'px';
    container.appendChild(element);
    element.addEventListener("mouseover", event =>{
      if (isdrawing === true){
        element.style.backgroundColor = 'green';
      }
    });
    element.addEventListener("mousedown", event =>{
      element.style.backgroundColor = 'green';
      isdrawing = true;
    });
    element.addEventListener("mouseup", event =>{
      isdrawing = false;
    });
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

