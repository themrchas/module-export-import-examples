 
 export var exportedNumber:number = 7;

 export function exportFunction(): string {
     return `Using a 'template string', the module variable 'localVariable' has value of ${localVariable}`;
 }

function renamedExport():string {
    return "A exported function called 'renamedExport' exported as 'functionRenameExport'"
}

 //This varibale is local to this module. Cannot be accessed outside of module
 var localVariable: number = 10;

 export { renamedExport as functionRenameExport};