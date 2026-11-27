const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos') // o fetch realiza um GET por padrão,não precisamos explicitar
            return await response.json()
        }
        catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

   async salvarPensamentos(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" //Content-Type, informa o tipo de conteúdo que estamos enviando nessa requisição, conteúdo em JSON.
                },
                body: JSON.stringify(pensamento) //Converterá o objeto JavaScript, para o formato de string JSON
            })
            return await response.json()
        }
        catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    }


}

export default api;
