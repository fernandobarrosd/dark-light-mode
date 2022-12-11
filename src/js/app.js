export const app = {
    domElements: {
        inputSwitch: 
        document.querySelector("input[type=checkbox].input-switch"),
    },

    variables: {
        dataset: document.querySelector("html")
        .dataset,
        localStorage: window.localStorage,
        
    },

    methods: {
        toogleSwitch() {
           const { variables, domElements, methods } = app; 


           if (domElements.inputSwitch.checked) {
                variables.dataset.theme = "dark";
           }
           else {
                variables.dataset.theme = "light";
           }

           methods.updateLocalStorage();

           
        },

        setThemeLocalStorage() {
            const { variables } = app;
            const localStorage = variables.localStorage;
            const dataset = variables.dataset;

            if (localStorage.getItem("theme")) {
                dataset.theme = localStorage.getItem("theme")
            }
            else {
                localStorage.setItem("theme", "light")
            }
        },

        updateLocalStorage() {
            const { variables } = app;
            const localStorage = variables.localStorage;
            const dataset = variables.dataset;

            localStorage.setItem("theme", dataset.theme);
        }

    },

    init() { 
        const { methods, domElements } = app;
        methods.setThemeLocalStorage();
        domElements.inputSwitch.
        addEventListener("click", methods.toogleSwitch);
    }

}