class PersonalTest {
    constructor(target) {
        this.container = document.querySelector(target);
        this.page = 0; // 0: intro, 1: test, 2: result 현재 페이지
        this.progress = 0; // 현재 질문 단계
        this.questions = {
            D: [{question: '나는 돈을 벌기 위해 항상 고민한다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 사람들에게 압력을 가한다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 권력이 높아지는 것에 대한 욕구가 있다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 남들보다 잘하려고 노력한다', answer: {a: '그렇다', b: '아니다'}}],
            I: [{question: '난 농담을 많이 한다', answer: {a: '그렇다', b: '아니다'}},
                {question: '날 처음 만난 사람도 날 좋아했으면 좋겠다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 수다스러운 성격이다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 시끄러운 군중의 일부가 되는 걸 좋아한다', answer: {a: '그렇다', b: '아니다'}}],
            S: [{question: '난 다른 사람의 생각을 비판하는 일을 주저한다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 경쟁보다는 협동을 추구한다', answer: {a: '그렇다', b: '아니다'}},
                {question: '나는 모든 사람들이 평등했으면 좋겠다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 자기자랑을 거의 안 하는 성격이다', answer: {a: '그렇다', b: '아니다'}}],
            C: [{question: '나는 감정적으로 보수적이다', answer: {a: '그렇다', b: '아니다'}},
                {question: '나는 글을 읽을 때 각주나 참고자료들도 읽는 성격이다', answer: {a: '그렇다', b: '아니다'}},
                {question: '난 순서와 규칙성을 좋아한다', answer: {a: '그렇다', b: '아니다'}},
                {question: '어떤 생각이 떠오르면 먼저 그 결점부터 찾는다', answer: {a: '그렇다', b: '아니다'}}],
        }; // 질문 모음
        this.results = []; // 사용자가 선택한 답모음
        this.resultInfors = {
            D: {
                title: "DOMINANT(지배적 유형)",
                desc: "확고하고 야망에 찬 사람<br />독립적이고 스스로 움직이는 사람<br /> " +
                    "문제 해결력이 좋고 위험을 부담할 수 있는 결단력이 있음<br /> " +
                    "MBTI로 치면 뒷부분이 TJ인 경우가 많음<br /> 현 상황에 머무르지 않고 앞으로 나아가는 사람. 혁신적임<br /> " +
                    "논쟁적인 성격과 너무 앞서 나가거나 한 번에 많은 걸 시도하려고 하는 성격<br /> " +
                    "빠른 결과를 위해서라면 남과 협력하는 것을 불필요하게 생각. <br /> 이용당하는 것에 대한 두려움이 있음<br /> " +
                    "힘과 권력, 새로운 것에 동기부여 됨<br /> 어울리는 직업: 기업가, 대표자, 경찰, 변호사, 감독관, 관리 책임자"
            },
            I: {
                title: "INFLUENCT(영향력 유형)",
                desc: "열정적이고 에너지가 넘침<br />남을 즐겁게 잘 하고, 긍정적으로 남을 잘 설득하는 사람<br />" +
                    "감정적이고 충동적인 사람<br />MBTI 중 ENFP/ESFP와 가까움<br />창의적으로 문제를 해결할 줄 아는 사람<br />" +
                    "갈등을 풀고 남들에게 힘이 되어주는 사람<br />형식에 얽매이지 않고 솔직함<br />" +
                    "결과보다는 유행이나 대중적인 것을 따라가는 경향<br />자기 중심적이어서 필요할 때만 남의 말을 들음<br />" +
                    "일의 디테일이 부족한 경우가 있음<br />거절당하는 것에 대한 두려움이 있음<br />" +
                    "남으로부터의 인정과 자유롭고 친화적인 분위기에 동기부여를 받음<br />" +
                    "어울리는 직업: 대관업무분야, 디자이너, 예술가, 음악가, 부동산중개인, 연출가, 여행사, 카피라이터"
            },
            S: {
                title: "STEADINESS(안정적 유형)",
                desc: "남들과 교류할 때 사람들을 존중하고 참을성이 있는 사람<br />좀처럼 흥분하거나 화내지 않는 사람<br />" +
                    "친화적이고 관심을 원하며 남들과 잘 어울리는 team player<br />안정적이며 예측 가능한 편안한 사람<br />" +
                    "MBTI 중 ISFJ, ESFJ, ESFP, or ISFP 와 가까움<br /> 원칙과 규율을 잘 지키며 친화적인 사람 <br />" +
                    "경청할 줄 알며 갈등에 부딪치면 조화롭게 해결하는 사람<br /> 참을성이 있고 믿을 만한 사람<br />" +
                    "변화에 저항하며, 비판에 민감함<br /> 우선순위 매기기를 어려워 함<br />불완전한 상태를 두려워함<br />" +
                    "의리와 소속감, 점진적인 발전에 동기부여를 얻음<br />" +
                    "어울리는 직업: 인사담당자, 상담사, 고객지원, 간호사, 트레이너, 테파피스트,  컨설팅, 소아과 의사"
            },
            C: {
                title: "COMPLIANT(준수자 유형)",
                desc: "정확하고, 사실 기반적이며 높은 기준을 갖고 있음<br />정확하며 구조적임<br />" +
                    "MBTI 중  ISTJ 와 가까움<br />객관적이고 논리적인 사람<br />보수적이어서 남들에게 마음을 열기까지 시간이 필요한 사람<br />" +
                    "현실감각이 뛰어나다<br />인지력이 높으며 다혈질적이지 않고 늘 비슷한 기분이다<br />" +
                    "상황을 분석하고 검토하는 능력이 뛰어남<br />실행가능한 것보다는 완벽한 것을 추구<br />" +
                    "결정을 위해 많은 시간과 정보를 필요로 함<br />단순한 문제를 복잡하게 생각<br />" +
                    "관계에 대해 좀 더 신경을 쓸 필요가 있음<br /> 논리적이고 체계적인 것, 높은 기준과 퀄리티에 동기부여 얻음<br />" +
                    "어울리는 직업: 소프트웨어개발자, 데이터과학자, 엔지니어, 투자분석가, 애널리스트, 시스템관리자"
            }
        }
        this.init();
    }

