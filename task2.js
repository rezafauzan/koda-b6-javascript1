const we = {}
const hello = {}
const obj = {}
const my = []
const num = {}

we.are = {
    the: {
        best: "Koda"
    }
}

hello.world = "Hello World"

obj.str = ['','','',['',['','',{man: [{tech: {academy: "Tech Academy"}}]}]]]

my[0] = {favorite: ['','','',{fruit: {is: "Apple"}}]}

num.first = ['',16]
num.second = []
num.second[2] = 16

console.log(we.are.the.best)
console.log(hello.world)
console.log(obj.str[3][1][2].man[0].tech.academy)
console.log(my[0].favorite[3].fruit.is)
console.log(num.first[1] + num.second[2])