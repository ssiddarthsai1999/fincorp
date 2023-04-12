import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import cottage from "../../assets/cottage.fbx"

function MyComponent() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Set up Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

        // Load the FBX file
        const loader = new FBXLoader();
        loader.load("../../assets/cottage.fbx", (object) => {
            scene.add(object);
        });

        // Add some lights to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0);
        scene.add(ambientLight);
        scene.add(directionalLight);

        // Render the scene
        camera.position.z = 5;
        function render() {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
        render();

        // Clean up
        return () => {
            renderer.dispose();
        };
    }, []);

    return (
        <div className="h-screen flex justify-center items-center">
            <canvas className="w-80 h-80" ref={canvasRef}></canvas>
        </div>
    );
}

export default MyComponent;
