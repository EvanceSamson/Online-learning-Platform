const close_btn = document.getElementById("close-btn");
const menu_btn = document.getElementById("menu-btn");
const show_mobile = document.querySelector(".nav-list-link")

menu_btn.addEventListener("click", () => {
    show_mobile.style.display = "flex";
})

close_btn.addEventListener("click", () => {
    show_mobile.style.display = "none";
});

function myfunction(){
    var show = document.getElementById('Password');
    if(show.type==='password'){
        show.type='text';
    }
    else{
        show.type='password';
    }
}


function searchNotes(){
    let input = document.getElementById("searchInput")
    .value.toLowerCase();

    let notes = document.getElementsByClassName("notes");

    for(let i =0; i < notes.length; i++){
        let text = notes[i].innerText.toLowerCase();
        let img = notes[i].querySelector("img");
        if(img){
            text += " " + img.alt.toLowerCase();
        }
        if(text.includes(input)){
            notes[i].style.display = "block";
        }else{
            notes[i].style.display = "none";
        }
    }


}