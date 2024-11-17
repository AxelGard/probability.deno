
/**
 * Retruns true or false with a given probability
 * will assert if prob is not between 0-1
 * @param prob - A probability bettween 0-1 
 */
export function probability(prob: number): boolean {
    console.assert(prob >= 0 && prob <= 1, "Error: @param prob - A probability bettween 0-1")
    return Math.random() >= prob
}
