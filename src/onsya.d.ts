interface IPhoneticScriptTransformOptions {
    startRule: string
    tracer: any
}

interface IPhoneticScriptTransform {
    SyntaxError: any
    parse (input: string, options?: IPhoneticScriptTransformOptions): any
}

declare const transform: IPhoneticScriptTransform
export = transform
