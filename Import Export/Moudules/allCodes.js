export function plus(a, b) {
    if (a & b) return +a + +b
    else return 0
}
export function minus(a, b) {
    if (a & b) return a - b;
    else return 0
}
export function zarb(a, b) {
    if (a & b) return a * b;
    else return 0
}
export function taqsim(a, b) {
    if (a & b) return a / b;
    else return 0
}
function factorial(n) {
    if (n <= 0) return 1
    else return factorial(n - 1) * n
}
export default factorial