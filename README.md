Se você caiud de paraquedas nesse repositório e não sabe como converter um Objeto para JSON, da uma olhada :

Agora vamos converter esse objeto para JSON

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
    }


]

Usa-se a função JSON.stringfy(obj); 
Ele vai pegar esse objeto e converter para JSON, sendo assim antes ele era obejto e agora vai ser string;