    init() {
        this.questionArray = this.getQuestion(); // 질문을 배열로 저장

        const answerAButton = this.container.querySelector('button[data-answer="a"]');
        const answerBButton = this.container.querySelector('button[data-answer="b"]');
        const startButton = this.container.querySelector('button[data-action="start"]');
        const restartButton = this.container.querySelector('button[data-action="restart"]');

        answerAButton.addEventListener('click', () => this.submitAnswer(answerAButton.innerText));
        answerBButton.addEventListener('click', () => this.submitAnswer(answerBButton.innerText));
        startButton.addEventListener('click', this.start.bind(this));
        restartButton.addEventListener('click', this.restart.bind(this));


        this.render();
    }

    start() {
        if (this.progress !== 0) return;

        this.page = 1;
        this.render();
    }

    restart() {
        this.page = 0;
        this.progress = 0;
        this.results = [];
        this.render();
    }

    getQuestion() {
        return Object.entries(this.questions)
            .flatMap(([type, questions]) => questions.map(question => ({...question, type})));

    }

    getCurrentQuestions() {
        const currentQuestionIndex = this.progress;
        return this.questionArray[currentQuestionIndex];

    }

    submitAnswer(answer) {
        const currentQuestion = this.questionArray[this.progress];

        if (this.questionArray.length <= this.progress + 1) {
            this.page = 2;
            this.render();
        }

        const selectedAnswer = Object.keys(currentQuestion.answer)
            .find(selectedAnswer => currentQuestion.answer[selectedAnswer] === answer);

        this.results.push({
            type: currentQuestion.type,
            answer: selectedAnswer
        });

        this.progress++;
        this.render();

        return this.getCurrentQuestions();
    }

    calcResult() {
        const totalResult = this.results.reduce((acc, cur) => {
            acc[cur.type] = acc[cur.type] ? acc[cur.type] + (cur.answer === 'a' ? 1 : 0) : (cur.answer === 'a' ? 1 : 0);
            return acc;
        }, {});

        // 각 유형에 대한 'a' 답변 수를 가져옴
        const resultCounts = Object.keys(totalResult).map(type => ({
            type,
            count: totalResult[type]
        }));

        // 결과를 'a' 답변 수로 정렬
        resultCounts.sort((a, b) => b.count - a.count);

        // 가장 많이 선택된 결과를 반환
        return resultCounts[0].type;
    }


    createPersonalResult() {
        const resultType = this.calcResult();
        const result = this.resultInfors[resultType];
        result.type = resultType;
        return result;
    }



    render() {
        const introContainer = this.container.querySelector('.intro_container');
        const testContainer = this.container.querySelector('.test_container');
        const resultContainer = this.container.querySelector('.result_container');

        if (this.page === 0) {
            introContainer.classList.add('active');
            testContainer.classList.remove('active');
            resultContainer.classList.remove('active');

        } else if (this.page === 1) {
            testContainer.classList.add('active');
            introContainer.classList.remove('active');
            resultContainer.classList.remove('active');

            const progressElement = this.container.querySelector('.progress');
            const questionElement = this.container.querySelector('.question');
            const answerAElement = this.container.querySelector('button[data-answer="a"]');
            const answerBElement = this.container.querySelector('button[data-answer="b"]');

            progressElement.textContent = `Q${this.progress + 1}. `;
            questionElement.textContent = this.getCurrentQuestions().question;
            answerAElement.textContent = this.getCurrentQuestions().answer.a;
            answerBElement.textContent = this.getCurrentQuestions().answer.b;

        } else if (this.page === 2) {
            resultContainer.classList.add('active');
            introContainer.classList.remove('active');
            testContainer.classList.remove('active');

            const resultTextElement = this.container.querySelector('.result_text');
            const resultInforTitleElement = this.container.querySelector('.result_infor_title');
            const resultInforElement = this.container.querySelector('.result_infor');

            const personalResult = this.createPersonalResult();
            const calcResult = personalResult.type;

            resultTextElement.innerHTML = `당신의 성향은 <span class="point_text">${calcResult}</span>입니다.`;
            resultInforTitleElement.innerHTML = `[ ${personalResult.title} ]`;

            resultInforElement.innerHTML = personalResult.desc
                .split('<br />')
                .map(el => `<li>${el}</li>`)
                .join('');
        }
    }
}
