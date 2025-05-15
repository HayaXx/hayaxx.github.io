// Three.js 3D Background Scene
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if Three.js is available and element exists
    if (typeof THREE !== 'undefined' && document.getElementById('threejs-background')) {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.getElementById('threejs-background').appendChild(renderer.domElement);
        
        // Camera position
        camera.position.z = 5;
        
        // Create floating geometry
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00f0ff,
            emissive: 0x003366,
            specular: 0x00ffff,
            shininess: 100,
            transparent: true,
            opacity: 0.7,
            wireframe: true
        });
        
        const particles = [];
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Mesh(geometry, material.clone());
            
            // Random position
            particle.position.x = Math.random() * 20 - 10;
            particle.position.y = Math.random() * 20 - 10;
            particle.position.z = Math.random() * 20 - 10;
            
            // Random size
            const size = Math.random() * 0.5 + 0.1;
            particle.scale.set(size, size, size);
            
            // Random rotation speed
            particle.userData = {
                speedX: Math.random() * 0.02 - 0.01,
                speedY: Math.random() * 0.02 - 0.01,
                speedZ: Math.random() * 0.02 - 0.01
            };
            
            scene.add(particle);
            particles.push(particle);
        }
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        
        const directionalLight1 = new THREE.DirectionalLight(0x00f0ff, 0.5);
        directionalLight1.position.set(1, 1, 1);
        scene.add(directionalLight1);
        
        const directionalLight2 = new THREE.DirectionalLight(0xff00f0, 0.5);
        directionalLight2.position.set(-1, -1, -1);
        scene.add(directionalLight2);
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            // Rotate particles
            particles.forEach(particle => {
                particle.rotation.x += particle.userData.speedX;
                particle.rotation.y += particle.userData.speedY;
                particle.rotation.z += particle.userData.speedZ;
                
                // Slow floating movement
                particle.position.x += Math.sin(Date.now() * 0.001 + particle.position.y) * 0.001;
                particle.position.y += Math.cos(Date.now() * 0.001 + particle.position.x) * 0.001;
            });
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Handle window resize
        window.addEventListener('resize', function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
});