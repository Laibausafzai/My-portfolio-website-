document.getElementById('year').textContent = new Date().getFullYear();

  // Typed terminal effect
  const lines = [
    { text: 'const developer = {', cls: '' },
    { text: '  name: <span class="str">"Laiba Anwar"</span>,', cls: '' },
    { text: '  role: <span class="str">"Full Stack Developer"</span>,', cls: '' },
    { text: '  stack: [<span class="str">"Node"</span>, <span class="str">"Express"</span>, <span class="str">"MongoDB"</span>],', cls: '' },
    { text: '  learning: <span class="kw">true</span>,', cls: '' },
    { text: '  availableForWork: <span class="kw">true</span>', cls: '' },
    { text: '};', cls: '' },
  ];

  const box = document.getElementById('typedBox');
  let lineIndex = 0;

  function typeLine(){
    if(lineIndex >= lines.length){
      box.innerHTML += '<span class="com">// thanks for scrolling by 👋</span>';
      return;
    }
    const raw = lines[lineIndex].text;
    const plain = raw.replace(/<[^>]+>/g, '');
    let i = 0;
    const speed = 18;

    const interval = setInterval(() => {
      i++;
      // reveal characters progressively but keep HTML tags intact by re-rendering full markup once close to done
      if(i >= plain.length){
        clearInterval(interval);
        box.innerHTML = renderSoFar(lineIndex, true);
        lineIndex++;
        setTimeout(typeLine, 120);
      } else {
        box.innerHTML = renderSoFar(lineIndex, false, i);
      }
    }, speed);
  }

  function renderSoFar(upToIndex, fullLast, charCount){
    let html = '';
    for(let j = 0; j < upToIndex; j++){
      html += lines[j].text + '\n';
    }
    if(fullLast){
      html += lines[upToIndex].text + '\n';
    } else {
      const plain = lines[upToIndex].text.replace(/<[^>]+>/g, '');
      html += plain.slice(0, charCount) + '<span class="cursor"></span>';
    }
    return html;
  }

  setTimeout(typeLine, 500);

  // Resume button placeholder
  document.getElementById('resumeBtn').addEventListener('click', function(e){
    e.preventDefault();
    alert('Add your resume PDF link here — replace the # in the "Download Resume" button with your file link.');
  });
