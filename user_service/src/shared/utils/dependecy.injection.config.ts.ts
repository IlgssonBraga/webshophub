export class Injection {
    addSingleton<T>(singleton:any,... dependecies:any):T {
        const dependeciesInstances = dependecies.map((dependency:any) => {
            if(typeof dependency === "function"){
                return new dependency
            } 
            return dependency
        })
        return new singleton(...dependeciesInstances)
    }
}