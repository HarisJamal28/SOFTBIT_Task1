const numbers = document.getElementById('Numbers');
const operators = document.getElementById('Operations');
const rscreen = document.getElementById('RScreen');
const screen = document.getElementById('Screen');
const commands = document.getElementById('Commands');
const history = document.getElementById('History');

OperatorsArray = ['+','-','*','/','='];
CommandsArray = ['C','CE','%','.']



for (let i = 1; i <= 10; i++) {
    let NumButtons = document.createElement('button');
    if(i==10){
        NumButtons.setAttribute('id','0');
        NumButtons.innerText = 0;
    }else{
    NumButtons.setAttribute('id',i);
    NumButtons.innerText = i;
    }
    NumButtons.addEventListener('click',()=>{
        if(i==10){
            screen.innerText += 0;
        }else{
            screen.innerText += `${i}`;
            console.log(i)
        }
    });
    numbers.appendChild(NumButtons);
}

for (let i = 1; i <= OperatorsArray.length; i++) {

    if(i==OperatorsArray.length){
        let OPButtons = document.createElement('button');
        OPButtons.setAttribute('id',OperatorsArray[i]);
        OPButtons.innerText = OperatorsArray[i-1];
        OPButtons.addEventListener('click',()=>{
            if(screen.innerText==''){

            }else{
            rscreen.innerText = '';
            let y = screen.innerText;
            let x = eval(screen.innerText);
            screen.innerText = '';
            rscreen.innerText = x;
            CalcHistory(y);
                
            }
        })
        operators.appendChild(OPButtons);

    }else{

    let OPButtons = document.createElement('button');
    OPButtons.setAttribute('id',OperatorsArray[i-1]);
    OPButtons.innerText = OperatorsArray[i-1];
    OPButtons.addEventListener('click',()=>{
        // if(i>1){
        screen.innerText += `${OperatorsArray[i-1]}`;
        // }else{

        // }
    });
    operators.appendChild(OPButtons);
}
}

for(let i=0;i<CommandsArray.length;i++){
    let CommButtons = document.createElement('button');
    CommButtons.setAttribute('id',CommandsArray[i]);
    CommButtons.innerText = CommandsArray[i];
    commands.appendChild(CommButtons);

    // CommButtons.addEventListener('click',()=>{
    //     screen.innerText += CommandsArray[i];
    // })
}

let Clear = document.getElementById('C');
    Clear.addEventListener('click',()=>{
        rscreen.innerText = '';
        screen.innerText = '';
    })

let Delete = document.getElementById('CE');
    Delete.addEventListener('click',()=>{
        // let x = screen.innerText
    })

let Percentage = document.getElementById('%');
    Percentage.addEventListener('click',()=>{
        Percent();
    })

let Backspacing = document.getElementById('CE')
    Backspacing.addEventListener('click',()=>{
        Backspace();
    })

let Decimal = document.getElementById('.');
    Decimal.addEventListener('click',()=>{
        screen.innerText += '.';
    })

function CalcHistory(Eqn){
    let listitem = document.createElement('li');
    listitem.innerText = `${Eqn} = ${rscreen.innerText}`;
    history.appendChild(listitem);
}

function Percent(){
    if(screen.innerText==''){

    }else{
    let x = parseFloat(screen.innerText);
    let y = x/100;
    screen.innerText = y;
    }
}

function Backspace(){
    screen.innerText = screen.innerText.slice(0, -1);
}