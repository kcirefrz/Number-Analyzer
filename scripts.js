let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flist');
let res = document.querySelector('div#res');
let values = [];

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Value ${num.value} added.`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Value already in list');
    }
}

function done() {
    if (values.lenght == 0) {
        window.alert('Add values before!');
    } else {
        let tot = values.length;
        let biggest = values[0];
        let lower = values[0];
        let sum = 0;
        let average = 0;
        for(let pos in values) {
            sum += values[pos];
            if (values[pos] > biggest)
                biggest = values[pos];
            if (values[pos] < lower)
                lower = values[pos];
        }
        average = sum  / tot;
        res.innerHTML = '';
        res.innerHTML += `<p>In total, we have ${tot} numbers added.</p>`;
        res.innerHTML += `<p>The biggest value informed was ${biggest}.</p>`;
        res.innerHTML += `<p>The lowest value informed was ${lower}.</p>`;
        res.innerHTML += `<p>Adding all the values, we have ${sum}.</p>`;
        res.innerHTML += `<p>The values average is ${average}.</p>`
        

    }
}