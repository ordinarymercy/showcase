

function darkMode() {  
  var element = document.body;
  console.log(element.classList);
element.classList.toggle("dark-mode");
}

function changeSizeByBtn(size) {
    var elements = document.getElementsByClassName("fontSizeClass");
    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.fontSize = size;
    console.log(element.style.fontSize);}
  }

  function myFunction() {
    var element = document.body;
  element.classList.toggle("dark-mode");
}

function toggleDisplay(elem) {
  if (getComputedStyle(elem).display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleDetail(e) {
  const title = e.currentTarget;
  const detail = title.nextElementSibling;
  toggleDisplay(detail);
  const chevron = title.querySelector('.chevron');
  chevron.classList.toggle('fa-chevron-down');
  chevron.classList.toggle('fa-chevron-up');
}

/*window.addEventListener('load', function(e) {
  const titles = document.querySelectorAll('.title');
  for (title of titles) {
    title.addEventListener('click', toggleDetail);
  }
});*/

window.addEventListener('load', function(e) {
  const titles = document.querySelectorAll('.title');
  for (title of titles) {
    title.addEventListener('click', toggleDetail);
  }
  });


  