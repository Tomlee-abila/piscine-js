function dogYears(planate, dogAge){
    const earthYear = 31557600

    const planateAge={
        earth: (dogAge/earthYear) * 7,
        mercury: (dogAge/earthYear) * 7 / 0.2408467,
        venus: (dogAge/earthYear) * 7 / 0.61519726,
        mars: (dogAge/earthYear) * 7 / 1.8808158,
        jupiter: (dogAge/earthYear) * 7 / 11.862615,
        saturn: (dogAge/earthYear) * 7 / 29.447498,
        uranus: (dogAge/earthYear) * 7 / 84.016846,
        neptune: (dogAge/earthYear) * 7 / 164.79132
    }
    return parseFloat(planateAge[planate].toFixed(2))
}