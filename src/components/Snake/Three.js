import * as THREE from 'three';

class Three {
    constructor() {
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.snake = new Snake();

        this.init();
        this.animate();

        this.foodPosition = new THREE.Vector3(100, 100, 0); // Exemple de position de départ de la nourriture
        this.someBoundary = 500;
    }

    init() {
        // Scène
        this.scene = new THREE.Scene();

        // Caméra
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 500;

        // Rendu
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        // Lumière (optionnel)
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        this.scene.add(light);

        // Création du serpent
        this.snake.init(this.scene);
    }

    animate() {
        if (!this.gameOver) {
            requestAnimationFrame(() => this.animate());
            this.snake.update(this.foodPosition, this.someBoundary);
            this.renderer.render(this.scene, this.camera);
        }
    }

    dispose() {
        this.gameOver = true; // Cela arrêtera l'animation
        // Vous pouvez également nettoyer ici d'autres ressources si nécessaire
    }
}

class Snake {
    constructor() {
        this.snakeLength = 3;
        this.snakeBlocks = [];
        this.blockSize = 50;
    }

    init(scene) {
        for (let i = 0; i < this.snakeLength; i++) {
            const blockGeometry = new THREE.BoxGeometry(this.blockSize, this.blockSize, this.blockSize);
            const blockMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
            const block = new THREE.Mesh(blockGeometry, blockMaterial);
            block.position.x = i * this.blockSize;
            scene.add(block);
            this.snakeBlocks.push(block);
        }
    }

    update(foodPosition, someBoundary) {
        let direction = new THREE.Vector3(1, 0, 0); // déplacer vers la droite, par exemple

        let oldHeadPosition = this.snakeBlocks[this.snakeBlocks.length - 1].position.clone();

        for (let i = this.snakeBlocks.length - 1; i > 0; i--) {
            this.snakeBlocks[i].position.copy(this.snakeBlocks[i - 1].position);
        }

        this.snakeBlocks[0].position.add(direction.multiplyScalar(this.blockSize));

        if (foodPosition && this.snakeBlocks[0].position.equals(foodPosition)) {
            console.log("Nourriture mangée!");
            const newSegmentGeometry = new THREE.BoxGeometry(this.blockSize, this.blockSize, this.blockSize);
            const newSegmentMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
            const newSegment = new THREE.Mesh(newSegmentGeometry, newSegmentMaterial);
            newSegment.position.copy(oldHeadPosition);
            this.snakeBlocks.push(newSegment);
            this.scene.add(newSegment);
        }

        if (this.snakeBlocks[0].position.x > someBoundary || this.snakeBlocks[0].position.x < -someBoundary ||
            this.snakeBlocks[0].position.y > someBoundary || this.snakeBlocks[0].position.y < -someBoundary) {
            console.log("Collision avec un mur !");
            // Gérer la collision
        }
    }

}

export default Three;
