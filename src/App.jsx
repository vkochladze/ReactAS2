import { useState } from 'react';

const App = () => {

    function generateUsers() {
        var newArray = new Array(10);
        newArray[0] = '1';
        newArray[1] = '2';
        newArray[2] = '3';
        newArray[3] = '4';
        newArray[4] = '5';
        newArray[5] = '6';
        newArray[6] = '7';
        newArray[7] = '8';
        newArray[8] = '9';
        newArray[9] = '10';

        return newArray;
    }


    const testArray = ['1', '2', '3'];

    function generateRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function delRandUser() {
        let randomIndex = generateRandomIndex(testArray.length);

        setUserCount(userCount.splice(randomIndex, 1));
        console.log(userCount);
    }


    const [userCount, setUserCount] = useState(testArray);


    return (
        <div>

          <ul>
            {userCount.map((value, index) => {
                return (<li key={index}>{value}</li>)
            })}
        </ul>


        <button onClick={delRandUser}>Delete Random User from Array</button>
        </div>
    )
}

export default App;