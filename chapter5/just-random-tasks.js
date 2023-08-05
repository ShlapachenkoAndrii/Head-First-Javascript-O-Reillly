/* Finish the code that first prompts the user to enter a number greater than 0. and then uses
that number as the starting count for a for loop that performs an old movie reel countdown
(4. 3, 2, 1, Roll film!), Also, make sure to validate that the number is really greater than 0 before
performing the countdown. */

function filmCountdown () {
    var count = prompt("Enter a number greater than 0:", "10");

    if (count > 0){ 
        for ( count; count > 0; count--){
            alert(count);
        }
        alert('Roll film!');
    }
    else{
        alert('Please, enter a number greater than 0');
        filmCountdown ();
    }
}

/*Write code to create a seats array for Mandango, and then loop
through the seats in the array, alerting the user to the availability
of each seat.*/

function alertSeatsAvailability() {
    //true is for available seats
    var seats = [true, false, true, false, false, true, false];
    for (var i = 0; i < seats.length; i++){
        if(seats[i])
            alert('Seat ' + (i+1) + ' is available');
        else
            alert('Seat ' + (i+1) + ' is unavailable');
    }
};

/* Task 3: Rewrite the loop code from the film кeel exercise that prompts the user to enter a number greater
        than 0, and then uses that number as the starting count for a loop that performs an old movie
        reel countdown (4, 3. 2, 1, Roll film!). This time use a while loop instead of a for loop. */

function filmCountdown2 (){
    var count = prompt("Enter a number greater than 0:", "10");
    if (count > 0){ 
       while (count>0){
        alert(count);
        count--;
       }
        alert('Roll film!');
    }
    else{
        alert('Please, enter a number greater than 0');
        filmCountdown2 ();
    }
};

/* Task 4 Write code to loop through the seats in the 2-D seats array.
alerting the user to the availability of each seat. */

var seatsAndAvailability =  [[true, false, false, true, false, false, true, false, false],
                            [true, false, true, true, false, true, true, true, false],
                            [true, true, false, true, true, false, true, false, true],
                            [true, false, true, true, true, true, false, true, true]];

function alertSeatsAvailab2DArray(array){
    for (var row = 0; row < array.length; row++){
        for (var itemInRow = 0; itemInRow < array[row].length; itemInRow++){
            if(array[row][itemInRow])
            alert('Row ' + (row+1) + ', Seat ' + (itemInRow+1) + ' is available');
            else
            alert('Row ' + (row+1) + ', Seat ' + (itemInRow+1) + ' is NOT available')
        }
    }
}