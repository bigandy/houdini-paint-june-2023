declare namespace CSS {
  namespace paintWorklet {
    export function addModule(url: string): void;
  }
}

// https://github.com/basmilius/latte-ui/blob/2ee4f5de248dd543b31cd2facc870951d723485e/packages/latte-ui/typings/houdini.d.ts#L28
declare function registerPaint(name: string, implementation: any): undefined;
