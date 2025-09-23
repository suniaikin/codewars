document.body.innerHTML = `
  <nav>
    <ul>
      <li class="menu-item">Home</li>
      <li class="menu-item">About</li>
      <li class="menu-item">Contact</li>
    </ul>
  </nav>
`
const menuItem = document.querySelector('.menu-item')
menuItem.classList.add('active')