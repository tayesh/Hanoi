const array1 = [100, 75, 50, 25];
const array2 = [];
const array3 = [];
const towerA = {
    label: 'A',
    element: document.getElementById('A'),
    array: array1
};

const towerB = {
    label: 'B',
    element: document.getElementById('B'),
    array: array2
};

const towerC = {
    label: 'C',
    element: document.getElementById('C'),
    array: array3
}
const hanoiparam = {
    inpo: towerA,
    left: towerA,
    middle: towerB,
    right: towerC,
    fipo:towerC
}

function displayall() {
    display(hanoiparam.left.array,hanoiparam.left.label);
    display(hanoiparam.middle.array,hanoiparam.middle.label);
    display(hanoiparam.right.array,hanoiparam.right.label);
}
displayall();

function clicked(P, Q) {
    const temp = P.array.pop();
    Q.array.push(temp);
    display(P.array, P.element.id);
    display(Q.array, Q.element.id);
    console.log(P.array, Q.array, "clicked");
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 600);
    });
}

function display(array, towerLabel) {
    const towerElement = document.getElementById(towerLabel);
    towerElement.innerHTML = '';
    for (const x in array) {
        const div = document.createElement('div');
        div.classList.add("bg-pink-300", "lg:h-8", "h-4", "rounded", `w-[${array[x]}%]`);
        towerElement.appendChild(div);
    }
}

async function hanoi(n, P, Q, R) {
    if (n === 1) {
        await clicked(P, Q);
        return;
    }
    await hanoi(n - 1, P, R, Q);
    await clicked(P, Q);
    await hanoi(n - 1, R, Q, P);
}



async function clickk() {
    await hanoi(hanoiparam.inpo.array.length, hanoiparam.inpo, hanoiparam.middle, hanoiparam.fipo);
}

function discSetup(a) {
    const temp = 100 / a;
    let b = [];
    let sum = 0;
    for (let i = 0; i < a; i++) {
        sum = sum + temp;
        b[i] = sum;
    }
    b.reverse();
    hanoiparam.inpo.array = b;
    console.log(towerA.array);
    displayall();

}
document.getElementById('option').addEventListener('change', function () {
    const selectedOption = parseInt(this.value);
    discSetup(selectedOption);

});
document.getElementById('option2').addEventListener('change', function () {
    const selectedOption = this.value;
    hanoiparam.left.array=hanoiparam.inpo.array;
        hanoiparam.inpo=hanoiparam.left;
        hanoiparam.middle.array = [];
        hanoiparam.right.array = [];
        console.log(hanoiparam);
        if (selectedOption === 'Middle') {
            hanoiparam.middle.array = hanoiparam.inpo.array;
            hanoiparam.inpo = hanoiparam.middle;
            hanoiparam.left.array = [];
            hanoiparam.right.array = [];
            
        }
        if (selectedOption === 'Right') {
            hanoiparam.right.array = hanoiparam.inpo.array;
            hanoiparam.inpo = hanoiparam.right;
            hanoiparam.left.array = [];
            hanoiparam.middle.array = [];
            hanoiparam.fipo=hanoiparam.left;
            
        }
        displayall();


});
// ocument.getElementById('option2').addEventListener('change', function () {
//     const selectedOption = this.value;
//     hanoiparam.left.array=hanoiparam.inpo.array;
//     hanoiparam.inpo=hanoiparam.left;
//     hanoiparam.middle.array = [];
//     hanoiparam.right.array = [];
//     console.log(hanoiparam);
//     if (selectedOption === 'Middle') {
//         hanoiparam.middle.array = hanoiparam.inpo.array;
//         hanoiparam.inpo = hanoiparam.middle;
//         hanoiparam.left.array = [];
//         hanoiparam.right.array = [];
        
//     }
//     if (selectedOption === 'Right') {
//         hanoiparam.right.array = hanoiparam.inpo.array;
//         hanoiparam.inpo = hanoiparam.right;
//         hanoiparam.left.array = [];
//         hanoiparam.middle.array = [];
//         hanoiparam.fipo=hanoiparam.left;
        
//     }
//     displayall();


// });
// document.getElem
