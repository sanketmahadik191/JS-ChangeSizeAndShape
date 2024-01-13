document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('customContainer');
    const colorButton = document.getElementById('colorBtn');
    const shapeButton = document.getElementById('shapeBtn');

    let shapeIndex = 0;

    colorButton.addEventListener('click', function() {
        const newColor = getRandomColor();
        container.style.backgroundColor = newColor;
    });

    shapeButton.addEventListener('click', function() {
        const shapes = ['circle', 'circle2', 'circle3', 'square'];

        container.style.borderRadius = '';
        container.style.borderBottom = '';

        const currentShape = shapes[shapeIndex];
        switch (currentShape) {
            case 'circle':
                container.style.borderRadius = '50%';
                break;
            case 'circle2':
                container.style.borderRadius = '30%';
                break;
            case 'circle3':
                container.style.borderRadius = '20%';
                break;
            case 'square':
                break;
            default:
                break;
        }
        shapeIndex = (shapeIndex + 1) % shapes.length;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
