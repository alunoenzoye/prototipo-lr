let Instance = null;

class PageSwitcher {
    #Pages = {};
    #ActivePage = null;

    constructor (){
        // Implementação da singleton pattern.

        if (Instance) {
            throw new Error("Pode ter somente uma instância dessa classe.");
        }

        Instance = this
    }

    init (PageArray, PageObject) {
        this.SetPageArray(PageArray);
        this.#ActivePage = PageObject;
    }

    static GetInstance() {
        return Instance;
    }

    // 
    // PageObject = {
    //     element: "element",
    //     callback: "callback"
    // }
    // 

    SetPageArray(PageArray) {
        if (!(typeof PageArray === "object" && PageArray !== null)) {
            throw new Error("O método SetPagesArray somente aceita objetos.");
        }
        this.#Pages = PageArray;
    }

    ActivatePage(identificator) {
        if (this.#Pages[identificator]) {
            console.log(this.#Pages[identificator])
            // Mandar um callback sinalizando o desativamento
            this.#ActivePage.callback(this.#ActivePage.element, false);

            let PageObject = this.#Pages[identificator];
            let Element = PageObject.element;

            this.#ActivePage = PageObject
            this.#ActivePage.callback(Element, true);
        }
        else {
            throw new Error("Esse objeto não existe.");
        }
    }
}

export { PageSwitcher };