var mod6Variable: string = "mod6Variable default export from module6";

function mod6Function(): string  {
    return "mod6Function from module6";
}

export default mod6Variable;
export { mod6Function as functionMod6 };