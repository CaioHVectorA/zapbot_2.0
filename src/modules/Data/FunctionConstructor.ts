export type Param = {
  name: string;
  type: string;
};

export class Comando {
  identifier: string[];
  script: Function;
  isAsync: boolean;
  paramList: Param[];
  constructor(
    identifier: string[],
    script: Function,
    isAsync: boolean,
    paramList: Param[]
  ) {
    this.identifier = identifier;
    this.script = script;
    this.isAsync = isAsync;
    this.paramList = paramList;
  }
}
