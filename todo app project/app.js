const input = document.querySelector("#input")
const ol = document.querySelector("#ol")


input.innerHTML = [];


function todorender() {
  for (let i = 0; i < input.innerHTML.length; i++)
ol.innerHTML = `<li>${input.innerHTML[i]}
      <button>delet</button>
      <button>edit</button>
  </li>`
}





todorender();