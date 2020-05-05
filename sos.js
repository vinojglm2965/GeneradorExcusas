alert(
    'Bienvenidos al Simulador de Excusas para socializar.                      github: Vinojglm2965'
    )

document.write('<h1>Hola me gustaria conocerte porque eres...</h1>');

window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector("#excuse").innerHTML = generateExcuse();
    });
    console.log('hello Guys')
    
};
let generateExcuse = () => {
    
    let one = ['Demasiado', 'Muy', 'Extremedamente', 'Super'];
    let two = ['encantadora', 'linda', 'preciosa', 'amable', 'carismatica', 'chevere'];
    let verb = ['dar', 'pasar'];
    let three = ['whatsapp', 'instagram','facebook', 'twitter', 'email', 'numero', 'skype', 'discord'];
    let four = ["llamarte", 'hablarte', 'verte', 'escribirte'];
    let five = ['lindura', 'mamasita', 'bebe', 'preciosura', 'hermosa', 'chamita chamita'];

    let oneindex = Math.floor(Math.random() * one.length);
    let twoindex = Math.floor(Math.random() * two.length);
    let verbindex = Math.floor(Math.random() * verb.length);
    let threeindex = Math.floor(Math.random() * three.length);
    let fourindex = Math.floor(Math.random() * four.length);
    let fiveindex = Math.floor(Math.random() * five.length);

    return one[oneindex] + ' ' + two[twoindex] + ' ' + 'me podrias' + ' ' + verb[verbindex] + ' ' + 'tu' + ' ' + three[threeindex] + ' ' + 'para' + ' ' + four[fourindex] + ' ' + five[fiveindex];
};





