class module5Class  {

    private mod5Message: string = "private variable mod5Message in module5Class in module5"

    public printIt() {
        return this.mod5Message;
    }
}

function module5Function(): string {
    return "module5Function in module5";
}

export { module5Class,module5Function };