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
  coloredButton(page);
}

switchPage(1);

function coloredButton(page){
  switch (page) {
    case 1:
    document.getElementById("firstPageButton").classList.add("w3-black");
    document.getElementById("secondPageButton").classList.remove("w3-black");
    break;
    case 2:
    document.getElementById("secondPageButton").classList.add("w3-black");
    document.getElementById("firstPageButton").classList.remove("w3-black");
    break;

  }
}
