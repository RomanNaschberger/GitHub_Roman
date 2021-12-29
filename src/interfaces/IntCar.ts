import Engine from "../classes/Engine";
import { nsCar } from "../enum";

export interface IntCar {
    _brand: nsCar.enumBrand;
    _model: string;
    _engine: Engine;
}


