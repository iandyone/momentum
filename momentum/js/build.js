(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t="en"){return{ru:["ночи","утро","день","вечер"],en:["night","morning","afternoon","evening"]}[t][Math.floor(e/6)]}function o(){const e=document.querySelector(".name").value;localStorage.setItem("name",e)}e.d({},{b:()=>J,f:()=>H});const n=t((new Date).getHours());let a=H(1,20);function c(){a=20==a?1:+a+1,s()}function s(){const e=localStorage.getItem("backgroundSourse")||"github";"github"!=e?"unsplash"==e?r():console.log("Непредвиденная ошибка во время загрузки фонового изображения"):function(){a=a<10?`0${a}`:a;const e=new Image,t=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${n}/${a}.jpg`;e.src=t,e.onload=()=>{document.body.style.backgroundImage=`url("${e.src}")`},localStorage.setItem("backgroundSourse","github")}()}async function r(){try{const e=new Image;let t=`https://api.unsplash.com/photos/random?orientation=landscape&query=${localStorage.getItem("imageTag")||"nature"}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;const o=await fetch(t);if(200===o.status){const t=await o.json();e.src=t.urls.regular,e.onload=()=>document.body.style.backgroundImage=`url("${e.src}")`}else{if(403===o.status){const e=new Event("click"),t="en"===J?"The image limit for Unsplash has been exceeded. Image source changed to GitHub":"Превышен лимин изображений для Unsplash. Источник изображений изменен на GitHub";return document.querySelector('[data-source="github"]').dispatchEvent(e),alert(t),localStorage.setItem("backgroundSourse","github"),void s()}localStorage.setItem("imageTag","nature"),await r()}localStorage.setItem("backgroundSourse","unsplash")}catch(e){console.log(e.message)}}const d=document.querySelector(".weather-icon"),i=document.querySelector(".weather-error"),l=document.querySelector(".description-container"),u=document.querySelector(".temperature"),g=document.querySelector(".weather-description"),m=document.querySelector(".weather-wind"),h=document.querySelector(".weather-humidity");async function y(e){try{const o=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=${J}&appid=901e2cb82742e82d213c46a83ddf4d8a&units=metric`);if(200===o.status?(d.classList.remove("hidden"),u.classList.remove("hidden"),l.classList.remove("hidden"),m.classList.remove("hidden"),h.classList.remove("hidden"),i.classList.add("hidden")):(d.classList.add("hidden"),u.classList.add("hidden"),l.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),i.classList.remove("hidden")),200!==o.status){if(404===o.status)throw new Error("en"===J?"City not found":"Город не найден");if(e)throw new Error("en"===J?"Unexpected error":"Непредвиденная ошибка");throw new Error("en"===J?"Write the name of the city":"Укажите название города")}t=await o.json(),d.className="weather-icon owf",d.classList.add(`owf-${t.weather[0].id}`),u.textContent=`${t.main.temp} °C`,g.textContent=t.weather[0].description,"ru"===J?(m.textContent=`Ветер: ${Math.round(t.wind.speed)} м/с`,h.textContent=`Влажность: ${Math.round(t.main.humidity)} %`):"en"===J&&(m.textContent=`Wind speed: ${Math.round(t.wind.speed)} m/s`,h.textContent=`Humidity: ${Math.round(t.main.humidity)} %`)}catch(e){i.textContent=e.message}var t}let S=0,p={},f=!1;const v=new Audio;function _(){document.querySelector(".play").classList.toggle("pause"),f?(v.pause(),f=!1):(q(),f=!0)}function q(){var e;v.src=p[S].src,v.currentTime=0,v.play(),e=S,document.querySelectorAll(".play-item").forEach((t=>{t.dataset.trackId==e?t.classList.add("active"):t.classList.remove("active")}))}function L(){if(f){const e=p.length-1;S=S<e?S+1:0,q()}}v.addEventListener("ended",(()=>L()));const b={ru:{headers:{language:"Язык",widgets:"Виджеты",background:"Заставка"},options:{language:{header:"Язык приложения"},widgets:{header:"Виджеты",time:"Время",date:"Дата",greeting:"Приветствие",quotes:"Цитаты",player:"Плеер",weather:"Погода",todo:"Список дел"},background:{source:{header:"Источник"},search:{header:"Поиск",placeholder:"Поиск изображений по тегу"},note:{github:"Примечание: GitHub изображения имеют ограниченное количество и расположены в строгом порядке. Доступен переключение на следущее и предыдущее изображение",unsplash:"Примечание: можно менять до 50 изображений в час. Изображения расположены в случайном порядке"}}}},en:{headers:{language:"Language",widgets:"Widgets",background:"Background"},options:{language:{header:"Language"},widgets:{header:"Widgets",time:"Time",date:"Date",greeting:"Greeting",quotes:"Quotes",player:"Player",weather:"Weather",todo:"Todo"},background:{source:{header:"Source"},search:{header:"Search",placeholder:"Search images by tag"},note:{github:"Note: GitHub images are limited and sorted in a strict order. Switching to the next and previous image are available",unsplash:"Note: You can change up to 50 images per hour. The images will be switched in random order"}}}}};function w(e){document.querySelectorAll(".setting__option.language").forEach((t=>{if(t===e.target)return t.classList.add("active"),void localStorage.setItem("appLanguage",e.target.dataset.lang);t.classList.remove("active")})),location.reload()}function k(e){document.querySelectorAll(".settings__header").forEach((t=>{if(t==e.target){const e=document.querySelectorAll(".setting__item");return t.classList.add("active"),void e.forEach((e=>{e.dataset.option===t.dataset.setting?e.classList.add("active"):e.classList.remove("active")}))}t.classList.remove("active")}))}function E(e){const t="false"==localStorage.getItem(`${e.target.value}Visability`);e.target.classList.toggle("active"),localStorage.setItem(`${e.target.value}Visability`,t),document.querySelector(`[data-type=${e.target.value}]`).classList.toggle("hidden")}function I(e){const t=document.querySelectorAll(".setting__option.images"),o=document.querySelector(".images__search-bar");t.forEach((t=>{if(t===e.target){const n="unsplash"==e.target.dataset.source?"block":"none";return t.classList.add("active"),document.querySelector(".setting__notes").textContent=b[J].options.background.note[t.dataset.source],o.style.display=n,void localStorage.setItem("backgroundSourse",e.target.dataset.source)}t.classList.remove("active")}))}function x(){const e="en"===J?"Applied":"Сохранено",t=document.querySelector(".images__apply");t.textContent=e,t.classList.remove("hidden"),setTimeout((()=>{c(),setTimeout((()=>{t.classList.add("hidden")}),4e3)}),700)}let $=JSON.parse(localStorage.getItem("todos"))||[];const C=document.querySelector(".todos__placeholder"),A=document.querySelector(".todos__start-button"),M=document.querySelector(".todos__body");function D(){$=JSON.parse(localStorage.getItem("todos"))||[],$.length&&(C.classList.add("hidden"),C.style.display="none",M.style.justifyContent="normal",document.querySelector(".todos__input").classList.remove("hidden"),$.forEach((e=>{T(e.id,e.text,e.isDone)})))}function T(e,t,o){const n=document.querySelector(".todos__list"),a=document.createElement("LI");n.classList.remove("hidden"),a.classList.add("todo__item"),a.setAttribute("data-id",e),o&&a.classList.add("compleated");const c=document.createElement("DIV");c.classList.add("todo__status"),c.addEventListener("click",(e=>function(e){const t=e.target.closest(".todo__item"),o=JSON.parse(localStorage.getItem("todos"))||[],n=o.find((e=>e.id===+t.dataset.id));t.classList.toggle("compleated"),n.isDone=!n.isDone,localStorage.setItem("todos",JSON.stringify(o))}(e))),a.append(c);const s=document.createElement("P");s.classList.add("todo__text"),s.textContent=t,a.append(s);const r=document.createElement("DIV");r.classList.add("todo__button"),r.addEventListener("click",(()=>function(e){const t=$.filter((t=>t.id!==e)),o=document.querySelector(".todos__list").children;localStorage.setItem("todos",JSON.stringify(t)),Array.from(o).forEach((e=>e.remove())),t.length||(C.classList.remove("hidden"),A.classList.remove("hidden"),document.querySelector(".todos__input").classList.add("hidden"),C.style.display="flex",M.style.justifyContent="center"),D()}(e))),a.append(r),n.append(a)}const j=document.querySelector(".quote"),N=document.querySelector(".author");async function O(){try{const e=await fetch("./quotes.json"),t=await e.json(),o=localStorage.getItem("quoteIndex");let n=H(0,Math.round(t[J].length-1));for(;n===o;)n=H(0,Math.round(t[J].length-1));localStorage.setItem("quoteIndex",n),j.textContent=t[J][n].text,N.textContent=t[J][n].author}catch(e){console.log(e)}}const J=localStorage.getItem("appLanguage")||"en";function H(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}window.addEventListener("load",(function(){const e=document.querySelector(".name");if(localStorage.getItem("name"))e.value=localStorage.getItem("name");else{const e="en"===J?"[Enter the name]":"[Введите имя]";document.querySelector(".name").placeholder=e}})),window.addEventListener("beforeunload",o),document.querySelector(".play").addEventListener("click",_),document.querySelector(".name").addEventListener("change",o),document.querySelector(".change-quote").addEventListener("click",O),document.querySelector(".play-next").addEventListener("click",L),document.querySelector(".play-prev").addEventListener("click",(function(){if(f){const e=p.length-1;S=0===S?e:S-1,q()}})),document.querySelector(".slide-next").addEventListener("click",c),document.querySelector(".slide-prev").addEventListener("click",(function(){a=1==a?20:+a-1,s()})),document.querySelector(".settings__button").addEventListener("click",(function(e){document.querySelector(".todos__menu").classList.remove("active"),document.querySelector(".todos__button").classList.remove("active"),document.querySelector(".settings__menu").classList.toggle("active"),e.target.closest("DIV").classList.toggle("active")})),document.querySelector(".todos__button").addEventListener("click",(function(){document.querySelector(".settings__button").classList.remove("active"),document.querySelector(".settings__menu").classList.remove("active"),document.querySelector(".todos__button").classList.toggle("active"),document.querySelector(".todos__menu").classList.toggle("active")})),document.querySelector(".images__input").addEventListener("change",(function(e){localStorage.setItem("imageTag",e.target.value)})),document.querySelector(".images__input").addEventListener("change",x),document.querySelector(".todos__start-button").addEventListener("click",(function(){const e=document.querySelector(".todos__input");A.classList.toggle("hidden"),e.classList.remove("hidden"),e.focus()})),document.querySelector(".todos__input").addEventListener("change",(function(e){const t=Date.now(),o=e.target.value;C.classList.add("hidden"),C.style.display="none",M.style.justifyContent="normal";const n={id:t,text:o,isDone:!1};$.push(n),localStorage.setItem("todos",JSON.stringify($)),T(t,o,!1),e.target.value=""})),document.querySelectorAll(".setting__option.language").forEach((e=>{e.addEventListener("click",w)})),document.querySelectorAll(".setting__option.images").forEach((e=>{e.addEventListener("click",I)})),document.querySelectorAll(".settings__header").forEach((e=>{e.addEventListener("click",k)})),document.querySelectorAll(".custom-checkbox-input").forEach((e=>{e.addEventListener("click",E)})),document.querySelectorAll(".images__tag").forEach((e=>{e.addEventListener("click",(e=>{!function(e){localStorage.setItem("imageTag",e.target.dataset.value),document.querySelector(".images__input").value=e.target.dataset.value}(e),x()}))})),s(),document.querySelectorAll(".custom-checkbox-input").forEach((e=>{const t=localStorage.getItem(`${e.value}Visability`),o=null==t||t;localStorage.setItem(`${e.value}Visability`,o),"false"==o&&(e.removeAttribute("checked"),document.querySelector(`[data-type=${e.value}]`).classList.toggle("hidden"),document.querySelector(`[data-type=${e.value}]`).classList.add("hidden"))})),function(){const e=document.querySelectorAll("[data-source]"),t=localStorage.getItem("backgroundSourse")||"github";localStorage.setItem("backgroundSourse",t),e.forEach((e=>{e.dataset.source===t&&(e.classList.add("active"),document.querySelector(".setting__notes").textContent=b[J].options.background.note[e.dataset.source])}))}(),document.querySelectorAll("[data-lang]").forEach((e=>{e.dataset.lang===J&&e.classList.add("active")})),localStorage.setItem("appLanguage",J),function(){document.querySelector(".settings__header.language").textContent=b[J].headers.language,document.querySelector(".setting__header").textContent=b[J].options.language.header,document.querySelector(".settings__header.show").textContent=b[J].headers.widgets;for(let e in b[J].options.widgets)document.querySelector(`#setting-widgets-${e}`).textContent=b[J].options.widgets[e];const e=localStorage.getItem("backgroundSourse");document.querySelector(".settings__header.images").textContent=b[J].headers.background,document.querySelector(".setting__header.images").textContent=b[J].options.background.source.header,document.querySelector(".setting__notes").textContent=b[J].options.background.note[e],document.querySelector(".setting__header.images__search").textContent=b[J].options.background.search.header,document.querySelector(".images__input").placeholder=b[J].options.background.search.placeholder}(),function(){const e=document.querySelector(".images__search-bar"),t=document.querySelector('[data-source="unsplash"]').classList.contains("active")?"block":"none";e.style.display=t}(),function e(){const o=document.querySelector(".time"),n=(new Date).toLocaleTimeString();o.textContent=n,function(){const e=document.querySelector(".date"),t=new Date,o={ru:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}[J][t.getDay()],n={ru:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]}[J][t.getMonth()],a=t.getDate();e.textContent="en"===J?`${o}, ${n} ${a}`:`${o}, ${a} ${n}`}(),function(){const e=document.querySelector(".greeting"),o=(new Date).getHours(),n=function(e,t,o){return"en"===o?`Good ${t},`:`${["Доброй","Доброе","Добрый","Добрый"][Math.floor(e/6)]} ${t},`}(o,t(o,J),J);e.textContent=n}(),setTimeout(e,1e3)}(),function(e){const t=document.querySelector(".city"),o=function(e){const t=localStorage.getItem("city");if(t){if(t===e||"Минск"===t){const e="en"===J?"Minsk":"Минск";return localStorage.setItem("city",e),e}return localStorage.getItem("city")}return localStorage.setItem("city",e),e}(e);t.value=o,t.onchange=()=>{y(t.value),localStorage.setItem("city",t.value)},y(t.value)}("Minsk"),async function(){const e=document.querySelector(".play-list"),t=await fetch("./playlist.json");p=await t.json();for(let t=0;t<p.length;++t){const o=document.createElement("li");o.classList.add("play-item"),o.dataset.trackId=t,o.textContent=p[t].title,o.onclick=e=>{return t=+e.target.dataset.trackId,v.pause(),f=!1,S=t,document.querySelector(".play").classList.remove("pause"),void _();var t},e.append(o)}}(),O(),D(),console.log("  \n-------------------------------------------------------------------------\n  Насчитал 136.5, расчитываю приблизительно на такую оценку)\n\n- В настройках фона помимо предложенных тегов можно задать и свои.\n  Источников изображений два - катастрофически не хватает времени(\n\n- Продвинутый плеер сделать не успел. Музыка и правда переключается по кругу.\n  Если лень слушать (первый и второй самые короткие) - прошу просто поверить на слово )\n  Из расширенного списка - трек можно запустить кликом по нему.\n\n  Спасибо за отзыв! \n--------------------------------------------------------------------------\n    ")})();