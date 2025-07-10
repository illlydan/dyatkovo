const layout = document.querySelector(".quiz__layout");

const Quiz = () => {
  const quizBtn = document.querySelectorAll(".quiz-open");
  const quizCloseBtn = document.querySelector(".quiz__close");
  const quizStepsBlocks = document.querySelectorAll(".quiz__step");
  const quizBody = document.querySelector(".quiz__body");

  const infoBtn = document.querySelectorAll(".info-open");
  const infoBody = document.querySelector(".info__body");

  let quizStep;

  const quizInit = () => {
    document.documentElement.classList.add("lock")
    layout.classList.add("active");
    layout.addEventListener("click", overflowClick);

    if (infoBody.classList.contains("active")) {
      infoBody.classList.remove("active");
    }
    if (!quizBody.classList.contains("active")) {
      quizBody.classList.add("active");
    }

    quizStep = 0;
    quizStepToggle(quizStep);
    quizClickListeners(quizStepsBlocks);
  };

  const infoInit = () => {
    document.documentElement.classList.add("lock")
    layout.classList.add("active");
    layout.addEventListener("click", overflowClick);

    if (quizBody.classList.contains("active")) {
      quizBody.classList.remove("active");
    }
    if (!infoBody.classList.contains("active")) {
      infoBody.classList.add("active");
    }
  };

  const addListener = (e) => {
    if (quizStepsBlocks.length > quizStep) {
      setTimeout(() => quizStepToggle(quizStep), 500);
    } else setTimeout(() => quizClose(), 500);
    e.stopPropagation();
  };

  const quizClickListeners = () => {
    let inputs = quizBody.querySelectorAll(".quiz-option__input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].onclick = (e) => addListener(e);
    }
  };

  const quizStepToggle = (step) => {
    for (let i = 0; i < quizStepsBlocks.length; i++) {
      if (quizStepsBlocks[i].classList.contains("active")) {
        quizStepsBlocks[i].classList.remove("active");
      }
    }
    quizStepsBlocks[step].classList.add("active");
    quizStep++;
  };

  const overflowClick = (e) => {
    if (e.target.classList.contains("quiz__layout")) {
      quizClose();
    }
  };

  const quizClose = () => {
    document.documentElement.classList.remove("lock");
    layout.classList.remove("active");
    layout.removeEventListener("click", overflowClick);
    let inputs = quizBody.querySelectorAll(".quiz-option__input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  };

  quizBtn.forEach(btn => {
    btn.onclick = (el) => {
      el.preventDefault();
      quizInit();
    }
  })
  infoBtn.forEach(btn => {
    btn.onclick = (el) => {
      el.preventDefault();
      infoInit();
    }
    /*btn.onclick = () => infoInit();*/
  })

  /*quizBtn.onclick = () => quizInit();*/
  /*infoBtn.onclick = () => infoInit();*/
  quizCloseBtn.onclick = () => quizClose();
};

if (layout) Quiz();