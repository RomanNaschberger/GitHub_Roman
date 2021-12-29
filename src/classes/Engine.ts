import { nsEngine } from "../enum";
import { IntEngine } from "../interfaces/IntEngine";

export default class Engine implements IntEngine {
    _type: nsEngine.enumType;
    _horsepower: number;

    constructor(type:nsEngine.enumType, horsepower:number) {
        this._type = type;
        this._horsepower = horsepower;
    }
}