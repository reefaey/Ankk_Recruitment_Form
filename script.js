const multiStepForm = document.querySelector("[multi-step-form]");
// const formSteps = [...multiStepForm.querySelectorAll('[data-step]')];
//  //to get all div's with data-step attribute


// let nextStep = document.querySelector('[next-button]')

// let currentStep = formSteps.findIndex(step => {
//     return step.classList.contains('active')});

// console.log(currentStep)

// //so here if the return equal -1 thats mean that no current step was found


// if (currentStep < 0) {
//         currentStep = 0
//         formSteps[currentStep].classList.add('active')
// }

// nextStep.onclick = function () {
//     committees.forEach(element){
//         if(selectField.value == element) {
//             multiStepForm.forEach(element) {
//                 element.classList.remove('active');}
//             }
//         }
//     }
// }


// multiStepForm.addEventListener('click', e => {
//     if (e.target.matches('[next-button]')) {
//         committees.forEach((element) => {
//             if (selectField.value == element) {
//                 multiStepForm.forEach((element) => {element.classList.remove('active');})
//                 document.querySelector(`.${this}-form`).classList.add('active');
//             } else if (e.target.matches('pervious-button')) {
//                 multiStepForm.forEach((element) => {element.classList.remove('active')})
                
//             }
//         })



//         }
//     }
// )


let submitted = false;

const selectField = document.querySelector('select');
let committees = ['hr','operations','project','presentation','logistics','design','photography','content','td','pr','marketing','it']
const pages = document.querySelectorAll('.form');

multiStepForm.addEventListener('click', e => {
    if (e.target.matches('[next-button]')) {
        pages.forEach((element) => {element.classList.remove('active');})
        committees.forEach((element) => {
            if (selectField.value == element) {
                document.querySelector(`.${element}-form`).classList.add("active");
            }
        })

        } else if (e.target.matches('[pervious-button]')) {
            pages.forEach((element) => {
                element.classList.remove('active')
            })
            pages[0].classList.add('active')
        }
    }
)

// let counter = 0;

// let submit = document.querySelector('[type="submit"]');
// submit.onclick = () => {
//     counter=+1;
//     console.log(counter)
// }
