let dataRight = document.querySelectorAll('[data-right]');
let testBtn = document.querySelector('.testBtn');
let answers = [
    '4',
    '1',
    '6',
];
testBtn.addEventListener('click',function(){
  for(let i in answers){
    if(dataRight[i].value == answers[i]){
      dataRight[i].setAttribute('class', 'right');
    }else{
      dataRight[i].setAttribute('class', 'wrong');
    }
  }
});
let questions = [
    'Сколько будет 77+33?',
    'Сколько будет 100^2?',
    'Сколько будет 200*2-200?'
];
let test2 = document.querySelector('#test2');
let testBtn2 = document.querySelector('#testBtn2');
for(let i of questions){
  let div = document.createElement('div');
  let p = document.createElement('p');
  p.textContent = i;
  let input = document.createElement('input');
  div.appendChild(p);
  div.appendChild(input);
  test2.appendChild(div);
}
testBtn2.addEventListener('click', function(){
  check(test2.querySelectorAll('input'));
});
function check(input){
  for(let i in answers){
    if(input[i].value == answers[i]){
      input[i].setAttribute('class', 'right');
    }else{
      input[i].setAttribute('class', 'wrong');
    }
  }
}
