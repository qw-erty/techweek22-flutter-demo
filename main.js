document.addEventListener('DOMContentLoaded', () => {
  
  const codeBlock = document.getElementById('code');
  const copyButton = document.getElementById('copy-button');
  const copySuccess = document.getElementById('copy-success');

  const copyTextHandler = () => {
    const text = codeBlock.innerText;

    // first version - document.execCommand('copy');
    // var element = document.createElement('textarea');
    // document.body.appendChild(element);
    // element.value = text;
    // element.select();
    // document.execCommand('copy');
    // document.body.removeChild(element);

    // copySuccess.classList.add('show-message');
    // setTimeout(() => {
    //   copySuccess.classList.remove('show-message');
    // }, 2500);

    //   second version - Clipboard API
    navigator.clipboard.writeText(text).then(
      () => {
        copySuccess.classList.add('show-message');
        setTimeout(() => {
          copySuccess.classList.remove('show-message');
        }, 2500);
      },
      () => {
        console.log('Error writing to the clipboard');
      }
    );
  };

  copyButton.addEventListener('click', copyTextHandler);
});


document.addEventListener('DOMContentLoaded', () => {
  
  const codeBlock = document.getElementById('code1');
  const copyButton = document.getElementById('copy-button1');
  const copySuccess = document.getElementById('copy-success1');

  const copyTextHandler = () => {
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(
      () => {
        copySuccess.classList.add('show-message');
        setTimeout(() => {
          copySuccess.classList.remove('show-message');
        }, 2500);
      },
      () => {
        console.log('Error writing to the clipboard');
      }
    );
  };

  copyButton.addEventListener('click', copyTextHandler);
});
