 // Code-Partikel für den Hero-Bereich erstellen
 function createCodeParticles() {
    const container = document.getElementById('codeParticles');
    const codeSnippets = [
        "function()", "if(true)", "const data", "let value", "{}", "[]", "return", 
        "<div>", "</div>", "</>", "&&", "||", "=>", "class", "import", "export",
        "const", "var", "async", "await", "try", "catch", "while", "for", "switch"
    ];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('code-particle');
        particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Zufällige Position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.opacity = 0.1 + Math.random() * 0.2;
        
        container.appendChild(particle);
    }
}

// Funke-Animation bei Klick auf den Hammer
function createSparks(event) {
    const hammer = event.target;
    const rect = hammer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 5; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        
        // Zufällige Richtung für die Funken
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;
        
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');
        
        spark.style.left = centerX + 'px';
        spark.style.top = centerY + 'px';
        
        document.body.appendChild(spark);
        
        // Funke nach Animation entfernen
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
}

// Initiate code particles on page load
window.addEventListener('DOMContentLoaded', () => {
    createCodeParticles();
    
    // Event-Listener für Hammer-Klick hinzufügen
    const hammers = document.querySelectorAll('.hammer-animation');
    hammers.forEach(hammer => {
        hammer.addEventListener('click', createSparks);
    });
});