export var nsEngine;
(function (nsEngine) {
    let enumType;
    (function (enumType) {
        enumType[enumType["Diesel"] = 0] = "Diesel";
        enumType[enumType["Benzin"] = 1] = "Benzin";
        enumType[enumType["Elktroantrieb"] = 2] = "Elktroantrieb";
    })(enumType = nsEngine.enumType || (nsEngine.enumType = {}));
})(nsEngine || (nsEngine = {}));
export var nsCar;
(function (nsCar) {
    let enumBrand;
    (function (enumBrand) {
        enumBrand[enumBrand["BMW"] = 0] = "BMW";
        enumBrand[enumBrand["Audi"] = 1] = "Audi";
        enumBrand[enumBrand["Vokswagen"] = 2] = "Vokswagen";
    })(enumBrand = nsCar.enumBrand || (nsCar.enumBrand = {}));
})(nsCar || (nsCar = {}));
//# sourceMappingURL=enum.js.map