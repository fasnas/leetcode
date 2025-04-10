/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let x=seats.sort((a,b)=>a-b)
    let y=students.sort((a,b)=>a-b)
    let count=0
    for(i=0;i<seats.length;i++){
        count += Math.abs(y[i]-x[i])
    }
    return count
};