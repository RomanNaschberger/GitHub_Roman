import { nsCar } from "../enum";
import { IntCar } from "../interfaces/IntCar";
import Engine from "./Engine";

export default class Car {
    _brand: nsCar.enumBrand;
    _model: string = '';
    _engine: Engine;

    constructor(brand:nsCar.enumBrand, model:string, engine:Engine) {
        this._brand = brand;
        this._model = model;
        this._engine = engine;
    }
}