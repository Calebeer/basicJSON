const obj = [
    {
        nome: "Matheus",
        idade: 30,
        esta_trabalhando:true,
        detalhes_profissao:{
            profissao:"Progamador",
            empresa:"Empresa x"
        },
        hobbies:["Progamar", "correr", "falar"]
    },
    {
        nome: "João",
        idade: 28,
        esta_trabalhando:null,
        detalhes_profissao:{
            profissao:null,
            empresa:null
        },
        hobbies:["Progamar", "correr", "falar"]
    }


]

console.log(obj);

//JSON
//Converteer objeto para JSON

const jsonData = JSON.stringify(obj);

console.log(jsonData)
console.log(typeof jsonData)

//Converter JSON para objeto
//parse vai transformar de string para objeto
const objData = JSON.parse(jsonData)
console.log(objData)

console.log(typeof objData)