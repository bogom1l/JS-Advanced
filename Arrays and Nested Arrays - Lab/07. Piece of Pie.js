function solve(array, text1, text2) {
    
    let index1 = array.indexOf(text1);
    let index2 = array.indexOf(text2);
    
    return array.slice(index1, index2 + 1);
}
    

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

console.log('*'.repeat(10));

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));