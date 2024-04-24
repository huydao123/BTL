var avatar = document.querySelector(".avatar");
var avatar_options = document.querySelector(".avatar .avatar_options");
avatar.onclick = function(){
    avatar_options.classList.toggle("hidden");
}
var score_btn = document.querySelector("#score_btn");
var score = document.querySelector(".score");
score_btn.onclick = function(){
    score.classList.toggle("hidden");
}
var scoreboard_select = document.querySelector("#scoreboard_select");
var score = document.querySelector(".score");
var ngu = score.querySelector("tbody");
scoreboard_select.onchange = function(e){
    if(e.target.value == "hk2"){
        ngu.innerHTML = `
            <tr>
                <td>as</td>
                <td>bs</td>
                <td>cs</td>
                <td>ds</td>
                <td>es</td>
                <td>fs</td>
                <td>gs</td>
            </tr>
            <tr>
                <td>as</td>
                <td>bs</td>
                <td>cs</td>
                <td>ds</td>
                <td>es</td>
                <td>fs</td>
                <td>gs</td>
            </tr>
        `;
    }
}