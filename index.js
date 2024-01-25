//1
let numbers =[ 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]
function A (arr) {
     sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
}

 result = A (numbers);
console.log(result);


//2
let numbers2 =[ 10, 50, 6, 7, 8, 11, 6, 3, 9]
function B (arr) {
     sum = 0;

    for (let i = 0; i < arr.length; i++) {
    
            sum = sum + arr[i];
        
    }

    return sum;
}

 result = B (numbers2);
console.log(result);

//3

let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
  }

  function C () {
    if(user.isloggedin == true){
        console.log(user.firstname, user.lastname);
    }
    else{
        console.log(false);
    }
  }
  C()

  //4

  let numbers3 = [43, -12, 56 , 17, 93, 99, 15, 73, 10]

function D(arr){
    let Biggest = 0;
    for(let i = 0; i < arr.length; i++){
        if(Biggest < arr[i]){
            Biggest = arr[i]
        }
    }
    return Biggest;
}
result = D (numbers3)
console.log(result);

//5

let number4 = 22;

function E(num){
    if(num % 2 == 0){
        return 'this number is even';
    }
    return 'this number is odd';
}
result = E (number4)
console.log(result);

//6 






//7

let user2 = {
    firstname: 'Guka',
    lastname: 'Japharidze',
    age: 22,
    isloggedin: true
  }

  let F = (user) => {
    if(user.age > 18){
        return 'მომხმარებელი სრულწლოვანია'
    }
    else{
        return 'მომხმარებელი არასრულწლოვანია'
    }
  }
  result = F (user2)
  console.log(result);
  

//8


let number1 = 2;
let number2 = 22;


function G (num1, num2){
    if(num1 > num2){
        console.log('num1 is the largest');
    }
    else if(num2 > num1){
        console.log('num2 is the largest');
    }
    else{
        console.log('error');
    }
}

G (number1, number2)