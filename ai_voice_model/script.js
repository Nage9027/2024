const leftInput = document.getElementById('left-input');
const rightInput = document.getElementById('right-input');
const submit1=document.getElementById('submit');


leftInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const leftValue = leftInput.value;
        rightInput.value = leftValue;
    }
   
});
submit1.addEventListener('click', () => {
    const leftValue = leftInput.value; 
    rightInput.value = leftValue; 
leftInput.value='';
});
function sendRequestToOpenAI(inputValue) {
    const apiKey = 'YOUR_OPENAI_API_KEY';
    const apiEndpoint = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            'prompt': inputValue,
            'max_tokens': 100,
            'stop': null
        })
    })
    .then(response => response.json())
    .then(data => {
        const responseText = data.choices[0].text;
        rightInput.value = responseText;
        chatInput.value = ''; // clear the input field
    })
    .catch(error => console.error(error));
}