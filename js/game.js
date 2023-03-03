const quizData = [
    {
        question: "هل تعتقد أن أهم جزء في العمل هي روح الفريق",
        a: "نعم " ,
        
        b: "ربما في بعض الأحيان",
       
        correct: "b",
    },
    {
        question: "لو تواجدت في غرفة مزحمة فهل ",
        a: "تجلس في منتصف الغرفة ",
        b: "تجلس في طرف الغرفة",
        
        
        correct: "b",
    },
    {
        question: "لو صادفتك ظاهرة غريبة",
        a: "تبحث في الأمر ",
        b: "يلفت انتباهك في البداية ثم تتجاهله",
        
        
        correct: "a",
    },
    {
        question: "هل تحب الخروج في الطبيعة و التنزه",
        a: "لا",
        b: "نعم",
        
        
        correct: "b",
    },
    {
        question: "في حال حصولك على مبلغ ",
        a: "تدخره",
        b: "تشتري حاجياتك و تدخر المتبقي",
        
        
        correct: "b",
    },
    {
        question: "عندما تصاب بالتوتر",
        a: "تحاول تهدئة نفسك و تظهر لمن حولك أنك هادئ",
        b: "تفضل العزلة و الجلوس بعيدا",
        
        
        correct: "a",
    },


    {
        question: "تشعر بالراحة عند تواجدك في مكان",
        a: "منعزل",
        b: "مزدحم",
        
        
        correct: "b",
    },
    {
        question: "تجيد العمل بشكل افضل اثناء",
        a: "الليل",
        b: "النهار",
        
        
        correct: "a",
    },
    {
        question: "تفضل الذهاب في رحلة ",
        a: "جبلية",
        b: "بحرية",
        
        
        correct: "b",
    },
    {
        question: "تفضل العيش في ",
        a: "الأماكن الصاخبة",
        b: "الأماكن الهادئة",
        
        
        correct: "b",
    },
    {
        question: "أتيحت لك  فرصة الحصول على قوة خارقة ستختار",
        a: "الإختفاء ",
        b: "الطياران",
        
        
        correct: "b",
    },
    {
        question: "لو قابلت أحد يحتاج المساعدة",
        a: "تهرع في مساعدته",
        b: "تتردد",
        
        
        correct: "a",
    },
    {
        question: "هل تحب المشاركة في الاحاداث و الحفلات الاجتماعية",
        a: "نعم",
        b: "لا",
        
        
        correct: "a",
    },
    {
        question: "لو كان لديك بعض الاغراض القديمة الصالحة للاستعمال",
        a: "تتبرع بها",
        b: "تفكر بطريقة لعرضها للبيع ",
        
        
        correct: "b",
    },

    {
        question: "لحل المشاكل ",
        a: "تفكر خارج الصندوق",
        b: "تفضل الحلول المعتادة و تحاول اخذ نصيحة",
        
        
        correct: "b",
    },



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           
           if(score == 15){
            quiz.innerHTML =
            
             `
           <h2>
           لقد حصلت على 
           Business Development
                </h2>
           <button onclick="location.reload()">
                    إعادة 
            </button>
            
            <button onclick = "location.href='../quiz.html'"  >
                الصفحة الرئيسية
            </button>
           `

           }
            
           else if(score == 14){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Finance
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 13){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Social Media Management
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 12){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Marketing
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 11){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Organizations
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 10){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            E-Marketing
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 9){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Public Relations
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 8){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Project Management
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 7){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Human Resources
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 6){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Event Management
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 5){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Graphic Design
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 4){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Freelance Marketing
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 3){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Programming
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }

           else if(score == 2){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Educational Curricula Formation
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 1){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Scientific Research
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           else if(score == 0){
            quiz.innerHTML =
            `
            <h2>
            لقد حصلت على 
            Freelance Marketing
                 </h2>
            <button onclick="location.reload()">
                     إعادة 
             </button>
             
             <button onclick = "location.href='../quiz.html'"  >
                 الصفحة الرئيسية
             </button>
            `
           }
           
       }
    }
})