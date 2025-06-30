let nums:number[] = [11,21,3];

function sortNums(nums:any, direction:any):number {
    if (direction === 'ascending') return nums.sort((a, b) => a-b);
    if (direction === 'descending') return nums.sort((a, b) => b-a);
}