let inpString = "zzzzttteeeqqaao"
let arr = inpString.split("")

const obj = {}
arr.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
})
// console.log(obj)

let objToArr = Object.entries(obj)
objToArr.sort((a, b) => {
    return b[1] - a[1]
})
// console.log(objToArr)

let objSize = []
let objAlpha = []

objToArr.forEach((item) => {
    objAlpha.push(item[0])
    objSize.push(item[1])
})
// console.log(objSize, objAlpha)

let newStr = ""
for (let i = 0; i <= (objToArr.length) - 1; i++) {
    if (objSize[i] === objSize[i + 1]) {
        if (objAlpha[i] > objAlpha[i + 1]) {
            // console.log(objAlpha[i], objAlpha[i+1])
            let temp = objAlpha[i]
            objAlpha[i] = objAlpha[i + 1]
            objAlpha[i + 1] = temp
            // console.log(objAlpha[i], objAlpha[i+1])
            let str = objAlpha[i]
            newStr += str.repeat(objSize[i])
            // console.log(newStr)

        } else {
            // console.log("Hurray")
            let str = objAlpha[i]
            newStr += str.repeat(objSize[i])
            // console.log(newStr)
        }
    } else {
        let str = objAlpha[i]
        newStr += str.repeat(objSize[i])
        // console.log(newStr)
    }
}

console.log("Final Output: "+ newStr)
