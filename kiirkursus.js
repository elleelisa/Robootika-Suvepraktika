function switchPage(page) {
  switch(page){
    case 1:
    document.getElementById("firstPage").style.display = "block";
    document.getElementById("secondPage").style.display = "none";
    break;
    case 2:
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    break;
  }
}

switchPage(1);

/*function coloredButton(){
  if (getElementById("firstPage") === true){
    getElementById("firstPageButton").class = "w3-button w3-black";
  } else {
    getElementById("secondPageButton").class = "w3-button w3-black";
  }
}*/
