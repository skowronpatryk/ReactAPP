(window["webpackJsonpportfolio-app"]=window["webpackJsonpportfolio-app"]||[]).push([[0],Array(19).concat([function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/pizza.32162181.png"},function(e,a,t){e.exports=t.p+"static/media/cheese.a68ffee2.png"},function(e,a,t){e.exports=t.p+"static/media/tomato.c33c9f59.png"},function(e,a,t){e.exports=t.p+"static/media/mushrooms.bf3e4084.png"},function(e,a,t){e.exports=t.p+"static/media/salami.1580be39.png"},function(e,a,t){e.exports=t.p+"static/media/rukola.4684e4ec.png"},,,,,function(e,a,t){e.exports=t(62)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(21),l=t.n(r),i=(t(37),t(2));t(38);var m=function(){return c.a.createElement("div",{className:"container header"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"header__title"},"Cze\u015b\u0107! Co chcia\u0142by\u015b dzi\u015b robi\u0107?"),c.a.createElement("p",{className:"header__subtitle"},"Na co czekasz? Wybierz i zr\xf3b to!"))))},o=t(15),s=t(9),u=(t(39),function(){return c.a.createElement("div",{className:"container-fluid p-0"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"property-nav"},c.a.createElement("h2",{className:"text-center "},"Mieszkania na wynajem"),c.a.createElement("p",{className:"text-center"},"Wroc\u0142aw i okolice!")))))}),d=function(e){var a=e.roomFilter;return c.a.createElement("div",{className:"property-menu-wrapper"},c.a.createElement("div",{className:"property-menu-container"},c.a.createElement("h2",{className:"text-center mb-5"},"Filtrowanie"),c.a.createElement("form",null,c.a.createElement("p",{className:"filter-text"},"Cena Maksymalna"),c.a.createElement("div",{class:"form-group"},c.a.createElement("input",{type:"range",class:"custom-range",min:"200",max:"5000",step:"1"})),c.a.createElement("p",{className:"filter-text"},"Powierzchnia maksymalna"),c.a.createElement("div",{class:"form-group"},c.a.createElement("input",{type:"number",class:"form-control",onInput:a})),c.a.createElement("p",{className:"mt-5 filter-text"},"Informacje dodatkowe"),c.a.createElement("div",{class:"form-check"},c.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"balkon"}),c.a.createElement("label",{class:"form-check-label",for:"balkon"},c.a.createElement("p",{className:"filter-text"},"Balkon"))),c.a.createElement("div",{class:"form-check"},c.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"winda"}),c.a.createElement("label",{class:"form-check-label",for:"winda"},c.a.createElement("p",{className:"filter-text"},"Winda"))),c.a.createElement("div",{class:"form-check"},c.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"garaz"}),c.a.createElement("label",{class:"form-check-label",for:"garaz"},c.a.createElement("p",{className:"filter-text"},"Gara\u017c/Miejsce parkingowe"))),c.a.createElement("div",{class:"form-check"},c.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"klima"}),c.a.createElement("label",{class:"form-check-label",for:"klima"},c.a.createElement("p",{className:"filter-text"},"Klimatyzacja"))),c.a.createElement("div",{class:"form-check"},c.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"taras"}),c.a.createElement("label",{class:"form-check-label",for:"taras"},c.a.createElement("p",{className:"filter-text"},"Taras"))))))},p=function(e){return c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-4"},c.a.createElement("div",{className:"house-wrapper"},c.a.createElement("div",{className:"house-img"},c.a.createElement("img",{src:e.image,className:"img-fluid",alt:e.name})),c.a.createElement("div",{className:"house-info"},c.a.createElement("h2",null,e.name),c.a.createElement("p",null,"Lokalizacja - Wroc\u0142aw")),c.a.createElement("div",{className:"house-more-info"},c.a.createElement("div",{className:"house-more-info-meter"},1==e.room?"Kawalerka":"".concat(e.room," pokoje")," ",c.a.createElement("span",null,e.meter," M",c.a.createElement("sup",null,"2"))),c.a.createElement("div",{className:"house-more-info-price"},e.price," PLN / Miesi\u0105c"))))},E=function(e){var a=e.property;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},a.map(function(e){return c.a.createElement(p,{key:e.id,name:e.name,room:e.room,meter:e.meter,price:e.price,image:e.image})})))},z=function(){var e=Object(n.useState)(b),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),o=m[0],s=m[1];return c.a.createElement("div",{className:"property"},c.a.createElement(u,null),c.a.createElement("div",{className:"container-fluid p-0"},c.a.createElement("div",{className:"info-property"},c.a.createElement("h1",null,"Strona w budowie. Wr\xf3c do strony g\u0142\xf3wnej:"),c.a.createElement("div",null,c.a.createElement("button",{class:"goback"},c.a.createElement("a",{href:"../"},"WR\xd3C")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement(d,{roomFilter:function(e){s(e.target.value),console.log(o);var a=t.filter(function(e,a){return e.meter>o});console.log(a),r(a)}})),c.a.createElement("div",{className:"col-9"},c.a.createElement(E,{property:t})))))},b=[{id:1,name:"Mieszkanie 2 pokoje ul. Ruska",room:2,meter:45,price:1900,balcon:!0,elevator:!1,garage:!1,airconditioning:!1,terrace:!1,image:"https://simplicite.pl/wp-content/uploads/2017/09/jak-urzadzic-mieszkanie-na-wynajem-13.jpg"},{id:2,name:"LUX KAWALERKA!!! NOWE BUDOWNICTWO",room:1,meter:31,price:1400,balcon:!0,elevator:!1,garage:!1,airconditioning:!1,terrace:!1,image:"https://thumbs.img-sprzedajemy.pl/1000x901c/c6/87/16/komfortowe-mieszkanie-dwupoziomowe-rzeszow-455238192.jpg"},{id:3,name:"Mieszkanie na szybkiej z gara\u017cem i klim\u0105",room:3,meter:73,price:2800,balcon:!1,elevator:!0,garage:!0,airconditioning:!0,terrace:!1,image:"http://bi.gazeta.pl/im/fc/f9/14/z21995004O,Jak-tanio-urzadzic-mieszkanie-pod-wynajem.jpg"},{id:4,name:"Blisko centrum boczna Grabiszy\u0144skiej",room:2,meter:42,price:1500,balcon:!0,elevator:!1,garage:!0,airconditioning:!1,terrace:!1,image:"https://t-ec.bstatic.com/images/hotel/max1024x768/642/64267440.jpg"},{id:5,name:"Pi\u0119kne mieszkanie z tarasem magnolia",room:2,meter:62,price:2950,balcon:!1,elevator:!1,garage:!1,airconditioning:!0,terrace:!0,image:"https://galeria.domiporta.pl/pictures/big/15/0f/c7/c70fedbdc8342515b1dde4335779481e74502250/sprzedam-mieszkanie-poznan-rataje.jpg"},{id:6,name:"Pi\u0119kne dwupoziomowe mieszkanie z gara\u017cem",room:3,meter:79,price:3500,balcon:!1,elevator:!1,garage:!0,airconditioning:!1,terrace:!0,image:"https://sim.bydgoszcz.pl/uploads/images/Gallery/aranzacje/F-3/50_84_p/1.jpg"}],f=(t(40),t(11)),v=t(3),N=t.n(v),h=(t(19),t(5)),k=function(e){var a=e.list,t=e.deleteItem;return c.a.createElement("ul",{class:"list-group"},a.map(function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement("div",{className:"list-group-name"},c.a.createElement("span",null,e.name)),c.a.createElement("div",{className:"list-group-amount"},c.a.createElement("span",null,e.amount," PLN")),c.a.createElement("div",{className:"list-group-del"},c.a.createElement(h.c,{onClick:function(){return t(e.id)}})))}))},g=(t(43),[{id:N()(),name:"Wyp\u0142ata",amount:4e3},{id:N()(),name:"Zlecenie freelancer",amount:1200},{id:N()(),name:"Wyp\u0142ata",amount:800}]),j=function(e){var a=e.callback,t=(e.callbackAdd,Object(n.useState)(g)),r=Object(i.a)(t,2),l=r[0],m=r[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),u=s[0],d=s[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),z=E[0],b=E[1];return a(l.reduce(function(e,a){return e+parseInt(a.amount)},0)),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.length>0&&z.length>0?(m([].concat(Object(f.a)(l),[{id:N()(),name:u,amount:z}])),d(""),b("")):alert("Uzupe\u0142nij pola!")}},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col col-md-8"},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Nazwa przychodu",value:u,onChange:function(e){d(e.target.value)}})),c.a.createElement("div",{class:"col col-md-4"},c.a.createElement("input",{type:"number",class:"form-control",placeholder:"Kwota przychodu",value:z,onChange:function(e){b(e.target.value)}}))),c.a.createElement("button",{type:"submit",className:"btn btn-budget"},"Dodaj")),c.a.createElement(k,{list:l,deleteItem:function(e){var a=l.filter(function(a){return a.id!==e});m(a)}}))},y=function(e){var a=e.list,t=e.deleteItem;return c.a.createElement("ul",{class:"list-group"},a.map(function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement("div",{className:"list-group-name"},c.a.createElement("span",null,e.name)),c.a.createElement("div",{className:"list-group-amount"},c.a.createElement("span",null,"- ",e.amount," PLN")),c.a.createElement("div",{className:"list-group-del"},c.a.createElement(h.c,{onClick:function(){return t(e.id)}})))}))},w=[{id:N()(),name:"Op\u0142ata za mieszkanie",amount:2500},{id:N()(),name:"Paliwo",amount:400},{id:N()(),name:"Zakpu ",amount:200}],_=function(e){var a=e.callback,t=Object(n.useState)(w),r=Object(i.a)(t,2),l=r[0],m=r[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),u=s[0],d=s[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),z=E[0],b=E[1];return a(l.reduce(function(e,a){return e+parseInt(a.amount)},0)),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.length>0&&z.length>0?(m([].concat(Object(f.a)(l),[{id:N()(),name:u,amount:z}])),b(""),d("")):alert("Uzupe\u0142nij pola!")}},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col col-md-8"},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Nazwa wydatku",value:u,onChange:function(e){d(e.target.value)}})),c.a.createElement("div",{class:"col col-md-4"},c.a.createElement("input",{type:"number",class:"form-control",placeholder:"Kwota wydatku",value:z,onChange:function(e){b(e.target.value)}}))),c.a.createElement("button",{type:"submit",className:"btn btn-budget"},"Dodaj")),c.a.createElement(y,{list:l,deleteItem:function(e){var a=l.filter(function(a){return a.id!==e});m(a)}}))},O=t(10);var x=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),o=m[0],s=m[1];return c.a.createElement("div",{className:"budget-app"},c.a.createElement("a",{href:"../",className:"back-arrow"},c.a.createElement(O.a,null)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"budget__title"},"Przelicz sw\xf3j bud\u017cet"),c.a.createElement("h2",{className:"budget__subtitle"},"Kalkulator, z kt\xf3rym planowanie wydatk\xf3w stanie si\u0119 znacznie \u0142atwiejsze"))),c.a.createElement("div",{className:"row budget-main-app"},c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("div",{className:"budget__app"},c.a.createElement("h2",null,"Masz wydatek? Dodaj go tutaj!"),c.a.createElement(_,{callback:s}))),c.a.createElement("div",{className:"col-12 col-md-6"},c.a.createElement("div",{className:"budget__app"},c.a.createElement("h2",null,"Dodatkowy przych\xf3d? Dodaj go tutaj!"),c.a.createElement(j,{callback:r})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 result"},c.a.createElement("h2",null,t-o===0?void 0:t-o>0?"Pozosta\u0142o Ci":"Brakuje Ci"),c.a.createElement("span",{className:"amount"},t-o===0?null:"".concat(t-o,"PLN")," ")))))},S=(t(44),function(){return c.a.createElement("header",{className:"pizza-header"})}),P=(t(45),function(e){var a=e.list,t=e.delivery;return c.a.createElement("div",{className:"pizza-list"},c.a.createElement("div",{className:"pizza-menu"},c.a.createElement("h2",null,"Nasze pizze")),a.map(function(e){return c.a.createElement("div",{key:e.id,id:e.id,className:"single-pizza-list"},c.a.createElement("div",{className:"single-pizza-list__title"},c.a.createElement("h2",null,e.name)),c.a.createElement("div",{className:"single-pizza-list__desc"},c.a.createElement("p",null,e.desc)),c.a.createElement("div",{className:"single-pizza-list__price"},c.a.createElement("p",null,"".concat(e.price,",00 PLN"))),c.a.createElement("button",{onClick:function(){return t(e)},className:"pizza-list-button"},c.a.createElement(h.a,null)))}))}),C=(t(46),function(e){var a=e.creator;return c.a.createElement("div",{className:"pizza-opinion"},c.a.createElement("div",{className:"pizza-title"},c.a.createElement("h2",null,"Pizzeria u majstra")),c.a.createElement("div",{className:"pizza-stars"},c.a.createElement("span",null,"\u2605\u2605\u2605\u2605")),c.a.createElement("div",{className:"pizza-subtitle"},c.a.createElement("p",null,"Typowa w\u0142oska pizza, robiona zawsze ze \u015bwie\u017cych sk\u0142adnik\xf3w sprowadzanych prosto ze s\u0142onecznej Italii.")),c.a.createElement("div",{className:"pizza-your-creator",onClick:a},c.a.createElement("h2",null,"Wypr\xf3buj nasz kreator pizzy!"),c.a.createElement("p",{className:"creator-subtitle"},"Dost\u0119pny w wersji beta!")))}),I=(t(47),function(e){var a=e.orderList,t=e.deleteItem,n=e.order,r=a.length>0?a.reduce(function(e,a){return e+parseInt(a.price)},0):"0";return c.a.createElement("div",{className:"pizza__order"},c.a.createElement(h.b,{className:"order__basket"}),c.a.createElement("div",{className:"pizza__order_title"},c.a.createElement("h2",null,"Twoje zam\xf3wienie:")),c.a.createElement("div",{className:"pizza__order__order"},a.map(function(e,a){return c.a.createElement("div",{key:e.id,className:"pizza__order__list"},c.a.createElement("div",{className:"pizza__order__list__title"},c.a.createElement("h2",null,e.name)),c.a.createElement("div",{className:"pizza__order__list__desc"},c.a.createElement("p",null,e.desc)),c.a.createElement("div",{className:"pizza__order__list__button"},c.a.createElement("button",{onClick:function(){return t(a)}},"X")))})),c.a.createElement("div",{className:"pizza__order__info"},c.a.createElement("div",{className:"pizza__order__info__pizzacost"},c.a.createElement("h3",null,"Koszt zam\xf3wienia:"),c.a.createElement("h3",null,"".concat(r,",00 PLN"))),c.a.createElement("div",{className:"pizza__order__info__deliverycost"},c.a.createElement("h3",null,"Koszt wysy\u0142ki:"),c.a.createElement("h3",null,0===a.length?"0,00 PLN":a.length<3&&a.length>0?"12,00 PLN":"DARMOWA DOSTAWA")),c.a.createElement("div",{className:"pizza__order__info__totalcost"},c.a.createElement("h3",null,"Ca\u0142kowity koszt:"),c.a.createElement("h3",null,0===a.length?"0,00 PLN":a.length<3&&a.length>0?"".concat(r+12,",00 PLN"):"".concat(r,",00 PLN"))),c.a.createElement("div",{className:"pizza_order__button"},c.a.createElement("button",{onClick:a.length>0?n:null},"ZAM\xd3W"))))}),D=(t(48),function(e){var a=e.order,t=e.orderSuccess;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"pizza-address-title"},"Szczeg\xf3\u0142y dotycz\u0105ce Twojego zam\xf3wienia"),c.a.createElement("form",{onSubmit:t},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{className:"label-address",for:"name"},"Wpisz imi\u0119 i nazwisko"),c.a.createElement("input",{type:"text",class:"form-control",id:"name","aria-describedby":"nameSurname",placeholder:"Imi\u0119 i nazwisko",required:!0})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{className:"label-address",for:"address"},"Wpisz sw\xf3j adres"),c.a.createElement("input",{type:"text",class:"form-control",id:"address","aria-describedby":"address",placeholder:"Adres",required:!0})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{className:"label-address",for:"exampleInputEmail1"},"Adres email"),c.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Wpisz email",required:!0}),c.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"Nikomu nie udost\u0119pnimy Twojego adresu.")),c.a.createElement("div",{class:"form-check"},c.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),c.a.createElement("label",{className:"label-address",class:"form-check-label",for:"exampleCheck1"},"Zapozna\u0142em/am si\u0119 z regulaminem")),c.a.createElement("button",{type:"submit",class:"btn btn-primary mt-2"},"Zamawiam")),c.a.createElement("button",{className:"close-address-btn",onClick:a},"X"))}),T=(t(49),t(22)),W=t.n(T),L=t(23),M=t.n(L),A=t(24),F=t.n(A),K=t(25),Z=t.n(K),B=t(26),U=t.n(B),X=t(27),R=t.n(X),q=(t(50),function(e){var a=e.showCreator,t=e.addToDelivery,r=Object(n.useState)(!1),l=Object(i.a)(r,2),m=l[0],o=l[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),d=u[0],p=u[1],E=Object(n.useState)(!1),z=Object(i.a)(E,2),b=z[0],f=z[1],v=Object(n.useState)(!1),N=Object(i.a)(v,2),h=N[0],k=N[1],g=Object(n.useState)(!1),j=Object(i.a)(g,2),y=j[0],w=j[1],_=Object(n.useState)(10),O=Object(i.a)(_,2),x=(O[0],O[1],parseInt(10+(d?2:0)+(m?2:0)+(b?3:0)+(y?3:0)+(h?4:0)));return c.a.createElement("div",{className:"pizza-creator"},c.a.createElement("div",{className:"container h-100 container-position"},c.a.createElement("div",{className:"row h-100"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"pizza-content"},c.a.createElement("h2",{className:"creator-title"},"Kreator Pizzy"),c.a.createElement("p",{className:"creator-subtitle"},"Wykreuj swoj\u0105 pizze, a my j\u0105 dla Ciebie przygotujemy!"),c.a.createElement("button",{type:"button",className:"off-creator",onClick:a},"X")),c.a.createElement("div",{className:"pizza-creator-wrapper"},c.a.createElement("img",{src:W.a,alt:"pizza",className:"pizza-normal"}),m&&c.a.createElement("img",{src:M.a,alt:"cheese",className:"pizza-cheese"}),d&&c.a.createElement("img",{src:F.a,alt:"tomato",className:"pizza-tomato"}),b&&c.a.createElement("img",{src:Z.a,alt:"tomato",className:"pizza-mushrooms"}),h&&c.a.createElement("img",{src:U.a,alt:"tomato",className:"pizza-salami"}),y&&c.a.createElement("img",{src:R.a,alt:"tomato",className:"pizza-rukola"})),c.a.createElement("h2",{className:"text-center mb-4"},"Wybierz swoje ulubione dodatki!"),c.a.createElement("div",{className:"pizza-creator-addons"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"cheese",onClick:function(){o(!m)}}),c.a.createElement("label",{htmlFor:"cheese"},"Ser")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"tomato",onClick:function(){p(!d)}}),c.a.createElement("label",{htmlFor:"tomato"},"Pomidory")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"mushrooms",onClick:function(){f(!b)}}),c.a.createElement("label",{htmlFor:"mushrooms"},"Pieczarki")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"salami",onClick:function(){k(!h)}}),c.a.createElement("label",{htmlFor:"salami"},"Salami")),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"rukola",onClick:function(){w(!y)}}),c.a.createElement("label",{htmlFor:"rukola"},"Zielenina"))),c.a.createElement("div",{className:"pizza-creator-info"},c.a.createElement("h2",null,"Aktualna cena: ",x,",00 PLN"),c.a.createElement("button",{class:"pizza-creator-button",onClick:function(){return t(x)}},"Dodaj do zam\xf3wienia"))))))}),G=(t(51),[{id:N()(),name:"Pizza Marinara",desc:"z sosem pomidorowym, czosnkiem i bazyli\u0105",price:14},{id:N()(),name:"Pizza Margherita",desc:"z sosem pomidorowym i mozzarell\u0105",price:16},{id:N()(),name:"Pizza Funghi",desc:"z sosem pomidorowym, mozzarell\u0105 i pieczarkami",price:18},{id:N()(),name:"Pizza Salami",desc:"z sosem pomidorowym, mozzarell\u0105 i salami",price:20},{id:N()(),name:"Pizza Hawajska",desc:"z sosem pomidorowym, mozzarell\u0105, szynk\u0105 i ananasem",price:21},{id:N()(),name:"Pizza Primavera",desc:"z sosem pomidorowym, mozzarell\u0105, salami, szpinakiem i pepperoni",price:23},{id:N()(),name:"Pizza Pollo",desc:"z sosem pomidorowym, mozzarell\u0105, kurczakiem, serem feta, szpinakiem i cebul\u0105",price:24}]),H=function(){var e=Object(n.useState)(G),a=Object(i.a)(e,2),t=a[0],r=(a[1],Object(n.useState)([])),l=Object(i.a)(r,2),m=l[0],o=l[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),d=u[0],p=u[1],E=Object(n.useState)(!1),z=Object(i.a)(E,2),b=z[0],f=z[1],v=Object(n.useState)(!1),h=Object(i.a)(v,2),k=h[0],g=h[1],j=function(e){e.preventDefault(),p(!d)},y=function(){g(!k)};return c.a.createElement("div",{className:"pizza-wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(C,{creator:y}),c.a.createElement(P,{list:t,delivery:function(e){o(m.concat(e))}})))),c.a.createElement("div",{className:"pizza-order"},c.a.createElement(I,{orderList:m,deleteItem:function(e){var a=m.filter(function(a,t){return t!==e});o(a)},order:j})),d?c.a.createElement("div",{className:"pizza-address"},c.a.createElement(D,{order:j,orderSuccess:function(e){e.preventDefault(),p(!1),f(!0),setTimeout(function(){f(!1)},3e3),o([])}})):null,k?c.a.createElement(q,{showCreator:y,addToDelivery:function(e){var a={id:N()(),name:"Twoja w\u0142asna pizza",desc:"Pizza, kt\xf3r\u0105 stworzy\u0142e\u015b w kreatorze",price:e};o(m.concat(a)),g(!1)}}):null,b?c.a.createElement("div",{className:"order-success"},"Twoje zam\xf3wienie zosta\u0142o z\u0142o\u017cone"):null)},J=(t(52),function(){return c.a.createElement("div",{className:"pizza-app"},c.a.createElement("a",{href:"../",className:"back-arrow"},c.a.createElement(O.a,null)),c.a.createElement(S,null),c.a.createElement(H,null))}),Q=t(28),V=(t(53),function(e){var a=e.handleChange,t=e.value,n=e.addTodo,r=e.editState;e.updateTodo;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",{class:"form-group w-50"},c.a.createElement("label",{for:"todoitems"},"Co musisz zrobi\u0107?"),c.a.createElement("input",{type:"text",class:"form-control",id:"todoitems","aria-describedby":"todo",onChange:a,value:t})),r?c.a.createElement("button",{className:"btn btn-todo"},"Edytuj!"):c.a.createElement("button",{className:"btn btn-todo"},"Dodaj!"))}),Y=t(29),$=function(e){var a=e.name,t=e.onDelete,n=e.id,r=(e.curIndex,e.onEdit);return c.a.createElement("div",{className:"col-sm-4 col-lg-3"},c.a.createElement("div",{className:"todo-item"},c.a.createElement("div",{className:"todo-icon"},c.a.createElement(Y.a,{className:"todo-icon"})),c.a.createElement("div",{className:"todo-text"},c.a.createElement("p",{className:"todo-title"},a)),c.a.createElement("button",{className:"todo-del",onClick:function(){return t(n)}},"X"),c.a.createElement("button",{onClick:function(){return r(n)},className:"todo-edit"},"Edytuj")))};function ee(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var ae=[{id:1,name:"Posprz\u0105ta\u0107 pok\xf3j"},{id:2,name:"Kupi\u0107 pralk\u0119"}],te=function(){var e=Object(n.useState)(ae),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),o=m[0],s=m[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),p=d[0],E=d[1],z=Object(n.useState)(0),b=Object(i.a)(z,2),v=b[0],N=b[1],h=Object(n.useState)(!1),k=Object(i.a)(h,2),g=k[0],j=k[1],y=Object(n.useState)(!1),w=Object(i.a)(y,2),_=w[0],x=w[1],S=function(e){var a=t.find(function(a){return a.id===e});s(a.name),E(!0),N(e)},P=function(e){var a=t.filter(function(a){return a.id!==e});r(a),C("Usuni\u0119to z listy!",!1)},C=function(e,a){j(e),x(a),setTimeout(function(){j(!1),x(!1)},2e3)},I=(new Date).toLocaleDateString();return c.a.createElement("div",{className:"todo-main"},c.a.createElement("a",{href:"../",className:"back-arrow"},c.a.createElement(O.a,null)),g&&c.a.createElement("div",{className:_?"error error-g":"error error-b"},g),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"text-center mt-3"},"Dodaj list\u0119 rzeczy do zrobienia!"),c.a.createElement("p",{className:"text-center date-string"},"W dniu ",I))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col form-width"},c.a.createElement(V,{handleChange:function(e){s(e.target.value)},value:o,addTodo:function(e){if(e.preventDefault(),o.length>5)if(p){var a=t.map(function(e){return e.id===v?function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ee(t,!0).forEach(function(a){Object(Q.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,{name:o}):e});r(a),s(""),E(!1),C("Edytowano liste!",!0)}else{var n={id:t.length<1?1:t.length+1,name:o};r([].concat(Object(f.a)(t),[n])),s(""),C("Dodano do listy",!0)}else alert("Wymagam conajmniej 5 znak\xf3w!")},editState:p})))),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row mt-5"},t.map(function(e,a){return c.a.createElement($,{key:e.id,name:e.name,id:e.id,onDelete:P,curIndex:a,onEdit:S})}))))};t(54);var ne=function(e){var a=e.state;return c.a.createElement(o.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},a.map(function(e){return c.a.createElement("div",{key:e.id,className:"col-12 col-sm-6 col-xl-3"},c.a.createElement("div",{className:"headerItem"},c.a.createElement("div",{className:"headerItem__main"},c.a.createElement("div",{className:"headerItem__main__icon"},1===e.id&&c.a.createElement(h.d,{className:"headerIcon"})||2===e.id&&c.a.createElement(h.f,{className:"headerIcon"})||3===e.id&&c.a.createElement(h.e,{className:"headerIcon"})||4===e.id&&c.a.createElement(h.g,{className:"headerIcon"})),c.a.createElement("div",{className:"headerItem__main__title"},c.a.createElement("h2",null,e.title))),c.a.createElement("div",{className:"headerItem__button"},c.a.createElement(o.b,{to:(1===e.id?"/property/":2===e.id&&"/budget/")||3===e.id&&"/todo/"||4===e.id&&"/pizza"},c.a.createElement("a",{href:"#",className:"headerItem__button__btn"},e.buttonText)))))}))),c.a.createElement(s.a,{path:"/property",exact:!0,component:z}),c.a.createElement(s.a,{path:"/budget",exact:!0,component:x}),c.a.createElement(s.a,{path:"/todo",exact:!0,component:te}),c.a.createElement(s.a,{path:"/pizza",exact:!0,component:J}))},ce=(t(60),[{id:1,title:"Mo\u017ce znajd\u017a mieszkanie?",icon:"IoIosTv",buttonText:"Przeszukaj"},{id:2,title:"Mo\u017ce przeliczysz bud\u017cet?",icon:"IoIosWallet",buttonText:"Sprawd\u017a bud\u017cet"},{id:3,title:"Mo\u017ce liste TODO?",icon:"IoIosToday",buttonText:"Stw\xf3rz list\u0119"},{id:4,title:"Mo\u017ce zam\xf3wisz pizze?",icon:"IoMdPizza",buttonText:"Zam\xf3w pizze"}]);var re=function(){var e=Object(n.useState)(ce),a=Object(i.a)(e,2),t=a[0];return a[1],c.a.createElement("div",{className:"main-app"},c.a.createElement(m,null),c.a.createElement(ne,{state:t}))};t(61);l.a.render(c.a.createElement(re,null),document.getElementById("root"))}]),[[32,1,2]]]);
//# sourceMappingURL=main.f58ba5c6.chunk.js.map