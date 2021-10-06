export function notify(message,){

    document.querySelector('.notification>span').textContent = message;
    document.querySelector('.notification').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.notification>span').textContent = '';
    document.querySelector('.notification').style.display = 'none';
    }, 3000);
}