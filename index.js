html = `
<div class="container">    
<img src="/assets/mysticat.gif">
<p>transforme sua voz em um arquivo de texto</p>
<textarea placeholder="conte sua historia e baixe o arquivo 🐈" id="textarea"></textarea>
<div class="options">
<button id="btnGravar" title="Iniciar"> <i class="bi bi-mic"></i> </button>
<button id="btnParar" title="Parar"> <i class="bi bi-stop-circle"></i> </button>
<button id="btnBaixar" title="Baixar"> <i class="bi bi-download"></i> </button>
<button id="btnLimpar" title="Limpar"> <i class="bi bi-trash"></i> </button>
</div>
</div>
`;

document.getElementById("app").innerHTML = html;
