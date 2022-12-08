class Render {
    todo(array, id) {
        
        let html = "";
       
        // console.log(array);
        array.forEach(element => {
            if (!element.done) {
                
                html += `
                <div class="container-mes" >
            <p class="mes">${element.mes}</p>
            <div>
            <a name="" onclick="deleteToDo('${element.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>
            <a name="" onclick="doneToDo('${element.id}','${element.mes}',true)" class="btn btn-primary" href="#" role="button"><i class="fa-regular fa-circle-check"></i></a>
            </div>
            </div>
            
            `
            }
        });
        document.getElementById(id).innerHTML = html;
    }
    completed(array,id) {
        let html = "";
        array.forEach(element => {
            if (element.done) {

                html += `
                <div class="container-mes" >
            <p class="mes">${element.mes}</p>
            <div>
            <a name="" onclick="deleteToDo('${element.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>
            <a name="" onclick="doneToDo('${element.id}','${element.mes}',false)" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-circle-check" style="color:green"></i></a>
            </div>
            </div>
            
            `
            }
        });
        document.getElementById(id).innerHTML = html;
    }
}
export default Render