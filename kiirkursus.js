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
