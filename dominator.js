function solution(A) {
    let n = A.length
    let size = 0, candidate
    for (let i=0; i<n; i++) {
        if (size === 0) {
            size++
            candidate = A[i]
        } else if (candidate !== A[i]) {
            size--
        } else size++
    }
    if (size < 1) return -1
    let index, count = 0
    for (let i=0; i<n; i++) {
        if (A[i] === candidate) {
            count++
            index = i
        }
    }
    if (count <= Math.floor(n / 2)) return -1
    return index
}
