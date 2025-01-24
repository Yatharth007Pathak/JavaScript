// We are given an array of marks of students. Filter out marks of students that score 90+

let marks = [97, 65 ,75, 34, 98, 25, 91, 93];

let toppers = marks.filter((val) => {
    return val > 90;
});

console.log(toppers);