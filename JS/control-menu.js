
$(document).ready(function(){
    $("#cv-content").html(informacion());
});

$('#btn_informacion').click(function(){
    $('.item-menu').removeClass('active');
    $(this).addClass('active');
    $("#cv-content").html(informacion());
});
$('#btn_Experiencia').click(function(){
    $('.item-menu').removeClass('active');
    $(this).addClass('active');
    $("#cv-content").html(Experiencia());
});
$('#btn_habilidades').click(function(){
    $('.item-menu').removeClass('active');
    $(this).addClass('active');
    $("#cv-content").html(habilidades());
});

function informacion(){
    return  '<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/mortarboard.svg" alt="">Estudios'
            +'</h4>'
            +'<ul>'
            +'<li class="sub-content">05/2022 (Duración 3 meses)<br><strong>Curso Angular 9.</strong></li>'
            +'<li class="sub-content">03/2020 (Duración 7 meses)<br><strong>DesarrolloWeb Full-Stack. HTML 5 - CSS3 - JS - NODE JS. ACÁMICA.</strong></li>'
            +'<li class="sub-content">06/2019 (Duración 3meses)<br><strong>DISEÑO WEB RESPONSIVE - HTML5 - CSS3. E-learnig UTN Resistencia.</strong></li>'
            +'<li class="sub-content">03/1997-12/2001<br><strong>DISEÑADOR GRAFICO. Escuela Superior de Diseño Grafico.</strong></li>'
            +'</ul>'
            +'</div>'
            +'<div id="hoc_van">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom"  src="Images/dart.svg"  alt="">Puntos Fuertes'
            +'</h4>'
            +'<p class="school-name">Proactividad y resolución.Trabajo en equipo. Ojo para detalles. Organización. Responsabilidad.</p>'
            +'</div>'
            +'<div id="so_thich">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/rubik.svg" alt="">Descripcion'
            +'</h4>'
            +'<p class="school-name">Soy Diseñador Gráfico y Desarrollador Web Full Stack. ' 
            +'En los últimos 18 años he trabajado en diferentes proyecto gráficos y Web Front-end '
            +'de forma independiente y free lance. Me considero emprendedor, dedicado, ' 
            +'perfeccionista, eficiente. Buena dinámica para trabajo bajo presión y en equipo.</p>'
            +'</div>';
}

function Experiencia(){
    return '<h4 class="head-content">' 
            + '<img class="icon-custom" src="Images/flask.svg" alt="">Desarrollo'
            +'</h4>'
            +'<ul class="timeline">'
            +'<li>'
            +'<p style="color: blue;">DISEÑADOR GRAFICO - DESARROLLO WEB FRONT END - MAQUETADOR.</p>'
            +'<p style="color: #000;" class="item-timeline">(03/2002 - Actualidad)</p>'
            +'<ul class="ul-custom">'
            +'<li class="sub-content">Actualmente desarrollando el Re-Diseño de sistema interno de SGR Acindar PYMES. Maquetacion'
            +'de nueva App. HTML 5, CSS 3, Angular 9, TS, bootstrap 5. App Rsponsive.<strong>(Periodo 2020-2022)</strong></li>'
            +'<li class="sub-content">Desarrollo Web para varias empresas. Entre ellas: Arsuc metal, '
            +'Parque Industrial Comirsa, Casius S.A, Metalvos, SGR ACINDAR Pymes.<strong>(Periodo 2020-2022)</strong></li>'
            +'<li class="sub-content">Diseño de catálogo, Logotipos, Branding e Identidad corporativa, '
            +'folletos, cartelería, Diseño Editorial, Tarjetería para empresas, anuncios, layout. '
            +'Elaboración de contenido para blogs y diseño, CMS y Social Media.<strong>(Periodo 2002-2022)</strong></li>'
            +'</ul>'
            +'</li><li>'
            +'<p style="color: blue;">EMPENDIMIENTO PYME. FRANQUICIA LOCAL DE ROPA A+ REFANS.</p>'
            +'<p style="color: #000;" class="item-timeline">(04/2004 - Actualidad)</p>'
            +'<p class="item-timeline">Encargado y dueño de Franquicia A+ REFANS ubicada en la ciudad de San Nicolás. '
            +'Tareas: Panificación e Implementación de las acciones de venta necesarias para alcanzar '
            +'los objetivos propuestos por la empresa. Dirección, coordinación y supervisión del personal a cargo, ' 
            +'a fin de garantizar una atención de calidad a los clientes para conseguir fidelizacion. '
            +'Control de<br>Stock e imagen diariamente. Gestión administrativa general del comercio (manejo de caja, bancos, sueldos, etc)</p>'
            +'</li>'
            
}

function habilidades(){
    return '<div id="moitruong_phattrien">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/code.svg" alt="">Entorno de Desarrollo'
            +'</h4>'
            +'<ul id="ul-custom">'
            +'<li class="sub-content">Visual Studio Code.</li>'
            +'<li class="sub-content">Paquete Adobbe.</li>'
            +'<li class="sub-content">Corel Draw.</li>'
            +'<li class="sub-content">Microsoft Office.</li>'
            +'</ul>'
            +'</div>'
            +'<div id="cong_nghe">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/projectmanagement.svg" alt="">Tecnología'
            +'</h4>'
            +'<ul>'
            +'<li class="sub-content">ANGULAR.</li>'
            +'<li class="sub-content">HTML 5, CSS 3, JavaScript.</li>'
            +'<li class="sub-content">SASS.</li>'
            +'<li class="sub-content">BOOTSTRAP 5</li>'
            +'</ul>'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/idioma.png" alt="">Idioma'
            +'</h4>'
            +'<ul>'
            +'<li class="sub-content">Inglés - Oral y Escrito (Medio).</li>'
            +'</ul>'
            +'</div>';
}           
