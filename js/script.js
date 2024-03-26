class Book{
    constructor(){
        let author = document.querySelector("#author").value; 
        let title = document.querySelector("#title").value;
        let num_pages = document.querySelector("#num_pages").value;    
    
        this.author = author;
        this.title = title;    
        this.num_pages = num_pages;         
        this.read = false;
    }    
}

function addBookToLibrary(){    
    myLibrary.push(new Book());    
    console.log(myLibrary);
}

function displayBooks(){
    const table = document.createElement("table");
    table.addEventListener("click", function(e){
        if(e.target.classList.contains("delete-btn")){            
            let td = e.target.parentElement;    
            let tr = td.parentElement;
            let index = tr.dataset.index;
            tr.remove();
            myLibrary.splice(index, 1);                   
            console.log(myLibrary);
        }
        else if(e.target.classList.contains("read-btn")){            
            let td = e.target.parentElement;    
            let tr = td.parentElement;
            tr.classList.toggle("read-book");
            let index = tr.dataset.index;            
            
            console.log(tr.classList);

            if(tr.classList.contains("read-book")){
                myLibrary[index]['read'] = true;
            }
            else{
                myLibrary[index]['read'] = false;
            }
            
            console.log(myLibrary[index]['read']);
        }
    });

    for(let i = 0; i < myLibrary.length; i++){
        let tr = document.createElement("tr");
        for(let key in myLibrary[i]){
            if(key != "read"){
                let td = document.createElement("td");
                td.textContent = myLibrary[i][key];
                tr.appendChild(td);
            }            
        }        
        let delete_btn = document.createElement("button");        
        delete_btn.textContent = "Delete";
        delete_btn.classList.add("delete-btn");
        
        let read_btn = document.createElement("button");
        read_btn.textContent = "Readed";
        read_btn.classList.add("read-btn");
        
        td = document.createElement("td");        
        td.appendChild(delete_btn);            
        tr.appendChild(td);
        
        td = document.createElement("td");        
        td.appendChild(read_btn);            
        tr.appendChild(td);

        tr.dataset.index = i;                
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

const myLibrary = [];
const dialog = document.querySelector("dialog");
const btn = document.querySelector("#add-book");
const add_book_btn = document.querySelector("#add-book-btn");
const close_btn = document.querySelector("#close-btn");
const form = document.querySelector("dialog > form");

btn.addEventListener("click", function(){
    dialog.showModal();    
});

add_book_btn.addEventListener("click", function(e){
    const table = document.querySelector("table");
    if(table){
        table.remove();
    }    
    addBookToLibrary();    
    displayBooks();
});

close_btn.addEventListener("click", function(e){    
    let author = document.querySelector("#author");
    author.value = '';

    let title = document.querySelector("#title");
    title.value = '';

    let num_pages = document.querySelector("#num_pages");    
    num_pages.value = '';

    dialog.close();    
});

form.addEventListener("submit", function(e){
    e.preventDefault();        
});