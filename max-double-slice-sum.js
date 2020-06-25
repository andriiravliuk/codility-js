function solution(A) {
    let n = A.length
    if (n === 3) return 0
    const pair = max_slice(A.slice(1, n-1))
    let smallest = pair.sum === 0 ? 0 : A[pair.y]
    if (pair.y - pair.x > 1) {
        for (let i=pair.x; i<pair.y; i++) {
            smallest = Math.min(smallest, A[i])
        }
    }
    let extra = -smallest
    if (pair.x > 2) {
        let left_max = left_sum = 0
        let x = pair.x - 2
        while (x > 0) {
            left_sum += A[x]
            left_max = Math.max(left_max, left_sum)
            x--
        }
        extra = Math.max(extra, left_max)
    }
    if (pair.y < n - 3) {
        let right_max = right_sum = 0
        let y = pair.y + 2
        while (y < n - 1) {
            right_sum += A[y]
            right_max = Math.max(right_max, right_sum)
            y++
        }
        extra = Math.max(extra, right_max)
    }
    return pair.sum + extra
}

function max_slice(A) {
    let max_ending = max_slice = 0
    let left = right = 0
    let res = {
        x: 0,
        y: 0,
        sum: 0,
    }
    for (let i=0; i<A.length; i++) {
        if (max_ending + A[i] >= 0) {
            right = i
            max_ending += A[i]
        } else {
            left = i + 1
            right = i + 1
            max_ending = 0
        }
        if (max_slice <= max_ending) {
            res.x= left + 1
            res.y = right + 1
            max_slice = max_ending
        }
    }
    res.sum = max_slice
    return res
}
