import language from "./../assets/lang/mm.json"

export function lang(key){
    return language[key.toLowerCase()]||key;
}

export function number(n){
    return n.toLocaleString(undefined, {maximumFractionDigits:0})
}
