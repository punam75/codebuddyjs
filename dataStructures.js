// level {1/2/3}
import React, from 'React';
/*Convert [1, 2, 3] to [2, 3, 4] using one line of code.
Output should be [2, 3, 4]*/
let fist_array=[1,2,3];
let second_array=[2, 3, 4]
let result=fist_array.replace(second_array);
console.log(result);

/* Calculate total of all the numbers in array [1, 2, 3] using one line of code.
Output should be a number: 6*/
const data=[1,2,3];
        const total=data.reduce((a,b) => a+b ,0);
console.log(total);
/*Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
Output should be a string: "name: Elie, rank: Pro"*/
const list={
    name: 'Elie',
     rank: 'Pro'
};

function App{

    return(

        <div>
            <p>Name: {list.name}</p>
            <p>rank: {list.rank}</p>
        </div>

    )
}
export default App;