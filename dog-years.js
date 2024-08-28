function dogYears(planate, dogAge){
    earthYear = 31,557,600

    switch (planate){
        case  "earth":
            return earthYear * 7 * 1 * dogAge
        case  "mercury":
            return earthYear * 7 * 0.2408467 * dogAge
        case  "venus":
            return earthYear * 7 * 0.61519726 * dogAge
        case  "mars":
            return earthYear * 7 * 1.8808158 * dogAge
        case  "jupiter":
            return earthYear * 7 * 11.862615 * dogAge
        case  "saturn":
            return earthYear * 7 * 29.447498 * dogAge
        case  "uranus":
            return earthYear * 7 * 84.016846 * dogAge
        case  "neptune":
            return earthYear * 7 * 164.79132 * dogAge
    }
}