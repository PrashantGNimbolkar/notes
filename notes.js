let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addtext=document.getElementById("addtext");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtext.value="";
    shownotes();

})
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 21.2rem; background-color: rgb(68, 187, 196)">
                <div class="card-body">
                  <h5 class="card-title">Note Number : ${index+1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
                </div>
              </div>
        `

        
    });
    let notesEln=document.getElementById("notes");
    if(notesObj.length!=0){
        notesEln.innerHTML=html;
    }
    else{
        notesEln.innerHTML="<b>Note is empty !!!</b>";
    }
}
function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

