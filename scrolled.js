document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const btn = document.querySelectorAll('.link');

    if (window.scrollY > 200){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }

    if(window.scrollY > 200){
        btn.forEach((element) => {
            element.classList.add('btn-scro');
          });
        }else{
            btn.forEach((element) => {
                element.classList.remove('btn-scro');
              });
            }
    })