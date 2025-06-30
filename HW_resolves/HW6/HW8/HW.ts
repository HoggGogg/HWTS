
type  coursesArrDur = {title: string, monthDuration: number};

const coursesAndDurationArray: coursesArrDur[] = [

{title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];



const map1 = coursesAndDurationArray
    .sort((a, b):number => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index:number) => ({...value, id: index + 1}));

console.log(map1);