let index = 0
function AdicionarTec(){



    //indice do id:
    

    const section = document.getElementById('tecContainer')
    //criação da div:
    const div = document.createElement("div")
    div.id = index
    div.className = "tecDiv"
    //label do nome:
    const labelName = document.createElement("label")
    labelName.id = "labelName"
    labelName.name = "labelName"
    labelName.className = "label"
    labelName.innerText = "Tecnologia"
    //input da tecnologia:
    const tecSelect = document.createElement("select")
    tecSelect.id = "addTec"
    tecSelect.className = "tec-input"
    //opoçoes de tecnologia:
    const optionNone = document.createElement("option")
    optionNone.value = ""
    optionNone.disabled = true
    optionNone.selected = true
    const javascript = document.createElement("option")
    javascript.value = "JavaScript"
    javascript.innerText ="JavaScript"
    const python = document.createElement("option")
    python.value = "Python"
    python.innerText ="Python"
    const Java = document.createElement("option")
    Java.value = "Java"
    Java.innerText ="Java"
    const C = document.createElement("option")
    C.value = "C"
    C.innerText ="C"
    const Html = document.createElement("option")
    Html.value = "Html"
    Html.innerText ="Html"
    const Css = document.createElement("option")
    Css.value = "Css"
    Css.innerText ="Css"
    const Outros = document.createElement("option")
    Outros.value = "Outros"
    Outros.innerText ="Outros"

    //label e input de experiencia:
    const label = document.createElement("label")
    label.id = "xp"
    label.name = "xp"
    label.className = "label"
    label.innerText = "Experiencia"
    //select
    const select = document.createElement("select")

    select.id = "xp"
    select.className = "select"
    select.name = "xp"
    //options
    const option0 = document.createElement("option")
    option0.value = ""
    option0.disabled = true
    option0.selected = true
    const option1 = document.createElement("option")
    option1.value = "Menos de um ano"
    option1.innerText = "menos de 1 Ano"
    const option2 = document.createElement("option")
    option2.value = "Entre um e dois anos"
    option2.innerText = "1 a 2 Anos"
    const option3 = document.createElement("option")
    option3.value = "A mais de 2 anos"
    option3.innerText = " mais de 2 anos"
    //botão de remover:
    const removeButton = document.createElement("button")
    removeButton.id= "removeButton"
    removeButton.className = "remove-button"
    removeButton.innerText = "X"
    removeButton.addEventListener("click", function(){
        section.removeChild(div)
    })

    index ++
//opçao de outros:


    //append:
    tecSelect.append(optionNone,javascript,C,Java,python,Html,Css,Outros)
    select.append(option0,option1, option2, option3)
    div.append(labelName,tecSelect,label,select,removeButton)
    section.appendChild(div)
    
}

function Cadastrar(){
    //Linkagens do botão de cadastro
const perfil = document.getElementById("confirmDiv")
const firstName = document.getElementById('firstName')
const secondName = document.getElementById("secondName")
const birthday = document.getElementById("date")
const gender = document.querySelector('input[id="gender"]:checked').value
const date = [birthday.value]
const datetoString = date[0]
const year = Number(datetoString[0] + datetoString[1] + datetoString[2] + datetoString[3])
const name = firstName.value
const surname =  secondName.value

if(name == ""){
    alert("Preencha todas as informações para o cadastro")
}else{
    //Nome
const h1 = document.createElement("h1")
h1.className = "name"
h1.innerText= name + " " + surname
//Idade
const Age = document.createElement("h2")
Age.className= "age"
Age.innerText = `${2023 - year} Anos`
//Generoa
const genderValue = document.createElement("h3")
genderValue.className= "gender"
genderValue.innerText= `${gender}`

const confirm = document.createElement("button")
confirm.id = "confirmbtn"
confirm.className = "btn-confirm"
confirm.innerText = "Confirmar"
confirm.addEventListener("click",function(){
    self.location.reload();
})






perfil.append(h1,Age,genderValue,confirm)
}
}
