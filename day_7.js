// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F
function abbrevName(name){
    //creating a variable to hole the name
    var initial = [];
      
    var fullname = name.split("");     
    initial.push(fullname[0][0].toUpperCase());
    initial.push(".");
    initial.push(fullname[1][0].toUpperCase());
    console.log(initial);
    var finalName = initial.join("");
    console.log(finalName);
    return finalName;
};

abbrevName("Sam Harris");

