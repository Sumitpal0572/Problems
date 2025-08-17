// Electicity bill :- If your unit is 0-100 then price is 4/unit , and if unit is 101-200 then price is 6/unit , and if unit is 201-400 then price is 8/unit, and if unit is above 400 then price is 13/unit.

let unit = 900;
let Amount = 0;

if (unit > 400) {
    Amount = (unit - 400) * 13
    unit = 400
}
if (unit > 200 && unit <= 400) {
    Amount += (unit - 200) * 8
    unit = 200
}
if (unit > 100 && unit <= 200) {
    Amount += (unit - 100) * 6
    unit = 100
}
Amount += (unit * 4)

console.log(Amount);
