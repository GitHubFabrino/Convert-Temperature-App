import { UNIT } from "../constant";

function getOppositeUnit(unit) {
   // return unit = UNIT.celcius ? UNIT.faranheit : UNIT.celcius
    
    if (unit == UNIT.celcius) {
        return unit =UNIT.faranheit
        
    } else {
        return (unit = UNIT.celcius);
    }
    
}



function convertTemperatureTo(unit, value) {

    if (unit == UNIT.celcius) {
        return (value - 32) / 1.8;
    } else {
        return value * 1.8 + 32;
    }
    
}

function isIceTemperzture(value , unit) {
    if (unit == UNIT.celcius) {
        return value <= 0
    } else {
        return value <= 32;
    }
}

export { isIceTemperzture, getOppositeUnit , convertTemperatureTo}