import CallApi from "./callapi.js";
import Render from "./render.js";
import Mes from "./mes.js"
const call = new CallApi("https://637b699c6f4024eac20ce16d.mockapi.io/api/todo")
const render = new Render();
const renderTodo = () => {
    call.getItem()
    .then((response) => {
        render.todo(response.data, "todo")
        render.completed(response.data,"completed")
    })
    .catch((error) => { })
    .finally(() => { })
}
renderTodo()
window.renderTodo = renderTodo

document.getElementById("addItem").onclick = () => {
    const value = document.getElementById("newTask").value;
    if (value === "") {
        alert("Nhập vào ô trống!")
        document.getElementById("newTask").focus();
        return
    }
    const mes = new Mes(value,false);
    call.setItem(mes)
        .then(() => {
            renderTodo()
            document.getElementById("newTask").value = "";
            document.getElementById("newTask").focus();
        })
}
const deleteToDo = (id) => {
    call.delItemById(id)
            .then(() => {
                renderTodo()
                
            })
}
window.deleteToDo = deleteToDo
const doneToDo = (id,message,todo) => {
    const mes = new Mes(message,todo);
    console.log(id);
    console.log(message);
    call.setItemById(mes,id)
        .then(() => {
            renderTodo()
        })

}
window.doneToDo = doneToDo;
const filterAtoZ = () => {
    call.getItem()
    .then((response) => {
        const array = response.data.sort((a,b) => a.mes.localeCompare(b.mes));
        // console.log(response.data.sort((a,b) => a.mes.localeCompare(b.mes)));
        render.todo(array, "todo");
        render.completed(array,"completed");
      
        
    })
    .catch((error) => { })
    .finally(() => { })
}
window.filterAtoZ = filterAtoZ
const filterZtoA = () => {
    call.getItem()
    .then((response) => {
        const array = response.data.sort((a,b) => b.mes.localeCompare(a.mes));
        
        render.todo(array, "todo");
        render.completed(array,"completed");
    })
    .catch((error) => { })
    .finally(() => { })
}
window.filterZtoA = filterZtoA