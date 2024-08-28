function getAcceleration(obj){
    if (typeof obj.f === 'number' && typeof obj.m === 'number'){
        return obj.f/obj.m
    }

    if (typeof obj.Δv === 'number' && typeof obj.Δt === 'number'){
        return obj.Δv/obj.Δt
    }

    if (typeof obj.d === 'number' && typeof obj.t === 'number'){
        return (obj.d*2)/(obj.t**2)
    }

    return 'impossible'
}