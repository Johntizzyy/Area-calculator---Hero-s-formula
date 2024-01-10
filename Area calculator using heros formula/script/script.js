const A = document.querySelector('#a')
            const B = document.querySelector('#b')
            const C = document.querySelector('#c')
            const button = document.querySelector('#btton')
            const answer = document.querySelector('.ans')
            const p = document.querySelector('.pp')
            console.log(A)

            button.addEventListener('click',() => {
                let a = Number(A.value)
                let b = Number(B.value)
                let c = Number(C.value)


                //Area of the triangle
                
                function calcArea (a,b,c) {
                    let s = (a + b + c) / 2
                    // let areaOfTheParcel = Math.sqrt(s(s - a)(s - b)(s - c))
                    // answer.textContent = `${s}`
                    return s
                    // console.log(s)
                    // return result 
                }

                //Area of the parcel
                // function areaOfTheParcel (a,b,c) {
                //     s = (a + b + c) / 2
                //     let result = Math.sqrt(((a + b + c) / 2)(((a + b + c) / 2) - a) (((a + b + c) / 2) - b) (((a + b + c) / 2) - c))
                //     return result
                // }
                const s = (a + b + c) / 2
                function areaOfTheParcel (a,b,c) {
                    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
                    return area
                }

                    console.log(a)
                answer.textContent = `${areaOfTheParcel(a,b,c).toFixed(3)}`
                console.log(answer)
                // if(a===''&& b === '' && c === ''){
                //     p.textContent = ''
                // } else {
                    p.textContent = `To calculate Area of the parcel using Heros formula you need to calcalate the area of the triangle first
                which is calculated as s =(${a} + ${b} + ${c})/2 \t Where s = ${calcArea(a,b,c).toFixed(3)}.
                
                After getting area of the triangle we can now calculate the area of the parcel by using Hero's formula which is the square root of (s(s-a)(s-b)(s-c))
                .
                Now let's solve 
                A = Square root of ${s}*(${s - a} * ${s - b} * ${s - c}), A = Square root of (${s * (s - a) * (s - b) * (s - c)})  
                That is how we arrived at Area of the parcel being equal to ${areaOfTheParcel(a,b,c).toFixed(3)}'`
                // p.style.color = 'red'
            //     }
            })