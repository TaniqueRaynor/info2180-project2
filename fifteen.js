window.onload = function(){
var  board = document.getElementById("puzzlearea");
var tiles = board.children;
var toptile = 0;
var lefttile = 0;
var Left = 0;
var Top = 0;
var emptyTop = 300;
var emptyLeft = 300;
var prevTop;
var prevLeft;
var tilearea;
var shuffles = [];
var shuffleTimes = 1000;
var j =0;



function move(){
    prevTop = parseInt(this.style.top);
    prevLeft = parseInt(this.style.left);
    if ((prevTop == emptyTop && prevLeft == (emptyLeft-100)) || (prevTop == emptyTop && prevLeft == (emptyLeft+100)) || (prevTop == (emptyTop-100) && prevLeft == emptyLeft) || (prevTop == (emptyTop+100) && prevLeft == emptyLeft)){
        this.style.top = emptyTop + "px";
        this.style.left = emptyLeft + "px";
        emptyTop = prevTop;
        emptyLeft = prevLeft;
    }
}

function movable(){
    prevTop = parseInt(this.style.top);
    prevLeft = parseInt(this.style.left);
    if (prevTop == emptyTop && prevLeft == (emptyLeft-100) || prevTop == emptyTop && prevLeft == (emptyLeft+100) || prevTop == (emptyTop-100) && prevLeft == emptyLeft || prevTop == (emptyTop+100) && prevLeft == emptyLeft){
        $(this).addClass('movablepiece');	
        }
        else{
        $(this).removeClass("movablepiece");
    }
}


while ( j< tiles.length){
    tiles[j].className = "puzzlepiece";
    tiles[j].style.top =  toptile + "px";
    tiles[j].style.left = lefttile + "px";
    tiles[j].style.backgroundPosition = Left + "px " + Top + "px";
    tiles[j].onclick= move;
    tiles[j].onmouseover= movable;
    j++

    if(lefttile < 300){
        lefttile = lefttile + 100;
        Left = Left - 100;
    }
    else{
        lefttile = 0;
        Left = 0;
        toptile = toptile + 100;
        Top = Top - 100;
    }	
}


function Shuffle(){
    for(var c = 0; c < shuffleTimes; c++){
        var choice = Math.floor (Math.random () * 4);
        console.log(choice);
        if ( choice == 0) {
            (getStyle((emptyTop-100)+"px", emptyLeft+"px"))|| getStyle((emptyTop+100)+"px", emptyLeft+"px");
            prevTop = parseInt(tilearea.style.top);
            prevLeft = parseInt(tilearea.style.left);
            tilearea.style.top = emptyTop + "px";
            tilearea.style.left = emptyLeft + "px";
            emptyTop = prevTop;
            emptyLeft = prevLeft;
    }
    else if ( choice == 1) {
        (getStyle(emptyTop+"px", (emptyLeft-100)+"px")) || getStyle(emptyTop+"px", (emptyLeft + 100)+"px");
        prevTop = parseInt(tilearea.style.top);
        prevLeft = parseInt(tilearea.style.left);
        tilearea.style.top = emptyTop + "px";
        tilearea.style.left = emptyLeft + "px";
        emptyTop = prevTop;
        emptyLeft = prevLeft;
    }
    else if ( choice == 2) {
        getStyle((emptyTop+100)+"px", emptyLeft+"px") || (getStyle((emptyTop-100)+"px", emptyLeft+"px"));
        prevTop = parseInt(tilearea.style.top);
        prevLeft = parseInt(tilearea.style.left);
        tilearea.style.top = emptyTop + "px";
        tilearea.style.left = emptyLeft + "px";
        emptyTop = prevTop;
        emptyLeft = prevLeft;
    }
    else {
        getStyle(emptyTop+"px", (emptyLeft + 100)+"px") || (getStyle(emptyTop+"px", (emptyLeft-100)+"px"));
        prevTop = parseInt(tilearea.style.top);
        prevLeft = parseInt(tilearea.style.left);
        tilearea.style.top = emptyTop + "px";
        tilearea.style.left = emptyLeft + "px";
        emptyTop = prevTop;
        emptyLeft = prevLeft;
        }
    }	
}

function getStyle(top, left){
    for(var i =0; i < tiles.length; i++){
        if(tiles[i].style.top==top && tiles[i].style.left==left){
            tilearea = tiles[i];
            return tilearea;	
        }
    }
}
document.getElementById("controls").onclick = Shuffle; 
}