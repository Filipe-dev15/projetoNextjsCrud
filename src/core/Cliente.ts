

export default class Cliente {
    #id: string
    #nome: string
    #idade: Number

    constructor( nome:string, idade: Number, id: string = null){
        this.#nome = nome
        this.#id = id
        this.#idade = idade
    }

    static vaziu(){
        return new Cliente('', 0)
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




