const answer = ``;

process.on('exit', () => {
    console.log('exit 이벤트 발생');
});

console.log('3초 후 프로세스 종료');

setTimeout(() => {
    process.exit();
}, 3000);

console.log(answer);