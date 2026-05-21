(async function() {
  const response = await fetch('./text.json');
  const data = await response.json();
  
  document.body.innerHTML = '';
  
  const title = document.createElement('h1');
  title.textContent = data.title;
  document.body.appendChild(title);
  
  data.chapters.forEach((chapter, idx) => {
    const section = document.createElement('section');
    section.className = 'chapter';
    
    const chapterHeader = document.createElement('h2');
    chapterHeader.textContent = `Глава ${idx + 1}`;
    section.appendChild(chapterHeader);
    
    const versesContainer = document.createElement('div');
    versesContainer.className = 'verses';
    
    chapter.forEach(verse => {
      const verseDiv = document.createElement('div');
      verseDiv.className = 'verse';
      
      const verseText = document.createElement('div');
      verseText.className = 'verse-text';
      verseText.textContent = verse.text;
      
      const verseNum = document.createElement('div');
      verseNum.className = 'verse-num';
      verseNum.textContent = verse.verse;
      
      verseDiv.appendChild(verseText);
      verseDiv.appendChild(verseNum);
      versesContainer.appendChild(verseDiv);
    });
    
    section.appendChild(versesContainer);
    document.body.appendChild(section);
  });
})();