'use strict'

import './anchors.js';

function getScore(...arr){
    let total = 0;
    for (let score of arr){
        total += score;
    }

console.log(` 1. вёрстка валидная <<<+10>>>. Надпись "Document checking completed. No errors or warnings to show."
2. вёрстка семантическая <<<+20>>>. В коде страницы присутствуют семантические теги HTML5 aside, figure, figcaption, footer, header, main, nav, section, h1, h3, h4.
3. для оформления СV используются css-стили <<<+10>>>. Почти все элементы стилизованны.
4. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы <<<+10>>>.
5. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом  всё содержание страницы сохраняется <<<+10>>>
6. есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. <<<+10>>>
7. на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) <<<+10>>>.
8. контакты для связи и перечень навыков оформлены в виде списка ul > li <<<+10>>>
9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского <<<+10>>>
10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода.<<<+10>>>.
11. <<<<<<<<<<<<<<<<<<<
CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. <<<+10>>>
>>>>>>>>>>>>>>>>>>>>>>>>
12. CV выполнено на английском языке <<<+10>>>.
13. <<<<<<<<<<<<<<<<<<<<<<
выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
Вниманию проверяющих. Так как сабмитится ссылка на деплой CV, вам необходимо будет самостоятельно найти Pull Request для проверки. Для этого по ссылке в футере перейдите на гитхаб автора CV, найдите там репозиторий rsschool-cv, в нём открытый PR из ветки cv-html-css в ветку main с названием CV и проверьте его описание.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
14. <<<<<<<<<<<<<<<<<<<<<<<<
Видеорезюме автора НЕТ <<<+0>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
15. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV <<<+10>>>.

Итого: <<<${total}>>>;
`);
}

getScore(10, 20, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0, 0, 10,);
