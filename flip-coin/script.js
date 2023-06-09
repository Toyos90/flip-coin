let headsCount = 0;
let tailsCount = 0;

        function flipCoin() {
            const result = Math.random() < 0.5 ? 'Cara' : 'Cruz';

            if (result === 'Cara') {
                headsCount++;
                document.getElementById('headsCount').textContent = headsCount;
                document.getElementById('coin').style.backgroundImage = "url('cara.png')";
            } else {
                tailsCount++;
                document.getElementById('tailsCount').textContent = tailsCount;
                document.getElementById('coin').style.backgroundImage = "url('cruz.png')";
            }

            document.getElementById('coin').style.animation = 'none';
            setTimeout(() => {
                document.getElementById('coin').style.animation = '';
            }, 10);
        }

        function resetCounts() {
            headsCount = 0;
            tailsCount = 0;
            document.getElementById('headsCount').textContent = headsCount;
            document.getElementById('tailsCount').textContent = tailsCount;
        }