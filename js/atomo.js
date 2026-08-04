
function crearAtomo(id,e){
let c=document.getElementById(id);
c.innerHTML=`
<a-sphere radius="0.12" color="${e.color}"></a-sphere>
<a-ring radius-inner="0.48" radius-outer="0.5" rotation="90 0 0" color="white"></a-ring>
<a-entity animation="property:rotation;to:0 360 0;loop:true;dur:5000">
<a-sphere position="0.5 0 0" radius="0.03" color="cyan"></a-sphere></a-entity>
<a-text value="${e.simbolo}\n${e.nombre}\nUsos:\n${e.usos.join('\n')}" color="white" align="center" position="0 0.8 0" rotation="-90 0 0"></a-text>`;
}
