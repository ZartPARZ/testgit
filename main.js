/**
 * Created by ZartPARZ on 2017-04-20.
 */

const word = "Hello, world!";

console.log(word);

let num = 10;
console.log(typeof num);
console.log(`num=${num}`);

let lock = [1,2];
console.log(typeof lock + lock);
console.log(lock[0]);

let obj = { name:"good", id:5};
console.log("id: " + obj.id + " name: " + obj.name);

let k=1;
let j='1';

if(k==j)
{
    console.log("no type checking");
}

if(k===j)
{
    console.log("with type checking");
}

for(let i=0;i<10;i++)
{
    console.log(i);
}

console.log("x"%2);

const line_length = 21;
let data = "";
for(let i=0;i<line_length/2;i++)
{
    data = "";
    for(let j=0;j<line_length;j++)
    {
        if(Math.abs(Math.floor(line_length/2)- j )  < i)
        {
            data += '*';
        }else
        {
            data += ' ';
        }
    }
    console.log(data);
}


function fn1()
{
    console.log("fn1");
}

const fn2 = function ()
{
    console.log("fn2");
};

(function ()
{
    console.log("fn3");
})(); //run imediately

const lampdafn = (arg) =>
{
    console.log("lambda");
};

function comp(vel,dis)
{
    return vel()*dis();
}

console.log(comp((function (){return 1+1;}),(function (){return 2+2;})));

function test_num(num)
{
    if(num%2 === 0)
    {
        console.log("even");
    }else
    {
        console.log("odd");
    }
}

for(let i=0;i<10;i++)
{
    test_num(i);
}

let gObj =
    {
        name: 'G',
        sClass: 'M4/3',
        getName: function(){return this.name},
        getClass: function (){return this.sClass;},
        setName: function (name) {this.name = name;}
    };

