function add(team,addon){
    let score = parseInt(document.getElementsByClassName(team)[0].innerText);
    score+=addon;
    document.getElementsByClassName(team)[0].innerText = score;
    winningTaam()

}
let newgame = () => {
    document.getElementsByClassName("home")[0].innerText = 0;
    document.getElementsByClassName("guest")[0].innerText = 0;
    winningTaam()
}

function winningTaam(){
    let home = parseInt(document.getElementsByClassName("home")[0].innerText);
    let guest = parseInt(document.getElementsByClassName("guest")[0].innerText);
    if(home>guest){
        document.getElementsByClassName('home')[0].style.border = "2px solid green";
        document.getElementsByClassName('guest')[0].style.border = "none";
    }
    else if(home===guest){
        document.getElementsByClassName('guest')[0].style.border = "none";
        document.getElementsByClassName('home')[0].style.border = "none";
    }
    else{
        document.getElementsByClassName('guest')[0].style.border = "2px solid green";
        document.getElementsByClassName('home')[0].style.border = "none";
    }
}

