

export default class Cliente {
    #id: string
    #nome: string
    #idade: string

    constructor( nome:string, idade: string, id: string = null){
        this.#nome = nome
        this.#id = id
        this.#idade = idade
    }

    static vaziu(){
        return new Cliente('', null)
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
}




