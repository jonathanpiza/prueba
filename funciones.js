
let array = [];

write_table()

function add(){
    const id = document.getElementById("id");
    const name = document.getElementById("name");
    const cant = document.getElementById("cant");
    const price = document.getElementById("price");
    const desc = document.getElementById("desc");
    if(id.value==""){
        id.className="textrecperr"
    }else{
        id.className="textrecp"
    }

    if(name.value==""){
        name.className="textrecperr"
    }else{
        name.className="textrecp"
    }

    if(cant.value==""){
        cant.className="textrecperr"
    }else{
        cant.className="textrecp"
    }

    if(price.value==""){
        price.className="textrecperr"
    }else{
        price.className="textrecp"
    }

    if(desc.value==""){
        desc.className="textrecperr"
    }else{
        desc.className="textrecp"
    }


    if(id.value!=""&&name.value!=""&&cant.value!=""&&price.value!=""&&desc.value!=""){
        const objeto = {
            id: id.value,
            name: name.value,
            cant: cant.value,
            price: price.value,
            desc: desc.value
        }
        array.push(objeto)
        write_table()
        id.value=""
        name.value=""
        cant.value=""
        price.value=""
        desc.value=""
    }
    
}

function write_table(){
    let resultado = document.getElementById("res")
    let result = "";
    for (let index = 0; index < array.length; index++) {
        result+="<tr>";
        result+="<td>"+array[index].id+"</td>";
        result+="<td>"+array[index].name+"</td>";
        result+="<td>"+array[index].cant+"</td>";
        result+="<td>"+array[index].price+"</td>";
        result+="<td>"+array[index].desc+"</td>";
        result+="<td><button class='remove' onclick='remove("+index+")'>Borrar</button></td>";
        result+="</tr>"
    }
    resultado.innerHTML=result
}

function remove(id){
    array.splice(id, 1)
    write_table()
}