function myUL() {
    var temp;
    temp = 'Red';
    
    document.getElementById('myInput').value = temp;
    
    myFilter(1)

    // 그런데 이게 100만개 있을 땐 어떻게 할 것인가?
}

function myFilter() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        // == 0으로 하면 맨 앞글자만 찾고 > -1로 하면 문자열 내에서 다 찾는다.
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

// 뭔가를 계속 깜빡이게 하는 코드긴 한데
// function blink() {
//     var cursor = true;
//     var speed = 300;
//     setInterval(() => {
//       if(cursor) {
//         document.getElementById('myInput').style.opacity = 0;
//         cursor = false;
//       }else {
//         document.getElementById('myInput').style.opacity = 1;
//         cursor = true;
//       }
//     }, speed);
// }
