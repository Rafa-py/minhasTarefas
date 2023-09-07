let controller = ()=>{
    let getData = ()=>{
        let input = document.querySelector(".form");
        input.addEventListener("submit", (event)=>{
            event.preventDefault();
            let data = document.querySelector(".textInput").value;
            saveData(data);
        })
    }
    getData()

    let saveData = (value) =>{
        let index = sessionStorage.length;
        sessionStorage.setItem(index, value);
        showDataToUser(index, value);
        moveBtnDelToDown()
    }

    let showDataToUser = (index, data) =>{
        let div = document.querySelector(".tasks");
    
       //Create elements 
        let form = document.createElement("form");
        let input = document.createElement("input");
        let label = document.createElement("label");


        //Set Attributes 
        form.setAttribute("class", "task");

        input.setAttribute("type", "checkbox");
        input.setAttribute("class", "check");
        input.setAttribute("id", index);

        label.setAttribute("class", "textCheck");
        label.setAttribute("id", "task");
        label.innerText = `${data}`;

        //Create the structure
        form.appendChild(input);
        form.appendChild(label);
        div.appendChild(form);
        clearInput()
    }

    let clearInput = ()=>{
        let input = document.querySelector(".textInput");
        input.value = "";
    }

    let loadSaveData = ()=>{
        let sizeStorage = sessionStorage.length;
        if(sizeStorage > 0 ){
            for (let i = 1; i <= sizeStorage; i++) {
                let index = sessionStorage.key(i-1);
                let data = sessionStorage.getItem(index);
                showDataToUser(index, data);
              }
        }
        
    }
    loadSaveData();

    let clearData = ()=>{
        let btn = document.querySelector(".btnDel");

        btn.addEventListener("click", ()=>{
            sessionStorage.clear();
            let content = document.querySelector(".tasks");
            content.innerHTML = "";
            moveBtnDelToDown(true);
        })
    }
    let moveBtnDelToDown = (del)=>{
        let btn = document.querySelector(".btnDel");
        if(del){
            let newBottom = `50px`;
            btn.style.bottom = newBottom;
        }else{
            let bottomBtn = parseInt(window.getComputedStyle(btn).getPropertyValue("bottom"));
            let newBottom = `${bottomBtn - 30}px`;
            btn.style.bottom = newBottom;
        }
    }
    clearData();
}
controller()