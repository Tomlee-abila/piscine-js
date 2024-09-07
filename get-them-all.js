export const getArchitects = () =>{
    return [Array.from(document.getElementsByTagName("a")), document.querySelectorAll("body > :not(a)")]
}

export const getClassical = () => {
    return [Array.from(document.getElementsByClassName("classical")), document.querySelectorAll('body > :not(.classical)')]
}

export const getActive = () => {    
    return [document.querySelectorAll('body .classical.active'),document.querySelectorAll('body .classical:not(.active)')]
}

export const getBonannoPisano = () => {
    return [document.querySelector('body .classical.active#BonannoPisano'),document.querySelectorAll('body .classical.active:not(#BonannoPisano)')]
}